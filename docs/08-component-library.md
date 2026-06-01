# 08 · Component Library

Components are split into **primitives** (`ui/`), **motion** (`motion/`), **3D** (`three/`), **layout** (`layout/`), and **sections** (`sections/`). All are typed, themeable via tokens, and reduced-motion aware.

## Primitives — `src/components/ui/`

### `Button`
Polymorphic (`<button>` or `<a href>`), spring hover-lift + tap.
- **Variants:** `primary` (gold fill, navy text, shine), `secondary` (glass), `ghost`, `gold-outline`.
- **Sizes:** `sm` `md` `lg`. Props: `variant`, `size`, `href`, native button attrs.

```tsx
<Button href="#health-score" size="lg">Calculate Your Financial Health</Button>
<Button variant="secondary">Learn more</Button>
```

### `GlassCard`
Frosted surface; `interactive` adds hover lift + gold border; `strong` = heavier blur (modals).

### `Gauge`
Animated SVG arc dial. `useMotionValue` drives `strokeDashoffset` + a live count-up label. Props: `value` (0–100), `size`, `stroke`, `sweep`, `label`, `sublabel`, gradient stroke. Used for the overall + 4 sub-scores and retirement readiness.

### `Counter`
Animated number (`useCountUp`) with `prefix`/`suffix`/`decimals`; counts on scroll-in; `tabular-nums`.

### `SectionHeading`
Kicker + gold rule + `display-lg` title + lede. `align` left/center. Wraps lines in `Reveal`.

### `SectionDivider`
Hairline with a gold node — quiet transition between sections.

## Motion — `src/components/motion/`

| Component | Engine | Use |
| --- | --- | --- |
| `Reveal`, `RevealGroup`, `RevealItem` | Framer | Default scroll entrance + stagger |
| `Parallax` | Framer `useScroll` | Scroll-linked translate |
| `GsapReveal` | GSAP ScrollTrigger | Below-fold stagger reveal |

## 3D — `src/components/three/`

### `AuroraField`
Vanilla Three.js constellation (two layered point clouds, additive glow sprites, pointer parallax). Self-cleaning (disposes geometry/material/renderer on unmount), early-returns on reduced motion, and is **`dynamic()`-imported with `ssr:false`** so it never blocks first paint.

## Layout — `src/components/layout/`

- **`Navbar`** — fixed; transparent at top, condenses to a frosted pill on scroll (`useScroll` + `useMotionValueEvent`); full-screen glass menu on mobile.
- **`Footer`** — brand, link columns, contact, legal, compliance disclaimer.
- **`Logo`** — inline SVG monogram (gold ascending arc in a ring).

## Sections — `src/components/sections/`

| Component | Deliverable | Interactivity |
| --- | --- | --- |
| `Hero` | Hero | Parallax, dual CTA, lazy Three.js, animated proof-card |
| `WealthJourney` | Wealth Journey | 6-goal tab selector → morphing panel |
| `FinancialHealthScore` | Health Score | 6-step wizard → gauges + recommendations (real engine) |
| `WhyUs` | Why PHW | Animated counters + GSAP credential stagger |
| `SuccessStories` | Stories | Netflix cards → shared-element video modal |
| `DashboardDemo` | Dashboard | Net-worth chart, goals, gauge, donut, freedom tracker |
| `EducationHub` | Education | Category filter + magazine grid |
| `AIGuide` | AI Guide | Chat UI → `/api/ai-guide` (scripted or LLM) |
| `Consultation` | Conversion | 3 paths + booking form → `/api/lead` |

## State & data

- Section interactivity is **local `useState`** — no global store needed.
- The scoring engine (`lib/scoring.ts`) is **pure** and decoupled from the UI (easy to unit-test / swap).
- Content comes from `lib/data/*` (seed) and is **CMS-swappable** (Sanity) without touching components.

## Conventions

- Server Components by default; `"use client"` only where interactivity/motion requires it.
- `cn()` (clsx + tailwind-merge) for class composition.
- Props typed; variants expressed as typed records, not string soup.
- No hardcoded hex in components — colors come from tokens.
