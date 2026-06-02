import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { SubPage } from "@/components/layout/SubPage";

export const metadata: Metadata = {
  title: "Wealth Intelligence",
  description:
    "The Plan Happy Wealth journal — family wealth, retirement, investing, insurance, tax, behavioural finance, legacy and markets.",
};

const CATEGORIES = [
  { id: "family", label: "Family Wealth", note: "Conversations at the household level." },
  { id: "retirement", label: "Retirement", note: "A 35-year paycheque, not a finish line." },
  { id: "investing", label: "Investing", note: "Discipline over conviction. Always." },
  { id: "insurance", label: "Insurance", note: "Term-first, jargon-last." },
  { id: "tax", label: "Tax Planning", note: "The right wrapper for the right rupee." },
  { id: "behavioural", label: "Behavioural Finance", note: "Why we sell at the wrong time." },
  { id: "legacy", label: "Legacy", note: "What outlasts the will." },
  { id: "markets", label: "Markets", note: "Quiet notes from a long horizon." },
];

const FORTHCOMING = [
  {
    category: "Family Wealth",
    title: "The household balance sheet your accountant will never draft.",
    blurb: "A 30-minute exercise for every couple — assets, liabilities, lifestyle obligations and the household's true freedom number.",
    readTime: "8 min read",
  },
  {
    category: "Retirement",
    title: "Why the 4% rule was written for someone else's grandfather.",
    blurb: "Calibrating a safe withdrawal rate for Indian inflation, hospitalisation and a 35-year horizon.",
    readTime: "12 min read",
  },
  {
    category: "Behavioural Finance",
    title: "The cost of selling on a Wednesday.",
    blurb: "What a decade of mid-week panic decisions actually costs a portfolio — and how a written doctrine prevents them.",
    readTime: "9 min read",
  },
  {
    category: "Legacy",
    title: "A will is a document. A succession plan is a doctrine.",
    blurb: "Why the next generation needs the operating manual, not just the names on the title.",
    readTime: "11 min read",
  },
];

export default function IntelligencePage() {
  return (
    <SubPage
      kicker="Wealth Intelligence"
      title={
        <>
          A practice that publishes. <span className="text-gradient-gold">Quietly. On purpose.</span>
        </>
      }
      lede="Notes from the practice — editorial, not promotional. Eight ongoing threads, written for households that prefer the long view."
    >
      <section className="section">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex flex-col gap-2 rounded-2xl border border-cloud/10 bg-navy-800/60 p-5 transition-colors hover:border-gold/40"
            >
              <span className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                Thread · {c.label}
              </span>
              <span className="font-display text-lg font-semibold text-cloud">{c.label}</span>
              <span className="text-sm text-cloud-muted">{c.note}</span>
              <ArrowUpRight
                size={16}
                className="mt-2 text-cloud-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="flex items-end justify-between">
          <div>
            <p className="kicker">Forthcoming</p>
            <h2 className="mt-5 max-w-xl text-balance font-display text-display-md font-semibold leading-tight text-cloud">
              First essays, in draft.
            </h2>
          </div>
        </div>

        <ul className="mt-10 divide-y divide-cloud/10 overflow-hidden rounded-3xl border border-cloud/10 bg-navy-800/40">
          {FORTHCOMING.map((p) => (
            <li key={p.title}>
              <article className="group grid gap-3 p-6 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-6 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">
                  {p.category}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-cloud">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cloud-muted">{p.blurb}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs text-cloud-faint">
                  <BookOpen size={14} /> {p.readTime}
                </span>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-cloud-faint">
          The journal is being migrated from the practice&apos;s prior site and rewritten in
          this voice. Earlier posts will be archived under each thread as they are reissued.
        </p>
      </section>
    </SubPage>
  );
}
