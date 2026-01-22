"use client";

import { useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const MovingStars = memo(function MovingStars() {
    const group = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <group ref={group}>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
});

export default function StarfieldBackground() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <MovingStars />
        <Sparkles count={40} scale={12} size={3} speed={0.4} opacity={0.4} color="#8bb8da" />
      </Canvas>
    </div>
  );
}
