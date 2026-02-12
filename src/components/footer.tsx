import Link from "next/link";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-zinc-950 border-t border-white/10 py-16 px-6">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-zinc-950"></div>

            <div className="container mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-white uppercase italic tracking-tight mb-4">
                            Craig Ripken<br />
                            <span className="text-primary">Basketball</span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Elite basketball training for athletes who demand greatness. Master your mechanics and dominate the court.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Quick Links</h4>
                        <div className="space-y-3">
                            <Link href="/" className="block text-zinc-400 hover:text-primary transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="/about" className="block text-zinc-400 hover:text-primary transition-colors text-sm">
                                About Coach
                            </Link>
                            <Link href="/services" className="block text-zinc-400 hover:text-primary transition-colors text-sm">
                                Training Programs
                            </Link>
                            <Link href="/contact" className="block text-zinc-400 hover:text-primary transition-colors text-sm">
                                Book Session
                            </Link>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Connect</h4>
                        <div className="space-y-3 mb-6">
                            <p className="text-zinc-400 text-sm">coach@craigripken.com</p>
                            <p className="text-zinc-400 text-sm">+1 (555) 234-8901</p>
                            <p className="text-zinc-400 text-sm">Chicago, IL</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                            >
                                <Instagram size={18} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                            >
                                <Twitter size={18} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                            >
                                <Youtube size={18} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                            >
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">
                            © {new Date().getFullYear()} Craig Ripken Basketball. All Rights Reserved.
                        </p>
                        <div className="flex space-x-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                            <Link href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Terms
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Locations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
