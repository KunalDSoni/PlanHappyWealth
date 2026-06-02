/** Brand-level constants used across the experience. */

export const SITE = {
  name: "Plan Happy Wealth",
  shortName: "PHW",
  positioning: "Family Wealth Architects",
  tagline: "Designing Wealth. Protecting Futures. Creating Legacies.",
  description:
    "Plan Happy Wealth is a private family-wealth practice. We architect multi-generational prosperity through a deliberate blueprint that protects, grows, and transfers wealth with intent.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planhappywealth.com",
  email: "hello@planhappywealth.com",
  phone: "+91 98000 00000",
} as const;

export const NAV_LINKS = [
  { label: "The Blueprint", href: "#operating-system" },
  { label: "Horizon", href: "#horizon" },
  { label: "Stories", href: "#stories" },
  { label: "Architect", href: "#architect" },
  { label: "Intelligence", href: "#learn" },
] as const;

/** Conversion paths — primary / secondary / tertiary. */
export const CTA = {
  primary: { label: "Design My Wealth Blueprint", href: "#consultation" },
  secondary: { label: "Assess My Financial Health", href: "#health-score" },
  tertiary: { label: "Private Client Brief", href: "#architect" },
} as const;
