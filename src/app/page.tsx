import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BeliefManifesto } from "@/components/sections/BeliefManifesto";
import { WealthOperatingSystem } from "@/components/sections/WealthOperatingSystem";
import { FutureWealthHorizon } from "@/components/sections/FutureWealthHorizon";
import { Services } from "@/components/sections/Services";
import { FinancialHealthScore } from "@/components/sections/FinancialHealthScore";
import { Architect } from "@/components/sections/Architect";
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
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-aurora opacity-50" aria-hidden="true" />

        <Hero />
        <BeliefManifesto />
        <WealthOperatingSystem />
        <SectionDivider />
        <FutureWealthHorizon />
        <Services />
        <SectionDivider />
        <FinancialHealthScore />
        <Architect />
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
