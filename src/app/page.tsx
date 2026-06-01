import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WealthJourney } from "@/components/sections/WealthJourney";
import { FinancialHealthScore } from "@/components/sections/FinancialHealthScore";
import { WhyUs } from "@/components/sections/WhyUs";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { DashboardDemo } from "@/components/sections/DashboardDemo";
import { EducationHub } from "@/components/sections/EducationHub";
import { AIGuide } from "@/components/sections/AIGuide";
import { Consultation } from "@/components/sections/Consultation";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        {/* Ambient page glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-aurora opacity-60" aria-hidden="true" />

        <Hero />
        <WealthJourney />
        <SectionDivider />
        <FinancialHealthScore />
        <WhyUs />
        <SuccessStories />
        <DashboardDemo />
        <EducationHub />
        <AIGuide />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
