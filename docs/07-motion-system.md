# 07 · Motion System

> Elegant and intentional. Never excessive.

Motion exists to **guide attention, reveal hierarchy, and reward interaction**. If an animation doesn't do one of those, it's cut.

## Foundations

### Signature easing
```
luxury      cubic-bezier(0.22, 1, 0.36, 1)   // the house curve — decisive in, soft settle
luxury-in   cubic-bezier(0.65, 0, 0.35, 1)   // symmetric for toggles
GSAP        power3.out                        // scroll reveals
```

### Duration scale
```
micro    150–250ms   hovers, taps, focus
default  300–500ms   tab/content swaps, modals
reveal   600–900ms   scroll entrances
ambient  6–8s loop   float, constellation drift, gradient pan
```

### Distance
- Reveal travel: 24–28px. Parallax: ±80–160px. Card lift: 4–6px. Button lift: 2px.
- Subtlety scales with frequency: the more often a motion fires, the smaller it is.

## The motion stack (and who does what)

| Tool | Responsibility | Where |
| --- | --- | --- |
| **Framer Motion** | Component state, entrances, layout/shared-element, modals, gestures | everywhere interactive |
| **GSAP + ScrollTrigger** | Scroll-batched stagger reveals (below the fold) | `GsapReveal` → WhyUs credentials |
| **Three.js** | Ambient depth (constellation w/ pointer parallax) | `AuroraField` (hero, lazy) |
| **CSS keyframes** | Cheap infinite ambients (shimmer, float, pulse) | tokens in `tailwind.config.ts` |

## Reusable primitives

- **`Reveal` / `RevealGroup` / `RevealItem`** — Framer `whileInView` fade-up with direction, delay, stagger. The default entrance.
- **`Parallax`** — scroll-linked `y` transform via `useScroll`/`useTransform`.
- **`GsapReveal`** — GSAP ScrollTrigger stagger; dynamically imports ScrollTrigger to stay out of the initial chunk.
- **`Counter` / `useCountUp`** — animated number growth, fires on in-view, `tabular-nums` to prevent reflow.
- **`Gauge`** — `useMotionValue` + `animate` drives both the arc `strokeDashoffset` and the live count.

## Signature interactions (the "sensory layer")

| Interaction | Behavior |
| --- | --- |
| **Animated number growth** | Counters + gauges count up on scroll-in |
| **Wealth accumulation** | Net-worth line + freedom tracker draw/fill via `pathLength`/width on view |
| **Card elevation** | `whileHover={{ y: -6 }}` + shadow → `glass-lg` + gold border |
| **Hover states** | Underlines wipe in, buttons lift + gold shine sweep (`.shine`) |
| **Shared-element** | Story poster → modal via Framer `layoutId` |
| **Tab morph** | Journey panel swaps with `AnimatePresence mode="wait"` + active pill `layoutId` |
| **Hero parallax** | Headline and proof-card move at different scroll rates; fade on exit |
| **Constellation** | Three.js motes drift + follow the pointer subtly |

## Choreography rules

1. **Stagger, don't swarm.** Groups reveal at 80–120ms intervals — the eye reads top-to-bottom.
2. **One hero moment per section.** Supporting elements underplay.
3. **In-view, once.** Entrances fire a single time (`viewport={{ once: true }}`) — no replay nausea on scroll-up.
4. **Interruptible.** Hovers/taps use springs and never block.

## Reduced motion

Every layer checks `prefers-reduced-motion`:
- Framer: travel/parallax collapse to 0 (via `useReducedMotion`).
- Counters/gauges snap to final value.
- GSAP `GsapReveal` and Three.js `AuroraField` **early-return** (no animation, no canvas).
- A global CSS `@media (prefers-reduced-motion: reduce)` zeroes durations as a safety net.

## Performance guardrails

- Animate only `transform` and `opacity` (GPU-friendly); avoid layout-triggering props.
- Three.js + ScrollTrigger are `dynamic()`-imported → not in First Load JS.
- `will-change` used sparingly; `vector-effect: non-scaling-stroke` keeps SVG strokes crisp.
- Ambient loops pause off-screen where supported.
