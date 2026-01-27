"use client";

import { motion } from "framer-motion";
import { BookOpen, Rocket, Code2, Users, Zap, GitBranch, MessageCircle, Trophy } from "lucide-react";
import Link from "next/link";

interface DocSection {
  icon: any;
  title: string;
  description: string;
  items: {
    title: string;
    content: string;
  }[];
}

const docSections: DocSection[] = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Everything you need to know to join and get active in the community",
    items: [
      {
        title: "Join the Community",
        content: "Click the 'Join Discord Server' button on our homepage. Once inside, introduce yourself in the #introductions channel. Tell us about your interests, what you're working on, and what you hope to learn!"
      },
      {
        title: "Set Up Your Profile",
        content: "Add your roles in #roles channel to get access to relevant channels. Available roles include: Developer, Designer, Student, Mentor, Web3 Enthusiast, and more. This helps you connect with like-minded members."
      },
      {
        title: "Explore Channels",
        content: "Browse through our channels: #general for casual chat, #showcase for sharing projects, #help for getting assistance, #events for upcoming activities, and topic-specific channels for focused discussions."
      },
      {
        title: "Attend Your First Event",
        content: "Check #events for our weekly schedule. Join a Vibe Coding Session (every Friday) or Weekend Hackathon (first weekend of each month). No pressure to present—just come to learn and connect!"
      }
    ]
  },
  {
    icon: Code2,
    title: "Contributing to Projects",
    description: "How to contribute to community projects and collaborate with others",
    items: [
      {
        title: "Find Projects",
        content: "Browse our GitHub organization or check #project-ideas channel for active projects. Look for 'good first issue' labels for beginner-friendly contributions. Each project has a README with setup instructions."
      },
      {
        title: "Claim an Issue",
        content: "Comment on the GitHub issue you want to work on. Wait for a maintainer to assign it to you. This prevents duplicate work and helps coordinate efforts across the community."
      },
      {
        title: "Development Workflow",
        content: "Fork the repository, create a feature branch, make your changes with clear commit messages, and open a Pull Request. Link the PR to the issue it addresses. Follow the project's contribution guidelines."
      },
      {
        title: "Code Review Process",
        content: "A maintainer will review your PR within 48 hours. Address any feedback and update your PR. Once approved, your changes will be merged. Your contribution will be celebrated in our community!"
      }
    ]
  },
  {
    icon: Users,
    title: "Community Guidelines",
    description: "Our values and expectations for community interaction",
    items: [
      {
        title: "Be Respectful",
        content: "Treat everyone with respect and kindness. We welcome members of all skill levels, backgrounds, and experience. Harassment, discrimination, or toxic behavior will not be tolerated."
      },
      {
        title: "Share Knowledge",
        content: "Help others when you can. Share your learnings, mistakes, and successes. There's no such thing as a 'stupid question'—we're all learning together. The best way to solidify your knowledge is by teaching."
      },
      {
        title: "Give Credit",
        content: "Always credit others' work and ideas. If you found a solution online or got help from someone, acknowledge them. Plagiarism has no place in our community."
      },
      {
        title: "Stay on Topic",
        content: "Use appropriate channels for discussions. Keep #general for casual chat, #help for questions, and project channels for project-related discussions. This helps everyone find relevant information."
      }
    ]
  },
  {
    icon: Zap,
    title: "Events & Activities",
    description: "Participate in our regular community events",
    items: [
      {
        title: "Weekly Vibe Coding Sessions",
        content: "Every Friday 7-10 PM EST. Join us for live coding with lo-fi beats. Work on your projects, pair program, or just hang out. Stream in #live-coding voice channel. Open to all skill levels!"
      },
      {
        title: "Weekend Hackathons",
        content: "First weekend of every month (48 hours). Build anything you want! Solo or team participation welcome. Prizes for top 3 projects. Past themes: AI Tools, Web3 Apps, Productivity Hacks."
      },
      {
        title: "Web3 Workshops",
        content: "Second Monday of each month, 6-8 PM EST. Deep dive into blockchain development, smart contracts, dApp building, and Web3 tools. Hands-on tutorials with Q&A. Recordings available afterwards."
      },
      {
        title: "Daily Stand-ups",
        content: "Optional daily check-ins at 9 AM EST in #daily-standup. Share what you're working on, what you learned, or where you're stuck. Great for accountability and finding collaborators."
      }
    ]
  },
  {
    icon: GitBranch,
    title: "Project Showcase",
    description: "Share your work with the community",
    items: [
      {
        title: "Prepare Your Showcase",
        content: "Take screenshots or record a demo video. Write a brief description (what it does, tech stack used, challenges faced). Include a GitHub link if it's open source. Live demos are encouraged!"
      },
      {
        title: "Share in #showcase",
        content: "Post your project with visuals and description. Use the 'Project Showcase' template for consistent formatting. Tag relevant technologies (#react, #python, #web3, etc.) for better discovery."
      },
      {
        title: "Engage with Feedback",
        content: "Community members will ask questions and provide feedback. This is a learning opportunity! Be open to suggestions but remember—it's your project, your vision."
      },
      {
        title: "Feature Opportunities",
        content: "Outstanding projects may be featured in our weekly newsletter, Twitter/X showcase thread, or even get dedicated video breakdowns on our YouTube channel. Past featured projects got 1000+ views!"
      }
    ]
  },
  {
    icon: MessageCircle,
    title: "Getting Help",
    description: "Where and how to ask for assistance",
    items: [
      {
        title: "Search First",
        content: "Use Discord search to see if your question has been answered before. Check pinned messages in relevant channels. Many common questions have been documented in our #resources channel."
      },
      {
        title: "Ask in the Right Channel",
        content: "#help for general coding questions, #web3-help for blockchain questions, #design-help for UI/UX questions, #career for job/interview advice. Specific > general always!"
      },
      {
        title: "Provide Context",
        content: "Share your code (use code blocks or GitHub links), error messages, what you've tried, and what you expected. The more context, the better help you'll receive. Screenshots are helpful!"
      },
      {
        title: "Be Patient & Follow Up",
        content: "Response time varies (usually within 1-2 hours). If no response after 4 hours, feel free to bump your message. Once resolved, share the solution to help others with similar issues!"
      }
    ]
  }
];

export function DocsContent() {
  return (
    <div className="container">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
          VIBEBROS{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
            DOCUMENTATION
          </span>
        </h1>
        <p className="text-xl text-baltic-blue-200">
          Comprehensive guides and resources to help you make the most of the VibeBros community.
          From getting started to advanced collaboration, we&apos;ve got you covered.
        </p>
      </div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/guidelines"
            className="p-4 rounded-xl border border-baltic-blue-800 bg-baltic-blue-900/30 hover:border-cerulean-500/50 transition-all text-center group"
          >
            <BookOpen className="w-6 h-6 mx-auto mb-2 text-cerulean-400" />
            <div className="text-sm font-bold text-white group-hover:text-cerulean-400 transition-colors">Guidelines</div>
          </Link>
          <Link
            href="/code-of-conduct"
            className="p-4 rounded-xl border border-baltic-blue-800 bg-baltic-blue-900/30 hover:border-cerulean-500/50 transition-all text-center group"
          >
            <Trophy className="w-6 h-6 mx-auto mb-2 text-cerulean-400" />
            <div className="text-sm font-bold text-white group-hover:text-cerulean-400 transition-colors">Code of Conduct</div>
          </Link>
          <a
            href="https://discord.gg/p6UWRMrj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-baltic-blue-800 bg-baltic-blue-900/30 hover:border-cerulean-500/50 transition-all text-center group"
          >
            <MessageCircle className="w-6 h-6 mx-auto mb-2 text-cerulean-400" />
            <div className="text-sm font-bold text-white group-hover:text-cerulean-400 transition-colors">Join Discord</div>
          </a>
          <a
            href="https://github.com/VibeBros-Community"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-baltic-blue-800 bg-baltic-blue-900/30 hover:border-cerulean-500/50 transition-all text-center group"
          >
            <GitBranch className="w-6 h-6 mx-auto mb-2 text-cerulean-400" />
            <div className="text-sm font-bold text-white group-hover:text-cerulean-400 transition-colors">GitHub</div>
          </a>
        </div>
      </motion.div>

      {/* Documentation Sections */}
      <div className="max-w-6xl mx-auto space-y-12">
        {docSections.map((section, sectionIndex) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-cerulean-500/10 border border-cerulean-500/20">
                <section.icon className="w-6 h-6 text-cerulean-400" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white">{section.title}</h2>
                <p className="text-baltic-blue-400">{section.description}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                  className="p-6 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30 backdrop-blur-sm hover:border-cerulean-500/30 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-baltic-blue-300 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl border border-cerulean-500/30 bg-gradient-to-br from-cerulean-500/10 to-yale-blue-500/10"
      >
        <h3 className="text-2xl font-black text-white mb-4">Ready to Get Started?</h3>
        <p className="text-baltic-blue-200 mb-6">
          Join our Discord community and start your journey with VibeBros. Whether you&apos;re here to learn,
          build, or connect—there&apos;s a place for you.
        </p>
        <a
          href="https://discord.gg/p6UWRMrj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cerulean-500 hover:bg-cerulean-600 text-white font-bold transition-colors"
        >
          Join Discord Server
          <MessageCircle className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
