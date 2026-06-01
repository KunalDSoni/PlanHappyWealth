# 10 · Next.js Implementation Plan

## Architecture

- **Next.js 15 App Router**, React 19, TypeScript strict.
- **Server Components by default**; client islands only where motion/interactivity lives.
- **Edge** runtime for the AI guide (fast, streaming-ready); **Node** runtime for lead capture (service-role DB writes).
- **Tailwind** with a tokenized config as the single styling source of truth.
- **Backends are optional + lazy:** Supabase and Sanity helpers return `null` without env, so the app runs on seed data with zero keys.

## Rendering & data strategy

| Surface | Strategy |
| --- | --- |
| Homepage | Static (RSC) shell + client interactive islands |
| Education articles | ISR from Sanity (`revalidate`) once CMS is connected |
| Health Score | 100% client (pure engine, no network needed) |
| Lead capture | Route Handler (`/api/lead`, Node) → Supabase |
| AI Guide | Route Handler (`/api/ai-guide`, Edge) → scripted or LLM |
| SEO | `metadata`, `sitemap.ts`, `robots.ts`, `manifest.ts`, JSON-LD |

## Performance plan (Lighthouse 95+)

1. **Code-split the heavy stuff.** `AuroraField` (Three.js) and GSAP `ScrollTrigger` are `dynamic()`-imported → out of First Load JS (measured ≈ 209 kB).
2. **Self-hosted fonts** via `@fontsource` → no render-blocking Google fetch, zero CLS.
3. **`optimizePackageImports`** for `lucide-react` + `framer-motion` (tree-shaking).
4. **Transform/opacity-only animations**; GPU-friendly; reduced-motion paths.
5. **AVIF/WebP** image formats; remote patterns locked to `cdn.sanity.io`.
6. **Security headers** (CSP-friendly defaults: nosniff, frame-options, referrer, permissions-policy).
7. **Edge AI route** keeps TTFB low.

## Build phases (delivery sequence)

| Phase | Scope | Status |
| --- | --- | --- |
| 0 · Foundation | Scaffold, tokens, fonts, globals, primitives | ✅ |
| 1 · Shell | Layout, Navbar, Footer, SEO, page assembly | ✅ |
| 2 · Hero & Journey | Cinematic hero, parallax, 3D, goal selector | ✅ |
| 3 · Health Score | Engine + 6-step wizard + gauges + recs | ✅ |
| 4 · Trust & Story | Counters, GSAP, Netflix stories, dashboard | ✅ |
| 5 · Hub, AI, Convert | Education, AI guide + route, consultation + lead route | ✅ |
| 6 · Backends | Supabase + Sanity scaffolds, schema.sql | ✅ |
| 7 · Hardening | a11y pass, type-check, production build, scoring verification | ✅ |
| 8 · Content & launch | Real copy/photography, CMS seed, analytics, deploy | ⏳ your turn |

## Environments

- `.env.local` for dev; platform env vars for prod.
- All keys optional; missing keys → graceful mock behavior.

## Testing & QA

- `npm run typecheck` — strict TS (passes clean).
- `npm run build` — production compile + static generation (passes; 8 routes).
- Scoring engine verified against four personas (At Risk → Exceptional), all sub-scores in 0–100.
- **Recommended next:** add Vitest for `lib/scoring.ts`, Playwright for the Health Score + booking happy-paths, and `@axe-core/playwright` for automated a11y.

## CI/CD (recommended)

```yaml
# .github/workflows/ci.yml (sketch)
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run typecheck
      - run: npm run build
```

Deploy on **Vercel** (zero-config) or any Node host (`npm run build && npm start`). Add env vars in the dashboard; connect the GitHub repo for preview deployments per PR.

## Post-launch roadmap

- Authenticated **real dashboard** (Supabase auth + RLS-scoped data).
- Per-goal deep-dive landing pages (`/plan/:goal`) for SEO + paid landing.
- AI Guide upgraded to a streaming LLM with a fiduciary system prompt + guardrails.
- Health Score PDF report generation + email nurture.
- A/B testing harness (see conversion + Sanity experimentation docs).
