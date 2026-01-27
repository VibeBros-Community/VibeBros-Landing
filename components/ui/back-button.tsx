"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-12 left-[calc(50%-31rem)] z-[10000] p-2.5 rounded-full bg-baltic-blue-900/80 border border-baltic-blue-700 backdrop-blur-md text-baltic-blue-200 hover:text-white hover:border-cerulean-500/50 hover:bg-baltic-blue-800/80 transition-all duration-200 hover:scale-110 shadow-lg shadow-baltic-blue-950/60 group"
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:-translate-x-0.5 transition-transform" />
    </motion.button>
  );
}
