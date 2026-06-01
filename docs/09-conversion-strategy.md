# 09 · Conversion Strategy

## Three paths, one philosophy: earn the click by giving value first

| Tier | Action | Commitment | Anchor |
| --- | --- | --- | --- |
| **Primary** | Book a Consultation | High | `#consultation` |
| **Secondary** | Financial Health Assessment | Low (no email to start) | `#health-score` |
| **Tertiary** | Download Wealth Blueprint | Email-gated lead magnet | `#blueprint` |

Each visitor self-selects their readiness. The low-commitment paths *feed* the primary one — a finished Health Score ends with "Book my free session."

## CTA placement map (psychology of the scroll)

| Position | CTA | Rationale |
| --- | --- | --- |
| Nav (persistent) | Book + Health Score | Always-available primary; condensed pill keeps it present without nagging |
| Hero | Start Journey · Calculate | Dual: aspiration (primary) + tool (value-first) |
| Wealth Journey | "Build my [goal] plan" | Contextual micro-commitment after self-identifying |
| Health Score result | "Book my free session" | **Peak intent** — fires right after the insight "aha" |
| Dashboard | "See your own dashboard" | Desire transfer — they want what they just saw |
| AI Guide | Advisor hand-off | Captures the moment a question reveals a real need |
| Consultation | 3 paths + form | The dedicated decision zone |

> Principle: **one primary action per viewport.** Secondary actions are visually quieter (ghost/secondary variants) so attention is never split.

## Reducing friction (the conversion engine)

1. **Value before capture.** The Health Score shows full results with **no email**. Capture happens after trust is earned.
2. **Sliders + presets** beat blank fields — faster, less intimidating, mobile-perfect.
3. **Sensible defaults** mean the tool produces a result in two taps.
4. **Optimistic submit.** The booking form confirms instantly even if the network blips; the lead is captured server-side (`/api/lead`).
5. **Short forms.** Name, phone, email, goal — nothing more at first contact.

## Persuasion principles (used honestly)

- **Reciprocity** — free score, free blueprint, free first session.
- **Social proof** — counters (2,400+ families) + cinematic case studies + "Most chosen" badge on the primary path.
- **Authority** — SEBI/IRDAI, CFP®, fiduciary language placed beside claims.
- **Loss aversion, gently** — "never outlive your money," the visible *gap to close* in the score.
- **Commitment & consistency** — micro-yeses (pick a goal → move a slider → see a score → book).
- **Anticipation** — "what happens in the first 30 minutes" removes fear of the unknown.

## Trust at the point of conversion

- "No commissions pitched. No obligation. Just clarity."
- "We never sell your data."
- Composite-story and illustrative-figure disclosures keep claims credible.

## Funnel & instrumentation

```
View ─▶ Scroll past Hero ─▶ Start Health Score ─▶ Complete Score ─▶ Book / Download
        (engagement)         (activation)          (qualified)       (conversion)
```

Track per step; tag every lead with `source` (`consultation` | `blueprint` | `score`) and optional `score`. Store anonymized outcomes in `assessments` to find where qualified users drop.

## Experiment backlog (see Sanity experimentation skill)

- Hero CTA order (aspiration-first vs tool-first).
- Health Score length (6 vs 4 questions) → completion rate.
- "Most chosen" badge on/off → primary-path share.
- Blueprint gate timing (before vs after preview).
- AI Guide proactive nudge vs passive.
