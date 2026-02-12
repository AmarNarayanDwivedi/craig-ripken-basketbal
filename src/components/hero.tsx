"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-home.webp"
                    alt="Basketball player dunking"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block"
                        >
                            Elite Basketball Training
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold text-white uppercase leading-[0.9] mb-6 text-balance"
                        >
                            Elevate <br />
                            <span className="text-primary italic">Your Game</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-zinc-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
                        >
                            Master your mechanics. Dominate the court. Professional coaching for athletes who demand greatness.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="h-14 px-10 text-lg font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 btn-glow-hover"
                                >
                                    Book Your Session
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-10 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                >
                                    Meet Coach Craig
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Empty space for image on desktop */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/40"
            >
                <ArrowDown size={32} strokeWidth={1.5} />
            </motion.div>
        </section>
    );
}
