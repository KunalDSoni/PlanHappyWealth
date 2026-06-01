/** Brand-level constants used across the experience. */

export const SITE = {
  name: "Plan Happy Wealth",
  shortName: "PHW",
  tagline: "Build wealth, confidence, and financial freedom — without stress.",
  description:
    "Plan Happy Wealth helps families build wealth, confidence, and financial freedom with a personalized roadmap. Not advice — a partnership in your life's biggest goals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planhappywealth.com",
  email: "hello@planhappywealth.com",
  phone: "+91 98000 00000",
} as const;

export const NAV_LINKS = [
  { label: "Your Journey", href: "#journey" },
  { label: "Health Score", href: "#health-score" },
  { label: "Stories", href: "#stories" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Learn", href: "#learn" },
] as const;

/** Conversion paths — primary / secondary / tertiary. */
export const CTA = {
  primary: { label: "Book a Consultation", href: "#consultation" },
  secondary: { label: "Calculate Your Financial Health", href: "#health-score" },
  tertiary: { label: "Download Wealth Blueprint", href: "#blueprint" },
} as const;
