"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Activity, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTA, SITE } from "@/lib/constants";
import { BlueprintField } from "@/components/three/BlueprintField";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Architectural blueprint — quiet, precise, technical */}
      <BlueprintField className="absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div style={{ y: yText }} variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cloud/15 bg-navy-900/70 px-4 py-1.5 backdrop-blur-md"
          >
            <Compass size={13} className="text-gold" />
            <span className="text-[11px] font-medium uppercase tracking-kicker text-cloud-muted">
              {SITE.positioning}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-display-2xl font-semibold leading-[0.96] text-cloud"
          >
            The future your family imagines deserves{" "}
            <span className="text-gradient-gold">more than financial advice.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cloud-muted md:text-xl"
          >
            We architect a clear, deliberate blueprint for wealth, security and the
            generations that follow — so the life you picture is engineered, not hoped for.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={CTA.primary.href} size="lg" className="w-full sm:w-auto">
              {CTA.primary.label}
              <ArrowRight size={18} />
            </Button>
            <Button href={CTA.secondary.href} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Activity size={18} className="text-gold" />
              {CTA.secondary.label}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-cloud/10 pt-6 text-sm sm:grid-cols-3"
          >
            {[
              { k: "Families served", v: "2,400+" },
              { k: "Wealth under advice", v: "₹1,850 Cr" },
              { k: "Generational horizons", v: "30 yrs" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-lg font-semibold text-cloud sm:text-xl md:text-2xl">{s.v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-kicker text-cloud-faint sm:text-[11px]">{s.k}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Blueprint proof-card — a wealth structure made visible */}
        <motion.div
          style={{ y: yCard }}
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
          className="relative mx-auto w-full max-w-md"
        >
          <BlueprintCard />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Editorial wealth blueprint card — a structural diagram of a family plan,
 * rendered like a private-bank brief sheet.
 */
function BlueprintCard() {
  const layers = [
    { k: "05", label: "Legacy", value: "Trust · Succession", pct: 100 },
    { k: "04", label: "Freedom", value: "Passive Income", pct: 92 },
    { k: "03", label: "Goals", value: "Home · Education", pct: 78 },
    { k: "02", label: "Growth", value: "Diversified Portfolio", pct: 64 },
    { k: "01", label: "Foundation", value: "Protection · Liquidity", pct: 100 },
  ];
  return (
    <div className="glass-strong relative rounded-3xl p-5 shadow-glass-lg sm:rounded-[2rem] sm:p-7">
      <div className="flex items-start justify-between border-b border-cloud/10 pb-5">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-cloud-faint">
            Family Wealth Blueprint · Specimen
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-cloud">
            The Mehra Household
          </p>
        </div>
        <span className="rounded-full border border-gold/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-kicker text-gold">
          Drafted
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {layers.map((row, i) => (
          <div key={row.k} className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-4">
            <span className="font-mono text-[11px] text-cloud-faint">{row.k}</span>
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium text-cloud">{row.label}</span>
                <span className="text-[11px] text-cloud-dim">{row.value}</span>
              </div>
              <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-cloud/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold-200 to-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: EASE, delay: 0.6 + i * 0.1 }}
                />
              </div>
            </div>
            <span className="font-mono text-[11px] tabular-nums text-cloud-muted">{row.pct}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 gold-rule" />

      <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-kicker text-cloud-faint">
        <span>Horizon · 2025 → 2055</span>
        <span>Reviewed quarterly</span>
      </div>
    </div>
  );
}
