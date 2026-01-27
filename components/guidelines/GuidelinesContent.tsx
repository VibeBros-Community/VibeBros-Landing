"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Sparkles } from "lucide-react";

export function GuidelinesContent() {
  return (
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
          COMMUNITY{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
            GUIDELINES
          </span>
        </h1>
        <p className="text-xl text-baltic-blue-200 mb-12">
          Our guidelines for creating a welcoming, productive, and inspiring community.
        </p>

        <div className="space-y-8">
          {/* Be Respectful */}
          <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-cerulean-400" />
              <h2 className="text-2xl font-black text-white">Be Respectful & Kind</h2>
            </div>
            <p className="text-baltic-blue-200 leading-relaxed mb-4">
              Treat everyone with respect regardless of skill level, background, or experience. We&apos;re all here to learn and grow together.
            </p>
            <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
              <li>Welcome newcomers and help them feel at home</li>
              <li>Be patient when answering questions</li>
              <li>Give constructive feedback, not criticism</li>
              <li>Celebrate others&apos; successes</li>
            </ul>
          </div>

          {/* Share Knowledge */}
          <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-cerulean-400" />
              <h2 className="text-2xl font-black text-white">Share Knowledge Freely</h2>
            </div>
            <p className="text-baltic-blue-200 leading-relaxed mb-4">
              The best communities thrive on knowledge sharing. Help others learn and grow.
            </p>
            <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
              <li>Answer questions when you can</li>
              <li>Share your learnings and experiences</li>
              <li>Document solutions for future reference</li>
              <li>There are no stupid questions</li>
            </ul>
          </div>

          {/* Be Inclusive */}
          <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-cerulean-400" />
              <h2 className="text-2xl font-black text-white">Be Inclusive</h2>
            </div>
            <p className="text-baltic-blue-200 leading-relaxed mb-4">
              VibeBros welcomes everyone. We celebrate diversity and create space for all voices.
            </p>
            <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
              <li>Use inclusive language</li>
              <li>Respect pronouns and identities</li>
              <li>Consider different perspectives</li>
              <li>Make everyone feel welcome</li>
            </ul>
          </div>

          {/* Keep It Safe */}
          <div className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-cerulean-400" />
              <h2 className="text-2xl font-black text-white">Keep It Safe & Professional</h2>
            </div>
            <p className="text-baltic-blue-200 leading-relaxed mb-4">
              Maintain a professional, safe environment for all members.
            </p>
            <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
              <li>No harassment, hate speech, or discrimination</li>
              <li>No spam or self-promotion without permission</li>
              <li>Keep content appropriate for all ages</li>
              <li>Respect privacy and confidentiality</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-cerulean-500/30 bg-cerulean-500/5">
          <p className="text-baltic-blue-200 text-lg">
            Questions about these guidelines? Reach out to our moderators on{" "}
            <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer" className="text-cerulean-400 hover:underline font-bold">
              Discord
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
