export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  caption: string;
}

/** Trust metrics — replace with your verified figures via CMS. */
export const TRUST_STATS: Stat[] = [
  {
    value: 18,
    suffix: "+",
    label: "Years guiding families",
    caption: "Through two market cycles and every kind of life event.",
  },
  {
    value: 2400,
    suffix: "+",
    label: "Families guided",
    caption: "From first salary to a confident, well-funded retirement.",
  },
  {
    value: 1850,
    prefix: "₹",
    suffix: " Cr",
    label: "Assets planned & advised",
    caption: "Stewarded with discipline, transparency, and zero surprises.",
  },
  {
    value: 96,
    suffix: "%",
    label: "Goals achieved on time",
    caption: "Of funded goals reached their target year, fully funded.",
  },
];

export interface Credential {
  title: string;
  body: string;
}

export const CREDENTIALS: Credential[] = [
  {
    title: "Certified Financial Planners",
    body: "CFP® and SEBI-registered advisors who are fiduciaries — legally bound to your interest first.",
  },
  {
    title: "Fee-transparent, always",
    body: "No hidden commissions steering your portfolio. You always know exactly what you pay and why.",
  },
  {
    title: "Institutional-grade research",
    body: "The same rigor private banks reserve for ultra-HNI clients, applied to every family we serve.",
  },
  {
    title: "A plan that's truly yours",
    body: "No model portfolios in disguise. Every roadmap is built around your goals, fears, and timeline.",
  },
];
