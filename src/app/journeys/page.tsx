import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { SuccessStories } from "@/components/sections/SuccessStories";

export const metadata: Metadata = {
  title: "Wealth Journeys",
  description:
    "Composite family case studies — challenge, discovery, blueprint, implementation, transformation, current life.",
};

const PROCESS = [
  { k: "01", t: "Challenge", v: "What life had asked of the family that the plan wasn't answering." },
  { k: "02", t: "Discovery", v: "An unhurried first conversation — about the family, not the portfolio." },
  { k: "03", t: "Blueprint", v: "The structure drafted layer by layer, from Protection up to Legacy." },
  { k: "04", t: "Implementation", v: "Instruments selected against the blueprint, not the other way round." },
  { k: "05", t: "Transformation", v: "Decisions that previously caused friction now happen quietly." },
  { k: "06", t: "Current life", v: "The household runs on a doctrine — the architect is on call, not in charge." },
];

export default function JourneysPage() {
  return (
    <SubPage
      kicker="Wealth Journeys"
      title={
        <>
          Real families. <span className="text-gradient-gold">Real turning points.</span>
        </>
      }
      lede="Not testimonials — composite case studies. Every household passes through the same six acts; the names and figures are illustrative."
    >
      <section className="section">
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-cloud/10 bg-cloud/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <li key={p.k} className="bg-navy-800/70 p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-kicker text-gold/80">{p.k}</p>
              <p className="mt-3 font-display text-xl font-semibold text-cloud">{p.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-cloud-muted">{p.v}</p>
            </li>
          ))}
        </ol>
      </section>

      <SuccessStories />
    </SubPage>
  );
}
