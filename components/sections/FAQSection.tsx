"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is VibeBros?",
    answer: "VibeBros is a thriving community of 250+ developers, designers, gamers, and creators who are passionate about building innovative projects together. We host weekly hackathons, daily coding sessions, Web3 workshops, and maintain a 24/7 active Discord server where members collaborate, learn, and grow together."
  },
  {
    question: "How do I join VibeBros?",
    answer: "Joining VibeBros is easy and free! Simply click the 'Join Discord Server' button on our homepage to access our community. Once inside, introduce yourself in the welcome channel, and you'll immediately have access to all our events, resources, and collaborative spaces. No experience level required—we welcome everyone from beginners to experts."
  },
  {
    question: "What kind of events does VibeBros host?",
    answer: "We host a variety of events designed for all skill levels: Weekend Hackathons (48-hour coding marathons with prizes), Weekly Vibe Coding Sessions (live coding with lo-fi beats every Friday), Web3 Workshops (hands-on blockchain and dApp development), Daily Study Groups, and Project Showcases. All events are free and conducted virtually on our Discord server."
  },
  {
    question: "Do I need to be an experienced developer to join?",
    answer: "Not at all! VibeBros welcomes developers of all skill levels—from complete beginners writing their first line of code to seasoned engineers exploring new technologies. Our community thrives on knowledge sharing, and experienced members actively help newcomers learn and grow. We have dedicated channels for beginners and mentorship programs."
  },
  {
    question: "What technologies and programming languages does VibeBros focus on?",
    answer: "VibeBros is technology-agnostic and supports a wide range of tech stacks. Our community actively works with: Web Development (React, Next.js, Vue, Angular), Backend (Node.js, Python, Go, Rust), Mobile (React Native, Flutter), Web3 & Blockchain (Solidity, Ethereum, Solana), DevOps & Cloud (Docker, Kubernetes, AWS, Azure), Game Development (Unity, Unreal, Godot), and more. If you're working with it, chances are someone in our community is too!"
  },
  {
    question: "Are there any costs or membership fees?",
    answer: "No! VibeBros is completely free to join and participate in. All our events, workshops, coding sessions, and community resources are provided at no cost. We believe in making technology education and collaboration accessible to everyone, regardless of financial background."
  },
  {
    question: "Can I collaborate on projects with other members?",
    answer: "Absolutely! Collaboration is at the heart of VibeBros. We have dedicated project channels where members team up to build applications, contribute to open-source projects, and create innovative solutions together. Many successful projects have been born from VibeBros collaborations, and we actively encourage pair programming and team-based development."
  },
  {
    question: "How active is the VibeBros community?",
    answer: "Very active! Our Discord server has 24/7 activity with members from different time zones around the world. We host scheduled events multiple times per week, maintain active discussion channels, and have a responsive community that typically answers questions within minutes. The vibe never stops!"
  },
  {
    question: "What makes VibeBros different from other developer communities?",
    answer: "VibeBros combines technical excellence with a unique culture of creativity and flow state productivity. Unlike traditional developer communities, we emphasize 'vibe coding'—creating the perfect environment for deep work through music, energy, and positive community vibes. We focus on building together rather than just talking about code, with regular hackathons and collaborative projects. Plus, our Discord community is genuinely welcoming and supportive, not intimidating or elitist."
  },
  {
    question: "Can I showcase my projects in VibeBros?",
    answer: "Yes! We encourage all members to share their projects, whether they're works-in-progress or completed applications. We have dedicated showcase channels where you can get feedback, find collaborators, and celebrate your achievements with the community. Many members have received valuable input that improved their projects significantly."
  }
];

interface FAQItemProps {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ faq, index, isOpen, onToggle }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "border rounded-2xl transition-all duration-300",
        isOpen
          ? "border-cerulean-500/50 bg-baltic-blue-900/50"
          : "border-baltic-blue-800 bg-baltic-blue-900/30 hover:border-baltic-blue-700"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-white pr-8 group-hover:text-cerulean-400 transition-colors">
          {faq.question}
        </span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen
            ? "bg-cerulean-500 text-white rotate-180"
            : "bg-baltic-blue-800 text-baltic-blue-400 group-hover:bg-baltic-blue-700"
        )}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-baltic-blue-200 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = memo(function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-baltic-blue-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">
              FREQUENTLY ASKED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                QUESTIONS
              </span>
            </h2>
            <p className="text-lg text-baltic-blue-300 max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Everything you need to know about joining
              and participating in the VibeBros community.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-baltic-blue-300 mb-4">
              Still have questions? Join our Discord and ask the community!
            </p>
            <a
              href="https://discord.gg/p6UWRMrj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cerulean-500 hover:bg-cerulean-600 text-white font-bold transition-colors"
            >
              Join Discord Server
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
