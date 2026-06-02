import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FBFCFE_0%,#F4F6FA_100%)]" />
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="nf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,27,46,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#nf-grid)" />
        <g stroke="rgba(184,147,42,0.45)" strokeWidth="1" fill="none">
          <rect x="220" y="420" width="760" height="140" />
          <path d="M 220 420 L 600 220 L 980 420" />
        </g>
      </svg>

      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cloud/15 bg-navy-900/70 px-4 py-1.5 backdrop-blur-md">
          <Compass size={13} className="text-gold" />
          <span className="text-[11px] font-medium uppercase tracking-kicker text-cloud-muted">
            Off the blueprint
          </span>
        </div>

        <h1 className="mt-7 text-balance font-display text-display-xl font-semibold leading-[0.96] text-cloud">
          404. <span className="text-gradient-gold">The page is not yet drafted.</span>
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cloud-muted">
          The address you followed isn&apos;t part of our current architecture. Return to the
          home blueprint, or schedule a private brief with {SITE.name.split(" ").slice(0, 2).join(" ")}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <ArrowLeft size={18} />
            Return to the Blueprint
          </Button>
          <Link
            href="/#consultation"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-base font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Book a Private Brief
          </Link>
        </div>
      </div>
    </main>
  );
}
