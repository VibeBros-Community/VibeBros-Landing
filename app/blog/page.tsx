import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";
import { BlogList } from "@/components/blog/BlogList";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

export const metadata: Metadata = {
  title: "Blog - VibeBros | Developer Community News & Tutorials",
  description: "Stay updated with the latest news, tutorials, and insights from the VibeBros developer community. Learn about Web3, coding tips, hackathon recaps, and community highlights.",
  keywords: [
    "developer blog",
    "coding tutorials",
    "Web3 tutorials",
    "programming blog",
    "tech community news",
    "hackathon recaps",
    "developer insights",
    "VibeBros blog",
  ],
  openGraph: {
    title: "Blog - VibeBros",
    description: "Latest news, tutorials, and insights from the VibeBros community",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - VibeBros",
    description: "Latest news, tutorials, and insights from the VibeBros community",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
                VIBEBROS{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                  BLOG
                </span>
              </h1>
              <p className="text-xl text-baltic-blue-200">
                Latest news, tutorials, and insights from the VibeBros community.
                Learn from our experiences and level up your development skills.
              </p>
            </div>
            <BlogList />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
