import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SubPage } from "@/components/layout/SubPage";
import { Consultation } from "@/components/sections/Consultation";
import { SITE, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Plan Happy Wealth. Office at ${SITE.address}. Direct: ${SITE.email}, ${SITE.phone}.`,
};

const CHANNELS = [
  {
    icon: MapPin,
    label: "Office",
    value: SITE.address,
    note: "By appointment only.",
  },
  {
    icon: Phone,
    label: "Direct line",
    value: SITE.phone,
    note: "Voice and WhatsApp.",
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    note: "We reply within one business day.",
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    label: "Practice hours",
    value: "Mon–Sat · 10:00 – 18:00 IST",
    note: "Out-of-hours briefs available for retained households.",
  },
];

export default function ContactPage() {
  return (
    <SubPage
      kicker="Speak with the practice"
      title={
        <>
          A first conversation is unhurried, <span className="text-gradient-gold">and free.</span>
        </>
      }
      lede="Reach the practice through any of the channels below — or schedule a private brief and we will reply with two times that work."
    >
      <section className="section">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-cloud/10 bg-cloud/[0.06] sm:grid-cols-2">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="grid grid-cols-[3rem_1fr] items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-gold/8 text-gold">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-kicker text-cloud-faint">
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-cloud">{c.value}</p>
                  <p className="mt-1 text-sm text-cloud-muted">{c.note}</p>
                </div>
              </div>
            );
            return (
              <li key={c.label} className="bg-navy-800/70 p-6 sm:p-8">
                {c.href ? (
                  <a href={c.href} className="block transition-colors hover:text-gold">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-cloud-faint">Find us:</span>
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
      </section>

      <Consultation />
    </SubPage>
  );
}
