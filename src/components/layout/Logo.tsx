import { cn } from "@/lib/utils";

/** Plan Happy Wealth monogram — a gold ascending arc inside a ring. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="16" stroke="url(#lg)" strokeWidth="1.5" opacity="0.5" />
        <path
          d="M9 22.5C12 22.5 13.5 11 17 11C20.5 11 22 18 25 18"
          stroke="url(#lg)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="25" cy="18" r="2.2" fill="#D4AF37" />
        <defs>
          <linearGradient id="lg" x1="2" y1="4" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4E6B8" />
            <stop offset="1" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-tight text-cloud">
          Plan Happy
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold/80">
          Wealth
        </span>
      </span>
    </span>
  );
}
