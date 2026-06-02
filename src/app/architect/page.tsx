import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { Architect } from "@/components/sections/Architect";
import { FOUNDER, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Meet ${FOUNDER.name} · ${FOUNDER.role}`,
  description: FOUNDER.bio,
};

const CAREER = [
  { year: "1998", note: "Begins practice across protection, mutual funds and tax-aware planning." },
  { year: "2007", note: "Founds the family-wealth practice that becomes Plan Happy Wealth." },
  { year: "2013", note: "Earns the Certified Financial Planner (CFP) designation." },
  { year: "2018", note: "Adds the Qualified Personal Finance Professional (QPFP) credential." },
  { year: "Present", note: "Leads architecture for 2,400+ family blueprints; AMFI-registered distributor." },
];

export default function ArchitectPage() {
  return (
    <SubPage
      kicker="Meet your Wealth Architect"
      title={
        <>
          {FOUNDER.name}, <span className="text-gradient-gold">in her own practice.</span>
        </>
      }
      lede={`${FOUNDER.experienceYears}+ years of practice, three earned credentials and a single principle — every household deserves a blueprint, not a product pitch.`}
    >
      <Architect />

      <section className="section">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="kicker">A practice in chapters</p>
            <h2 className="mt-5 max-w-md text-balance font-display text-display-md font-semibold leading-tight text-cloud">
              The shape of {FOUNDER.experienceYears}+ years in a single column.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-cloud-muted">
              The credentials are public. The patience underneath them — the unhurried sit-down,
              the long horizon, the disinterest in market noise — is the part the page can&apos;t
              certify. Sit with her once and you&apos;ll feel it.
            </p>
          </div>

          <ol className="relative space-y-7 border-l border-cloud/15 pl-7">
            {CAREER.map((c) => (
              <li key={c.year} className="relative">
                <span className="absolute -left-[34px] top-1 h-2.5 w-2.5 rounded-full border-2 border-gold bg-navy-900" />
                <p className="font-mono text-[11px] uppercase tracking-kicker text-gold">{c.year}</p>
                <p className="mt-2 text-pretty text-cloud-muted">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-3xl border border-cloud/10 bg-navy-800/60 p-7 shadow-glass sm:p-10">
          <p className="kicker">Schedule a private brief</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-display-md font-semibold leading-tight text-cloud">
            A first meeting is a conversation, not a sale.
          </h2>
          <p className="mt-5 max-w-xl text-cloud-muted">
            Reach Plan Happy Wealth at <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-4 hover:underline">{SITE.email}</a>{" "}
            or <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-gold underline-offset-4 hover:underline">{SITE.phone}</a>.
            We will listen first, draft second.
          </p>
        </div>
      </section>
    </SubPage>
  );
}
