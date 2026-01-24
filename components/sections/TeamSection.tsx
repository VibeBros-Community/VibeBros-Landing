"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { AccordionTeam } from "@/components/ui/accordion-team";

const team = [
    {
        name: "Willian",
        role: "Founder & Lead Vibe Architect",
        bio: "Full-stack developer with a passion for building communities. 10+ years coding to lo-fi beats.",
        avatar: "W",
        gradient: "from-cerulean-400 to-yale-blue-500",
        socials: {
            github: "https://github.com/VibeBros-Community",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Jesse Pinkman",
        role: "Community Lead & Designer",
        bio: "UX designer turned community builder. Creating spaces where developers feel at home.",
        avatar: "JP",
        gradient: "from-yale-blue-500 to-cerulean-400",
        socials: {
            github: "https://github.com/VibeBros-Community",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Max",
        role: "Head of Content & Streams",
        bio: "Live coding enthusiast and educator. Making programming accessible and fun for everyone.",
        avatar: "M",
        gradient: "from-cerulean-500 to-baltic-blue-400",
        socials: {
            github: "https://github.com/VibeBros-Community",
            twitter: "https://twitter.com",
        },
    },
    {
        name: "J35",
        role: "DevOps & Infrastructure",
        bio: "Keeps everything running smoothly. Cloud architecture expert and automation wizard.",
        avatar: "J35",
        gradient: "from-baltic-blue-400 to-cerulean-500",
        socials: {
            github: "https://github.com/VibeBros-Community",
            linkedin: "https://linkedin.com",
        },
    },
];

export const TeamSection = memo(function TeamSection() {
    return (
        <section id="team" className="py-24 sm:py-32 border-t border-baltic-blue-800">
            <div className="container">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        MEET THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                            TEAM
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-baltic-blue-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        Built by the community, for the community. Check out what we've been vibing on.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <AccordionTeam members={team} />
                </motion.div>
            </div>
        </section>
    );
});
