"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
            <nav className={`flex h-14 items-center justify-between gap-4 rounded-full border border-baltic-blue-700 px-4 backdrop-blur-md shadow-2xl w-full max-w-4xl supports-[backdrop-filter]:bg-baltic-blue-900/60 transition-all duration-300 will-change-transform ${
                isScrolled ? 'bg-baltic-blue-900/80 shadow-baltic-blue-950/60' : 'bg-baltic-blue-900/60 shadow-baltic-blue-950/40'
            }`}>
                <div className="flex items-center gap-3 -mt-1">
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
                </div>

                <div className="flex items-center gap-1">
                    <div className="hidden md:flex items-center gap-1">
                        {["Features", "Community", "Premium"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="rounded-full px-4 py-1.5 text-xs font-medium text-baltic-blue-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95 will-change-transform"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <Button size="icon" variant="ghost" className="md:hidden text-baltic-blue-300 hover:text-white hover:bg-white/10 rounded-full h-9 w-9">
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </nav>
        </div>
    );
}
