"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, PieChart, Compass, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gauge } from "@/components/ui/Gauge";
import { NET_WORTH_SERIES, GOALS_PROGRESS, ALLOCATION } from "@/lib/data/dashboard";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DashboardDemo() {
  return (
    <section id="dashboard" className="relative overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-aurora opacity-60" />
      <div className="section">
        <SectionHeading
          kicker="Premium Dashboard"
          title={<>Your entire financial life, <span className="text-gradient-gold">in one calm view.</span></>}
          description="Every account, goal, and projection — continuously updated. The clarity of a fintech product, the depth of a private bank."
        />

        {/* App window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-14 overflow-hidden rounded-[1.75rem] border border-cloud/12 bg-navy-800/50 shadow-glass-lg backdrop-blur-xl"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-cloud/8 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-cloud/15" />
            <span className="h-3 w-3 rounded-full bg-cloud/15" />
            <span className="h-3 w-3 rounded-full bg-cloud/15" />
            <div className="ml-4 flex items-center gap-2 rounded-full bg-cloud/5 px-3 py-1 text-xs text-cloud-dim">
              <Compass size={12} className="text-gold" /> planhappywealth.com / dashboard
            </div>
            <div className="ml-auto flex gap-4 text-xs text-cloud-faint">
              <span className="hidden sm:inline">Overview</span>
              <span className="hidden text-cloud sm:inline">Goals</span>
              <span className="hidden sm:inline">Invest</span>
            </div>
          </div>

          <div className="grid gap-5 p-5 md:p-6 lg:grid-cols-3">
            {/* Net worth — spans 2 */}
            <div className="lg:col-span-2">
              <div className="flex h-full flex-col rounded-2xl border border-cloud/8 bg-navy-800/60 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs text-cloud-dim">
                      <TrendingUp size={13} className="text-gold" /> Total net worth
                    </p>
                    <p className="mt-2 font-display text-4xl font-semibold text-cloud">₹2.26 Cr</p>
                    <p className="mt-1 text-sm text-emerald-300">▲ ₹48.2 L this year · +27%</p>
                  </div>
                  <div className="flex gap-1 rounded-full border border-cloud/8 p-1 text-[11px]">
                    {["1Y", "3Y", "All"].map((t, i) => (
                      <span
                        key={t}
                        className={cn("rounded-full px-2.5 py-1", i === 2 ? "bg-gold text-cloud" : "text-cloud-dim")}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <NetWorthChart />
              </div>
            </div>

            {/* Retirement readiness */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-cloud/8 bg-navy-800/60 p-6">
              <p className="self-start text-xs text-cloud-dim">Retirement readiness</p>
              <Gauge value={64} size={168} stroke={13} label="On track" sublabel="to retire at 60" className="mt-2" />
              <p className="mt-3 text-center text-xs text-cloud-faint">
                Funded to <span className="text-cloud">₹4.1 Cr</span> of ₹6.4 Cr goal
              </p>
            </div>

            {/* Goal progress */}
            <div className="rounded-2xl border border-cloud/8 bg-navy-800/60 p-6 lg:col-span-2">
              <p className="flex items-center gap-1.5 text-xs text-cloud-dim">
                <Target size={13} className="text-gold" /> Goal progress
              </p>
              <div className="mt-5 space-y-5">
                {GOALS_PROGRESS.map((g, i) => (
                  <div key={g.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-cloud">{g.label}</span>
                      <span className="text-cloud-dim">
                        {g.current}% · ETA {g.eta}
                      </span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-cloud/6">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-gold-200 to-gold"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.current}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, delay: 0.2 + i * 0.15, ease: EASE }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset allocation */}
            <div className="rounded-2xl border border-cloud/8 bg-navy-800/60 p-6">
              <p className="flex items-center gap-1.5 text-xs text-cloud-dim">
                <PieChart size={13} className="text-gold" /> Asset allocation
              </p>
              <div className="mt-4 flex items-center gap-5">
                <Donut />
                <ul className="flex-1 space-y-2 text-xs">
                  {ALLOCATION.map((a) => (
                    <li key={a.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-cloud-muted">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: a.color }} />
                        {a.label}
                      </span>
                      <span className="text-cloud">{a.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Financial freedom tracker */}
            <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.07] to-transparent p-6 lg:col-span-3">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs uppercase tracking-kicker text-gold/80">Financial Freedom Tracker</p>
                  <p className="mt-2 max-w-md text-pretty text-cloud-muted">
                    Passive income now covers <span className="font-semibold text-cloud">72%</span> of your
                    monthly lifestyle. You're <span className="font-semibold text-cloud">7 years</span> from the
                    day work becomes optional.
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl font-semibold text-gradient-gold">2039</p>
                  <p className="text-xs text-cloud-faint">Projected freedom year</p>
                </div>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-cloud/8">
                <motion.div
                  className="relative h-full rounded-full bg-gradient-to-r from-gold-200 via-gold to-gold-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: EASE }}
                >
                  <span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold shadow-gold" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a href="#consultation" className="group inline-flex items-center gap-2 text-sm text-cloud-muted transition-colors hover:text-gold">
            See your own dashboard in your first session
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function NetWorthChart() {
  const w = 600;
  const h = 200;
  const max = Math.max(...NET_WORTH_SERIES.map((d) => d.value));
  const min = Math.min(...NET_WORTH_SERIES.map((d) => d.value));
  const pts = NET_WORTH_SERIES.map((d, i) => {
    const x = (i / (NET_WORTH_SERIES.length - 1)) * w;
    const y = h - ((d.value - min) / (max - min)) * (h - 30) - 12;
    return [x, y] as const;
  });
  const line = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="mt-6 flex-1">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nw-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="rgba(14,27,46,0.08)" strokeWidth="1" />
        ))}
        <path d={area} fill="url(#nw-area)" />
        <motion.path
          d={line}
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: EASE }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] text-cloud-faint">
        {NET_WORTH_SERIES.map((d) => (
          <span key={d.year}>{d.year}</span>
        ))}
      </div>
    </div>
  );
}

function Donut() {
  const size = 104;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(14,27,46,0.08)" strokeWidth={stroke} />
      {ALLOCATION.map((a) => {
        const len = (a.pct / 100) * c;
        const seg = (
          <motion.circle
            key={a.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={stroke}
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: offset / c }}
          />
        );
        offset += len;
        return seg;
      })}
    </svg>
  );
}
