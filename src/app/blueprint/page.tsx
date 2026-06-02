import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { WealthOperatingSystem } from "@/components/sections/WealthOperatingSystem";
import { FutureWealthHorizon } from "@/components/sections/FutureWealthHorizon";
import { Services } from "@/components/sections/Services";
import { Consultation } from "@/components/sections/Consultation";

export const metadata: Metadata = {
  title: "The Wealth Blueprint",
  description:
    "Plan Happy Wealth's proprietary Wealth Blueprint — six layers, one household, engineered from Protection through Legacy.",
};

export default function BlueprintPage() {
  return (
    <SubPage
      kicker="The Wealth Blueprint"
      title={
        <>
          Six layers. <span className="text-gradient-gold">One household, engineered.</span>
        </>
      }
      lede="Every family we serve is built on the same architectural stack — protection at the base, legacy at the crown. Each layer is structural; none is optional."
    >
      <WealthOperatingSystem />
      <Services />
      <FutureWealthHorizon />
      <Consultation />
    </SubPage>
  );
}
