"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Youtube, MessageCircle, Mail, Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-baltic-blue-800 bg-gradient-to-b from-transparent to-baltic-blue-950/30 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 overflow-hidden">
            {/* Gradient blur orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cerulean-500/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yale-blue-500/10 rounded-full blur-[128px]" />

            <div className="container relative z-10 px-4 sm:px-6">
                <div className="grid gap-10 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-10 sm:mb-12 md:mb-14">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-5 sm:space-y-6 text-center sm:text-left">
                        <div className="flex items-center gap-3 justify-center sm:justify-start">
                            <div className="relative h-11 w-11 sm:h-12 sm:w-12 transition-transform duration-300 hover:scale-110 will-change-transform">
                                <Image
                                    src="/logo-no-text.png"
                                    alt="VibeBros Logo"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </div>
                            <span className="text-2xl sm:text-2xl font-black text-white">VibeBros</span>
                        </div>
                        <p className="text-sm sm:text-base text-baltic-blue-300 max-w-sm leading-relaxed mx-auto sm:mx-0">
                            A community of developers, designers, and creators building the future together.
                            Code with passion, ship with purpose.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                            <a
                                href="https://discord.gg/p6UWRMrj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                aria-label="Discord"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </a>
                            <a
                                href="https://github.com/VibeBros-Community"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/vibebros"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://youtube.com/@vibebros"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-baltic-blue-800/50 text-baltic-blue-300 hover:bg-cerulean-500/20 hover:text-cerulean-400 transition-all duration-200 hover:scale-110 will-change-transform"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="mb-4 sm:mb-5 text-sm font-bold text-white uppercase tracking-wider">Community</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#about" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#events" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-center sm:text-left">
                        <h3 className="mb-4 sm:mb-5 text-sm font-bold text-white uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="https://github.com/VibeBros-Community" target="_blank" rel="noopener noreferrer" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-baltic-blue-300 hover:text-cerulean-400 transition-colors duration-200">
                                    Guidelines
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h3 className="mb-4 sm:mb-5 text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h3>
                        <p className="mb-4 text-sm text-baltic-blue-300">
                            Get the latest from VibeBros.
                        </p>
                        <div className="flex flex-col gap-2 max-w-xs mx-auto sm:mx-0">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex h-11 w-full rounded-lg border border-baltic-blue-800 bg-baltic-blue-900/50 px-4 py-2 text-sm text-white placeholder:text-baltic-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cerulean-500 focus-visible:border-cerulean-500 transition-all backdrop-blur-sm"
                            />
                            <Button className="w-full h-11 bg-cerulean-500 hover:bg-cerulean-600 text-white shadow-lg shadow-cerulean-500/20 text-sm">
                                <Mail className="h-4 w-4 mr-2" />
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-baltic-blue-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-4">
                        <p className="text-xs sm:text-sm text-baltic-blue-400 order-2 md:order-1">
                            © {currentYear} VibeBros. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-baltic-blue-400 order-1 md:order-2">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-cerulean-400 fill-current" />
                            <span>by the VibeBros community</span>
                        </div>
                        <div className="flex gap-5 sm:gap-6 text-xs sm:text-sm order-3">
                            <a href="#" className="text-baltic-blue-400 hover:text-cerulean-400 transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-baltic-blue-400 hover:text-cerulean-400 transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-baltic-blue-400 hover:text-cerulean-400 transition-colors">
                                Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
