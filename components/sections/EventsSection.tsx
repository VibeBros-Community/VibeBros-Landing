"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Video } from "lucide-react";

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
        <section id="events" className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-baltic-blue-950/30">
            <div className="container">
                <div className="mb-16">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">
                                UPCOMING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                                    EVENTS
                                </span>
                            </h2>
                        </div>
                        <p className="text-lg text-baltic-blue-300 max-w-md">
                            Join us for live sessions, workshops, and hackathons. Level up your skills and connect with fellow builders.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                        >
                            <Card className="group relative h-full p-6 border-baltic-blue-800 bg-baltic-blue-900/50 backdrop-blur-sm hover:border-cerulean-500/50 overflow-hidden">
                                {/* Status badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        event.status === 'upcoming'
                                            ? 'bg-cerulean-500/20 text-cerulean-400 border border-cerulean-500/30'
                                            : 'bg-yale-blue-500/20 text-yale-blue-400 border border-yale-blue-500/30'
                                    }`}>
                                        {event.status === 'upcoming' ? 'Upcoming' : 'Recurring'}
                                    </span>
                                </div>

                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Type */}
                                    <div className="flex items-center gap-2 text-cerulean-400 mb-3">
                                        <Video className="h-4 w-4" />
                                        <span className="text-sm font-medium">{event.type}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>

                                    {/* Description */}
                                    <p className="text-baltic-blue-300 mb-6 flex-grow">{event.description}</p>

                                    {/* Event details */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-baltic-blue-200">
                                            <Calendar className="h-4 w-4 text-cerulean-400" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-baltic-blue-200">
                                            <Clock className="h-4 w-4 text-cerulean-400" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-baltic-blue-200">
                                            <Users className="h-4 w-4 text-cerulean-400" />
                                            {event.participants} participants
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        className="w-full bg-cerulean-500 hover:bg-cerulean-600 text-white"
                                        asChild
                                    >
                                        <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer">
                                            Register Now
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});
