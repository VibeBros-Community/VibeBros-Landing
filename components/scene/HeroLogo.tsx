"use client";

import { useRef, useMemo, useState, memo } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";

const VolumetricLogo = memo(function VolumetricLogo({ url, layers = 24, depth = 0.5, ...props }: any) {
  const group = useRef<THREE.Group>(null);
  const texture = useTexture(url) as THREE.Texture;
  
  // Interaction State
  const [isDragging, setIsDragging] = useState(false);
  const previousPointer = useRef({ x: 0, y: 0 });
  
  // Animation State for Relative Oscillation
  const baseRotation = useRef({ x: 0, y: 0 });
  const releaseTime = useRef(0);
  const justReleased = useRef(false);
  
  const aspect = useMemo(() => {
    if (texture.image) {
      const img = texture.image as HTMLImageElement;
      return img.width / img.height;
    }
    return 1;
  }, [texture]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();

    // Handle the "Just Released" frame sync
    if (justReleased.current) {
        releaseTime.current = t;
        justReleased.current = false;
    }

    // Always levitate
    group.current.position.y = props.position[1] + Math.sin(t / 1.5) * 0.15;

    if (!isDragging) {
       // Oscillation relative to the "Base Rotation"
       const timeSinceRelease = t - releaseTime.current;
       
       // Slower left-right oscillation
       // Reduced amplitude from 0.45 to 0.2
       group.current.rotation.y = baseRotation.current.y + Math.sin(timeSinceRelease / 3) * 0.2;
       group.current.rotation.x = baseRotation.current.x + Math.sin(timeSinceRelease / 4) * 0.1;
    }
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(true);
    previousPointer.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    document.body.style.cursor = 'grab';
    
    if (group.current) {
        baseRotation.current = { x: group.current.rotation.x, y: group.current.rotation.y };
        justReleased.current = true;
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !group.current) return;
    e.stopPropagation();

    const deltaX = e.clientX - previousPointer.current.x;
    const deltaY = e.clientY - previousPointer.current.y;

    group.current.rotation.y += deltaX * 0.01;
    group.current.rotation.x += deltaY * 0.01;

    previousPointer.current = { x: e.clientX, y: e.clientY };
  };

  const layerMeshes = useMemo(() => {
    const totalLayers = layers;
    
    return Array.from({ length: totalLayers }).map((_, i) => {
      const progress = i / (totalLayers - 1); 
      const z = -progress * depth;
      
      const isFront = i === 0;
      const isBack = i === totalLayers - 1;
      
      const color = (isFront || isBack) ? "white" : "#19364d"; 
      const opacity = (isFront || isBack) ? 1 : 0.95;

      return (
        <mesh position={[0, 0, z]} key={i}>
          <planeGeometry args={[3 * aspect, 3]} />
          <meshBasicMaterial 
            map={texture} 
            transparent 
            alphaTest={0.15}
            color={color}
            opacity={opacity}
            side={THREE.DoubleSide} 
            toneMapped={false}
          />
        </mesh>
      );
    });
  }, [texture, layers, depth, aspect]);

  const centerOffset = depth / 2;

  return (
    <group 
      ref={group} 
      {...props} 
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOver={() => document.body.style.cursor = 'grab'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
        <group position={[0, 0, centerOffset]}>
             {layerMeshes}
        </group>
    </group>
  );
});

export default function HeroLogo() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />

        {/* Local Lighting for the Logo */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#d8e7f3" />

        {/* The Logo Only */}
        <VolumetricLogo
            url="/logo.png"
            position={[3, 0, 0]}
            scale={1.5}
            rotation={[0, -0.3, 0]}
            depth={0.4}
          />
      </Canvas>
    </div>
  );
}
