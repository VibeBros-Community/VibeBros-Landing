"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Your First Web3 dApp: A Complete Guide",
    excerpt: "Learn how to build a decentralized application from scratch using Solidity, Ethereum, and React. This comprehensive guide covers everything from smart contracts to frontend integration.",
    date: "2026-01-25",
    readTime: "12 min read",
    author: "Willian",
    category: "Web3",
    slug: "building-first-web3-dapp"
  },
  {
    id: "2",
    title: "Weekend Hackathon Recap: Amazing Projects Built in 48 Hours",
    excerpt: "Check out the incredible projects our community built during last weekend's hackathon. From AI-powered tools to innovative Web3 solutions, our members shipped 15 complete projects!",
    date: "2026-01-22",
    readTime: "8 min read",
    author: "Jesse Pinkman",
    category: "Community",
    slug: "weekend-hackathon-recap-jan-2026"
  },
  {
    id: "3",
    title: "10 VS Code Extensions Every Developer Should Use in 2026",
    excerpt: "Boost your productivity with these must-have VS Code extensions. From AI assistants to advanced debugging tools, these extensions will transform your development workflow.",
    date: "2026-01-20",
    readTime: "6 min read",
    author: "Max",
    category: "Tutorials",
    slug: "vscode-extensions-2026"
  },
  {
    id: "4",
    title: "How VibeBros Grew to 250+ Members in 6 Months",
    excerpt: "The story behind building a thriving developer community. Learn about our strategies, challenges, and what we'd do differently if we started over today.",
    date: "2026-01-18",
    readTime: "10 min read",
    author: "Willian",
    category: "Community",
    slug: "how-vibebros-grew-250-members"
  },
  {
    id: "5",
    title: "Next.js 16: What's New and Why You Should Care",
    excerpt: "Exploring the latest features in Next.js 16, including improved Server Components, faster builds with Turbopack, and enhanced caching strategies. Plus migration tips from Next.js 15.",
    date: "2026-01-15",
    readTime: "9 min read",
    author: "J35",
    category: "Web Development",
    slug: "nextjs-16-whats-new"
  },
  {
    id: "6",
    title: "Vibe Coding: The Art of Flow State Programming",
    excerpt: "What is vibe coding and why does it work? Discover the science behind flow state programming and how to create the perfect environment for deep work and maximum productivity.",
    date: "2026-01-12",
    readTime: "7 min read",
    author: "Max",
    category: "Productivity",
    slug: "vibe-coding-flow-state-programming"
  }
];

const categoryColors: Record<string, string> = {
  "Web3": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Community": "bg-cerulean-500/10 text-cerulean-400 border-cerulean-500/20",
  "Tutorials": "bg-green-500/10 text-green-400 border-green-500/20",
  "Web Development": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Productivity": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export function BlogList() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm hover:border-cerulean-500/50 transition-all duration-300 hover:scale-[1.02] will-change-transform"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cerulean-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10">
              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[post.category] || categoryColors["Tutorials"]}`}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black text-white mb-3 group-hover:text-cerulean-400 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-baltic-blue-300 mb-5 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-baltic-blue-400 mb-5">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-cerulean-400 font-bold group-hover:gap-3 transition-all"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Coming Soon Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/20"
      >
        <p className="text-baltic-blue-300 text-lg mb-4">
          More articles coming soon! Stay tuned for tutorials, community updates, and developer insights.
        </p>
        <p className="text-baltic-blue-400 text-sm">
          Want to contribute an article?{" "}
          <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer" className="text-cerulean-400 hover:underline font-bold">
            Reach out on Discord
          </a>
        </p>
      </motion.div>
    </div>
  );
}
