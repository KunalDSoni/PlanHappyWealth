"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Compass, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOUNDER, SITE } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const PHILOSOPHY = [
  {
    icon: Shield,
    title: "Stewardship before salesmanship.",
    body: "Every recommendation is held to the standard of a steward, not a salesperson. If it isn't right for the family, it isn't on the page.",
  },
  {
    icon: Compass,
    title: "Architecture before allocation.",
    body: "Asset allocation is a tactic. The blueprint comes first — protection, goals, freedom, legacy — and then the portfolio serves it.",
  },
  {
    icon: BadgeCheck,
    title: "Plain language. Always.",
    body: "Wealth is not made more intelligent by jargon. We translate every decision into a sentence a teenager could understand.",
  },
];

const CREDENTIALS = [
  { k: "Certified Financial Planner™", v: "CFP · FPSB India" },
  { k: "Qualified Personal Finance", v: "QPFP · Network FP" },
  { k: "MBA", v: "Family Wealth & Investments" },
  { k: "Practice", v: `${FOUNDER.experienceYears}+ years · AMFI Registered` },
];

const FRAMEWORK = [
  "Listen — to the household, not the market.",
  "Diagram — the structure that fits the life.",
  "Construct — protection first, freedom last.",
  "Tend — quarterly reviews, generational horizons.",
];

export function Architect() {
  return (
    <section id="architect" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="Meet your Wealth Architect"
        title={
          <>
            {FOUNDER.name}. <span className="text-gradient-gold">{FOUNDER.role}.</span>
          </>
        }
        description={FOUNDER.bio}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        {/* Portrait panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-cloud/10 bg-navy-800/60 shadow-glass-lg sm:rounded-[2rem]"
        >
          {/* Editorial portrait stage — engraved monogram on warm vellum */}
          <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-[#FBF5E2] via-[#F4ECCF] to-[#E6D4A0]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 500"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <pattern id="arch-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(14,27,46,0.06)" strokeWidth="0.6" />
                </pattern>
                <radialGradient id="arch-fade" cx="50%" cy="40%" r="65%">
                  <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(14,27,46,0.18)" />
                </radialGradient>
              </defs>
              <rect width="400" height="500" fill="url(#arch-grid)" />
              <g stroke="rgba(14,27,46,0.55)" strokeWidth="1.2" fill="none">
                <circle cx="200" cy="220" r="78" />
                <circle cx="200" cy="220" r="118" strokeDasharray="2 6" />
                <path d="M 80 360 L 320 360" />
                <path d="M 80 360 L 200 220" />
                <path d="M 320 360 L 200 220" />
              </g>
              <g fill="rgba(14,27,46,0.85)" stroke="none">
                <text
                  x="200"
                  y="232"
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  fontSize="58"
                  fontWeight="600"
                  letterSpacing="0.05em"
                >
                  SA
                </text>
              </g>
              <rect width="400" height="500" fill="url(#arch-fade)" />
            </svg>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-kicker text-cloud-muted">
                  Founder
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-cloud">{FOUNDER.name}</p>
                <p className="text-sm text-cloud-dim">
                  {FOUNDER.role} · {FOUNDER.credentials.join(", ")}
                </p>
              </div>
              <span className="rounded-full border border-cloud/30 bg-navy-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-kicker text-cloud-muted">
                Est. {SITE.establishedYear}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-cloud/8 border-t border-cloud/10">
            {CREDENTIALS.map((c) => (
              <div key={c.k} className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
                  {c.k}
                </p>
                <p className="mt-2 text-sm leading-snug text-cloud">{c.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy + framework */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="kicker">Philosophy</p>
            <h3 className="mt-5 max-w-xl font-display text-display-md font-semibold leading-tight text-cloud">
              I don&apos;t build portfolios. I build the household that the portfolio will serve.
            </h3>
          </motion.div>

          <ul className="mt-10 space-y-7">
            {PHILOSOPHY.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-t border-cloud/10 pt-7"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/40 bg-gold/8 text-gold">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-cloud">{p.title}</p>
                    <p className="mt-2 max-w-xl text-pretty leading-relaxed text-cloud-muted">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-10 rounded-2xl border border-cloud/10 bg-navy-800/60 p-5 sm:p-7"
          >
            <p className="kicker flex items-center gap-2">
              <GraduationCap size={14} /> The Practice · Four movements
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {FRAMEWORK.map((f, i) => (
                <li key={f} className="grid grid-cols-[2rem_1fr] items-start gap-3 text-sm text-cloud-muted">
                  <span className="font-mono text-[11px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <div className="mt-10">
            <Button href="#consultation" size="lg">
              Schedule a Private Brief
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
