"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const menuItems = ["About", "Projects", "Events", "Team"];

    return (
        <>
            <div className="fixed top-10 left-0 right-0 z-[9999] flex justify-center px-4 transition-all duration-300">
                <nav className={`flex h-14 items-center justify-between gap-4 rounded-full border border-baltic-blue-700 px-4 backdrop-blur-md shadow-2xl w-full max-w-4xl supports-[backdrop-filter]:bg-baltic-blue-900/60 transition-all duration-300 will-change-transform ${
                    isScrolled ? 'bg-baltic-blue-900/80 shadow-baltic-blue-950/60' : 'bg-baltic-blue-900/60 shadow-baltic-blue-950/40'
                }`}>
                    <Link href="/" className="flex items-center gap-3 -mt-1">
                        <div className="relative h-12 w-12 transition-transform duration-300 hover:scale-110 will-change-transform">
                            <Image
                                src="/logo-no-text.png"
                                alt="VibeBros Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="48px"
                            />
                        </div>
                        <span className="hidden sm:block text-lg font-bold tracking-tight text-white mt-1">VibeBros</span>
                    </Link>

                    <div className="flex items-center gap-1">
                        <div className="hidden md:flex items-center gap-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="rounded-full px-4 py-1.5 text-xs font-medium text-baltic-blue-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95 will-change-transform"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <Button
                            size="icon"
                            variant="ghost"
                            className="md:hidden text-baltic-blue-300 hover:text-white hover:bg-white/10 rounded-full h-9 w-9"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-28 left-4 right-4 z-[9999] mx-auto max-w-sm"
                        >
                            <div className="rounded-3xl border border-baltic-blue-700 bg-baltic-blue-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                                <div className="p-6 space-y-2">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <Link
                                                href={`#${item.toLowerCase()}`}
                                                onClick={handleLinkClick}
                                                className="block w-full text-left px-6 py-4 rounded-2xl text-base font-semibold text-baltic-blue-200 hover:text-white hover:bg-cerulean-500/20 transition-all duration-200 border border-transparent hover:border-cerulean-500/30"
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: menuItems.length * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                        className="pt-4 border-t border-baltic-blue-800"
                                    >
                                        <Button
                                            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white border-0 shadow-lg shadow-[#5865F2]/20 h-12 text-base font-semibold"
                                            asChild
                                        >
                                            <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer">
                                                <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 127.14 96.36">
                                                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                                                </svg>
                                                Join Discord
                                            </a>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
