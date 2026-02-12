"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-home.webp"
                    alt="Basketball player dunking"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark/70 via-background-dark/60 to-background-dark/80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Elite Basketball Training
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter italic uppercase leading-none mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                        Elevate <br /> Your Game
                    </h1>
                    <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Master your mechanics. Dominate the court. Professional coaching for athletes who demand greatness.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-2">
                        <Link href="/contact">
                            <Button size="lg" className="h-14 px-10 text-base font-bold shadow-2xl shadow-primary/40">
                                Book Your Session
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="h-14 px-10 text-base font-bold border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl shadow-black/50">
                                Meet Coach Craig
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
