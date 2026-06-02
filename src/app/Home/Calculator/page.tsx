import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "Financial Health Assessment" };

export default function HomeCalculator() {
  return <LegacyRedirect to="/#health-score" label="the calculators" />;
}
