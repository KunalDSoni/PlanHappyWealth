import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "Plan Happy Wealth" };

export default function HomeIndex() {
  return <LegacyRedirect to="/" label="the home blueprint" />;
}
