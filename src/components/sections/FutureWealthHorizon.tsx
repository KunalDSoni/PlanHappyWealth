"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Marker = {
  year: number;
  label: string;
  netWorth: string;
  coverage: number;
  freedom: number;
  goals: string[];
  caption: string;
};

const NOW = new Date().getFullYear();

const MARKERS: Marker[] = [
  {
    year: NOW,
    label: "Today",
    netWorth: "₹86 L",
    coverage: 42,
    freedom: 11,
    goals: ["Protection in force", "Emergency reserve set"],
    caption: "The foundation is poured. Architecture begins.",
  },
  {
    year: 2030,
    label: "2030",
    netWorth: "₹2.4 Cr",
    coverage: 78,
    freedom: 28,
    goals: ["Down payment ready", "Education corpus drafted"],
    caption: "Structure rises. First goals come within reach.",
  },
  {
    year: 2040,
    label: "2040",
    netWorth: "₹6.8 Cr",
    coverage: 100,
    freedom: 58,
    goals: ["Home owned outright", "Children educated"],
    caption: "Major obligations close. Wealth begins to compound for the family, not the bank.",
  },
  {
    year: 2050,
    label: "2050",
    netWorth: "₹14.2 Cr",
    coverage: 100,
    freedom: 100,
    goals: ["Passive income exceeds expenses", "Retirement on your terms"],
    caption: "Work becomes a choice. Cash-flow is sovereign.",
  },
  {
    year: 2060,
    label: "2060",
    netWorth: "₹26 Cr",
    coverage: 100,
    freedom: 100,
    goals: ["Trust structure live", "Successors briefed"],
    caption: "Legacy is in place. The household becomes a doctrine.",
  },
];

export function FutureWealthHorizon() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(2);
  const m = MARKERS[idx];
  const advance = useMemo(() => idx / (MARKERS.length - 1), [idx]);

  return (
    <section id="horizon" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="Future Wealth Horizon"
        title={
          <>
            Move through the decades. <span className="text-gradient-gold">Watch the household become a legacy.</span>
          </>
        }
        description="Each marker is a moment we engineer toward — not a guess. As the horizon advances, risk reduces, freedom forms, and the next generation inherits a structure, not a surprise."
      />

      <div className="mt-14 overflow-hidden rounded-[2rem] border border-cloud/10 bg-navy-800/60 shadow-glass-lg backdrop-blur-xl">
        {/* Horizon ruler */}
        <div className="relative px-8 pt-8 md:px-12 md:pt-12">
          <div className="relative h-px w-full bg-cloud/10">
            <motion.div
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-gold/50 to-gold"
              animate={{ width: `${advance * 100}%` }}
              transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
            />
          </div>

          <ol className="mt-6 grid grid-cols-5 gap-2 text-center">
            {MARKERS.map((mk, i) => {
              const isActive = i === idx;
              const isPast = i <= idx;
              return (
                <li key={mk.year}>
                  <button
                    onClick={() => setIdx(i)}
                    onMouseEnter={() => setIdx(i)}
                    className="group flex w-full flex-col items-center"
                  >
                    <span
                      className={cn(
                        "relative -mt-[1.85rem] flex h-3 w-3 items-center justify-center rounded-full border-2 transition-colors",
                        isActive
                          ? "border-gold bg-gold"
                          : isPast
                            ? "border-gold/70 bg-navy-900"
                            : "border-cloud/25 bg-navy-900 group-hover:border-cloud/40",
                      )}
                    >
                      {isActive && (
                        <span className="absolute h-6 w-6 rounded-full border border-gold/40" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "mt-4 font-mono text-[11px] uppercase tracking-kicker transition-colors",
                        isActive ? "text-gold" : isPast ? "text-cloud-muted" : "text-cloud-faint",
                      )}
                    >
                      {mk.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Active marker detail */}
        <div className="grid gap-px bg-cloud/[0.06] md:grid-cols-[1.1fr_1fr]">
          <motion.div
            key={`narrative-${m.year}`}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="bg-navy-800/80 p-8 md:p-12"
          >
            <p className="kicker">Horizon · {m.label}</p>
            <h3 className="mt-5 font-display text-display-md font-semibold leading-tight text-cloud">
              {m.caption}
            </h3>

            <div className="mt-8 space-y-3">
              {m.goals.map((g) => (
                <div key={g} className="flex items-center gap-3 text-cloud-muted">
                  <span className="h-px w-6 bg-gold/60" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`metrics-${m.year}`}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            className="bg-navy-800/80 p-8 md:p-12"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
                  Household net worth
                </p>
                <p className="mt-3 font-display text-display-md font-semibold text-gradient-gold">
                  {m.netWorth}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
                  Year
                </p>
                <p className="mt-3 font-display text-display-md font-semibold text-cloud">
                  {m.year}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <Bar label="Protection coverage" value={m.coverage} />
              <Bar label="Financial freedom" value={m.freedom} />
            </div>

            <p className="mt-10 font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
              Specimen household · figures illustrative
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-cloud-muted">{label}</p>
        <p className="font-mono text-xs tabular-nums text-cloud">{value}%</p>
      </div>
      <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-cloud/8">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-200 to-gold"
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.7, ease: EASE }}
        />
      </div>
    </div>
  );
}
