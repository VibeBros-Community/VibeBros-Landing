"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Code2, X, Trophy, Zap, Terminal, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    gradient: string;
    socials: {
        github?: string;
        twitter?: string;
        linkedin?: string;
    };
}

interface AccordionTeamProps {
    members: TeamMember[];
}

export const AccordionTeam = ({ members }: AccordionTeamProps) => {
    const [activeIdx, setActiveIdx] = useState<number | null>(0);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedMember]);

    return (
        <>
            {/* Main Accordion Layout - COMPACT HEIGHT (400px) */}
            <div className="w-full max-w-7xl mx-auto h-[400px] flex gap-2 p-3 bg-baltic-blue-950/30 backdrop-blur-sm rounded-3xl border border-baltic-blue-800/50 overflow-hidden">
                {members.map((member, idx) => {
                    const isActive = activeIdx === idx;
                    
                    return (
                        <motion.div
                            key={idx}
                            layoutId={`card-container-${member.name}`}
                            onHoverStart={() => setActiveIdx(idx)}
                            onClick={() => setSelectedMember(member)}
                            animate={{ 
                                flex: isActive ? 3 : 1,
                                opacity: activeIdx !== null && !isActive ? 0.6 : 1
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={cn(
                                "relative h-full rounded-2xl overflow-hidden cursor-pointer transition-colors duration-500 group",
                                isActive ? "bg-baltic-blue-900/80" : "bg-baltic-blue-950/50 hover:bg-baltic-blue-900/60"
                            )}
                        >
                            {/* Background Gradient & Image Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${member.gradient} opacity-20 transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-10'}`} />
                            
                            {/* Vertical Text (Collapsed State) */}
                            <div className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-300",
                                isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                            )}>
                                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cerulean-500 to-transparent" />
                                <h3 className="text-lg font-bold text-baltic-blue-300 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                                    {member.name}
                                </h3>
                                 <div className="w-[1px] h-12 bg-gradient-to-b from-cerulean-500 via-transparent to-transparent" />
                            </div>

                            {/* Expanded Content (Original Inline View) */}
                            <div className={cn(
                                "absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-500",
                                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}>
                                {/* Decorative Big Letter */}
                                <div className="absolute top-2 right-4 text-[8rem] font-black text-white/5 select-none leading-none pointer-events-none">
                                    {member.name.charAt(0)}
                                </div>

                                <div className="relative z-10">
                                    {/* Avatar - Slightly smaller for compact view */}
                                    <motion.div 
                                        layoutId={`avatar-${member.name}`}
                                        className="mb-4 relative"
                                    >
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br ${member.gradient} shadow-lg shadow-cerulean-500/20`}>
                                            {member.avatar}
                                        </div>
                                    </motion.div>

                                    <div className="space-y-3 max-w-md">
                                        <div>
                                            <motion.h3 layoutId={`title-${member.name}`} className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                                                {member.name}
                                            </motion.h3>
                                            <div className="flex items-center gap-3">
                                                <span className="px-2 py-0.5 rounded-full bg-cerulean-500/10 border border-cerulean-500/20 text-cerulean-400 text-[10px] font-mono uppercase tracking-wider">
                                                    {member.role}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-baltic-blue-200 leading-relaxed text-xs md:text-sm border-l-2 border-cerulean-500/30 pl-3 line-clamp-2">
                                            {member.bio}
                                        </p>

                                        {/* "Click to Expand" Hint */}
                                        <div className="flex items-center gap-2 text-cerulean-400 text-[10px] font-mono uppercase tracking-wider pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                            <Maximize2 className="w-3 h-3" />
                                            <span>Click for details</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Full Screen Modal Overlay */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Card */}
                        <motion.div
                            layoutId={`card-container-${selectedMember.name}`}
                            className="relative w-full max-w-4xl bg-[#0d1117] border border-baltic-blue-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); setSelectedMember(null); }}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Left Side: Visuals */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden border-r border-baltic-blue-900/50">
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedMember.gradient} opacity-20`} />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                                        {/* Avatar Container */}
                                        <motion.div 
                                            layoutId={`avatar-${selectedMember.name}`}
                                            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/5 bg-black/20 backdrop-blur-sm flex items-center justify-center shadow-2xl relative z-10"
                                        >
                                             <span className="text-6xl md:text-8xl font-black text-white drop-shadow-lg">{selectedMember.avatar}</span>
                                        </motion.div>
                                        
                                        {/* Decorative Rings */}
                                        <div className="absolute inset-0 rounded-full border border-white/5 scale-110 animate-[spin_10s_linear_infinite]" />
                                        <div className="absolute inset-0 rounded-full border border-white/5 scale-125 animate-[spin_15s_linear_infinite_reverse]" />

                                        {/* Floating Elements */}
                                        <motion.div 
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute -top-4 -right-4 bg-baltic-blue-900/90 border border-cerulean-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md z-20"
                                        >
                                            <Code2 className="w-6 h-6 text-cerulean-400" />
                                        </motion.div>
                                        <motion.div 
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute -bottom-2 -left-2 bg-baltic-blue-900/90 border border-yale-blue-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md z-20"
                                        >
                                            <Terminal className="w-6 h-6 text-yale-blue-400" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-[#0d1117] custom-scrollbar">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col h-full justify-center"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-cerulean-500/10 border border-cerulean-500/20 text-cerulean-400 text-xs font-mono uppercase tracking-wider">
                                            {selectedMember.role}
                                        </span>
                                        <span className="flex items-center gap-2 text-xs font-mono text-green-400">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Online
                                        </span>
                                    </div>

                                    <motion.h2 layoutId={`title-${selectedMember.name}`} className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                                        {selectedMember.name}
                                    </motion.h2>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-bold text-baltic-blue-500 uppercase tracking-widest mb-3">About</h4>
                                            <p className="text-baltic-blue-200 text-lg leading-relaxed font-light">
                                                {selectedMember.bio}
                                            </p>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-2xl bg-baltic-blue-900/20 border border-baltic-blue-800/50 hover:border-cerulean-500/30 transition-colors group">
                                                <div className="flex items-center gap-2 text-baltic-blue-400 mb-2">
                                                    <div className="p-1.5 rounded-lg bg-cerulean-500/10 group-hover:bg-cerulean-500/20 transition-colors">
                                                        <Trophy className="w-4 h-4 text-cerulean-400" />
                                                    </div>
                                                    <span className="text-xs uppercase font-bold tracking-wider">Contribution</span>
                                                </div>
                                                <div className="text-2xl font-mono text-white">Top 5%</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-baltic-blue-900/20 border border-baltic-blue-800/50 hover:border-cerulean-500/30 transition-colors group">
                                                <div className="flex items-center gap-2 text-baltic-blue-400 mb-2">
                                                    <div className="p-1.5 rounded-lg bg-yale-blue-500/10 group-hover:bg-yale-blue-500/20 transition-colors">
                                                        <Zap className="w-4 h-4 text-yale-blue-400" />
                                                    </div>
                                                    <span className="text-xs uppercase font-bold tracking-wider">Vibe Score</span>
                                                </div>
                                                <div className="text-2xl font-mono text-white">98.5</div>
                                            </div>
                                        </div>

                                        {/* Socials */}
                                        <div className="pt-6 border-t border-baltic-blue-800/50">
                                            <h4 className="text-sm font-bold text-baltic-blue-500 uppercase tracking-widest mb-4">Connect Protocol</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedMember.socials.github && (
                                                    <a 
                                                        href={selectedMember.socials.github} 
                                                        target="_blank" 
                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-baltic-blue-900/30 text-baltic-blue-300 hover:bg-white hover:text-black transition-all group border border-baltic-blue-800 hover:border-white hover:-translate-y-1"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span className="font-bold text-sm">Github</span>
                                                    </a>
                                                )}
                                                {selectedMember.socials.twitter && (
                                                    <a 
                                                        href={selectedMember.socials.twitter} 
                                                        target="_blank" 
                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-baltic-blue-900/30 text-baltic-blue-300 hover:bg-[#1DA1F2] hover:text-white transition-all group border border-baltic-blue-800 hover:border-[#1DA1F2] hover:-translate-y-1"
                                                    >
                                                        <Twitter className="w-4 h-4" />
                                                        <span className="font-bold text-sm">Twitter</span>
                                                    </a>
                                                )}
                                                {selectedMember.socials.linkedin && (
                                                    <a 
                                                        href={selectedMember.socials.linkedin} 
                                                        target="_blank" 
                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-baltic-blue-900/30 text-baltic-blue-300 hover:bg-[#0077b5] hover:text-white transition-all group border border-baltic-blue-800 hover:border-[#0077b5] hover:-translate-y-1"
                                                    >
                                                        <Linkedin className="w-4 h-4" />
                                                        <span className="font-bold text-sm">LinkedIn</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
