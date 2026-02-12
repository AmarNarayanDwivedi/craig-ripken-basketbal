"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Trophy, Star, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: 500,
        suffix: "+",
        label: "Athletes Trained",
    },
    {
        icon: Trophy,
        value: 15,
        suffix: " Years",
        label: "Experience",
    },
    {
        icon: Star,
        value: 98,
        suffix: "%",
        label: "Success Rate",
    },
    {
        icon: TrendingUp,
        value: 250,
        suffix: "+",
        label: "College Commits",
    },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(value * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <span>{count}</span>;
}

export function StatsSection() {
    return (
        <section className="py-20 bg-zinc-900/50 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                <stat.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">
                                <Counter value={stat.value} />
                                {stat.suffix}
                            </div>
                            <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
