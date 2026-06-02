import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "The Wealth Blueprint" };

export default function HomeServices() {
  return <LegacyRedirect to="/blueprint" label="the Services page" />;
}
