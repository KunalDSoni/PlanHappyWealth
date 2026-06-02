"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  { label: "Security", body: "A floor below which the household never falls." },
  { label: "Freedom", body: "Decisions that no longer depend on the next paycheque." },
  { label: "Choices", body: "The capacity to say yes — to the school, the role, the year off." },
  { label: "Family", body: "A plan that holds the people the money is for." },
  { label: "Confidence", body: "Sleep that isn't disturbed by the market or the headlines." },
  { label: "Legacy", body: "What outlasts you, and the doctrine that carries it." },
];

export function BeliefManifesto() {
  return (
    <section className="section pt-0">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" />
              <span className="kicker">Our belief</span>
            </div>
            <h2 className="mt-5 text-balance font-display text-display-lg font-semibold leading-[1.05] text-cloud">
              Wealth is not money.
              <br />
              <span className="text-gradient-gold">Wealth is what money makes possible.</span>
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cloud-muted">
              Investments are an instrument. The household is the work. Everything we draft
              answers a single question — what is the money <em>for</em>?
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cloud/10 bg-cloud/[0.05] sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.05 }}
                className="bg-navy-800/70 p-5 sm:p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-cloud">{p.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-cloud-muted">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
