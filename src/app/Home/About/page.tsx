import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "Meet the Architect" };

export default function HomeAbout() {
  return <LegacyRedirect to="/architect" label="the About page" />;
}
