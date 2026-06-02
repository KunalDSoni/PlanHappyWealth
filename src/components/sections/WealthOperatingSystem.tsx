"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, TrendingUp, Compass, Sunrise, Crown, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Layer = {
  id: string;
  index: string;
  label: string;
  one: string;
  description: string;
  pillars: string[];
  icon: LucideIcon;
};

const LAYERS: Layer[] = [
  {
    id: "legacy",
    index: "05",
    label: "Legacy",
    one: "What endures.",
    description:
      "Multi-generational structures — trusts, wills, succession — so wealth transfers with intention, not friction.",
    pillars: ["Estate architecture", "Wealth transfer", "Stewardship doctrine"],
    icon: Crown,
  },
  {
    id: "freedom",
    index: "04",
    label: "Freedom",
    one: "When work becomes optional.",
    description:
      "Engineered passive income that covers your life, so independence arrives by design — earlier than the calendar suggests.",
    pillars: ["Retirement income", "Passive cash-flow", "Lifestyle preservation"],
    icon: Sunrise,
  },
  {
    id: "goals",
    index: "03",
    label: "Goals",
    one: "The milestones that matter.",
    description:
      "Home, education, travel, second careers — each goal funded with the right vehicle at the right time, never at the cost of another.",
    pillars: ["Home & lifestyle", "Education corpus", "Personal ambitions"],
    icon: Compass,
  },
  {
    id: "growth",
    index: "02",
    label: "Growth",
    one: "Compounding, on purpose.",
    description:
      "A globally diversified, tax-efficient portfolio rebalanced with discipline — calibrated to your temperament, not the headlines.",
    pillars: ["Asset allocation", "Tax efficiency", "Disciplined rebalancing"],
    icon: TrendingUp,
  },
  {
    id: "protection",
    index: "01",
    label: "Protection",
    one: "The foundation everything rests on.",
    description:
      "Term, health, critical-illness and emergency reserves sized to your real obligations — so one bad year never undoes a lifetime of building.",
    pillars: ["Life & health cover", "Emergency reserve", "Liability containment"],
    icon: ShieldCheck,
  },
];

export function WealthOperatingSystem() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("growth");
  const layer = LAYERS.find((l) => l.id === active) ?? LAYERS[3];

  return (
    <section id="operating-system" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="The Wealth Operating System"
        title={
          <>
            Five layers. <span className="text-gradient-gold">One household, engineered.</span>
          </>
        }
        description="Every family we serve is built on the same architectural stack — protection at the base, legacy at the crown. Each layer is structural; none is optional."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        {/* The stack — left column */}
        <div className="relative">
          <div className="absolute left-[1.95rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cloud/10 via-cloud/15 to-cloud/5 md:block" />
          <ul className="space-y-2">
            {LAYERS.map((l, i) => {
              const isActive = l.id === active;
              const Icon = l.icon;
              return (
                <li key={l.id}>
                  <motion.button
                    onClick={() => setActive(l.id)}
                    onMouseEnter={() => setActive(l.id)}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                    className={cn(
                      "group grid w-full grid-cols-[3.5rem_2.25rem_1fr_auto] items-center gap-4 rounded-2xl border px-5 py-5 text-left transition-colors duration-300",
                      isActive
                        ? "border-gold/40 bg-navy-800/70 shadow-glass"
                        : "border-cloud/8 bg-navy-800/30 hover:border-cloud/15 hover:bg-navy-800/55",
                    )}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-kicker text-cloud-faint">
                      {l.index}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors",
                        isActive
                          ? "border-gold/50 bg-gold/10 text-gold"
                          : "border-cloud/10 bg-cloud/[0.03] text-cloud-muted group-hover:border-cloud/20",
                      )}
                    >
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold text-cloud">
                        {l.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-cloud-dim">{l.one}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className={cn(
                        "transition-all",
                        isActive ? "text-gold opacity-100" : "text-cloud-faint opacity-50 group-hover:opacity-100",
                      )}
                    />
                  </motion.button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-kicker text-cloud-faint">
            <span className="h-px w-8 bg-gold/40" />
            Foundation rests on Protection · Legacy sits at the crown
          </div>
        </div>

        {/* Active layer detail — right column */}
        <motion.div
          key={layer.id}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="relative overflow-hidden rounded-[2rem] border border-cloud/10 bg-navy-800/60 p-8 shadow-glass-lg backdrop-blur-xl md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="flex items-center justify-between">
            <p className="kicker">Layer {layer.index} · {layer.label}</p>
            <span className="font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
              Specimen detail
            </span>
          </div>

          <h3 className="mt-5 font-display text-display-md font-semibold leading-tight text-cloud">
            {layer.one}
          </h3>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-cloud-muted">
            {layer.description}
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-cloud/10 bg-cloud/[0.04] sm:grid-cols-3">
            {layer.pillars.map((p, i) => (
              <div key={p} className="bg-navy-800/70 p-5">
                <p className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-cloud">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-cloud/10 pt-6 text-xs text-cloud-faint">
            <span className="font-mono uppercase tracking-kicker">Reviewed quarterly</span>
            <span className="font-mono uppercase tracking-kicker">Calibrated to family doctrine</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
