"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RefreshCw, Sparkles, Check } from "lucide-react";
import { Gauge } from "@/components/ui/Gauge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEFAULT_INPUT, scoreAssessment, type AssessmentInput } from "@/lib/scoring";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Question {
  key: keyof AssessmentInput;
  label: string;
  helper: string;
  min: number;
  max: number;
  step: number;
  kind: "age" | "currency";
  chips?: number[];
}

const QUESTIONS: Question[] = [
  { key: "age", label: "How old are you?", helper: "Time is the most powerful lever in any plan.", min: 18, max: 70, step: 1, kind: "age" },
  { key: "monthlyIncome", label: "Your monthly income?", helper: "Take-home, across all sources.", min: 20000, max: 1000000, step: 5000, kind: "currency", chips: [75000, 150000, 300000, 500000] },
  { key: "savings", label: "Liquid savings on hand?", helper: "Bank balance, FDs, and easily-accessible cash.", min: 0, max: 10000000, step: 50000, kind: "currency", chips: [200000, 600000, 1500000, 3000000] },
  { key: "investments", label: "Total amount invested?", helper: "Mutual funds, stocks, EPF, NPS, real estate.", min: 0, max: 50000000, step: 100000, kind: "currency", chips: [500000, 2500000, 7500000, 15000000] },
  { key: "lifeCover", label: "Your life insurance cover?", helper: "Total sum assured across term & other policies.", min: 0, max: 100000000, step: 500000, kind: "currency", chips: [2500000, 10000000, 25000000, 50000000] },
  { key: "retirementAge", label: "When do you want to retire?", helper: "The age work becomes optional.", min: 45, max: 70, step: 1, kind: "age" },
];

export function FinancialHealthScore() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState<AssessmentInput>(DEFAULT_INPUT);

  const result = useMemo(() => scoreAssessment(input), [input]);
  const q = QUESTIONS[step];
  const progress = ((step + (done ? 1 : 0)) / QUESTIONS.length) * 100;

  const setValue = (v: number) => setInput((s) => ({ ...s, [q.key]: v }));
  const next = () => (step < QUESTIONS.length - 1 ? setStep(step + 1) : setDone(true));
  const back = () => (done ? setDone(false) : setStep(Math.max(0, step - 1)));
  const restart = () => {
    setStep(0);
    setDone(false);
    setInput(DEFAULT_INPUT);
  };

  return (
    <section id="health-score" className="section scroll-mt-24">
      <SectionHeading
        kicker="Financial Health Score"
        title={<>Your money, <span className="text-gradient-gold">diagnosed in 60 seconds.</span></>}
        description="Answer six quick questions. Get an instant, advisor-grade read on your protection, investments, retirement, and tax — with the moves that matter most."
      />

      <div className="mx-auto mt-14 max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-navy-800/40 shadow-glass-lg backdrop-blur-xl">
          {/* Progress bar */}
          <div className="h-1 w-full bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-200 to-gold"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid gap-8 p-8 md:grid-cols-2 md:p-12"
              >
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-medium text-gold/80">
                    Question {step + 1} of {QUESTIONS.length}
                  </p>
                  <h3 className="mt-3 font-display text-display-md font-semibold text-cloud">{q.label}</h3>
                  <p className="mt-3 text-cloud-muted">{q.helper}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-center">
                    <span className="font-display text-5xl font-semibold text-gradient-gold tabular-nums">
                      {q.kind === "age" ? `${input[q.key]} yrs` : formatINR(input[q.key], true)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={q.min}
                    max={q.max}
                    step={q.step}
                    value={input[q.key]}
                    onChange={(e) => setValue(Number(e.target.value))}
                    aria-label={q.label}
                    className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#D4AF37]"
                  />
                  <div className="mt-2 flex justify-between text-xs text-cloud-faint">
                    <span>{q.kind === "age" ? `${q.min}` : formatINR(q.min, true)}</span>
                    <span>{q.kind === "age" ? `${q.max}` : formatINR(q.max, true)}</span>
                  </div>

                  {q.chips && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {q.chips.map((c) => (
                        <button
                          key={c}
                          onClick={() => setValue(c)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-xs transition-colors",
                            input[q.key] === c
                              ? "border-gold/50 bg-gold/10 text-gold"
                              : "border-white/10 text-cloud-dim hover:border-white/25 hover:text-cloud",
                          )}
                        >
                          {formatINR(c, true)}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-sm text-cloud-dim transition-colors hover:text-cloud disabled:opacity-30"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <Button onClick={next} size="md">
                      {step === QUESTIONS.length - 1 ? "See my score" : "Continue"}
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <Results key="results" result={result} input={input} onRestart={restart} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Results({
  result,
  input,
  onRestart,
}: {
  result: ReturnType<typeof scoreAssessment>;
  input: AssessmentInput;
  onRestart: () => void;
}) {
  const subs = [
    { label: "Protection", value: result.protection },
    { label: "Investment", value: result.investment },
    { label: "Retirement", value: result.retirement },
    { label: "Tax Planning", value: result.tax },
  ];
  const gap = Math.max(0, result.neededCorpus - result.projectedCorpus);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="p-8 md:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Overall */}
        <div className="flex flex-col items-center text-center">
          <p className="kicker">Your Financial Health</p>
          <Gauge value={result.overall} size={224} stroke={16} className="mt-4" />
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold">
            <Sparkles size={14} /> {result.grade}
          </p>
          <p className="mt-4 max-w-xs text-pretty text-cloud-muted">{result.headline}</p>
        </div>

        {/* Sub-scores + corpus */}
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {subs.map((s) => (
              <div key={s.label} className="flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                <Gauge value={s.value} size={92} stroke={8} showValue label={s.label} />
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-cloud-faint">Projected by {input.retirementAge}</p>
              <p className="mt-1 font-display text-xl font-semibold text-cloud">{formatINR(result.projectedCorpus, true)}</p>
            </div>
            <div>
              <p className="text-xs text-cloud-faint">Corpus you'll need</p>
              <p className="mt-1 font-display text-xl font-semibold text-cloud">{formatINR(result.neededCorpus, true)}</p>
            </div>
            <div>
              <p className="text-xs text-cloud-faint">{gap > 0 ? "Gap to close" : "Surplus"}</p>
              <p className={cn("mt-1 font-display text-xl font-semibold", gap > 0 ? "text-amber-300" : "text-emerald-300")}>
                {formatINR(Math.abs(result.neededCorpus - result.projectedCorpus), true)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-10">
        <h4 className="font-display text-xl font-semibold text-cloud">Your priority moves</h4>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {result.recommendations.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    r.priority === "high"
                      ? "bg-amber-400/15 text-amber-300"
                      : r.priority === "medium"
                        ? "bg-gold/15 text-gold"
                        : "bg-white/8 text-cloud-dim",
                  )}
                >
                  {r.priority} · {r.pillar}
                </span>
              </div>
              <p className="mt-3 font-medium text-cloud">{r.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-cloud-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Check size={18} />
          </span>
          <p className="text-sm text-cloud-muted">
            Turn this score into a real plan — a certified planner will walk you through it, free.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-cloud-dim transition-colors hover:text-cloud"
          >
            <RefreshCw size={15} /> Retake
          </button>
          <Button href="#consultation" size="md">
            Book my free session
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-cloud-faint">
        Illustrative estimates for education only — not investment advice. Assumes 11% long-run growth, 6% inflation.
      </p>
    </motion.div>
  );
}
