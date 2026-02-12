import Link from "next/link";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/5 py-12 px-6">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex space-x-8 mb-8">
                    <Link
                        href="#"
                        className="text-zinc-500 hover:text-primary transition-colors"
                    >
                        <Instagram size={24} />
                    </Link>
                    <Link
                        href="#"
                        className="text-zinc-500 hover:text-primary transition-colors"
                    >
                        <Twitter size={24} />
                    </Link>
                    <Link
                        href="#"
                        className="text-zinc-500 hover:text-primary transition-colors"
                    >
                        <Youtube size={24} />
                    </Link>
                    <Link
                        href="#"
                        className="text-zinc-500 hover:text-primary transition-colors"
                    >
                        <Facebook size={24} />
                    </Link>
                </div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
                    Elite Performance Standards © {new Date().getFullYear()}
                </p>
                <div className="flex space-x-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                    <Link href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Locations
                    </Link>
                </div>
            </div>
        </footer>
    );
}
