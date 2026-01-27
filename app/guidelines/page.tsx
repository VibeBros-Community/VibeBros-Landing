import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";
import { GuidelinesContent } from "@/components/guidelines/GuidelinesContent";
import { BackButton } from "@/components/ui/back-button";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

export const metadata: Metadata = {
  title: "Community Guidelines - VibeBros",
  description: "VibeBros community guidelines and best practices. Learn how to be a positive, contributing member of our developer community.",
  openGraph: {
    title: "Community Guidelines - VibeBros",
    description: "Guidelines for participating in the VibeBros community",
    url: `${siteUrl}/guidelines`,
    type: "website",
  },
};

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <BackButton />
        <Navbar />
        <div className="pt-32 pb-20">
          <GuidelinesContent />
        </div>
        <Footer />
      </div>
    </main>
  );
}
