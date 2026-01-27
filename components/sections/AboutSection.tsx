"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Users, Rocket } from "lucide-react";

const features = [
    {
        icon: Code2,
        title: "Vibe Coding",
        description: "Code together in real-time with music, energy, and pure creative flow.",
    },
    {
        icon: Zap,
        title: "Live Sessions",
        description: "Join daily coding streams where we build, learn, and vibe together.",
    },
    {
        icon: Users,
        title: "Community First",
        description: "Connect with developers, designers, and creators who share your passion.",
    },
    {
        icon: Rocket,
        title: "Ship Fast",
        description: "Turn ideas into reality with our rapid prototyping and build culture.",
    },
];

export const AboutSection = memo(function AboutSection() {
    return (
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Gradient blur orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cerulean-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yale-blue-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
                            WHAT IS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                                VIBEBROS?
                            </span>
                        </h2>
                        <p className="text-lg text-baltic-blue-200 mb-4 leading-relaxed">
                            VibeBros is more than a community—it&apos;s a movement of builders, creators,
                            and dreamers who code with passion and purpose. Since our founding, we&apos;ve
                            grown to over 250+ active members across the globe.
                        </p>
                        <p className="text-lg text-baltic-blue-300 mb-4 leading-relaxed">
                            We believe the best code is written in flow state. Through live coding sessions,
                            collaborative projects, and a vibrant Discord community, we&apos;re redefining what
                            it means to be a developer in the modern era. Our members have shipped over 50+
                            projects, from Web3 dApps to full-stack applications.
                        </p>
                        <p className="text-base text-baltic-blue-400 leading-relaxed">
                            Join us for weekly hackathons, daily coding sessions, Web3 workshops, and 24/7
                            community support. Whether you&apos;re a beginner learning your first language or a
                            seasoned developer exploring new technologies, VibeBros is your home for growth,
                            collaboration, and innovation.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-baltic-blue-800">
                            <div>
                                <div className="text-3xl font-black text-cerulean-400">250+</div>
                                <div className="text-sm text-baltic-blue-400">Active Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-cerulean-400">50+</div>
                                <div className="text-sm text-baltic-blue-400">Projects Shipped</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-cerulean-400">24/7</div>
                                <div className="text-sm text-baltic-blue-400">Community Support</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Feature Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group relative p-6 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/50 backdrop-blur-sm hover:border-cerulean-500/50 transition-all duration-300 hover:scale-105 will-change-transform"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cerulean-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                <div className="relative z-10">
                                    <feature.icon className="h-8 w-8 text-cerulean-400 mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-baltic-blue-300">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
