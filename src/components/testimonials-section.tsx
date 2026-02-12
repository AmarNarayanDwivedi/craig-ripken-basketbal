"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Marcus Johnson",
        role: "College Athlete",
        school: "Duke University",
        image: "/images/testimonial-1.webp",
        rating: 5,
        quote: "Coach Craig transformed my game completely. His attention to detail and personalized approach helped me earn a D1 scholarship. The shooting mechanics alone improved my percentage by 25%.",
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "High School Varsity",
        school: "Lincoln High",
        image: "/images/testimonial-2.webp",
        rating: 5,
        quote: "I went from bench player to team captain in one season. Craig's mentality coaching and IQ training gave me the confidence to lead. Best investment in my basketball career.",
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className="py-24 bg-background-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 -skew-x-12 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Success Stories
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
                        Athlete <span className="text-primary italic">Testimonials</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900 border border-white/5 rounded-2xl p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            {/* Image */}
                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                                <Image
                                    src={current.image}
                                    alt={current.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-2">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(current.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{current.quote}"
                                </blockquote>

                                {/* Author */}
                                <div>
                                    <p className="text-white font-bold text-xl uppercase tracking-wide">
                                        {current.name}
                                    </p>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                                        {current.role} • {current.school}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
