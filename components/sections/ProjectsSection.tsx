"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
    {
        title: "VibeChat",
        description: "Real-time chat platform built during our 48-hour hackathon. Features WebRTC, custom emojis, and vibe scores.",
        tags: ["Next.js", "WebSockets", "Tailwind"],
        stars: 234,
        live: "https://vibechat.dev",
        github: "https://github.com/vibebros/vibechat",
        gradient: "from-cerulean-500/20 to-yale-blue-500/20",
    },
    {
        title: "CodeFlow",
        description: "VS Code extension that plays curated music based on your coding language and energy level.",
        tags: ["TypeScript", "VS Code API", "ML"],
        stars: 1200,
        github: "https://github.com/vibebros/codeflow",
        gradient: "from-yale-blue-500/20 to-cerulean-500/20",
    },
    {
        title: "BuildSpace",
        description: "Collaborative coding environment where you can vibe code with friends in shared workspaces.",
        tags: ["React", "WebRTC", "Monaco"],
        stars: 567,
        live: "https://buildspace.vibebros.dev",
        github: "https://github.com/vibebros/buildspace",
        gradient: "from-cerulean-400/20 to-baltic-blue-500/20",
    },
];

export const ProjectsSection = memo(function ProjectsSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 border-t border-baltic-blue-800">
            <div className="container">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Built by the community, for the community. Check out what we've been vibing on.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Card className="group relative h-full p-6 border-baltic-blue-800 bg-baltic-blue-900/50 backdrop-blur-sm hover:border-cerulean-500/50 overflow-hidden">
                                {/* Gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                        <div className="flex items-center gap-1 text-baltic-blue-300">
                                            <Star className="h-4 w-4 fill-current" />
                                            <span className="text-sm">{project.stars}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-baltic-blue-300 mb-4 flex-grow">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className="bg-baltic-blue-800/50 text-baltic-blue-200 border-baltic-blue-700 hover:bg-baltic-blue-700/50"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-cerulean-400 hover:text-cerulean-300 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-baltic-blue-300 hover:text-white transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            Source
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});
