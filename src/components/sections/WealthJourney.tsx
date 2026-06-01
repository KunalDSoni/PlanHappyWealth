"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { JOURNEY_GOALS } from "@/lib/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WealthJourney() {
  const [active, setActive] = useState(0);
  const goal = JOURNEY_GOALS[active];

  return (
    <section id="journey" className="section scroll-mt-24">
      <SectionHeading
        kicker="Your Wealth Journey"
        title={<>What are you planning for?</>}
        description="Tell us the dream. We'll show you the path, the numbers, and the plan that gets you there with confidence."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Goal selector */}
        <div
          className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          role="tablist"
          aria-label="Financial goals"
        >
          {JOURNEY_GOALS.map((g, i) => {
            const Icon = g.icon;
            const selected = i === active;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-500 ease-luxury lg:shrink",
                  selected
                    ? "border-gold/40 bg-gold/[0.06] shadow-gold-soft"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="journey-active"
                    className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gold/30"
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                )}
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                    selected ? "bg-gold text-navy-900" : "bg-white/5 text-cloud-muted group-hover:text-cloud",
                  )}
                >
                  <Icon size={20} />
                </span>
                <span className="flex flex-col">
                  <span className={cn("text-sm font-medium", selected ? "text-cloud" : "text-cloud-muted")}>
                    {g.label}
                  </span>
                  <span className="hidden text-xs text-cloud-faint lg:block">{g.eyebrow}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic content panel */}
        <div className="relative min-h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={cn(
                "relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-8 shadow-glass md:p-10",
                goal.imageGradient,
              )}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

              <p className="kicker">{goal.eyebrow}</p>
              <h3 className="mt-4 max-w-md text-balance font-display text-display-md font-semibold text-cloud">
                {goal.headline}
              </h3>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-cloud-muted">{goal.story}</p>

              <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-6">
                <div>
                  <p className="font-display text-5xl font-semibold text-gradient-gold">{goal.metricValue}</p>
                  <p className="mt-1 text-sm text-cloud-dim">{goal.metricLabel}</p>
                  <p className="text-xs text-cloud-faint">{goal.horizon}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {goal.pillars.map((p) => (
                  <div key={p.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-display text-lg font-semibold text-cloud">{p.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-cloud-faint">{p.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="#health-score" variant="gold-outline" size="md">
                  Build my {goal.label.toLowerCase()} plan
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
