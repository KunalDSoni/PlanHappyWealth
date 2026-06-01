# 06 · Typography System

Type carries the luxury. A high-contrast serif display against a neutral grotesque, with a mono for figures.

## Typefaces (self-hosted via `@fontsource`)

| Role | Family | Why |
| --- | --- | --- |
| Display | **Fraunces** (variable) | Editorial, opulent, "old-money" serif with modern optical sizing — heritage + warmth |
| Sans / UI | **Inter** (variable) | Neutral, legible, fintech-standard grotesque |
| Mono / figures | **JetBrains Mono** | Tabular clarity for money + metrics |

Self-hosting = no Google round-trip, **no layout shift**, GDPR-friendly, faster LCP. Wired in `src/app/layout.tsx`, exposed as CSS variables `--font-display`, `--font-sans`, `--font-mono`.

## Fluid scale

Headlines scale with the viewport via `clamp()` so they're cinematic on desktop and controlled on mobile.

| Token | clamp | Use |
| --- | --- | --- |
| `display-2xl` | `clamp(3.5rem, 8vw, 7rem)` | Hero H1 |
| `display-xl` | `clamp(2.75rem, 6vw, 5rem)` | Major statements |
| `display-lg` | `clamp(2.25rem, 4.5vw, 3.5rem)` | Section titles (H2) |
| `display-md` | `clamp(1.75rem, 3vw, 2.5rem)` | Card / sub titles (H3) |
| Body L | `1.125–1.25rem` | Lede paragraphs |
| Body | `1rem` | Default |
| Small | `0.875rem` | Secondary |
| Caption | `0.75rem` | Labels, disclaimers |

## The kicker

A recurring brand device above section titles:

```
font-size: 0.75rem; text-transform: uppercase;
letter-spacing: 0.22em; color: gold/80;
```

Paired with a short gold rule. Establishes rhythm and signals "premium editorial."

## Pairing rules

- **Headlines:** Fraunces, weight 600, `letter-spacing` slightly negative (`-0.02em` to `-0.03em`) for a tighter, expensive set.
- **Gold-clip** (`text-gradient-gold`) on the *emphasis clause* of a headline only — never the whole line.
- **Body:** Inter, weight 400, `line-height` 1.6–1.7, `text-pretty`/`text-balance` for clean rag.
- **Numbers:** mono or Fraunces with `tabular-nums` so animated count-ups don't jitter width.

## Hierarchy example (hero)

```
kicker      ·  Private-bank planning, for every family     (0.75rem, gold, tracked)
H1          ·  Your family's dreams deserve …              (Fraunces 600, display-2xl)
   emphasis ·  more than financial advice.                 (gold-clip)
lede        ·  Build wealth, achieve life's biggest …      (Inter, 1.25rem, cloud-muted)
```

## Accessibility

- Base `1rem` respects user zoom; nothing is locked below 12px except decorative tracked labels.
- Line length capped (`max-w-2xl`/`max-w-3xl`) for readability (~60–75ch).
- `prefers-reduced-motion` does not affect type legibility; only animated reveals.
- Headlines remain AA-contrast against their gradient backgrounds.
