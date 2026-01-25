"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, Zap, X, MapPin, ListChecks, Hourglass } from "lucide-react";

interface Event {
    title: string;
    date: string;
    time: string;
    type: string;
    participants: string;
    description: string;
    status: string;
    gradient: string;
    location?: string;
    requirements?: string[];
    agenda?: { time: string; item: string }[];
}

interface CyberTimelineProps {
    events: Event[];
}

export const CyberTimeline = ({ events }: CyberTimelineProps) => {
    const [selectedEvent, setSelectedEvent] = useState<{ data: Event, layoutId: string } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedEvent]);

    return (
        <div className="relative mx-auto max-w-6xl px-4 py-4">
            {/* Central Neon Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-baltic-blue-800 md:left-1/2 md:-translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-cerulean-500 via-yale-blue-500 to-cerulean-500 opacity-50 blur-[2px]" />
                <div className="sticky top-1/2 h-24 w-full -translate-y-1/2 bg-cerulean-400 blur-md transition-all duration-300" />
            </div>

            <div className="flex flex-col gap-6 md:gap-12">
                {events.map((event, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div 
                            key={index}
                            className={cn(
                                "relative flex flex-col md:flex-row items-center",
                                isEven ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Content Side */}
                            <div className="w-full pl-12 md:w-1/2 md:px-6">
                                <motion.div
                                    layoutId={`card-${index}`}
                                    onClick={() => setSelectedEvent({ data: event, layoutId: `card-${index}` })}
                                    className="group relative overflow-hidden bg-[#050a14] border border-cerulean-500/20 hover:border-cerulean-500/50 transition-colors cursor-pointer rounded-2xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 200, 
                                        damping: 25 
                                    }}
                                >
                                    {/* Tech Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    
                                    {/* Active State Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Content Wrapper */}
                                    <div className="relative z-10 p-6 flex flex-col h-full">
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-4">
                                            <motion.span 
                                                layoutId={`type-${index}`}
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-cerulean-500/10 border border-cerulean-500/20 text-[10px] font-bold uppercase tracking-widest text-cerulean-400 rounded-full"
                                            >
                                                <Zap className="h-3 w-3 fill-current" />
                                                {event.type}
                                            </motion.span>
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-baltic-blue-500 uppercase tracking-wider">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cerulean-500 shadow-[0_0_8px_#428ebd] animate-pulse" />
                                                {event.status}
                                            </div>
                                        </div>

                                        {/* Main Body */}
                                        <div className="mb-6">
                                            <motion.h3 
                                                layoutId={`title-${index}`}
                                                className="text-2xl font-black text-white leading-tight tracking-tight group-hover:text-cerulean-300 transition-colors mb-3"
                                            >
                                                {event.title}
                                            </motion.h3>

                                            <motion.p 
                                                layoutId={`desc-${index}`}
                                                className="text-sm text-baltic-blue-400 leading-relaxed line-clamp-2"
                                            >
                                                {event.description}
                                            </motion.p>
                                        </div>

                                        {/* Footer Data Points */}
                                        <div className="flex items-end justify-between pt-4 border-t border-white/5 mt-auto">
                                            <div className="space-y-2">
                                                <motion.div 
                                                    layoutId={`date-${index}`}
                                                    className="flex items-center gap-2 text-xs font-mono text-baltic-blue-300"
                                                >
                                                    <Calendar className="h-3.5 w-3.5 text-cerulean-500" />
                                                    {event.date}
                                                </motion.div>
                                                <motion.div 
                                                    layoutId={`time-${index}`}
                                                    className="flex items-center gap-2 text-xs font-mono text-baltic-blue-300"
                                                >
                                                    <Clock className="h-3.5 w-3.5 text-cerulean-500" />
                                                    {event.time}
                                                </motion.div>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cerulean-400 opacity-60 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                                <span>Details</span>
                                                <div className="p-1.5 rounded-full bg-cerulean-500/10 border border-cerulean-500/20 group-hover:bg-cerulean-500 group-hover:text-white transition-colors">
                                                    <ChevronRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Corner Accents */}
                                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                                            <div className="w-8 h-8 border-t-2 border-r-2 border-cerulean-500/50 rounded-tr-xl" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                                            <div className="w-8 h-8 border-b-2 border-l-2 border-cerulean-500/50 rounded-bl-xl" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center Node */}
                            <div className="absolute left-4 top-8 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 pointer-events-none">
                                <div className="relative flex h-4 w-4 items-center justify-center">
                                    <div className="absolute inset-0 bg-[#0a0f18] rotate-45 border border-cerulean-500/50" />
                                    <div className="h-1.5 w-1.5 bg-cerulean-400 shadow-[0_0_8px_#428ebd]" />
                                </div>
                            </div>

                            {/* Empty Space */}
                            <div className="hidden w-1/2 md:block" />
                        </div>
                    );
                })}
            </div>

            {/* Event Details Modal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedEvent && (
                        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedEvent(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            
                            {/* Expanded Card */}
                            <motion.div
                                layoutId={selectedEvent.layoutId}
                                className="relative w-full max-w-3xl bg-[#050a14] border border-cerulean-500/30 shadow-2xl flex flex-col max-h-[85vh] z-10 overflow-hidden rounded-3xl"
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 200, 
                                    damping: 25 
                                }}
                            >
                                {/* Tech Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

                                {/* Header Section */}
                                <div className="relative p-8 pb-6 border-b border-cerulean-500/10 bg-[#050a14]/90 backdrop-blur-xl shrink-0">
                                    <motion.button 
                                        onClick={() => setSelectedEvent(null)}
                                        className="absolute top-6 right-6 z-20 p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-colors"
                                        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.button>

                                    <div className="relative z-10 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <motion.span 
                                                layoutId={`type-${selectedEvent.layoutId.split('-')[1]}`}
                                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-cerulean-500/10 border border-cerulean-500/20 text-xs font-bold uppercase tracking-widest text-cerulean-400 rounded-full"
                                            >
                                                <Zap className="h-4 w-4 fill-current" />
                                                {selectedEvent.data.type}
                                            </motion.span>
                                            
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ delay: 0.1 }}
                                                className="px-3 py-1 bg-baltic-blue-900/30 border border-baltic-blue-800/50 rounded-full text-xs font-mono text-baltic-blue-300"
                                            >
                                                {selectedEvent.data.participants} PARTICIPANTS
                                            </motion.div>
                                        </div>
                                        
                                        <motion.h2 
                                            layoutId={`title-${selectedEvent.layoutId.split('-')[1]}`}
                                            className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight"
                                        >
                                            {selectedEvent.data.title}
                                        </motion.h2>

                                        <div className="flex items-center gap-8 text-sm">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] uppercase tracking-wider text-baltic-blue-600 font-bold">Date</span>
                                                <motion.div 
                                                    layoutId={`date-${selectedEvent.layoutId.split('-')[1]}`}
                                                    className="flex items-center gap-2 font-mono text-cerulean-300"
                                                >
                                                    <Calendar className="h-4 w-4" />
                                                    {selectedEvent.data.date}
                                                </motion.div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] uppercase tracking-wider text-baltic-blue-600 font-bold">Time</span>
                                                <motion.div 
                                                    layoutId={`time-${selectedEvent.layoutId.split('-')[1]}`}
                                                    className="flex items-center gap-2 font-mono text-cerulean-300"
                                                >
                                                    <Clock className="h-4 w-4" />
                                                    {selectedEvent.data.time}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <motion.div 
                                    className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#050a14]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                        <div className="md:col-span-2 space-y-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold text-baltic-blue-500 uppercase tracking-widest mb-4">
                                                    <div className="w-1.5 h-1.5 bg-cerulean-500" />
                                                    Mission Brief
                                                </h4>
                                                <motion.p 
                                                    layoutId={`desc-${selectedEvent.layoutId.split('-')[1]}`}
                                                    className="text-lg text-baltic-blue-100 leading-relaxed font-light"
                                                >
                                                    {selectedEvent.data.description}
                                                </motion.p>
                                            </div>

                                            {selectedEvent.data.agenda && (
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-xs font-bold text-baltic-blue-500 uppercase tracking-widest mb-6">
                                                        <div className="w-1.5 h-1.5 bg-cerulean-500" />
                                                        Agenda
                                                    </h4>
                                                    <div className="space-y-4">
                                                        {selectedEvent.data.agenda.map((item, i) => (
                                                            <div key={i} className="flex gap-6 group">
                                                                <div className="w-24 shrink-0 font-mono text-cerulean-400 text-sm py-2 border-r border-cerulean-500/20 group-hover:border-cerulean-500/50 transition-colors">
                                                                    {item.time}
                                                                </div>
                                                                <div className="py-2 text-baltic-blue-200 group-hover:text-white transition-colors">
                                                                    {item.item}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-8">
                                            {selectedEvent.data.location && (
                                                <div className="p-6 bg-cerulean-500/5 border border-cerulean-500/10 rounded-lg">
                                                    <h4 className="text-[10px] font-bold text-cerulean-400 uppercase tracking-widest mb-2">Location</h4>
                                                    <div className="flex items-center gap-2 text-white font-medium">
                                                        <MapPin className="h-4 w-4 text-cerulean-500" />
                                                        {selectedEvent.data.location}
                                                    </div>
                                                </div>
                                            )}

                                            {selectedEvent.data.requirements && (
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-xs font-bold text-baltic-blue-500 uppercase tracking-widest mb-4">
                                                        <div className="w-1.5 h-1.5 bg-cerulean-500" />
                                                        System Reqs
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {selectedEvent.data.requirements.map((req, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-sm text-baltic-blue-300">
                                                                <div className="w-1 h-1 bg-baltic-blue-500" />
                                                                {req}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <button className="w-full py-4 bg-cerulean-600 hover:bg-cerulean-500 text-white font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl shadow-lg shadow-cerulean-500/20">
                                                Initialize
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};
