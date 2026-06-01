# 02 · Homepage Wireframe

Low-fidelity blueprint of the cinematic scroll. Each block notes its **emotional job**, layout, and motion.

```
┌─────────────────────────────────────────────────────────────┐
│  NAV (glass, scroll-aware)        Logo  ·  links  ·  [Book]   │
└─────────────────────────────────────────────────────────────┘

╔═════════════════════════════ HERO ═══════════════════════════╗
║  ◦ badge: "Private-bank planning, for every family"          ║
║                                                              ║
║   Your family's dreams deserve            ┌───────────────┐  ║
║   MORE THAN FINANCIAL ADVICE.             │  Net worth    │  ║
║                                           │  ₹2.26 Cr ▲   │  ║
║   Build wealth, achieve goals, create     │  ∿ sparkline  │  ║
║   lasting financial freedom…              │  ▓▓▓▓▓░ 64%   │  ║
║                                           │  ▓▓▓▓▓▓ 72%   │  ║
║   [ Start Your Journey ] [ Calculate ]    └───────────────┘  ║
║   ✓ SEBI fiduciaries · 2,400+ families · ₹1,850 Cr           ║
║   (bg: lazy Three.js constellation + gold radial + parallax) ║
╚══════════════════════════════════════════════════════════════╝
                         ⌄ scroll cue

╔═══════════════════ WEALTH JOURNEY ═══════════════════════════╗
║  "What are you planning for?"                                ║
║  ┌──────────────┐   ┌──────────────────────────────────────┐ ║
║  │ ◉ Education   │   │  EYEBROW                              │ ║
║  │ ○ Retirement  │   │  Big morphing headline               │ ║
║  │ ○ Dream Home  │→  │  story copy…                         │ ║
║  │ ○ Wealth      │   │  ₹1.8 Cr   [3 pillar stat cards]     │ ║
║  │ ○ Protection  │   │  [ Build my plan → ]                 │ ║
║  │ ○ Freedom     │   └──────────────────────────────────────┘ ║
║  (tabs swap right panel w/ AnimatePresence)                  ║
╚══════════════════════════════════════════════════════════════╝

╔════════════════ FINANCIAL HEALTH SCORE ══════════════════════╗
║  ▓▓▓▓▓▓▓▓░░░░░  progress                                     ║
║  Q3/6  "Liquid savings on hand?"     ₹6.0 L                  ║
║         ●────────────────○  slider   [chips]   [Back][Next]  ║
║  ── on finish ──                                             ║
║      ◠ 74 ◡  Overall      ◔ ◔ ◔ ◔  Protection/Invest/        ║
║      "Strong"             Retire/Tax gauges                  ║
║      [projected | needed | gap]   [priority moves ×4]        ║
║      [ Book my free session → ]                              ║
╚══════════════════════════════════════════════════════════════╝

╔═══════════════ WHY PLAN HAPPY WEALTH ═════════════════════════╗
║   18+        2,400+        ₹1,850 Cr      96%                 ║
║   years      families      advised        goals on time      ║
║   (animated counters)                                        ║
║   [credential] [credential] [credential] [credential]  (GSAP)║
╚══════════════════════════════════════════════════════════════╝

╔════════════════ CLIENT SUCCESS STORIES ══════════════════════╗
║  ┌─Netflix─┐  ┌─Netflix─┐  ┌─Netflix─┐                       ║
║  │  ▶      │  │  ▶      │  │  ▶      │   → click = modal      ║
║  │ poster  │  │ poster  │  │ poster  │     (video stage +     ║
║  │ ₹6.4Cr  │  │ 2 of 2  │  │ by 48   │      Before/Journey/   ║
║  └─────────┘  └─────────┘  └─────────┘      Outcome + quote)  ║
╚══════════════════════════════════════════════════════════════╝

╔═══════════════ PREMIUM DASHBOARD DEMO ═══════════════════════╗
║  ● ● ●  planhappywealth.com/dashboard                        ║
║  ┌────────── Net worth ∿ chart ──────────┐ ┌─ Retirement ──┐ ║
║  │ ₹2.26 Cr  ▲ +27%                       │ │   ◠ 64 ◡      │ ║
║  └────────────────────────────────────────┘ └───────────────┘ ║
║  ┌─ Goals ▓▓▓▓░ ────────────────┐ ┌─ Allocation ◔ + legend ─┐║
║  └──────────────────────────────┘ └─────────────────────────┘║
║  ┌──── Financial Freedom Tracker  ▓▓▓▓▓▓▓░ 72% → 2039 ──────┐ ║
╚══════════════════════════════════════════════════════════════╝

╔════════════════════ EDUCATION HUB ═══════════════════════════╗
║  [All][Retirement][Investing][Psychology][Family][Women][Tax]║
║  ┌──── FEATURED ────────────┐  ┌ article row ─────────────┐  ║
║  │  big editorial card      │  ├ article row ─────────────┤  ║
║  │  title + dek + read →    │  ├ article row ─────────────┤  ║
║  └──────────────────────────┘  └ article row ─────────────┘  ║
╚══════════════════════════════════════════════════════════════╝

╔════════════════ AI FINANCIAL GUIDE ══════════════════════════╗
║  ⬤ Plan Happy AI · online            🔒 private & secure     ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │  assistant bubble …                                   │    ║
║  │                              … user bubble (gold)     │    ║
║  │  • • •  (typing)                                      │    ║
║  └──────────────────────────────────────────────────────┘    ║
║  [retirement?][insurance?][investing?][goal?]                ║
║  [ ask anything…                                 ➤ ]         ║
╚══════════════════════════════════════════════════════════════╝

╔════════════════════ CONSULTATION ════════════════════════════╗
║  ┌─ Book ★ ─┐  ┌ Assessment ┐  ┌ Blueprint ┐  (3 paths)      ║
║  └──────────┘  └────────────┘  └───────────┘                 ║
║  ┌── what happens ──┐ ┌── booking form ───────────────────┐  ║
║  │ ✓ we listen      │ │ name · phone · email · goal       │  ║
║  │ ✓ clear read     │ │ [ Book my free consultation → ]   │  ║
║  │ ✓ 2–3 moves      │ └───────────────────────────────────┘  ║
╚══════════════════════════════════════════════════════════════╝

┌──────────────────────── FOOTER ──────────────────────────────┐
│ brand · Plan For · Platform · Company · legal · disclaimer    │
└──────────────────────────────────────────────────────────────┘
```

## Responsive behavior

- **Mobile-first.** Two-column blocks collapse to single column; the Wealth Journey selector becomes a horizontal scroll-snap row; the dashboard grid reflows to one column.
- **Touch targets ≥ 44px.** Sliders, chips, tabs, and the nav toggle.
- **Hero proof-card** drops below the headline on small screens.
- **Sticky nav** condenses into a pill on scroll and exposes a full-screen glass menu on mobile.
