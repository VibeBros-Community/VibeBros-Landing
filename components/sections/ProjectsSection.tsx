"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { IdeViewer } from "@/components/ui/ide-viewer";

const projects = [
    {
        title: "VibeChat",
        description: "Real-time chat platform built during our 48-hour hackathon. Features WebRTC, custom emojis, and vibe scores.",
        tags: ["Next.js", "WebSockets", "Tailwind"],
        stars: 234,
        live: "https://vibechat.dev",
        github: "https://github.com/VibeBros-Community/vibechat",
        gradient: "from-cerulean-500/20 to-yale-blue-500/20",
    },
    {
        title: "CodeFlow",
        description: "VS Code extension that plays curated music based on your coding language and energy level.",
        tags: ["TypeScript", "VS Code API", "ML"],
        stars: 1200,
        github: "https://github.com/VibeBros-Community/codeflow",
        gradient: "from-yale-blue-500/20 to-cerulean-500/20",
    },
    {
        title: "BuildSpace",
        description: "Collaborative coding environment where you can vibe code with friends in shared workspaces.",
        tags: ["React", "WebRTC", "Monaco"],
        stars: 567,
        live: "https://buildspace.vibebros.dev",
        github: "https://github.com/VibeBros-Community/buildspace",
        gradient: "from-cerulean-400/20 to-baltic-blue-500/20",
    },
];

export const ProjectsSection = memo(function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="container">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        COMMUNITY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                            PROJECTS
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
                >
                    <IdeViewer projects={projects} />
                </motion.div>
            </div>
        </section>
    );
});
