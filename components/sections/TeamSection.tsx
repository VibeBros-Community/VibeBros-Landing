"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
    {
        name: "Willian",
        role: "Founder & Lead Vibe Architect",
        bio: "Full-stack developer with a passion for building communities. 10+ years coding to lo-fi beats.",
        avatar: "W",
        gradient: "from-cerulean-400 to-yale-blue-500",
        socials: {
            github: "https://github.com",
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
            github: "https://github.com",
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
            github: "https://github.com",
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
            github: "https://github.com",
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
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        The passionate builders behind VibeBros, dedicated to creating the ultimate coding community.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Card className="group relative h-full p-6 border-baltic-blue-800 bg-baltic-blue-900/50 backdrop-blur-sm hover:border-cerulean-500/50 text-center">
                                {/* Avatar */}
                                <div className="relative mx-auto mb-4 w-24 h-24">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl`} />
                                    <div className={`relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} text-white text-2xl font-bold transition-transform duration-300 group-hover:scale-110 will-change-transform`}>
                                        {member.avatar}
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-sm text-cerulean-400 mb-3 font-medium">{member.role}</p>
                                <p className="text-sm text-baltic-blue-300 mb-6">{member.bio}</p>

                                {/* Social Links */}
                                <div className="flex justify-center gap-3">
                                    {member.socials.github && (
                                        <a
                                            href={member.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                        >
                                            <Twitter className="h-4 w-4" />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});
