"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="The Practice"
        title={
          <>
            Six services. <span className="text-gradient-gold">One blueprint they all serve.</span>
          </>
        }
        description="Every engagement is filed against the layer it belongs to — so nothing is sold for its own sake, and nothing important is left out."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cloud/10 bg-cloud/[0.06] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.title}
            href="#consultation"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: EASE, delay: i * 0.05 }}
            className="group relative flex flex-col gap-4 bg-navy-800/70 p-7 transition-colors hover:bg-navy-800/90 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-gold/40 bg-gold/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-kicker text-gold">
                Layer · {s.layer}
              </span>
              <ArrowUpRight
                size={16}
                className="text-cloud-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-cloud">
                {s.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-cloud-muted">
                {s.blurb}
              </p>
            </div>
            <span className="mt-auto font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
              {String(i + 1).padStart(2, "0")} · Plan Happy Wealth
            </span>
          </motion.a>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-cloud-muted">
        Mutual fund distribution is conducted as an AMFI-registered intermediary. Insurance
        recommendations are placed through licensed channels. The household&apos;s blueprint
        determines the instrument — never the other way round.
      </p>
    </section>
  );
}
