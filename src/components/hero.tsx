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
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark/40 via-background-dark/50 to-background-dark"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                        Elite Basketball Training
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter italic uppercase leading-none mb-6">
                        Elevate <br /> Your Game
                    </h1>
                    <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light tracking-wide">
                        Master your mechanics. Dominate the court. Professional coaching for athletes who demand greatness.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="h-14 px-10 text-lg">
                                Book Your Session
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10">
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
