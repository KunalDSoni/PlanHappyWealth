"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/constants";

// Three.js is heavy and purely decorative — keep it off the critical path.
const AuroraField = dynamic(
  () => import("@/components/three/AuroraField").then((m) => m.AuroraField),
  { ssr: false },
);

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Three.js constellation + gradient wash */}
      <AuroraField className="absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-navy-900 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y: yText }} variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs font-medium tracking-wide text-gold/90">
              Private-bank planning, for every family
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-display-2xl font-semibold leading-[0.95] text-cloud"
          >
            Your family&apos;s dreams deserve{" "}
            <span className="text-gradient-gold">more than financial advice.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cloud-muted md:text-xl"
          >
            Build wealth, achieve life&apos;s biggest goals, and create lasting financial
            freedom — guided by a personalized roadmap that adapts as your life unfolds.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={CTA.primary.href} size="lg">
              Start Your Financial Journey
              <ArrowRight size={18} />
            </Button>
            <Button href={CTA.secondary.href} variant="secondary" size="lg">
              <Activity size={18} className="text-gold" />
              Calculate Your Financial Health
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cloud-dim">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold/80" /> SEBI-registered fiduciaries
            </span>
            <span className="hidden h-4 w-px bg-cloud/10 sm:block" />
            <span>2,400+ families guided</span>
            <span className="hidden h-4 w-px bg-cloud/10 sm:block" />
            <span>₹1,850 Cr advised</span>
          </motion.div>
        </motion.div>

        {/* Floating glass proof-card */}
        <motion.div
          style={{ y: yCard }}
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <HeroProofCard />
        </motion.div>
      </div>

    </section>
  );
}

function HeroProofCard() {
  return (
    <div className="glass-strong rounded-[2rem] p-6 shadow-glass-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-kicker text-cloud-dim">Net worth</p>
          <p className="mt-1 font-display text-3xl font-semibold text-cloud">₹2.26 Cr</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          ▲ 18.4%
        </span>
      </div>

      {/* Mini sparkline */}
      <svg viewBox="0 0 300 90" className="mt-5 h-20 w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 70 C 40 60, 60 55, 90 48 S 150 30, 180 26 S 240 14, 300 8"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: EASE, delay: 0.8 }}
        />
        <path d="M0 70 C 40 60, 60 55, 90 48 S 150 30, 180 26 S 240 14, 300 8 L300 90 L0 90 Z" fill="url(#spark)" />
      </svg>

      <div className="mt-5 gold-rule" />

      <div className="mt-5 space-y-3">
        {[
          { label: "Retirement readiness", value: "On track", pct: 64 },
          { label: "Financial freedom", value: "2039", pct: 72 },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs">
              <span className="text-cloud-dim">{row.label}</span>
              <span className="font-medium text-cloud">{row.value}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-cloud/8">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold-200 to-gold"
                initial={{ width: 0 }}
                whileInView={{ width: `${row.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: EASE, delay: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
