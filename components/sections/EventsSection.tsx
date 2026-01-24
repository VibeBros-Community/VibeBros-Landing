"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { CyberTimeline } from "@/components/ui/cyber-timeline";

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

                <CyberTimeline events={events} />
            </div>
        </section>
    );
});
