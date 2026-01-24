"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight, Zap } from "lucide-react";

interface Event {
    title: string;
    date: string;
    time: string;
    type: string;
    participants: string;
    description: string;
    status: string;
    gradient: string;
}

interface CyberTimelineProps {
    events: Event[];
}

export const CyberTimeline = ({ events }: CyberTimelineProps) => {
    return (
        <div className="relative mx-auto max-w-4xl px-4 py-12">
            {/* Central Neon Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-baltic-blue-800 md:left-1/2 md:-translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-cerulean-500 via-yale-blue-500 to-cerulean-500 opacity-50 blur-[2px]" />
                <div className="sticky top-1/2 h-32 w-full -translate-y-1/2 bg-cerulean-400 blur-md transition-all duration-300" />
            </div>

            <div className="flex flex-col gap-12 md:gap-24">
                {events.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={cn(
                                "relative flex flex-col md:flex-row items-center",
                                isEven ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Content Side */}
                            <div className="w-full pl-12 md:w-1/2 md:px-12">
                                <div className="group relative overflow-hidden rounded-xl border border-baltic-blue-800 bg-baltic-blue-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-cerulean-500/50 hover:shadow-[0_0_30px_rgba(66,142,189,0.15)]">
                                    {/* Glowing accent on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                                    
                                    <div className="relative z-10">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1 rounded bg-cerulean-500/10 px-2 py-1 text-xs font-bold uppercase tracking-wider text-cerulean-400 border border-cerulean-500/20">
                                                <Zap className="h-3 w-3 fill-current" />
                                                {event.type}
                                            </span>
                                            <span className="font-mono text-xs text-baltic-blue-400">{event.status}</span>
                                        </div>

                                        <h3 className="mb-2 text-2xl font-black leading-none text-white transition-colors group-hover:text-cerulean-200">
                                            {event.title}
                                        </h3>
                                        
                                        <p className="mb-6 text-sm leading-relaxed text-baltic-blue-300">
                                            {event.description}
                                        </p>

                                        <div className="flex flex-col gap-2 border-t border-baltic-blue-800/50 pt-4 text-sm text-baltic-blue-200">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="h-4 w-4 text-cerulean-500" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-4 w-4 text-cerulean-500" />
                                                <span>{event.time}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Action Arrow */}
                                        <div className="absolute bottom-6 right-6 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                            <ChevronRight className="h-6 w-6 text-cerulean-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="absolute left-4 top-8 md:left-1/2 md:-translate-x-1/2 md:translate-y-0">
                                <div className="relative flex h-8 w-8 items-center justify-center">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-cerulean-500 opacity-20" />
                                    <div className="relative h-4 w-4 rounded-full border-2 border-baltic-blue-950 bg-cerulean-400 shadow-[0_0_10px_#428ebd]" />
                                </div>
                            </div>

                            {/* Empty Space for alignment */}
                            <div className="hidden w-1/2 md:block" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
