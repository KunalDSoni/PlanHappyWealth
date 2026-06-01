# 05 · Color Palette

A four-color foundation. Discipline is the point: one canvas family, one accent, one light.

## Core brand

| Token | Hex | Role |
| --- | --- | --- |
| Deep Navy | `#07111F` | `navy.900` — primary canvas |
| Midnight Blue | `#0E1B2E` | `navy.800` — elevated surfaces, cards |
| Gold Accent | `#D4AF37` | `gold.400` — the single signal color |
| Soft White | `#F8F9FB` | `cloud` — primary text / inversion |

## Extended ramps

### Navy (canvas & surfaces)
```
navy.950  #05080F   deepest — footer, scrollbar track
navy.900  #07111F   ★ Deep Navy — page canvas
navy.800  #0E1B2E   ★ Midnight Blue — elevated surface
navy.700  #13243B   raised cards
navy.600  #1B3149   hover / borders on dark
```

### Gold (signal & wealth)
```
gold.50   #FBF6E6   faint wash
gold.200  #E8CE7F   gradient highlight (ivory-gold)
gold.400  #D4AF37   ★ Gold Accent — CTAs, active, metrics
gold.500  #B8932A   gradient shadow
gold.600  #967421   deep bronze (gradient end)
```

### Cloud (text on dark)
```
cloud        #F8F9FB   ★ primary text / headlines
cloud.muted  #C7CEDB   body / secondary
cloud.dim    #8B97AC   tertiary / labels
cloud.faint  #5A6478   captions / disclaimers
```

### Semantic
```
success  #34D399 (emerald-300/400)   positive deltas, "on track"
warning  #FCD34D (amber-300)          gaps, "needs attention"
```

## Signature gradients

```
text-gradient-gold   linear 120°  #F4E6B8 → #D4AF37 → #967421   (clipped headline text)
bg-radial-gold       radial top   rgba(212,175,55,.18) → transparent
bg-radial-aurora     radial top   rgba(27,49,73,.6) → transparent
gold-line            linear 90°   transparent → gold/.6 → transparent  (dividers)
gauge gradient       ivory → gold → bronze (progress arcs)
```

## Contrast (WCAG 2.1)

All combinations used for text meet **AA** (≥ 4.5:1 body, ≥ 3:1 large/UI):

| Foreground | Background | Ratio | Verdict |
| --- | --- | --- | --- |
| `cloud` #F8F9FB | `navy.900` #07111F | ~17.8:1 | AAA |
| `cloud.muted` #C7CEDB | `navy.900` | ~11.5:1 | AAA |
| `cloud.dim` #8B97AC | `navy.900` | ~6.2:1 | AA |
| `gold.400` #D4AF37 | `navy.900` | ~8.0:1 | AAA (text) |
| `navy.900` #07111F | `gold.400` #D4AF37 | ~8.0:1 | AAA (gold button text) |
| `cloud.faint` #5A6478 | `navy.900` | ~3.3:1 | AA (large / non-essential only) |

> Rule: `cloud.faint` is reserved for captions, disclaimers, and decorative labels — never essential body copy on busy backgrounds.

## Usage rules

1. **One gold moment per viewport.** The primary action or key metric — nothing competes.
2. **Gold on navy, navy on gold.** Gold text sits on dark; gold *fills* carry navy text.
3. **Elevation via translucency,** not lighter solids — frosted glass over the navy field.
4. **Emerald/amber are functional only** (deltas, status). They never become brand decoration.
