"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <div className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="flex h-14 items-center justify-between gap-4 rounded-full border border-baltic-blue-700 bg-baltic-blue-900/60 px-4 backdrop-blur-md shadow-2xl shadow-baltic-blue-950/40 w-full max-w-4xl supports-[backdrop-filter]:bg-baltic-blue-900/60">
                <div className="flex items-center gap-3 -mt-1">
                    <div className="relative h-12 w-12 transition-transform hover:scale-105">
                        <Image 
                            src="/logo-no-text.png" 
                            alt="VibeBros Logo" 
                            fill
                            className="object-contain"
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
                                className="rounded-full px-4 py-1.5 text-xs font-medium text-baltic-blue-200 transition-all hover:bg-white/10 hover:text-white"
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
