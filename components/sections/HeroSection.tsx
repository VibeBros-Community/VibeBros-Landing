"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroLogo from "@/components/scene/HeroLogo";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-0">
            {/* 3D Logo (Local to Hero) */}
            <HeroLogo />
            
            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center pointer-events-none">
                <div className="flex flex-col items-start text-left pointer-events-auto mt-24">
                    <motion.h1
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-6"
                    >
                        LEVEL UP <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">YOUR</span> <br />
                        NETWORK
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-lg text-lg text-baltic-blue-200 mb-8 leading-relaxed"
                    >
                        Join an elite community of gamers, developers, and creators. 
                        Experience the VibeBros ecosystem today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button 
                            size="lg" 
                            className="h-14 rounded-full px-10 min-w-[240px] text-base bg-[#5865F2] hover:bg-[#4752C4] text-white border-0 shadow-lg shadow-[#5865F2]/20 transition-all hover:scale-105 whitespace-nowrap"
                            asChild
                        >
                            <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer">
                                <svg className="mr-3 h-6 w-6 fill-current" viewBox="0 0 127.14 96.36">
                                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                                </svg>
                                Join Discord Server
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
