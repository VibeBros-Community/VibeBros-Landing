"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { CyberTimeline } from "@/components/ui/cyber-timeline";
import { Radio } from "lucide-react";

const events = [
    {
        title: "Weekend Hackathon",
        date: "Feb 1-2, 2026",
        time: "9:00 AM - 9:00 PM EST",
        type: "Hackathon",
        participants: "150+",
        description: "48-hour coding marathon. Build anything, win prizes, and vibe with the community.",
        status: "upcoming",
        gradient: "from-cerulean-500/20 to-yale-blue-500/20",
    },
    {
        title: "Vibe Coding Session",
        date: "Every Friday",
        time: "7:00 PM - 10:00 PM EST",
        type: "Live Stream",
        participants: "50+",
        description: "Weekly live coding sessions with lo-fi beats and good vibes. All skill levels welcome.",
        status: "recurring",
        gradient: "from-yale-blue-500/20 to-cerulean-400/20",
    },
    {
        title: "Web3 Workshop",
        date: "Feb 10, 2026",
        time: "6:00 PM - 8:00 PM EST",
        type: "Workshop",
        participants: "30",
        description: "Deep dive into Web3 development. Build your first dApp with hands-on guidance.",
        status: "upcoming",
        gradient: "from-cerulean-400/20 to-baltic-blue-500/20",
    },
];

export const EventsSection = memo(function EventsSection() {
    return (
        <section id="events" className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-baltic-blue-950/10 to-transparent" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-cerulean-500/3 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yale-blue-500/3 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Header Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="space-y-6"
                    >
                        {/* Top Badge */}
                        <div className="flex items-center gap-3 w-fit">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cerulean-500/10 border border-cerulean-500/30 backdrop-blur-sm">
                                <Radio className="w-3 h-3 text-cerulean-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-cerulean-400">Live Events</span>
                            </div>
                            <div className="w-px h-4 bg-gradient-to-b from-transparent via-baltic-blue-500 to-transparent" />
                            <span className="text-xs font-mono text-baltic-blue-400">Connect & Collaborate</span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                                    UPCOMING
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 via-yale-blue-400 to-cerulean-500">
                                        EVENTS
                                    </span>
                                </h2>

                                {/* Accent Line */}
                                <div className="flex items-center gap-2 pt-1">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-cerulean-500 to-transparent rounded-full" />
                                    <span className="text-xs font-mono text-baltic-blue-400 tracking-wide">Community Timeline</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-base leading-relaxed text-baltic-blue-300">
                                Live sessions, workshops, and hackathons where builders come together to code, learn, and vibe with the community.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="grid grid-cols-3 gap-4 pt-4 border-t border-baltic-blue-800/40"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-black text-cerulean-400">{events.length}</span>
                                <span className="text-xs font-mono text-baltic-blue-500 uppercase tracking-wide">Events</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-black text-yale-blue-400">250+</span>
                                <span className="text-xs font-mono text-baltic-blue-500 uppercase tracking-wide">Attendees</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-black text-cerulean-500">24/7</span>
                                <span className="text-xs font-mono text-baltic-blue-500 uppercase tracking-wide">Active</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Timeline Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full"
                    >
                        <CyberTimeline events={events} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
