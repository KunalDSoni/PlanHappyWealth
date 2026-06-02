import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

export const metadata = { title: "Wealth Intelligence" };

export default function HomeBlog() {
  return <LegacyRedirect to="/intelligence" label="the journal" />;
}
