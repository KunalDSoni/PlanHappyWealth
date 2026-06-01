import { Logo } from "@/components/layout/Logo";
import { SITE } from "@/lib/constants";

const columns = [
  {
    title: "Plan For",
    links: ["Retirement", "Child Education", "Dream Home", "Wealth Creation", "Family Protection"],
  },
  {
    title: "Platform",
    links: ["Financial Health Score", "Wealth Dashboard", "AI Guide", "Education Hub", "Success Stories"],
  },
  {
    title: "Company",
    links: ["Our Philosophy", "Advisors & Credentials", "Careers", "Press", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-cloud-dim">
              Helping families build wealth, confidence, and financial freedom — without stress.
              Outcomes over products. Always.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-cloud-muted">
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {SITE.phone}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-kicker text-gold/80">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cloud-muted transition-colors hover:text-cloud"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 gold-rule" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-cloud-faint">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-cloud-faint">
            <a href="#" className="transition-colors hover:text-cloud-muted">Privacy</a>
            <a href="#" className="transition-colors hover:text-cloud-muted">Terms</a>
            <a href="#" className="transition-colors hover:text-cloud-muted">Disclosures</a>
            <a href="#" className="transition-colors hover:text-cloud-muted">SEBI / IRDAI</a>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-[11px] leading-relaxed text-cloud-faint">
          Investments are subject to market risks. Read all scheme-related documents carefully.
          Plan Happy Wealth provides financial planning and educational guidance; it is not a
          guarantee of returns. Illustrative figures and projections shown on this site are for
          educational purposes and do not constitute investment, tax, or legal advice.
        </p>
      </div>
    </footer>
  );
}
