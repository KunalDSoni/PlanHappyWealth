import { SITE } from "@/lib/constants";

interface LegalDocProps {
  effective?: string;
  sections: Array<{
    n: string;
    title: string;
    body: React.ReactNode;
  }>;
  draftNotice?: boolean;
}

/**
 * Editorial chrome for legal pages. Renders a numbered section list with
 * editorial typography and a discreet "draft" notice at the top when the
 * practice has not yet sealed the copy with counsel.
 */
export function LegalDoc({
  effective = "1 January 2026",
  sections,
  draftNotice = true,
}: LegalDocProps) {
  return (
    <section className="section">
      {draftNotice && (
        <div className="mb-10 rounded-2xl border border-gold/30 bg-gold/8 p-5 text-sm leading-relaxed text-cloud-muted">
          <p>
            <span className="font-mono text-[10px] uppercase tracking-kicker text-gold">
              Draft for counsel review
            </span>{" "}
            — this template reflects standard practice for an AMFI-registered Mutual Fund
            Distributor and is published in good faith. {SITE.name} will replace this page
            with the version sealed by its retained counsel.
          </p>
        </div>
      )}

      <p className="font-mono text-[11px] uppercase tracking-kicker text-cloud-faint">
        Effective · {effective}
      </p>

      <ol className="mt-10 space-y-12">
        {sections.map((s) => (
          <li key={s.n} className="grid gap-4 border-t border-cloud/10 pt-10 lg:grid-cols-[8rem_1fr] lg:gap-10">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] uppercase tracking-kicker text-gold">{s.n}</p>
              <p className="mt-3 font-display text-lg font-semibold leading-tight text-cloud">
                {s.title}
              </p>
            </div>
            <div className="prose prose-invert max-w-3xl text-pretty leading-relaxed text-cloud-muted [&_p]:mb-4 [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
              {s.body}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
