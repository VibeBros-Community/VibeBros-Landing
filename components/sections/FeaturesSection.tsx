"use client";

import { Zap, Shield, Globe, Cpu, Users, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Global Mesh",
        description: "Low-latency network spanning 40+ regions.",
        icon: Globe,
        className: "md:col-span-2 md:row-span-2",
        gradient: "from-baltic-blue-800 to-baltic-blue-900",
    },
    {
        title: "DDoS Shield",
        description: "Enterprise security.",
        icon: Shield,
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-baltic-blue-900 to-baltic-blue-950",
    },
    {
        title: "Zero Latency",
        description: "0ms lag architecture.",
        icon: Zap,
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-cerulean-900/20 to-baltic-blue-900",
    },
    {
        title: "Neural Match",
        description: "AI-driven peer discovery finding your perfect co-founders.",
        icon: Cpu,
        className: "md:col-span-2 md:row-span-1",
        gradient: "from-baltic-blue-800 to-baltic-blue-900",
    },
    {
        title: "Micro-Tribes",
        description: "Niche sub-communities.",
        icon: Layers,
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-baltic-blue-900 to-baltic-blue-950",
    },
    {
        title: "Trust Score",
        description: "On-chain reputation.",
        icon: Users,
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-baltic-blue-900 to-baltic-blue-950",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="container py-24 sm:py-32">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl">
                        SYSTEM <br />
                        ARCHITECTURE
                    </h2>
                </div>
                <p className="max-w-md text-baltic-blue-300 text-lg">
                    A suite of tools designed for the next generation of builders. 
                    Scalable, secure, and sovereign.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px] md:h-[600px]">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-baltic-blue-800 p-8 transition-all hover:border-cerulean-500/50",
                            feature.className
                        )}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-100",
                            feature.gradient
                        )} />
                        
                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="rounded-full bg-white/5 p-3 text-cerulean-500 backdrop-blur-sm">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-baltic-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-baltic-blue-300">{feature.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
