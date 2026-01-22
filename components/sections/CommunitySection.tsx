"use client";

import { memo } from "react";

// Mock user data for social proof
const users = [
    { name: "Alex Chen", role: "Developer" },
    { name: "Sarah Jones", role: "Designer" },
    { name: "Mike Ross", role: "Founder" },
    { name: "Emily Wang", role: "Artist" },
    { name: "David Kim", role: "Musician" },
    { name: "Lisa Park", role: "Creator" },
    { name: "Tom Wilson", role: "Streamer" },
];

export const CommunitySection = memo(function CommunitySection() {
    return (
        <section id="community" className="py-24 overflow-hidden border-y border-ink-black-800 bg-ink-black-950/50">
            <div className="container mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                    Join <span className="text-brick-ember-500">10,000+</span> Creators
                </h2>
            </div>

            <div className="relative flex w-full flex-col gap-8 overflow-hidden">
                {/* Row 1: Left to Right */}
                <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused]">
                    {[...users, ...users, ...users].map((user, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-full border border-ink-black-800 bg-ink-black-900/50 px-6 py-3 backdrop-blur-sm hover:border-brick-ember-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brick-ember-500/10 will-change-transform">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brick-ember-500 to-baby-blue-500" />
                            <div>
                                <p className="text-sm font-semibold text-ink-black-50">{user.name}</p>
                                <p className="text-xs text-ink-black-300">{user.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2: Right to Left (Reverse) */}
                <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused]" style={{ animationDirection: "reverse" }}>
                    {[...users, ...users, ...users].map((user, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-full border border-ink-black-800 bg-ink-black-900/50 px-6 py-3 backdrop-blur-sm hover:border-baby-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-baby-blue-500/10 will-change-transform">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-baby-blue-400 to-pale-sky-500" />
                            <div>
                                <p className="text-sm font-semibold text-ink-black-50">{user.name}</p>
                                <p className="text-xs text-ink-black-300">{user.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade gradients on sides */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
            </div>
        </section>
    );
});
