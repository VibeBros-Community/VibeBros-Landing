import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";

export const metadata: Metadata = {
  title: "Terms of Service - VibeBros",
  description: "VibeBros Terms of Service. Rules and guidelines for using our platform and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              TERMS OF{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                SERVICE
              </span>
            </h1>
            <p className="text-sm text-baltic-blue-400 mb-8">Last updated: January 27, 2026</p>

            <div className="space-y-8">
              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Acceptance of Terms</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  By accessing or using VibeBros services, you agree to be bound by these Terms of Service and our Code of Conduct. If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Community Services</h2>
                <p className="text-baltic-blue-200 leading-relaxed mb-4">
                  VibeBros provides a free community platform for developers. Services include:
                </p>
                <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
                  <li>Discord community access</li>
                  <li>Events and workshops</li>
                  <li>Project collaboration opportunities</li>
                  <li>Educational resources</li>
                </ul>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">User Responsibilities</h2>
                <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
                  <li>Comply with our Code of Conduct and Community Guidelines</li>
                  <li>Respect intellectual property rights</li>
                  <li>Provide accurate information</li>
                  <li>Maintain account security</li>
                  <li>Report violations to moderators</li>
                </ul>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Content</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  You retain ownership of content you create. By sharing content in VibeBros, you grant us a license to display and distribute it within our community. We reserve the right to remove content that violates our policies.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Disclaimer</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  VibeBros services are provided "as is" without warranties. We are not responsible for content created by community members or outcomes from participation in community activities.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-cerulean-500/30 bg-cerulean-500/5">
                <p className="text-baltic-blue-200">
                  Questions about these terms? Contact us on{" "}
                  <a href="https://discord.gg/p6UWRMrj" className="text-cerulean-400 hover:underline font-bold">
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
