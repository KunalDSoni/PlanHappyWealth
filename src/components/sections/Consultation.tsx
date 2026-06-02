"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Activity, Download, Check, ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JOURNEY_GOALS } from "@/lib/data/journey";

const EASE = [0.22, 1, 0.36, 1] as const;

const PATHS = [
  {
    icon: Calendar,
    title: "Book a Consultation",
    body: "A free 30-minute session with a certified planner. No pressure, no jargon.",
    tag: "Most chosen",
    primary: true,
  },
  {
    icon: Activity,
    title: "Financial Health Assessment",
    body: "Get your score and priority moves in 60 seconds — start instantly.",
    href: "#health-score",
  },
  {
    icon: Download,
    title: "Download the Wealth Blueprint",
    body: "Our 9-step framework for building family wealth, as a beautiful PDF.",
    href: "#",
  },
];

export function Consultation() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // Static-host friendly: post to Formspree if configured, else capture
      // optimistically. (For a server deploy, point this at /api/lead instead.)
      const formspree = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (formspree) {
        await fetch(`https://formspree.io/f/${formspree}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, source: "consultation" }),
        });
      }
    } catch {
      /* never block the user on a network hiccup */
    } finally {
      setSubmitting(false);
      setSent(true);
    }
  }

  return (
    <section id="consultation" className="relative overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="section">
        <SectionHeading
          kicker="Begin"
          title={<>The best time to start was 20 years ago. <span className="text-gradient-gold">The second best is today.</span></>}
          description="Choose how you'd like to begin. Every path leads to the same place: a calmer, wealthier, more confident financial life."
        />

        {/* Three conversion paths */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PATHS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className={`group relative flex flex-col rounded-3xl border p-7 transition-all duration-500 ${
                  p.primary
                    ? "border-gold/40 bg-gold/[0.06] shadow-gold-soft lg:scale-[1.03]"
                    : "border-cloud/10 bg-cloud/[0.02] hover:border-cloud/20"
                }`}
              >
                {p.tag && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-cloud">
                    <Star size={11} fill="currentColor" /> {p.tag}
                  </span>
                )}
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    p.primary ? "bg-gold text-cloud" : "bg-cloud/5 text-gold"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-cloud">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cloud-muted">{p.body}</p>
                {p.href ? (
                  <Button href={p.href} variant={p.primary ? "primary" : "secondary"} size="md" className="mt-6 w-full">
                    {p.title.split(" ")[0]} now <ArrowRight size={16} />
                  </Button>
                ) : (
                  <a href="#book-form" className="mt-6">
                    <Button size="md" className="w-full">
                      Reserve my slot <ArrowRight size={16} />
                    </Button>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Booking form */}
        <div id="book-form" className="mx-auto mt-16 max-w-4xl scroll-mt-28">
          <div className="overflow-hidden rounded-[2rem] border border-cloud/12 bg-navy-800/50 shadow-glass-lg backdrop-blur-xl">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              {/* Reassurance rail */}
              <div className="relative hidden flex-col justify-between border-r border-cloud/8 bg-gradient-to-br from-navy-800/80 to-transparent p-8 md:flex">
                <div>
                  <p className="kicker">Your free session</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-cloud">
                    What happens in the first 30 minutes
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "We listen — your goals, worries, and what 'enough' means to you.",
                      "You get a clear read on where you stand today.",
                      "You leave with 2–3 concrete next moves, whether or not we work together.",
                    ].map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-cloud-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                          <Check size={12} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-8 text-xs text-cloud-faint">
                  No commissions pitched. No obligation. Just clarity.
                </p>
              </div>

              {/* Form */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full name" name="name" type="text" placeholder="Aarav Sharma" required />
                        <Field label="Phone" name="phone" type="tel" placeholder="+91 98xxxxxxx" required />
                      </div>
                      <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                      <div>
                        <label htmlFor="goal" className="mb-1.5 block text-xs font-medium text-cloud-dim">
                          What are you planning for?
                        </label>
                        <select
                          id="goal"
                          name="goal"
                          className="w-full rounded-xl border border-cloud/10 bg-navy-800/60 px-4 py-3 text-sm text-cloud focus:border-gold/50 focus:outline-none"
                          defaultValue={JOURNEY_GOALS[1].label}
                        >
                          {JOURNEY_GOALS.map((g) => (
                            <option key={g.id} value={g.label} className="bg-navy-900">
                              {g.label}
                            </option>
                          ))}
                          <option className="bg-navy-900">Everything — I want a full plan</option>
                        </select>
                      </div>
                      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                        {submitting ? "Reserving…" : "Book my free consultation"}
                        {!submitting && <ArrowRight size={18} />}
                      </Button>
                      <p className="text-center text-[11px] text-cloud-faint">
                        By submitting you agree to be contacted about your session. We never sell your data.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex h-full flex-col items-center justify-center py-10 text-center"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check size={30} />
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-semibold text-cloud">You're on the calendar.</h3>
                      <p className="mt-2 max-w-sm text-cloud-muted">
                        A certified planner will reach out within one business day to confirm your time. Check your
                        inbox for a welcome note.
                      </p>
                      <a href="#health-score" className="mt-6">
                        <Button variant="secondary" size="md">
                          While you wait, get your score <ArrowRight size={16} />
                        </Button>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-cloud-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cloud/10 bg-navy-800/60 px-4 py-3 text-sm text-cloud placeholder:text-cloud-faint focus:border-gold/50 focus:outline-none"
      />
    </div>
  );
}
