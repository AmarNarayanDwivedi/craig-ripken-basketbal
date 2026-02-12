"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        The Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase italic mb-8">
                        From Pro Player <br /> To Elite Coach
                    </h2>
                    <div className="space-y-6 text-zinc-300 leading-relaxed font-light">
                        <p>
                            Basketball isn&apos;t just a game; it&apos;s a discipline. My journey started on the asphalt courts of Chicago and took me to professional leagues across Europe. I learned one truth: <strong className="text-white font-medium">Talent gets you noticed. Work ethic gets you paid.</strong>
                        </p>
                        <p>
                            After retiring from professional play, I dedicated my life to decoding the game for the next generation. My coaching philosophy is built on three pillars: <strong className="text-white font-medium">Mechanics, IQ, and Mentality</strong>.
                        </p>
                        <p>
                            I don&apos;t just run drills. I build basketball players who understand the <em>why</em> behind every movement. Whether you&apos;re fighting for a varsity spot or prepping for college scouts, we work until you can&apos;t get it wrong.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Credentials & Tactics
                        </h3>
                        <div className="grid grid-cols-4 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="aspect-square relative">
                                <Image src="/images/logo-nba.webp" alt="NBA" fill className="object-contain invert" />
                            </div>
                            <div className="aspect-square relative">
                                <Image src="/images/logo-fiba.webp" alt="FIBA" fill className="object-contain invert" />
                            </div>
                            <div className="aspect-square relative">
                                <Image src="/images/logo-ncaa.webp" alt="NCAA" fill className="object-contain invert" />
                            </div>
                            <div className="aspect-square relative">
                                <Image src="/images/logo-trainer.webp" alt="Certified Trainer" fill className="object-contain invert" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <Image
                        src="/images/about-portrait.webp"
                        alt="Coach Craig Ripken"
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-center bg-background-dark/80 backdrop-blur-md p-6 rounded-xl border border-white/5">
                        <p className="text-xl font-bold text-white uppercase italic">
                            &quot;Hard work beats talent when talent fails to work hard.&quot;
                        </p>
                        <p className="text-primary text-sm font-bold tracking-widest mt-2 uppercase">
                            - Kevin Durant
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
