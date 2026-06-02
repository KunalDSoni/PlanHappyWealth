import {
  GraduationCap,
  Sunrise,
  Home,
  TrendingUp,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface JourneyGoal {
  id: string;
  label: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  story: string;
  metricLabel: string;
  metricValue: string;
  horizon: string;
  pillars: { label: string; value: string }[];
  imageGradient: string;
}

export const JOURNEY_GOALS: JourneyGoal[] = [
  {
    id: "education",
    label: "Child Education",
    icon: GraduationCap,
    eyebrow: "For the next generation",
    headline: "Fund their boldest ambitions — exactly when it matters.",
    story:
      "From a first robotics kit to a degree abroad, education costs rise faster than inflation. We build an inflation-aware corpus that's ready the year your child is, not a year late.",
    metricLabel: "Education corpus by 2042",
    metricValue: "₹1.8 Cr",
    horizon: "18-year horizon",
    pillars: [
      { label: "Monthly SIP", value: "₹24,500" },
      { label: "Projected CAGR", value: "11.4%" },
      { label: "Inflation buffer", value: "+8% p.a." },
    ],
    imageGradient: "from-[#EEF2FA] via-[#F6F8FC] to-[#FFFFFF]",
  },
  {
    id: "retirement",
    label: "Retirement",
    icon: Sunrise,
    eyebrow: "Your second act",
    headline: "Retire on your terms — and never outlive your money.",
    story:
      "We model your retirement like a 35-year paycheck, not a finish line. Withdrawal strategy, healthcare inflation, and longevity are stress-tested so your lifestyle never bends.",
    metricLabel: "Retirement nest egg",
    metricValue: "₹6.4 Cr",
    horizon: "Income to age 90",
    pillars: [
      { label: "Replacement income", value: "85%" },
      { label: "Safe withdrawal", value: "4.0%" },
      { label: "Longevity cover", value: "Age 92" },
    ],
    imageGradient: "from-[#FBF4E2] via-[#F8F4EA] to-[#FFFFFF]",
  },
  {
    id: "home",
    label: "Dream Home",
    icon: Home,
    eyebrow: "Where life happens",
    headline: "Own the home you picture — without mortgaging your future.",
    story:
      "We balance down-payment timing, loan structure, and your other goals so the keys arrive without derailing retirement or your child's education fund.",
    metricLabel: "Down payment ready",
    metricValue: "₹85 L",
    horizon: "6-year horizon",
    pillars: [
      { label: "Target value", value: "₹3.4 Cr" },
      { label: "Smart EMI ratio", value: "32%" },
      { label: "Goal funding", value: "On track" },
    ],
    imageGradient: "from-[#EAF1EE] via-[#F4F8F6] to-[#FFFFFF]",
  },
  {
    id: "wealth",
    label: "Wealth Creation",
    icon: TrendingUp,
    eyebrow: "Compounding, intentionally",
    headline: "Turn surplus income into generational wealth.",
    story:
      "A globally diversified, tax-efficient portfolio engineered for your risk temperament — rebalanced with discipline so emotion never sells at the bottom.",
    metricLabel: "Projected net worth",
    metricValue: "₹12.1 Cr",
    horizon: "20-year horizon",
    pillars: [
      { label: "Equity / Debt", value: "70 / 30" },
      { label: "Global exposure", value: "25%" },
      { label: "Net XIRR", value: "13.2%" },
    ],
    imageGradient: "from-[#F6EFDA] via-[#FBF7E8] to-[#FFFFFF]",
  },
  {
    id: "protection",
    label: "Family Protection",
    icon: ShieldCheck,
    eyebrow: "Certainty for the people you love",
    headline: "Make sure one bad day never undoes a lifetime of planning.",
    story:
      "Term, health, and critical-illness cover sized to your real liabilities and dreams — so your family's trajectory holds steady, whatever happens.",
    metricLabel: "Protection in force",
    metricValue: "₹4.0 Cr",
    horizon: "Lifelong cover",
    pillars: [
      { label: "Life cover", value: "20× income" },
      { label: "Health cover", value: "₹50 L" },
      { label: "Coverage gap", value: "Closed" },
    ],
    imageGradient: "from-[#E8EEF8] via-[#F2F5FB] to-[#FFFFFF]",
  },
  {
    id: "freedom",
    label: "Financial Freedom",
    icon: Wallet,
    eyebrow: "The ultimate outcome",
    headline: "Reach the day work becomes a choice.",
    story:
      "We track your Financial Freedom number — the corpus where passive income covers your life. Then we compress the years it takes to get there.",
    metricLabel: "Freedom number",
    metricValue: "₹8.5 Cr",
    horizon: "Freedom by 2039",
    pillars: [
      { label: "Passive income", value: "₹3.4 L/mo" },
      { label: "Coverage of expenses", value: "112%" },
      { label: "Years saved", value: "7 yrs" },
    ],
    imageGradient: "from-[#F0E6D6] via-[#F8F2E6] to-[#FFFFFF]",
  },
];
