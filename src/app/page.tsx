import HeroSection from "@/components/sections/heroSection";
import PresenceSection from "@/components/sections/presenceSection";
import PortfolioSection from "@/components/sections/portfolioSection";
import AboutSection from "@/components/sections/aboutSection";
import TestimonialSection from "@/components/sections/testimonialSectionn";
import ContactSection from "@/components/sections/contactSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-7 px-16 sm:items-start">
        <HeroSection />
        <PresenceSection />
        <PortfolioSection />
        <AboutSection />
        {/* <TestimonialSection /> */}
        <ContactSection />
      </main>
    </div>
  );
}
