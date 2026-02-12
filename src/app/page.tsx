import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaStrip } from "@/components/cta-strip";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background-dark">
      <Navbar />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaStrip />
      <ContactSection />
      <Footer />
    </main>
  );
}
