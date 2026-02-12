"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 basketball-texture opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                        Limited Spots Available
                    </span>
                    <h2 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase mb-6 leading-tight">
                        Ready to <span className="text-primary italic">Dominate?</span>
                    </h2>
                    <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Don't wait for the perfect moment. Create it. Book your first session and start your transformation today.
                    </p>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="h-16 px-12 text-lg font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 btn-glow-hover group"
                        >
                            Start Training Now
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
