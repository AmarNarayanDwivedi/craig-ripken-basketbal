import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background-dark">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
