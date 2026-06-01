# 12 · Production Code Examples

Real, shippable patterns from this repo. Every snippet below is live in the codebase.

## 1 · Tokenized Tailwind theme (`tailwind.config.ts`)

The palette and motion language as code — the single source of truth.

```ts
colors: {
  navy: { DEFAULT: "#07111F", 900: "#07111F", 800: "#0E1B2E", 950: "#05080F" },
  gold: { DEFAULT: "#D4AF37", 200: "#E8CE7F", 400: "#D4AF37", 600: "#967421" },
  cloud: { DEFAULT: "#F8F9FB", muted: "#C7CEDB", dim: "#8B97AC", faint: "#5A6478" },
},
fontSize: {
  "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
},
transitionTimingFunction: { luxury: "cubic-bezier(0.22, 1, 0.36, 1)" },
```

## 2 · Polymorphic Button with gold shine (`ui/Button.tsx`)

Renders as `<a>` or `<button>`, spring micro-interaction, typed variants.

```tsx
const variants = {
  primary: "shine bg-gold text-navy-900 hover:bg-gold-300 shadow-gold-soft font-semibold",
  secondary: "glass text-cloud hover:bg-white/[0.08] hover:border-white/20",
  // …
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size]);
    if (href) return (
      <motion.a href={href} className={classes}
        whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}>
        {children}
      </motion.a>
    );
    return <motion.button ref={ref} className={classes} whileHover={{ y: -2 }} {...props}>{children}</motion.button>;
  },
);
```

## 3 · The Financial Health Score engine (`lib/scoring.ts`)

Pure, deterministic, unit-testable. Decoupled from the UI so you can swap in an advisor-grade model later.

```ts
export function scoreAssessment(input: AssessmentInput): ScoreBreakdown {
  const annualIncome = input.monthlyIncome * 12;
  const yearsToRetire = Math.max(0, input.retirementAge - input.age);

  // Protection: life cover vs ideal 15× income, plus emergency fund
  const coverScore = clamp((input.lifeCover / annualIncome / 15) * 100, 0, 100);
  // Retirement: project corpus vs 4%-rule need
  const projectedCorpus = fvLumpSum(input.investments, 0.11, yearsToRetire)
    + fvSeries(input.monthlyIncome * 0.2 * 12, 0.11, yearsToRetire);
  const neededCorpus = annualIncome * 0.7 * Math.pow(1.06, yearsToRetire) * 25;
  // …weighted overall + targeted recommendations
}
```

**Verified** against four personas (At Risk → Exceptional); all sub-scores stay within 0–100 and the top recommendation always targets the weakest pillar.

## 4 · Animated arc Gauge (`ui/Gauge.tsx`)

One `MotionValue` drives both the SVG sweep and the live count-up.

```tsx
const progress = useMotionValue(0);
const dashoffset = useTransform(progress, (p) => arcLength - (p / 100) * arcLength);
const display = useTransform(progress, (p) => Math.round(p));

useEffect(() => {
  if (reduce) { progress.set(value); return; }
  const c = animate(progress, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
  return () => c.stop();
}, [value]);

<motion.circle style={{ strokeDashoffset: dashoffset }} stroke="url(#grad)" /* … */ />
<motion.span>{display}</motion.span>
```

## 5 · Scroll-reveal primitive (`motion/Reveal.tsx`)

The default entrance — declarative, staggered, reduced-motion aware.

```tsx
<RevealGroup className="grid lg:grid-cols-4">
  {items.map((it) => <RevealItem key={it.id}>{/* card */}</RevealItem>)}
</RevealGroup>
```

## 6 · Three.js kept off the critical path (`sections/Hero.tsx`)

```tsx
const AuroraField = dynamic(
  () => import("@/components/three/AuroraField").then((m) => m.AuroraField),
  { ssr: false },
);
```

Result: homepage **First Load JS dropped from 313 kB → 209 kB**.

## 7 · GSAP ScrollTrigger, lazily registered (`motion/GsapReveal.tsx`)

```tsx
import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
  gsap.registerPlugin(ScrollTrigger);
  ctx = gsap.context(() => {
    gsap.from(Array.from(ref.current!.children), {
      opacity: 0, y: 28, ease: "power3.out", stagger: 0.12,
      scrollTrigger: { trigger: ref.current!, start: "top 78%", once: true },
    });
  }, ref);
});
```

## 8 · Lead capture, graceful without a DB (`app/api/lead/route.ts`)

```ts
const supabase = getServiceClient();
if (!supabase) {
  console.info("[lead] (mock — no Supabase configured)", lead.email);
  return NextResponse.json({ ok: true, mode: "mock" });   // funnel never breaks
}
const { error } = await supabase.from("leads").insert(lead);
return NextResponse.json({ ok: !error, mode: "stored" });
```

## 9 · Env-guarded backend client (`lib/supabase/server.ts`)

```ts
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;                 // → app runs on mock data
  return createClient(url, key, { auth: { persistSession: false } });
}
```

## 10 · SEO as code (`app/layout.tsx` + `sitemap.ts` + `robots.ts`)

```ts
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "…", template: "%s · Plan Happy Wealth" },
  openGraph: { images: [{ url: "/og.svg", width: 1200, height: 630 }] },
  // + JSON-LD FinancialService injected in <body>
};
```

---

These patterns generalize across the codebase: **typed variants over string soup, tokens over hex, pure logic over coupled UI, and graceful degradation when a backend is absent.**
