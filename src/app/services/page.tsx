import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";

export default function Services() {
    return (
        <main className="min-h-screen flex flex-col relative bg-background-dark pt-24">
            <Navbar />
            <ServicesSection />
            <Footer />
        </main>
    );
}
