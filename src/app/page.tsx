import HeroSection from "@/components/sections/heroSection";
import PresenceSection from "@/components/sections/presenceSection";
import PortfolioSection from "@/components/sections/portfolioSection";
import AboutSection from "@/components/sections/aboutSection";
import TestimonialSection from "@/components/sections/testimonialSectionn";
import ContactSection from "@/components/sections/contactSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center font-sans">
      <main className="flex w-full flex-1 flex-col py-7">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <HeroSection />
        </div>

        <PresenceSection />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <PortfolioSection />
        </div>

        <AboutSection />

        <TestimonialSection />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
