export interface Article {
  id: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  featured?: boolean;
  accent: string;
}

export const EDU_CATEGORIES = [
  "Retirement",
  "Investing",
  "Wealth Psychology",
  "Family Finance",
  "Women's Wealth",
  "Tax Optimization",
] as const;

/** Editorial content. In production this is sourced from Sanity CMS. */
export const ARTICLES: Article[] = [
  {
    id: "fire-without-frugality",
    category: "Retirement",
    title: "Financial freedom without the deprivation",
    dek: "Why the harshest FIRE rules backfire — and the gentler math that actually gets families there.",
    readTime: "7 min read",
    featured: true,
    accent: "#D4AF37",
  },
  {
    id: "first-crore",
    category: "Investing",
    title: "The first crore is the hardest. Here's the playbook.",
    dek: "The behavioural and mathematical levers that compound a modest SIP into a serious portfolio.",
    readTime: "6 min read",
    accent: "#9FC0E8",
  },
  {
    id: "money-scripts",
    category: "Wealth Psychology",
    title: "The money stories you inherited without knowing",
    dek: "Most financial mistakes are emotional, not mathematical. Rewrite the script driving yours.",
    readTime: "8 min read",
    accent: "#C9A227",
  },
  {
    id: "talking-money-kids",
    category: "Family Finance",
    title: "How to raise kids who aren't afraid of money",
    dek: "Age-by-age conversations that build a healthy, confident relationship with wealth.",
    readTime: "5 min read",
    accent: "#9FC0E8",
  },
  {
    id: "women-wealth-gap",
    category: "Women's Wealth",
    title: "Closing the wealth gap women aren't told about",
    dek: "Longer lifespans, career breaks, and the planning moves that turn the odds back in your favour.",
    readTime: "9 min read",
    accent: "#D4AF37",
  },
  {
    id: "tax-alpha",
    category: "Tax Optimization",
    title: "Tax alpha: the return you keep without taking more risk",
    dek: "Harvesting, asset location, and structure — the quiet 1–2% that changes a 20-year outcome.",
    readTime: "6 min read",
    accent: "#C9A227",
  },
];
