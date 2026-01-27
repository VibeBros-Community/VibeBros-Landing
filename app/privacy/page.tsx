import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";
import StarfieldBackground from "@/components/scene/StarfieldBackground";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Privacy Policy - VibeBros",
  description: "VibeBros Privacy Policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent text-foreground relative">
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>
      <div className="relative z-10">
        <BackButton />
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              PRIVACY{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">
                POLICY
              </span>
            </h1>
            <p className="text-sm text-baltic-blue-400 mb-8">Last updated: January 27, 2026</p>

            <div className="space-y-8">
              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Information We Collect</h2>
                <p className="text-baltic-blue-200 leading-relaxed mb-4">
                  VibeBros is a community platform. We collect minimal information necessary to operate our services:
                </p>
                <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
                  <li>Discord username and profile information (when you join our server)</li>
                  <li>GitHub profile information (when you contribute to projects)</li>
                  <li>Email address (if you subscribe to our newsletter)</li>
                  <li>Usage data and analytics (anonymized)</li>
                </ul>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-baltic-blue-300 space-y-2">
                  <li>To provide and improve our community services</li>
                  <li>To communicate with you about events and updates</li>
                  <li>To ensure community safety and enforce our Code of Conduct</li>
                  <li>To analyze usage patterns and improve user experience</li>
                </ul>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Data Sharing</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside text-baltic-blue-300 space-y-2 mt-4">
                  <li>Discord (when you use our Discord server)</li>
                  <li>GitHub (when you contribute to projects)</li>
                  <li>Email service providers (for newsletters)</li>
                  <li>Analytics providers (anonymized data only)</li>
                </ul>
              </section>

              <section className="p-8 rounded-2xl border border-baltic-blue-800 bg-baltic-blue-900/30">
                <h2 className="text-2xl font-black text-white mb-4">Your Rights</h2>
                <p className="text-baltic-blue-200 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. Contact us on Discord to exercise these rights.
                </p>
              </section>

              <section className="p-8 rounded-2xl border border-cerulean-500/30 bg-cerulean-500/5">
                <p className="text-baltic-blue-200">
                  Questions about privacy? Contact us on{" "}
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
