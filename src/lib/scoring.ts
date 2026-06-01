import { clamp } from "@/lib/utils";

/**
 * Financial Health scoring engine.
 * Pure, deterministic heuristics — easy to unit-test and to swap for an
 * advisor-grade model later. All figures are illustrative, not advice.
 */

export interface AssessmentInput {
  age: number;
  monthlyIncome: number; // ₹ / month
  savings: number; // liquid ₹
  investments: number; // invested ₹
  lifeCover: number; // life insurance sum assured ₹
  retirementAge: number;
}

export interface ScoreBreakdown {
  overall: number;
  protection: number;
  investment: number;
  retirement: number;
  tax: number;
  grade: string;
  headline: string;
  projectedCorpus: number;
  neededCorpus: number;
  recommendations: Recommendation[];
}

export interface Recommendation {
  title: string;
  body: string;
  priority: "high" | "medium" | "low";
  pillar: "Protection" | "Investment" | "Retirement" | "Tax";
}

export const DEFAULT_INPUT: AssessmentInput = {
  age: 34,
  monthlyIncome: 150000,
  savings: 600000,
  investments: 1800000,
  lifeCover: 10000000,
  retirementAge: 60,
};

const GROWTH = 0.11; // long-run portfolio assumption
const INFLATION = 0.06;
const SAVINGS_RATE = 0.2; // assumed ongoing savings as % of income

function fvLumpSum(pv: number, rate: number, years: number) {
  return pv * Math.pow(1 + rate, years);
}

function fvSeries(annual: number, rate: number, years: number) {
  if (years <= 0) return 0;
  return annual * ((Math.pow(1 + rate, years) - 1) / rate);
}

export function scoreAssessment(input: AssessmentInput): ScoreBreakdown {
  const annualIncome = input.monthlyIncome * 12;
  const monthlyExpenses = input.monthlyIncome * 0.6;
  const yearsToRetire = Math.max(0, input.retirementAge - input.age);

  // ── Protection ──────────────────────────────────────────────
  const coverRatio = annualIncome > 0 ? input.lifeCover / annualIncome : 0;
  const coverScore = clamp((coverRatio / 15) * 100, 0, 100); // 15× income = ideal
  const emergencyTarget = monthlyExpenses * 6;
  const emergencyScore = emergencyTarget > 0 ? clamp((input.savings / emergencyTarget) * 100, 0, 100) : 0;
  const protection = Math.round(0.7 * coverScore + 0.3 * emergencyScore);

  // ── Investment ──────────────────────────────────────────────
  const ageFactor = clamp((input.age - 22) * 0.32, 0.2, 12);
  const expectedInvested = annualIncome * ageFactor;
  const investment = Math.round(
    clamp(expectedInvested > 0 ? (input.investments / expectedInvested) * 100 : 0, 0, 100),
  );

  // ── Retirement ──────────────────────────────────────────────
  const projectedCorpus =
    fvLumpSum(input.investments, GROWTH, yearsToRetire) +
    fvSeries(input.monthlyIncome * SAVINGS_RATE * 12, GROWTH, yearsToRetire);
  const futureAnnualExpenses = annualIncome * 0.7 * Math.pow(1 + INFLATION, yearsToRetire);
  const neededCorpus = futureAnnualExpenses * 25; // 4% safe-withdrawal rule
  const retirement = Math.round(clamp(neededCorpus > 0 ? (projectedCorpus / neededCorpus) * 100 : 0, 0, 100));

  // ── Tax (proxy from structure + protection efficiency) ──────
  const tax = Math.round(clamp(35 + 0.5 * investment + 0.15 * protection, 0, 100));

  // ── Overall ─────────────────────────────────────────────────
  const overall = Math.round(0.3 * retirement + 0.25 * investment + 0.25 * protection + 0.2 * tax);

  return {
    overall,
    protection,
    investment,
    retirement,
    tax,
    grade: gradeFor(overall),
    headline: headlineFor(overall),
    projectedCorpus,
    neededCorpus,
    recommendations: buildRecommendations({ protection, investment, retirement, tax, input, coverRatio, emergencyScore }),
  };
}

function gradeFor(score: number) {
  if (score >= 85) return "Exceptional";
  if (score >= 70) return "Strong";
  if (score >= 55) return "Developing";
  if (score >= 40) return "Needs Attention";
  return "At Risk";
}

function headlineFor(score: number) {
  if (score >= 85) return "You're building generational wealth with real intent.";
  if (score >= 70) return "A strong foundation — a few moves unlock the next level.";
  if (score >= 55) return "You're on your way. Let's close the gaps that matter most.";
  if (score >= 40) return "There's real opportunity here, and it's very fixable.";
  return "Let's turn anxiety into a clear, calm plan — starting now.";
}

function buildRecommendations(ctx: {
  protection: number;
  investment: number;
  retirement: number;
  tax: number;
  input: AssessmentInput;
  coverRatio: number;
  emergencyScore: number;
}): Recommendation[] {
  const recs: Recommendation[] = [];

  if (ctx.protection < 65) {
    recs.push({
      pillar: "Protection",
      priority: ctx.protection < 45 ? "high" : "medium",
      title:
        ctx.coverRatio < 10
          ? "Increase your life cover toward 15× income"
          : "Top up your emergency fund to 6 months",
      body:
        ctx.coverRatio < 10
          ? "Your family's lifestyle is currently under-protected. A pure-term top-up is inexpensive and closes the gap immediately."
          : "A fully-funded emergency buffer keeps one bad month from forcing you to sell investments at the wrong time.",
    });
  }

  if (ctx.retirement < 70) {
    recs.push({
      pillar: "Retirement",
      priority: ctx.retirement < 50 ? "high" : "medium",
      title: "Raise retirement contributions with an escalating SIP",
      body:
        "Increasing your monthly investing and stepping it up with every raise can dramatically close your projected retirement gap — small now, enormous later.",
    });
  }

  if (ctx.investment < 70) {
    recs.push({
      pillar: "Investment",
      priority: ctx.investment < 50 ? "high" : "medium",
      title: "Put idle savings to work in a diversified portfolio",
      body:
        "Cash beyond your emergency fund quietly loses to inflation. A globally diversified, risk-matched portfolio is the engine of your goals.",
    });
  }

  if (ctx.tax < 75) {
    recs.push({
      pillar: "Tax",
      priority: "low",
      title: "Capture the tax alpha you're leaving on the table",
      body:
        "Asset location, harvesting, and the right structures can add a quiet 1–2% a year — pure return with no extra risk. Worth a dedicated review.",
    });
  }

  if (recs.length === 0) {
    recs.push({
      pillar: "Investment",
      priority: "low",
      title: "Optimize and protect what you've built",
      body:
        "You're in excellent shape. The next frontier is efficiency: rebalancing discipline, estate planning, and tax-smart withdrawals.",
    });
  }

  const order = { high: 0, medium: 1, low: 2 } as const;
  return recs.sort((a, b) => order[a.priority] - order[b.priority]).slice(0, 4);
}
