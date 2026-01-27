import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

export const metadata: Metadata = {
  title: "Code of Conduct - VibeBros",
  description: "VibeBros Code of Conduct. Our commitment to creating a welcoming, safe, and inclusive environment for all community members.",
  openGraph: {
    title: "Code of Conduct - VibeBros",
    description: "Our commitment to a safe and inclusive community",
    url: `${siteUrl}/code-of-conduct`,
  },
};

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
              CODE OF{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                CONDUCT
              </span>
            </h1>
            <p className="text-xl text-baltic-blue-200 mb-12">
              Our pledge to foster an open, welcoming, and harassment-free community.
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Our Pledge</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  We as members, contributors, and leaders pledge to make participation in VibeBros a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Our Standards</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-cerulean-400 mb-2">Examples of behavior that contributes to a positive environment:</h3>
                    <ul className="list-disc list-inside text-baltic-blue-300 space-y-1">
                      <li>Demonstrating empathy and kindness toward other people</li>
                      <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                      <li>Giving and gracefully accepting constructive feedback</li>
                      <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
                      <li>Focusing on what is best for the community</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-2">Examples of unacceptable behavior:</h3>
                    <ul className="list-disc list-inside text-baltic-blue-300 space-y-1">
                      <li>The use of sexualized language or imagery, and sexual attention of any kind</li>
                      <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                      <li>Public or private harassment</li>
                      <li>Publishing others&apos; private information without explicit permission</li>
                      <li>Other conduct which could reasonably be considered inappropriate</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Enforcement</h2>
                <p className="text-baltic-blue-200 leading-relaxed mb-4">
                  Community leaders are responsible for clarifying and enforcing our standards. They will take appropriate and fair corrective action in response to any behavior deemed inappropriate, threatening, offensive, or harmful.
                </p>
                <p className="text-baltic-blue-200 leading-relaxed">
                  Violations may result in a warning, temporary ban, or permanent ban from the community, depending on severity. Report violations to moderators on Discord.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-cerulean-500/30 bg-cerulean-500/5">
                <p className="text-baltic-blue-200 text-lg">
                  Questions or concerns? Contact our moderation team on{" "}
                  <a href="https://discord.gg/p6UWRMrj" target="_blank" rel="noopener noreferrer" className="text-cerulean-400 hover:underline font-bold">
                    Discord
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
