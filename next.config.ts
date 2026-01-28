import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React compiler for better performance
  reactStrictMode: true,

  // Output standalone build
  output: 'standalone',

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@react-three/fiber', '@react-three/drei'],
  },

  // Pin Turbopack root to this project to avoid lockfile inference warnings
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
