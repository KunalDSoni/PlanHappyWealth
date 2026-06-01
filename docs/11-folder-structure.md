# 11 · Folder Structure

Annotated, and matching the actual repository.

```
plan-happy-wealth/
├── README.md                      Project overview + setup + GitHub push
├── package.json                   Deps & scripts
├── next.config.mjs                Images, headers, package-import optimization
├── tailwind.config.ts             ★ Design tokens (color, type scale, shadows, motion)
├── tsconfig.json                  Strict TS, "@/*" path alias, sanity excluded
├── postcss.config.mjs
├── .eslintrc.json
├── .env.example                   Every key (all optional)
│
├── public/
│   ├── favicon.svg                Gold monogram on navy
│   └── og.svg                     1200×630 social card
│
├── src/
│   ├── app/                       ── App Router ──
│   │   ├── layout.tsx             Fonts, metadata, JSON-LD, skip-link
│   │   ├── page.tsx               Homepage — assembles the 9 sections
│   │   ├── globals.css            Base layer, glass materials, a11y, reduced-motion
│   │   ├── sitemap.ts             /sitemap.xml
│   │   ├── robots.ts              /robots.txt
│   │   ├── manifest.ts            PWA web manifest
│   │   └── api/
│   │       ├── ai-guide/route.ts  Edge — scripted KB or LLM hand-off
│   │       └── lead/route.ts      Node — lead capture → Supabase (or mock)
│   │
│   ├── components/
│   │   ├── layout/                Navbar (scroll-aware), Footer, Logo
│   │   ├── sections/              ── The deliverable sections ──
│   │   │   ├── Hero.tsx
│   │   │   ├── WealthJourney.tsx
│   │   │   ├── FinancialHealthScore.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── SuccessStories.tsx
│   │   │   ├── DashboardDemo.tsx
│   │   │   ├── EducationHub.tsx
│   │   │   ├── AIGuide.tsx
│   │   │   └── Consultation.tsx
│   │   ├── ui/                    Button, GlassCard, Gauge, Counter,
│   │   │                         SectionHeading, SectionDivider
│   │   ├── motion/               Reveal (Framer), GsapReveal (GSAP), Parallax
│   │   └── three/                AuroraField (lazy Three.js constellation)
│   │
│   ├── hooks/
│   │   └── useCountUp.ts          In-view animated number
│   │
│   └── lib/
│       ├── constants.ts          SITE, NAV_LINKS, CTA
│       ├── utils.ts              cn(), formatINR(), clamp, lerp, mapRange
│       ├── scoring.ts            ★ Financial Health Score engine (pure)
│       ├── data/                 Seed content (CMS-swappable)
│       │   ├── journey.ts        6 wealth-journey goals
│       │   ├── stats.ts          Trust metrics + credentials
│       │   ├── testimonials.ts   Success-story case studies
│       │   ├── education.ts      Articles + categories
│       │   └── dashboard.ts      Net worth, goals, allocation
│       ├── supabase/             client.ts (browser), server.ts (service role)
│       └── sanity/               client.ts + GROQ query
│
├── sanity/                        ── Studio (excluded from app typecheck) ──
│   ├── sanity.config.ts
│   └── schemas/                   article, category, author, index
│
├── supabase/
│   └── schema.sql                 leads + assessments tables (RLS on)
│
└── docs/                          ── The 12 deliverables ──
    ├── 01-information-architecture.md
    ├── 02-homepage-wireframe.md
    ├── 03-ux-strategy.md
    ├── 04-design-system.md
    ├── 05-color-palette.md
    ├── 06-typography-system.md
    ├── 07-motion-system.md
    ├── 08-component-library.md
    ├── 09-conversion-strategy.md
    ├── 10-implementation-plan.md
    ├── 11-folder-structure.md
    └── 12-code-examples.md
```

## Conventions

- **`@/` → `src/`** path alias everywhere (no `../../../`).
- **Co-location by role:** primitives, motion, 3D, layout, sections are separate concerns.
- **Data is decoupled** from presentation (`lib/data/*`), so a CMS can replace it without touching components.
- **Pure logic isolated** (`lib/scoring.ts`) for testability.
- **Server vs client** is explicit: `"use client"` only where motion/state requires it.
- **`sanity/`** is intentionally outside `src/` and excluded from `tsconfig` (it depends on the Studio runtime, not the app bundle).
