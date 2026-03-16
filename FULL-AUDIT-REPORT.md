# SEO Full Audit Report — adrien.blandin.me

**Date:** 2026-03-16
**Site:** https://adrien.blandin.me
**Business type:** B2B professional services — CTO freelance / CTO à temps partagé, France
**Stack:** Next.js 15 (SSG, `output: "export"`), GitHub Pages, TypeScript, Tailwind CSS 4

---

## Overall SEO Health Score: 34 / 100

| Category                  | Weight | Score  | Weighted       |
| ------------------------- | ------ | ------ | -------------- |
| Technical SEO             | 25%    | 28/100 | 7.0            |
| Content Quality           | 25%    | 61/100 | 15.25          |
| On-Page SEO               | 20%    | 20/100 | 4.0            |
| Schema / Structured Data  | 10%    | 0/100  | 0.0            |
| Performance (CWV)         | 10%    | 40/100 | 4.0            |
| Images                    | 5%     | 50/100 | 2.5            |
| AI Search Readiness (GEO) | 5%     | 34/100 | 1.7            |
| **TOTAL**                 |        |        | **34.5 / 100** |

---

## Executive Summary

### Top 5 Critical Issues

1. **All pages share identical title and meta description** — Every route, including all 12 article pages, inherits the same generic title ("Adrien Blandin, CTO pour start-ups early stage") and description from `src/app/layout.tsx`. The root cause: all page files declare `"use client"`, which silently suppresses `export const metadata` in Next.js App Router. No page has unique SEO metadata.

2. **robots.txt and sitemap.xml both return 404** — No crawl guidance, no content inventory. Googlebot discovers pages only via link following.

3. **Zero structured data (JSON-LD)** — No Person, Article, Review, BreadcrumbList, or Service schema anywhere. The site is invisible to Knowledge Panel eligibility, rich results, and AI overview citation ranking.

4. **Content 2 years stale** — The newest article dates from 03/04/2024. For professional services AI search positioning ("CTO à temps partagé", "CTO freelance France"), freshness signals heavily influence Perplexity and ChatGPT Search ranking.

5. **Trailing slash misconfiguration causes 404s on intended canonical URLs** — `trailingSlash: true` is set in `next.config.ts` but GitHub Pages serves the no-slash versions. The trailing-slash form (the intended canonical) returns 404 for all section pages.

### Top 5 Quick Wins

1. **Create `/public/robots.txt`** — 10 minutes, zero code, unblocks sitemap declaration.
2. **Add `priority` prop to portrait `<Image>` in `Landing.tsx`** — single prop, moves mobile LCP from Poor to Needs Improvement.
3. **Fix broken testimonials link** — `manouvellepiscine.com` → `https://www.manouvellepiscine.com/` in `CardContent.tsx` line 173 and 186.
4. **Fix portrait alt text** — change `"Portrait of Adrien Blandin"` → `"Portrait d'Adrien Blandin"` in `Landing.tsx` line 32.
5. **Add `display: "swap"` to both Google Font configs** — single layout.tsx change, eliminates FOIT, improves LCP and CLS.

---

## Technical SEO — 28/100

### CRITICAL

#### C1 — robots.txt absent (404)

`https://adrien.blandin.me/robots.txt` → HTTP 404. No crawl guidance, no sitemap pointer. AI crawlers are implicitly allowed but have no explicit trust signal.

**Fix:** Create `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /pdfs/

Sitemap: https://adrien.blandin.me/sitemap.xml
```

---

#### C2 — sitemap.xml absent (404)

`https://adrien.blandin.me/sitemap.xml` → HTTP 404. With 19 pages and no sitemap, discovery relies entirely on crawl links.

**Fix:** Create `src/app/sitemap.ts` (Next.js metadata route, generates static `sitemap.xml` at build time with `output: "export"`):

```ts
import { MetadataRoute } from "next";
const BASE = "https://adrien.blandin.me";
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${BASE}`, lastModified: new Date("2024-04-03"), priority: 1 },
        { url: `${BASE}/prestations`, priority: 0.9 },
        { url: `${BASE}/parcours`, priority: 0.8 },
        { url: `${BASE}/temoignages`, priority: 0.8 },
        { url: `${BASE}/articles`, priority: 0.8 },
        { url: `${BASE}/podcasts`, priority: 0.6 },
        // ... all 12 article URLs with their lastModified dates
    ];
}
```

---

#### C3 — Trailing slash misconfiguration

`trailingSlash: true` in `next.config.ts` but GitHub Pages serves the no-slash form as 200 and the trailing-slash form as 404 — the opposite of what the config intends.

| URL form        | HTTP Status |
| --------------- | ----------- |
| `/articles`     | 200         |
| `/articles/`    | **404**     |
| `/prestations`  | 200         |
| `/prestations/` | **404**     |

**Fix:** Change `trailingSlash: true` → `trailingSlash: false` in `next.config.ts`. Next.js outputs `articles.html`, which GitHub Pages serves correctly at `/articles`.

---

#### C4 — All pages share identical `<title>` and `<meta description>`

Root cause: all 16 non-home page files start with `"use client"`, which causes `export const metadata` to be silently ignored by Next.js App Router.

**Fix:** Remove `"use client"` from page files. Extract interactive elements (carousel, modal) to dedicated child components marked `"use client"`. Add `export const metadata` to each page. See H3 below.

---

### HIGH

#### H1 — No canonical tags on any page

No `<link rel="canonical">` anywhere. Combined with the trailing-slash inconsistency, Google must guess the canonical form.

**Fix:** Add `metadataBase` to root layout and per-page `alternates.canonical`:

```ts
// layout.tsx
metadataBase: new URL('https://adrien.blandin.me'),
// per page
alternates: { canonical: '/articles' }
```

---

#### H2 — No Open Graph or Twitter Card meta tags

When articles or service pages are shared on LinkedIn, Slack, or Twitter/X, platforms show a blank card. Critical for a consultant whose articles are top-of-funnel.

**Fix:** Add OG defaults in `layout.tsx`, override per page. Article pages need `og:title`, `og:description`, `og:type: "article"`, `article:published_time`.

---

#### H3 — All page routes use `"use client"`, blocking server-side metadata

16 of 19 route files declare `"use client"` at the top level. This is the root cause of C4, H1, H2, and the inability to add per-page schema. The `"use client"` should be on leaf interactive components, not on page wrappers.

**Pattern to follow:**

```
src/app/articles/[slug]/
  page.tsx          ← Server Component (metadata, schema, article shell)
  ArticleContent.tsx ← "use client" only if needed for animations
```

---

#### H4 — No security headers

GitHub Pages cannot serve custom HTTP headers. Current response only sends `content-type` and `cache-control: max-age=600`.

Missing: `X-Frame-Options`, `X-Content-Type-Options`, `HSTS`, `Content-Security-Policy`, `Referrer-Policy`.

**Fix options:**

- **Cloudflare (recommended):** Add free tier in front of GitHub Pages, configure headers via Transform Rules. Zero code changes.
- **Migrate to Vercel:** Native `headers()` support in `next.config.ts`.

---

### MEDIUM

#### M1 — Article titles use `<h2>` — no `<h1>` on article or section pages

Every article page uses `<h2>` for the article title. Section pages (`/prestations`, `/parcours`) use `<h2>` for the main heading. The `<h1>` is the primary on-page relevance signal.

**Fix:** Change article title elements from `<h2>` to `<h1>` in each `page.tsx`. One `<h1>` per page, matching the page's primary keyword.

---

#### M2 — IndexNow not implemented

No IndexNow key, no ping on deploy. Low priority for existing content but worth adding to the GitHub Actions workflow for future article publications.

---

### LOW

#### L1 — Portrait alt text in English on French site

`Landing.tsx` line 32: `alt="Portrait of Adrien Blandin"` → should be `alt="Portrait d'Adrien Blandin"`.

#### L2 — PDFs not excluded from indexing

`/pdfs/presentation.pdf` and `/pdfs/cv.pdf` are linked from the footer and will be crawled. Add `Disallow: /pdfs/` to robots.txt if you prefer only HTML pages indexed.

#### L3 — Google Ads and GA4 bundled in same script

`GoogleAnalytics.tsx` loads `AW-985274405` alongside GA4. Consider lazy-loading the Ads tag separately or switching to `strategy="lazyOnload"`.

---

## Content Quality / E-E-A-T — 61/100

### E-E-A-T Breakdown

| Dimension         | Score | Notes                                                                                                                                                                           |
| ----------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Experience        | 16/20 | Strong: named companies, IPO milestone, lePERMISLIBRE case studies. Weak: no outcome metrics, no timestamps on /parcours                                                        |
| Expertise         | 18/25 | Strong: EPSI Lyon, Batch, Fowler/Brandolini citations, podcast appearances. Weak: no author bio on article pages, no credentials on /prestations                                |
| Authoritativeness | 14/25 | Strong: 7 named testimonials with company URLs, emlyon Venture Labs, CII agrément. Weak: no press mentions, no LinkedIn/GitHub linked from site, no speaking credentials listed |
| Trustworthiness   | 13/30 | Strong: /mentions-legales, lang="fr", rel="noopener noreferrer". Weak: no JSON-LD, no contact email in crawlable text, broken testimonials link, no canonical/OG                |

---

### CRITICAL

#### C1 — Zero structured data

The most impactful single technical gap. No JSON-LD anywhere. See Schema section for full remediation.

#### C2 — No per-page metadata on article pages

All article `page.tsx` files use `"use client"`, preventing `metadata` export. All 12 articles share the same title and description as the homepage.

#### C3 — Content ~2 years stale

Last article: 03/04/2024. The site has been silent for 24 months. For AI search systems (Perplexity, ChatGPT Search), freshness is a primary ranking signal for professional services queries.

---

### HIGH

#### H1 — No author byline or credentials on article pages

No author attribution block, no `<time dateTime="...">` for dates (dates appear as plain text strings), no bio snippet. Required by September 2025 QRGs for professional service content.

#### H2 — Short articles below minimum threshold

Multiple articles are ~400–600 words (e.g. "Qu'est-ce qu'un bon CTO?" ~400 words). The 1,500-word minimum for blog posts is a widely accepted threshold. Series-linking structure (each article ends pointing to the next) fragments topical authority.

#### H3 — No primary keyword coverage for commercial queries

"CTO à temps partagé France", "CTO freelance startup", "CTO fractional" have zero dedicated editorial coverage. Service pages use the terms but cannot build topical authority for informational queries that feed commercial intent.

#### H4 — Broken link on /temoignages

`/src/components/containers/temoignagePage/CardContent.tsx` lines 173 and 186: `href="manouvellepiscine.com"` — missing `https://`. Renders as a broken relative link on the page most critical for authority validation.

---

### MEDIUM

#### M1 — No contact email in crawlable HTML

All contact flows through Zcal booking links. Google QRGs explicitly list contact information as a foundational trust signal for professional services.

#### M2 — No LinkedIn / GitHub links on site

Despite 15+ years of professional history, no external profile is linked from footer, /parcours, or article pages. Third-party profile corroboration is a standard authority signal.

#### M3 — No case studies with outcome metrics

The Objow/Edenred case study in /parcours has no metrics (timeline, team size change, revenue impact). Assertions without evidence are weak E-E-A-T signals.

#### M4 — Homepage indexable word count ~350 words

Much of the homepage content is inside React carousel and SVG components. The prose indexed by search engines is limited to the hero tagline, service card descriptions, and section blurbs.

#### M5 — No geographic signals

Lyon is never mentioned despite being Adrien's base (EPSI Lyon, emlyon Venture Labs). "CTO freelance Lyon" is a commercially relevant query.

---

### LOW

#### L1 — Testimonials page lacks editorial context

/temoignages renders testimonials with minimal framing. No context about engagement types, durations, or outcomes makes them harder to evaluate.

#### L2 — CII section undersells a strong differentiator

The Crédit Impôt Innovation agrément (20% cost reduction for clients) gets two sentences and a badge. It deserves a dedicated FAQ or explainer — competitors without this agrément cannot match it.

#### L3 — Article bodies have no internal H2 subheadings

Even the longer articles ("L'anti dette technique", ~1,400 words) use only `<p>` and `<ul>` tags throughout. No section-level structure for featured snippet or AI passage extraction.

---

### Content Gaps vs. "CTO freelance France" competitors

| Missing content                          | Priority | Target queries                                               |
| ---------------------------------------- | -------- | ------------------------------------------------------------ |
| "Comment ça marche" / onboarding process | High     | "CTO à temps partagé comment ça fonctionne"                  |
| FAQ page                                 | High     | "combien coûte un CTO freelance", "CTO freelance vs interne" |
| Structured case studies                  | High     | "mission CTO freelance exemple"                              |
| Content for CEO buyers                   | Medium   | Articles currently written for CTOs, not for CEO buyers      |
| Geographic targeting                     | Medium   | "CTO freelance Lyon", "CTO à temps partagé Paris"            |
| AI/LLM for non-technical founders        | Medium   | High-growth 2025–2026 topic, zero coverage                   |
| Pricing context on /prestations          | Medium   | 290€/h is only on homepage cards                             |

---

## Schema / Structured Data — 0/100

Zero JSON-LD, Microdata, or RDFa anywhere on the site. The global `Metadata` in `layout.tsx` produces only `<title>` and `<meta name="description">`. No per-page `generateMetadata` exists.

### Missing schemas by priority

| Schema                         | Priority | Value                                                         |
| ------------------------------ | -------- | ------------------------------------------------------------- |
| Person + ProfessionalService   | Critical | Knowledge Panel eligibility, entity anchor for all AI systems |
| BlogPosting (×12 articles)     | Critical | Article rich results, date stamps, reading time in SERPs      |
| BreadcrumbList (article pages) | High     | Breadcrumb rich result — UI already renders the trail         |
| Review (testimonials page)     | Info     | AI/LLM citability, future rich result eligibility             |

### Ready-to-implement JSON-LD

**Person + ProfessionalService (homepage):**

```json
{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://adrien.blandin.me/#person",
            "name": "Adrien Blandin",
            "url": "https://adrien.blandin.me",
            "image": "https://adrien.blandin.me/profile_portrait_adrien.png",
            "jobTitle": "CTO Freelance",
            "description": "CTO à temps partagé pour start-ups early stage. Après avoir développé une équipe de 3 à 30 personnes jusqu'à l'introduction en bourse, j'accompagne désormais des fondateurs.",
            "knowsAbout": [
                "Architecture technique",
                "Management d'équipe tech",
                "Stratégie produit",
                "Recrutement technique",
                "Due diligence technique"
            ],
            "sameAs": ["https://www.linkedin.com/in/adrienblandin", "https://github.com/sergentrif"]
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://adrien.blandin.me/#service",
            "name": "Adrien Blandin — CTO Freelance",
            "url": "https://adrien.blandin.me",
            "description": "CTO à temps partagé pour start-ups early stage et PME.",
            "founder": { "@id": "https://adrien.blandin.me/#person" },
            "serviceType": ["CTO Part-time", "Sparing partner", "Définition de MVP", "Conférencier tech"],
            "areaServed": { "@type": "Country", "name": "France" }
        }
    ]
}
```

**BlogPosting (per article — template):**

```json
{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Titre de l'article",
    "url": "https://adrien.blandin.me/articles/[slug]",
    "datePublished": "2024-01-24",
    "dateModified": "2024-01-24",
    "inLanguage": "fr-FR",
    "author": { "@type": "Person", "@id": "https://adrien.blandin.me/#person", "name": "Adrien Blandin" },
    "publisher": { "@type": "Person", "@id": "https://adrien.blandin.me/#person" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://adrien.blandin.me/articles/[slug]" }
}
```

**BreadcrumbList (article pages):**

```json
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://adrien.blandin.me" },
        { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://adrien.blandin.me/articles" },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "[Article title]",
            "item": "https://adrien.blandin.me/articles/[slug]"
        }
    ]
}
```

**Implementation in Next.js App Router:**

```tsx
import Script from "next/script";
// In a Server Component:
<Script
    id="schema-person"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>;
```

Requires removing `"use client"` from page files (see Technical H3).

---

## Performance / Core Web Vitals

**PageSpeed Insights API unavailable without key. Assessment based on source code analysis.**

### Predicted Metrics

| Metric | Mobile (predicted) | Desktop (predicted) | Status                           |
| ------ | ------------------ | ------------------- | -------------------------------- |
| LCP    | 3.0–4.5s           | 1.8–2.8s            | Mobile: Poor / Needs Improvement |
| INP    | 150–250ms          | 80–150ms            | Mobile: Borderline               |
| CLS    | 0.05–0.15          | 0.01–0.05           | Mobile: Borderline               |

### CRITICAL

**Google Fonts: 8 font weights, no `display: "swap"`**
`Fira_Code` loads 3 weights, `Bricolage_Grotesque` loads 5 weights. Neither has `display: "swap"`. FOIT (text hidden until fonts arrive) directly delays LCP by 1–2s on slow mobile. CLS occurs when fonts render and reflow.

**Fix in `src/app/layout.tsx`:**

```ts
const firaCode = Fira_Code({ weight: ["300", "400", "500"], subsets: ["latin"], display: "swap" });
const bricolageGrotesque = Bricolage_Grotesque({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-brico-gro",
    display: "swap",
});
```

Also drop `"500"` and `"800"` weights from Bricolage if not actively used — saves 2 network requests.

**Portrait image: no `priority` prop, PNG format, no explicit dimensions**
The profile portrait (`profile_portrait_adrien.png`) in `Landing.tsx` is the LCP candidate on both mobile and desktop. It has no `priority` prop (no preload link emitted), is served as PNG (not WebP), and has no `width`/`height` props (layout shift risk).

**Fix in `Landing.tsx`:**

```tsx
<Image
    src={profilePortrait}
    alt="Portrait d'Adrien Blandin"
    priority
    width={232}
    height={308}
    className="lg:w-58 lg:h-77 ..."
/>
```

Also convert `profile_portrait_adrien.png` → `.webp` (40–65% smaller for photographic portraits).

### HIGH

**InfiniteCarousel perpetual animation from page load**
`InfiniteCarousel.tsx` runs `animate={{ x: ["0%", "-50%"] }}` with `repeat: Infinity` immediately on mount. Keeps compositor busy on mobile. Add `will-change: transform` on the motion div and `useReducedMotion` support.

**StickyScroll missing identity check in scroll handler**
`sticky-scroll-reveal.tsx` calls `setActiveCard` on every scroll frame without checking if the value has changed. Guard with `if (closestBreakpointIndex !== activeCard)` to eliminate unnecessary re-renders.

### MEDIUM

**Google Analytics `afterInteractive` bundles GA4 + Ads**
70KB gtag.js loads immediately post-hydration. Consider `strategy="lazyOnload"` for GA4 if conversion tracking is not needed on page view.

**Header `"use client"` with `passive: false` wheel event listener**
`preventWheel` handler in `Header.tsx` is registered as `{ passive: false }`, blocking browser scroll optimization on every wheel event when the modal is open. This is an INP risk during modal interactions.

**`AgrementBadge` SVG rendered multiple times as inline SVG**
158-line SVG rendered up to 3 times on the homepage. Convert to `<img src="/agrement-badge.svg">` reference to avoid parsing the SVG paths on every render.

### LOW

**`tw-animate-css` full stylesheet import may bypass purge**
`@import "tw-animate-css"` in `globals.css` may include unused animation classes depending on the PostCSS pipeline.

---

## Images — 50/100

- Portrait image: no `priority`, PNG format, no explicit `width`/`height` — see Performance section
- Most icons are inline SVG components (correct approach)
- `brandLogo` folder mixes SVG components with `.webp`, `.jpeg`, `.png` static imports — acceptable
- No systematic alt text audit possible without full DOM render, but `/public` image references should all have alt text
- With `images: { unoptimized: true }` in config, zero automatic format conversion or resizing — all optimization must be done manually at source

---

## AI Search Readiness (GEO) — 34/100

### GEO Score by Platform

| Platform            | Score  | Limiting Factor                                                 |
| ------------------- | ------ | --------------------------------------------------------------- |
| Google AI Overviews | 20/100 | No schema, no per-page meta, no canonical                       |
| ChatGPT Search      | 25/100 | Static HTML accessible, but no llms.txt, no structured passages |
| Perplexity          | 35/100 | Best positioned: crawlable HTML, podcast URLs discoverable      |
| Bing Copilot        | 22/100 | No OG tags, no structured data, no sitemap                      |

### CRITICAL

**No per-article metadata or semantic structure**
All 12 articles share one title. No `<h2>`/`<h3>` inside article bodies — all flat prose. AI systems cannot extract section-level context. No `<article>` semantic element, no `<time dateTime="...">` for publication dates.

### HIGH

**llms.txt absent**
No machine-readable content inventory for AI systems. With a static Next.js site, any file in `/public` is zero-config to serve.

**Fix — create `public/llms.txt`:**

```
# Adrien Blandin — CTO Freelance France
> CTO à temps partagé pour start-ups early stage. Sparing partner, MVP, architecture.
> Content may be cited with attribution to adrien.blandin.me

## Articles
- [L'anti dette technique](https://adrien.blandin.me/articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire): Framework original sur 5 catégories de dette technique et les 4 échelles temporelles de l'effort.
- [De développeur backend à CTO](https://adrien.blandin.me/articles/de-developpeur-backend-a-cto-un-retour-a-zero): Retour d'expérience sur la transition dev → CTO.
... (all 12 articles)

## Services
- [Prestations](https://adrien.blandin.me/prestations): CTO part-time, sparing partner, définition de MVP, conférences.
- [Parcours](https://adrien.blandin.me/parcours): 7 ans CTO chez lePERMISLIBRE, IPO, équipe 3→30 personnes.
```

**Content freshness gap (2 years)**
Last article: March 2024. For "CTO à temps partagé" queries, Perplexity and ChatGPT Search heavily weight recency. Competing content from 2025–2026 will outrank stale content.

### MEDIUM

**Podcast/YouTube assets not expressed in crawlable text**
6 podcast episodes with YouTube recordings exist, but no transcripts or summaries are present on the site. YouTube mentions have ~0.74 correlation with AI citation frequency. Converting even 2–3 podcast key points into text passages would be high-value.

**Articles lack citability structure**
Optimal AI citation window: 134–167 words. Most article paragraphs: 60–90 words. No self-contained answer blocks. Articles end with series links instead of standalone conclusions.

**Positive authority assets present but not exposed in crawlable data:**

- Named client companies (Objow, Edenred, Batch, Certixio, Data Comply One, emlyon)
- Podcast appearances on If This Then Dev, CO-CTO, SRC
- References to Will Larson, Martin Fowler, Alberto Brandolini
- CII government agrément

All of these increase authority for AI citation — but only if expressed in structured, machine-readable form (schema, per-page meta, semantic HTML).

---

## Pages Audited

| URL                     | HTTP    | Unique title | Canonical | Schema | OG Tags | h1  |
| ----------------------- | ------- | ------------ | --------- | ------ | ------- | --- |
| /                       | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /parcours               | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /prestations            | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /temoignages            | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /podcasts               | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /articles               | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /articles/[slug] ×12    | 200     | ✗            | ✗         | ✗      | ✗       | ✗   |
| /robots.txt             | **404** | —            | —         | —      | —       | —   |
| /sitemap.xml            | **404** | —            | —         | —      | —       | —   |
| /articles/ (with slash) | **404** | —            | —         | —      | —       | —   |

---

_Generated by Claude Code SEO Audit — adrien.blandin.me — 2026-03-16_
