/** Brand-level constants used across the experience. */

export const SITE = {
  name: "Plan Happy Wealth",
  shortName: "PHW",
  positioning: "Family Wealth Architects",
  tagline: "Designing Wealth. Protecting Futures. Creating Legacies.",
  description:
    "Plan Happy Wealth is a private family-wealth practice founded by Seema Kakade Ahuja, CFP, QPFP, MBA. We architect multi-generational prosperity through a deliberate blueprint that protects, grows and transfers wealth with intent.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planhappywealth.com",
  email: "seemakakade@gmail.com",
  phone: "+91 99300 61909",
  address: "F 2708, Oberoi Splendor, JVLR, Mumbai 400060",
  registration: "AMFI-registered Mutual Fund Distributor",
  establishedYear: 1998,
} as const;

export const FOUNDER = {
  name: "Seema Kakade Ahuja",
  role: "Chief Wealth Architect",
  credentials: ["CFP", "QPFP", "MBA"],
  experienceYears: 25,
  bio: "Seema brings more than 25 years of practice across protection, portfolios and succession. As a Certified Financial Planner, Qualified Personal Finance Professional and MBA, she has guided families through every market cycle since 1998.",
  linkedin: "https://www.linkedin.com/in/seema-kakade-3883a9a",
} as const;

export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/seema-kakade-3883a9a" },
  { label: "Instagram", href: "https://www.instagram.com/plan_happy_wealth" },
] as const;

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

/**
 * The six concrete services migrated from planhappywealth.com,
 * mapped to the Wealth Blueprint layer they serve.
 */
export const SERVICES = [
  {
    title: "Mutual Funds",
    layer: "Growth",
    blurb:
      "AMFI-registered distribution with a curated, goal-aligned portfolio rebalanced through every cycle.",
  },
  {
    title: "Life Insurance",
    layer: "Protection",
    blurb:
      "Term-first cover sized to your real liabilities — so dependents inherit a plan, not a problem.",
  },
  {
    title: "Health Insurance",
    layer: "Protection",
    blurb:
      "Floater and critical-illness cover engineered for India's hospitalisation reality — and your family's exposure.",
  },
  {
    title: "House Purchase Planning",
    layer: "Goals",
    blurb:
      "Down-payment timing, loan structure and surplus discipline — so the keys arrive without derailing the rest of the plan.",
  },
  {
    title: "Children's Education",
    layer: "Goals",
    blurb:
      "An inflation-aware corpus ready the year your child is — not a year late, not over-funded.",
  },
  {
    title: "Tax Planning",
    layer: "Growth",
    blurb:
      "Section-by-section structuring across the household, so the right wrapper holds the right rupee at the right time.",
  },
] as const;
