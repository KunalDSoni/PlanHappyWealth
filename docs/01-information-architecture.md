# 01 · Information Architecture

## North-star

> Helping families build wealth, confidence, and financial freedom — without stress.

Every node in the architecture is organized around **outcomes and life goals**, never around products. A visitor should be able to navigate by *what they want from life*, not by *what we sell*.

## Primary navigation

A deliberately short, emotion-first menu. Products (insurance, mutual funds) are intentionally **absent** from the top nav — they appear only as the *means* inside outcome-led sections.

| Label | Anchor | Intent |
| --- | --- | --- |
| Your Journey | `#journey` | "What are you planning for?" — self-identify |
| Health Score | `#health-score` | Instant value, zero friction |
| Stories | `#stories` | Social proof as narrative |
| Dashboard | `#dashboard` | Show the product surface |
| Learn | `#learn` | Education, authority |
| **Book a Consultation** (button) | `#consultation` | Primary conversion |

## Page-level IA (homepage as a single cinematic scroll)

```
Home (/)
├─ Hero …………………… emotion + dual CTA
├─ Wealth Journey ……… interactive goal selector (6 goals)
├─ Financial Health Score … 6-step assessment → 5 scores → recommendations
├─ Why Plan Happy Wealth … animated trust metrics + credentials
├─ Client Success Stories … Before/Journey/Outcome case studies (modal + video)
├─ Premium Dashboard …… net worth, goals, retirement, allocation, freedom
├─ Education Hub ………… magazine grid, 6 categories, CMS-driven
├─ AI Financial Guide …… chat assistant (4 capability areas)
└─ Consultation ………… 3 conversion paths + booking form
```

## Site map (full product, beyond the marketing homepage)

```
/                         Marketing homepage (this build)
/plan/:goal               Deep-dive landing per goal (education, retirement, …)
/health-score             Standalone full assessment + PDF report
/stories/:slug            Full case study (video + transcript)
/dashboard                Authenticated wealth dashboard (product)
/learn                    Education Hub index
/learn/:category          Category index (magazine)
/learn/:category/:slug    Article (Portable Text)
/guide                    AI Financial Guide (full screen)
/book                     Consultation booking + calendar
/about, /advisors         Credibility, fiduciary, team
/legal/*                  Privacy, Terms, Disclosures, SEBI/IRDAI
```

## Content model (Sanity)

- **article** → title, slug, dek, category→, author→, readTime, featured, coverImage, body (Portable Text), publishedAt
- **category** → title, slug, accent, description
- **author** → name, credential (CFP®), avatar, bio

## Data model (Supabase)

- **leads** → name, email, phone, goal, source, score, created_at
- **assessments** → overall, protection, investment, retirement, tax, age, created_at (anonymized analytics)

## Navigation principles

1. **One primary action per viewport.** The eye is never asked to choose between two equal CTAs.
2. **Progressive disclosure.** Depth (numbers, methodology, disclosures) is available but never blocks the emotional throughline.
3. **Anchored single-page core.** The homepage is a guided story; deep routes exist for intent-driven users and SEO.
4. **Accessibility-first order.** DOM order matches visual order; skip-link jumps to `#main`.
