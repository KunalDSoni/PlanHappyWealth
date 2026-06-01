"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { GsapReveal } from "@/components/motion/GsapReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRUST_STATS, CREDENTIALS } from "@/lib/data/stats";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-30" />
      <div className="section">
        <SectionHeading
          kicker="Why Plan Happy Wealth"
          title={<>Credibility you can feel, <span className="text-gradient-gold">not just read.</span></>}
          description="The discipline of a private bank, the warmth of a family advisor. Here's what that has meant for the people who trust us."
        />

        {/* Animated counters */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-navy-900/80 p-8 transition-colors hover:bg-navy-800/80"
            >
              <div className="font-display text-4xl font-semibold text-gradient-gold md:text-5xl">
                <Counter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-cloud">{stat.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-cloud-faint">{stat.caption}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Credentials — GSAP scroll-triggered stagger */}
        <GsapReveal className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((c) => (
            <div
              key={c.title}
              className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-gold/25"
            >
              <div className="mb-4 h-9 w-9 rounded-lg bg-gradient-to-br from-gold-200 to-gold-500 p-px">
                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-navy-900">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
              </div>
              <h3 className="font-medium text-cloud">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cloud-muted">{c.body}</p>
            </div>
          ))}
        </GsapReveal>

        <Reveal className="mt-10 flex justify-center">
          <p className="text-sm text-cloud-faint">
            Regulated by SEBI &amp; IRDAI · Fiduciary standard · Member, Financial Planning community
          </p>
        </Reveal>
      </div>
    </section>
  );
}
