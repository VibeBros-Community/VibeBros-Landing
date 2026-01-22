import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-ink-black-800 bg-background pt-16 pb-8">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brick-ember-500/10 text-brick-ember-500 ring-1 ring-brick-ember-500/20">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-bold">VibeBros</span>
                        </div>
                        <p className="text-sm text-ink-black-300">
                            Building the future of digital communities. Connected, verified, and amplified.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink-black-100">Product</h3>
                        <ul className="space-y-2 text-sm text-ink-black-300">
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">Showcase</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink-black-100">Company</h3>
                        <ul className="space-y-2 text-sm text-ink-black-300">
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brick-ember-300 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-ink-black-100">Subscribe</h3>
                        <p className="mb-4 text-sm text-ink-black-300">
                            Get the latest updates and resources.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex h-10 w-full rounded-md border border-ink-black-800 bg-ink-black-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink-black-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick-ember-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            />
                            <Button className="bg-brick-ember-500 hover:bg-brick-ember-600 text-white shadow-lg shadow-brick-ember-500/20">Sub</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-ink-black-800 pt-8 text-center text-sm text-ink-black-400">
                    © {new Date().getFullYear()} VibeBros Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
