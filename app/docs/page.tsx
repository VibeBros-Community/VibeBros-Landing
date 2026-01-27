import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";
import { DocsContent } from "@/components/docs/DocsContent";
import { BackButton } from "@/components/ui/back-button";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

export const metadata: Metadata = {
  title: "Documentation - VibeBros | Resources & Guides",
  description: "Comprehensive documentation, tutorials, and resources for VibeBros community members. Learn how to get started, contribute to projects, and make the most of our community.",
  keywords: [
    "developer documentation",
    "community guidelines",
    "coding resources",
    "development guides",
    "VibeBros resources",
    "developer tutorials",
    "project contribution guide",
  ],
  openGraph: {
    title: "Documentation - VibeBros",
    description: "Comprehensive documentation and resources for the VibeBros community",
    url: `${siteUrl}/docs`,
    type: "website",
  },
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <BackButton />
        <Navbar />
        <div className="pt-32 pb-20">
          <DocsContent />
        </div>
        <Footer />
      </div>
    </main>
  );
}
