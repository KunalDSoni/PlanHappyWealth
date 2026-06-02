"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowRight, Quote } from "lucide-react";
import { SUCCESS_STORIES, type SuccessStory } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SuccessStories() {
  const [active, setActive] = useState<SuccessStory | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [active]);

  return (
    <section id="stories" className="section scroll-mt-24">
      <SectionHeading
        align="left"
        kicker="Client Success Stories"
        title={<>Real families. <span className="text-gradient-gold">Real turning points.</span></>}
        description="Not testimonials — case studies. Every story has a before, a journey, and an outcome. Press play on the ones that sound like you."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SUCCESS_STORIES.map((s, i) => (
          <motion.button
            key={s.id}
            layoutId={`card-${s.id}`}
            onClick={() => setActive(s)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-cloud/10 text-left shadow-glass"
          >
            <div className={cn("relative aspect-[4/5] w-full bg-gradient-to-br", s.posterGradient)}>
              {/* Poster shimmer + grain */}
              <div className="absolute inset-0 bg-noise opacity-[0.04]" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

              {/* Play affordance */}
              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50">
                <Play size={16} className="ml-0.5 text-white" fill="currentColor" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[11px] font-medium uppercase tracking-kicker text-gold/90">{s.category}</span>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight text-white">{s.name}</p>
                <p className="mt-1 text-sm text-white/70">{s.persona}</p>

                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-gradient-gold">{s.headlineMetric.value}</p>
                    <p className="text-[11px] text-white/60">{s.headlineMetric.label}</p>
                  </div>
                  <span className="text-xs text-white/70">{s.runtime}</span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Case-study modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-cloud/80 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              layoutId={`card-${active.id}`}
              className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-cloud/12 bg-navy-900 shadow-glass-lg"
            >
              {/* Video stage */}
              <div className={cn("relative aspect-video w-full bg-gradient-to-br", active.posterGradient)}>
                <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                <button
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label="Play story"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/25 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Play size={26} className="ml-1 text-white" fill="currentColor" />
                  </span>
                </button>
                <span className="absolute left-6 top-6 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-md">
                  {active.runtime} · {active.category}
                </span>
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                      Wealth Journey · {active.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-cloud">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-cloud-dim">{active.persona}</p>
                  </div>
                  <span className="hidden rounded-full border border-cloud/15 bg-navy-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-kicker text-cloud-muted sm:inline-flex">
                    {active.runtime}
                  </span>
                </div>

                <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { k: "01", t: "Challenge", v: active.challenge },
                    { k: "02", t: "Discovery", v: active.discovery },
                    { k: "03", t: "Blueprint", v: active.blueprint },
                    { k: "04", t: "Implementation", v: active.implementation },
                    { k: "05", t: "Transformation", v: active.transformation },
                    { k: "06", t: "Current life", v: active.currentLife },
                  ].map((b) => (
                    <li
                      key={b.k}
                      className="relative rounded-2xl border border-cloud/8 bg-cloud/[0.03] p-5"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                        Act {b.k} · {b.t}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-cloud-muted">{b.v}</p>
                    </li>
                  ))}
                </ol>

                <figure className="mt-8 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6">
                  <Quote size={20} className="text-gold/70" />
                  <blockquote className="mt-3 text-pretty font-display text-xl font-medium leading-snug text-cloud">
                    {active.quote}
                  </blockquote>
                </figure>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-cloud-faint">
                    Composite household · names and figures illustrative · drawn from the practice&apos;s 25-year archive.
                  </p>
                  <Button href="#consultation" size="md">
                    Draft my Blueprint
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
