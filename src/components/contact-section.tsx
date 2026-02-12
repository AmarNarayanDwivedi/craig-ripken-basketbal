"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-24 bg-background-dark overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/hero-contact.webp" alt="Basketball Court" fill loading="lazy" className="object-cover opacity-10" />
                <div className="absolute inset-0 bg-background-dark/90 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                            Get Started
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase italic mb-8">
                            Book Your <br /> Session Now
                        </h2>
                        <p className="text-zinc-400 mb-12 max-w-md">
                            Ready to take your game to the next level? Fill out the form or reach out directly. Limited spots available for the upcoming season.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-full text-primary border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">Email Us</h4>
                                    <p className="text-zinc-400 mt-1">coach@craigripken.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-full text-primary border border-white/10">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">Call/Text</h4>
                                    <p className="text-zinc-400 mt-1">+1 (555) 234-8901</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-full text-primary border border-white/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">Location</h4>
                                    <p className="text-zinc-400 mt-1">Chicago, IL (Various Courts)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
                    >
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-icons text-3xl">check</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                                <p className="text-zinc-400">Coach Craig will be in touch shortly to confirm your slot.</p>
                                <Button
                                    variant="outline"
                                    className="mt-8 border-white/20 text-white hover:bg-white/10"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Book Another
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-zinc-600"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-zinc-600"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Goal</label>
                                        <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                                            <option>Shooting</option>
                                            <option>Handling</option>
                                            <option>Defense</option>
                                            <option>Conditioning</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Time</label>
                                        <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                                            <option>Morning</option>
                                            <option>Afternoon</option>
                                            <option>Evening</option>
                                        </select>
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full h-14 text-base mt-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                                    ) : (
                                        "Submit Request"
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
