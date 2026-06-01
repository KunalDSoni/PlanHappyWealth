# 04 · Design System

The system is **dark-luxury fintech**: a deep navy canvas, frosted glass surfaces, layered depth, a single gold signal color, and generous whitespace. Restraint is the brand.

## Design principles

1. **Quiet wealth.** One accent (gold), used sparingly, reads as more premium than a rainbow.
2. **Material: frosted glass.** Content lives on translucent, blurred surfaces over a navy field — depth without clutter.
3. **Editorial type.** A serif display (Fraunces) against a clean grotesque (Inter) signals heritage + modernity.
4. **Generous negative space.** Sections breathe; nothing is crowded.
5. **Motion as meaning.** Animation guides attention and rewards interaction — never decoration for its own sake.

## Tokens (source of truth: `tailwind.config.ts` + `globals.css`)

### Color

```
navy.900   #07111F   primary canvas (Deep Navy)
navy.800   #0E1B2E   elevated surface (Midnight Blue)
navy.950   #05080F   deepest / footer
gold.400   #D4AF37   signal / wealth (Gold Accent)
gold.200   #E8CE7F   gradient highlight
cloud      #F8F9FB   primary text (Soft White)
cloud.muted #C7CEDB  secondary text
cloud.dim  #8B97AC   tertiary text
cloud.faint #5A6478  captions / disclaimers
```

Full palette + usage + contrast: [`05-color-palette.md`](05-color-palette.md).

### Type scale (fluid, `clamp()`)

```
display-2xl  clamp(3.5rem, 8vw, 7rem)     hero headline
display-xl    clamp(2.75rem, 6vw, 5rem)
display-lg    clamp(2.25rem, 4.5vw, 3.5rem) section titles
display-md    clamp(1.75rem, 3vw, 2.5rem)  card/sub titles
body          1rem–1.25rem                  Inter
kicker        0.75rem, tracking 0.22em, uppercase, gold
```

Details: [`06-typography-system.md`](06-typography-system.md).

### Spacing & radius

- 4px base grid. Section rhythm: `py-24` (mobile) → `py-32` (desktop).
- Radii: cards `1.5rem` (`rounded-3xl`), hero/feature `2rem`, pills `full`.
- Container: `max-w-7xl`, `px-6` → `px-8`.

### Elevation (shadow)

```
shadow-glass     subtle inset highlight + soft drop      default cards
shadow-glass-lg  deeper, for modals / hero proof-card
shadow-gold-soft gold glow for primary CTAs / active state
```

### Materials

```css
.glass         /* translucent white gradient + 20px blur + hairline border */
.glass-strong  /* heavier blur for modals / nav-on-scroll */
.gold-rule     /* hairline gold divider with transparent ends */
.text-gradient-gold  /* ivory→gold→bronze clipped text */
```

## Layout grid

- 12-column mentality, expressed via CSS grid per section.
- Common section split: `lg:grid-cols-[0.9fr_1.1fr]` (selector ↔ content) or `[1.3fr_1fr]` (feature ↔ list).
- Dashboard uses a 3-col bento with spans.

## Iconography

[`lucide-react`](https://lucide.dev) — consistent 1.5–2px stroke, sized 13–22px. Gold or `cloud` only. Never multicolor.

## Imagery direction

- Cinematic, low-key, navy-graded "family wealth moments."
- Layered with gold radial glows + subtle film grain (`bg-noise` at 3–5% opacity).
- Posters use directional navy gradients (`posterGradient`) so the system stays cohesive even before real photography is dropped in.

## Voice & tone

- Warm, confident, plain-spoken. Outcomes, not jargon.
- Short sentences. Second person. Optimism without hype.
- Examples: *"Retire on your terms — and never outlive your money." · "Answers now. Humans when it matters."*

## Do / Don't

| Do | Don't |
| --- | --- |
| Use gold for one thing per viewport | Flood the page with gold |
| Let sections breathe | Fill every pixel |
| Animate on intent / scroll-in | Animate everything, always |
| Keep numbers labelled + honest | Imply guaranteed returns |
| Maintain AA contrast | Place `cloud.faint` on busy gradients |
