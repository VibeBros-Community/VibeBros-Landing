import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "building-first-web3-dapp": {
    title: "Building Your First Web3 dApp: A Complete Guide",
    date: "2026-01-25",
    author: "Willian",
    readTime: "12 min read",
    category: "Web3",
    content: `
# Building Your First Web3 dApp: A Complete Guide

Web3 development is revolutionizing how we build applications. This guide will walk you through creating your first decentralized application (dApp) from scratch.

## Prerequisites

Before we begin, make sure you have:
- Basic JavaScript/TypeScript knowledge
- Node.js installed (v18 or higher)
- MetaMask wallet extension
- Basic understanding of blockchain concepts

## Setting Up Your Development Environment

First, let's set up our project with the necessary tools...

[Full article content would be here]

*This is a sample blog post. Full articles coming soon!*
    `
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: "Post Not Found - VibeBros Blog"
    };
  }

  return {
    title: `${post.title} - VibeBros Blog`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <article className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-bold bg-cerulean-500/10 text-cerulean-400 border border-cerulean-500/20">
                  {post.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-baltic-blue-400">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-invert prose-cerulean max-w-none">
              <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm">
                <p className="text-xl text-baltic-blue-200 leading-relaxed mb-6">
                  This blog post is coming soon! We're working on bringing you high-quality content about Web3 development, coding tutorials, and community insights.
                </p>
                <p className="text-lg text-baltic-blue-300">
                  In the meantime, join our{" "}
                  <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer" className="text-cerulean-400 hover:underline font-bold">
                    Discord community
                  </a>{" "}
                  to discuss Web3 development, ask questions, and learn from experienced developers.
                </p>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
