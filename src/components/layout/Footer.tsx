import { Logo } from "@/components/layout/Logo";
import { SITE, FOUNDER, SOCIAL } from "@/lib/constants";

const columns = [
  {
    title: "The Blueprint",
    links: [
      { label: "Six layers, one household", href: "/blueprint" },
      { label: "Future Wealth Horizon", href: "/blueprint#horizon" },
      { label: "Financial Health Assessment", href: "/#health-score" },
      { label: "Services map", href: "/blueprint#services" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Meet the Architect", href: "/architect" },
      { label: "Wealth Journeys", href: "/journeys" },
      { label: "Wealth Intelligence", href: "/intelligence" },
      { label: "Book a Consultation", href: "/contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclosures", href: "/disclosures" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cloud/10 bg-navy-800/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-cloud-dim">
              {SITE.description}
            </p>
            <address className="not-italic mt-6 flex flex-col gap-1 text-sm text-cloud-muted">
              <span className="text-cloud-dim">{SITE.address}</span>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold"
              >
                {SITE.phone}
              </a>
            </address>
            <div className="mt-5 flex gap-3 text-xs">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-cloud/15 px-3 py-1.5 text-cloud-muted transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-kicker text-gold/80">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cloud-muted transition-colors hover:text-cloud"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 gold-rule" />

        <div className="mt-8 grid gap-4 text-xs text-cloud-faint md:grid-cols-[1fr_auto] md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.registration}. Founded by{" "}
            {FOUNDER.name}, {FOUNDER.credentials.join(", ")}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy" className="transition-colors hover:text-cloud-muted">Privacy</a>
            <a href="/terms" className="transition-colors hover:text-cloud-muted">Terms</a>
            <a href="/disclosures" className="transition-colors hover:text-cloud-muted">Disclosures</a>
            <a href="/disclosures" className="transition-colors hover:text-cloud-muted">AMFI / SEBI / IRDAI</a>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-cloud-faint">
          Mutual fund investments are subject to market risks. Read all scheme-related
          documents carefully. Plan Happy Wealth is an AMFI-registered Mutual Fund Distributor
          and provides financial planning and educational guidance. Past performance is not
          indicative of future returns. Illustrative figures, household specimens and
          projections shown on this site are for educational purposes and do not constitute
          investment, tax or legal advice.
        </p>
      </div>
    </footer>
  );
}
