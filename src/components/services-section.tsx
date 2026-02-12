"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Users, Monitor, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        id: "personal",
        title: "1-on-1 Training",
        price: "$85",
        period: "/ session",
        description: "Elite individual attention to master shooting, handling, and IQ.",
        features: [
            "Customized Skill Development",
            "Film Analysis & Breakdown",
            "Shooting Mechanics Overhaul",
            "Mentality & IQ Coaching",
        ],
        image: "/images/service-personal.webp",
        icon: User,
    },
    {
        id: "group",
        title: "Group Clinics",
        price: "$45",
        period: "/ session",
        description: "Competitive environment to test skills against other elite players.",
        features: [
            "Game Situation Drills",
            "Competitive Scrimmages",
            "Defensive Concepts",
            "Team Chemistry Building",
        ],
        image: "/images/service-group.webp",
        icon: Users,
        popular: true,
    },
    {
        id: "online",
        title: "Online Coaching",
        price: "$150",
        period: "/ month",
        description: "Remote guidance and workout programs for athletes worldwide.",
        features: [
            "Weekly Workout Plans",
            "Shot Mechanics Review",
            "Zoom Consultation Calls",
            "Progress Tracking App",
        ],
        image: "/images/service-online.webp",
        icon: Monitor,
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 bg-background-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                        Training Programs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase italic">
                        Choose Your Path
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 flex items-center space-x-2">
                                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg text-primary">
                                        <service.icon size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase italic tracking-wide">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-baseline mb-4">
                                    <span className="text-3xl font-extrabold text-white">
                                        {service.price}
                                    </span>
                                    <span className="text-zinc-500 text-sm font-medium ml-1">
                                        {service.period}
                                    </span>
                                </div>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-zinc-300">
                                            <Check size={16} className="text-primary mr-2 mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="block">
                                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                                        Book Now
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
