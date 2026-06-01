# 03 · UX Strategy

## The reframe

| From (advisor site) | To (wealth experience) |
| --- | --- |
| "We offer insurance & mutual funds" | "We help your family reach its dreams" |
| Product catalog | Outcome journeys |
| Static testimonials | Cinematic case studies |
| Contact form | Multiple low-friction conversion paths |
| Stock photography | Cinematic, layered, motion-led depth |
| Trust = logos | Trust = *felt* through clarity and calm |

We **evoke emotion before presenting services.** The first thing a visitor feels is *possibility and calm*, not a pitch.

## Audience & jobs-to-be-done

- **The Provider (32–45).** Single/dual income, young family. *"Am I doing enough for my kids and our future?"* → Wealth Journey + Health Score.
- **The Catcher-Up (45–55).** Started late, anxious. *"Is it too late?"* → reassurance via "Late Starters" story + score that always ends with hope.
- **The Windfall (35–50).** Sudden liquidity, paralysis. *"What do I do with this?"* → Dashboard + advisor.
- **The Optimizer (HNI).** Has assets, wants efficiency. *"Am I leaving returns on the table?"* → Tax score + private-bank credibility.

## Emotional arc (the five feelings)

The scroll is choreographed to move the visitor through a deliberate sequence:

1. **Secure** — calm navy, fiduciary signals, no flashing urgency.
2. **Inspired** — hero promise; "dreams deserve more."
3. **Empowered** — the Health Score hands them insight and agency in 60 seconds.
4. **Optimistic** — every score and story resolves toward a hopeful next step.
5. **Wealthy** — the dashboard lets them *try on* the feeling of being on top of their money.

## Friction strategy

- **Give value before asking.** The Health Score requires **no email** to see results; capture happens *after* the "aha."
- **Sliders over typing.** The assessment uses sliders + preset chips — fast, tactile, mobile-friendly, and non-intimidating (no blank number fields).
- **Default-rich.** Every input starts at a sensible default so the tool feels alive immediately and a user can reach results in two taps.
- **Reversible.** Back buttons, Retake, Escape-to-close modals. Nothing is a dead end.

## Trust architecture

- Fiduciary / SEBI / IRDAI language placed *near* claims, not buried.
- Numbers are labelled **illustrative**; methodology stated on the Health Score.
- The AI guide explicitly defers to humans "when it counts" — honesty as a trust signal.
- Composite stories disclosed as composite — credibility through transparency.

## Accessibility commitments (WCAG 2.1 AA)

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`); single `h1`.
- Skip-to-content link; logical tab order; visible gold focus rings.
- `prefers-reduced-motion` disables parallax, Three.js, count-ups, and ScrollTrigger.
- AA contrast on all text (see `05-color-palette.md` for ratios).
- ARIA: `role="tablist"`/`aria-selected` on the Journey selector; `aria-label`s on sliders, icon buttons, and the chat input; focus-trapped modal with Escape.
- Touch targets ≥ 44×44px.

## Measurement plan

| Goal | Primary metric | Signal |
| --- | --- | --- |
| Emotional engagement | Scroll depth, time-on-page | Reaches Stories/Dashboard |
| Activation | Health Score completion rate | Finished 6 steps |
| Conversion | Consultation bookings | `lead` source = consultation |
| Assist | Blueprint downloads, AI chats | Tertiary path usage |
| Quality | Lighthouse, CWV (LCP/INP/CLS) | 95+ / green |

Instrument with privacy-respecting analytics; store anonymized assessment outcomes in Supabase `assessments` for funnel insight.
