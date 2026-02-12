import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col relative bg-background-dark pt-24">
            <Navbar />
            <AboutSection />
            <Footer />
        </main>
    );
}
