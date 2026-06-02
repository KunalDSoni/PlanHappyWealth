import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "Contact" };

export default function HomeContact() {
  return <LegacyRedirect to="/contact" label="the Contact page" />;
}
