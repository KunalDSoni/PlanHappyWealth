"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ARTICLES, EDU_CATEGORIES } from "@/lib/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EducationHub() {
  const [filter, setFilter] = useState<string>("All");
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.id !== featured.id);
  const visible = filter === "All" ? rest : rest.filter((a) => a.category === filter);

  return (
    <section id="learn" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="Education Hub"
        title={<>Wealth wisdom, <span className="text-gradient-gold">beautifully told.</span></>}
        description="No jargon, no fear-selling. Just the ideas that change how families think about money — written like the magazine you'd actually read."
      />

      {/* Category filter */}
      <div className="mt-10 flex flex-wrap gap-2">
        {["All", ...EDU_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all duration-300",
              filter === cat
                ? "border-gold/50 bg-gold/10 text-gold"
                : "border-white/10 text-cloud-dim hover:border-white/25 hover:text-cloud",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Featured */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          whileHover={{ y: -4 }}
          className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#22344c] via-[#0E1B2E] to-[#07111F] p-8 shadow-glass md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute inset-0 bg-noise opacity-[0.04]" />
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-kicker text-gold">
            <BookOpen size={12} /> Featured · {featured.category}
          </span>
          <h3 className="mt-5 max-w-lg text-balance font-display text-display-md font-semibold text-cloud">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-cloud-muted">{featured.dek}</p>
          <div className="mt-6 flex items-center gap-3 text-sm text-cloud-dim">
            <span>{featured.readTime}</span>
            <span className="inline-flex items-center gap-1 text-gold transition-transform group-hover:translate-x-1">
              Read story <ArrowUpRight size={15} />
            </span>
          </div>
        </motion.a>

        {/* Article list */}
        <div className="grid gap-4">
          <AnimatePresence mode="popLayout">
            {visible.slice(0, 4).map((a, i) => (
              <motion.a
                key={a.id}
                href="#"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:border-gold/25"
              >
                <span
                  className="mt-1 h-12 w-12 shrink-0 rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${a.accent}33, transparent)`, border: `1px solid ${a.accent}40` }}
                />
                <div className="flex-1">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-gold/70">{a.category}</span>
                  <h4 className="mt-1 font-medium leading-snug text-cloud transition-colors group-hover:text-gold">
                    {a.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-sm text-cloud-faint">{a.dek}</p>
                  <span className="mt-2 inline-block text-xs text-cloud-faint">{a.readTime}</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
          {visible.length === 0 && (
            <p className="rounded-2xl border border-white/8 bg-white/[0.02] p-8 text-center text-sm text-cloud-faint">
              More {filter} stories coming soon.
            </p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <a href="#" className="group inline-flex items-center gap-2 text-sm text-cloud-muted transition-colors hover:text-gold">
          Explore the full library
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
