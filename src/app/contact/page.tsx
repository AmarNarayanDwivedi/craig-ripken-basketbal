import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col relative bg-background-dark pt-24">
            <Navbar />
            <ContactSection />
            <Footer />
        </main>
    );
}
