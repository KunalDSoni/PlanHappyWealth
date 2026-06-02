export interface SuccessStory {
  id: string;
  category: string;
  name: string;
  persona: string;
  runtime: string;
  /** Six acts of the wealth journey — composite, illustrative. */
  challenge: string;
  discovery: string;
  blueprint: string;
  implementation: string;
  transformation: string;
  currentLife: string;
  headlineMetric: { value: string; label: string };
  quote: string;
  accent: string;
  posterGradient: string;
}

/**
 * Composite household case studies — every figure, name and detail is
 * illustrative. The "six acts" mirror the practice's stated workflow
 * (Challenge → Discovery → Blueprint → Implementation → Transformation →
 * Current Life). See the Wealth Journeys page for a written disclosure.
 */
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "the-late-starters",
    category: "Retirement · Age 47",
    name: "Anil & Meera",
    persona: "Dual-income, started late",
    runtime: "13-year plan",
    challenge:
      "At 47, they felt they had missed the boat — decent income, scattered policies, no real plan, and a quiet dread about retirement.",
    discovery:
      "A two-hour first sit-down surfaced six dead-weight policies, two dormant PPF accounts and a clear retirement number neither of them had ever named.",
    blueprint:
      "We drafted the household stack — Protection rebuilt with term cover; Growth structured as a tax-efficient equity-debt mix; Freedom anchored to an inflation-adjusted retirement income of 85% of pre-retirement earnings.",
    implementation:
      "Endowment policies surrendered and the premiums redirected; SIPs automated and indexed to annual raises; a quarterly review calendar set so the household reviews the plan, not the market.",
    transformation:
      "Within three years they had stopped checking the markets, finished a long-postponed renovation and started travelling again.",
    currentLife:
      "On track to retire at 60 with an inflation-protected income — and for the first time, they sleep easy about money.",
    headlineMetric: { value: "₹6.4 Cr", label: "Projected nest egg" },
    quote: "We stopped feeling behind and started feeling in control. That shift was everything.",
    accent: "#D4AF37",
    posterGradient: "from-[#24344c] to-[#07111F]",
  },
  {
    id: "one-income-two-dreams",
    category: "Education + Home · Age 34",
    name: "The Iyer Family",
    persona: "Single income, two big goals",
    runtime: "8-year plan",
    challenge:
      "One income, a toddler and two dreams that felt mutually exclusive: a home of their own and a world-class education for their daughter.",
    discovery:
      "A goal-by-goal interview made the conflict tangible — and showed there was room for both, if the sequencing was deliberate.",
    blueprint:
      "Goals were separated, not stacked — a focused home down-payment track on a six-year horizon and a separate education corpus on an eighteen-year horizon, both ring-fenced from market noise.",
    implementation:
      "A short-duration debt mix for the home goal; equity-heavy SIPs for education; a level term policy to protect both. One automation set, one review calendar.",
    transformation:
      "The household stopped negotiating with itself. The down-payment number was met three months early; the education corpus quietly compounded in the background.",
    currentLife:
      "Keys to their home arrived on schedule, the education fund is fully on track, and neither dream was sacrificed for the other.",
    headlineMetric: { value: "2 of 2", label: "Goals funded on time" },
    quote: "They showed us we didn't have to choose. We just had to plan it properly.",
    accent: "#9FC0E8",
    posterGradient: "from-[#1f3148] to-[#07111F]",
  },
  {
    id: "the-windfall",
    category: "Wealth Creation · Age 41",
    name: "Rohan",
    persona: "ESOP windfall, no roadmap",
    runtime: "Ongoing",
    challenge:
      "A startup exit left Rohan with a sudden, life-changing sum — and total paralysis about what to do with it.",
    discovery:
      "Two long conversations separated three categories of money: safety, growth and giving. The freedom number was named and dated.",
    blueprint:
      "A phased deployment plan — a six-month liquidity buffer, a globally diversified portfolio, a tax-harvesting cadence, and a values-aligned giving allocation.",
    implementation:
      "Capital deployed across three quarters to neutralise timing risk; an offshore allocation set up for currency diversification; a donor-advised giving vehicle structured for tax efficiency.",
    transformation:
      "Decision fatigue disappeared. Rohan stopped second-guessing each tranche; the portfolio started doing the work.",
    currentLife:
      "The windfall is a working portfolio compounding toward financial freedom by 48 — not idling in a savings account.",
    headlineMetric: { value: "Freedom by 48", label: "7 years ahead of plan" },
    quote: "I went from overwhelmed to genuinely excited about what this money could build.",
    accent: "#D4AF37",
    posterGradient: "from-[#2a3d55] to-[#07111F]",
  },
];
