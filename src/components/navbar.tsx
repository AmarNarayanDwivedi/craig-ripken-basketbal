"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-background-dark/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/50"
                        : "bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md py-6 shadow-lg shadow-black/30"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Craig Ripken
                        </span>
                        <span className="text-xl font-extrabold text-white tracking-tighter uppercase leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                            Basketball
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-semibold uppercase tracking-widest transition-colors duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                                        pathname === link.href
                                            ? "text-primary"
                                            : "text-white/90 group-hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                    />
                                )}
                            </div>
                        ))}
                        <Link href="/contact">
                            <Button size="sm">Book a Session</Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-bold uppercase tracking-widest",
                                    pathname === link.href ? "text-primary" : "text-white"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button size="lg" className="mt-4">
                                Book a Session
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
