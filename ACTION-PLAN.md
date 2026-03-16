# SEO Action Plan — adrien.blandin.me

**Date:** 2026-03-16 | **Overall score:** 34/100 | **Target:** 70+/100

---

## CRITICAL — Fix immediately

### 1. Fix `"use client"` on all page route files

**Root cause of ~6 other issues.** All page files declare `"use client"` at the top level, preventing Next.js App Router from emitting any page-level metadata, canonical tags, OG tags, or schema.

**Pattern:** Remove `"use client"` from page wrappers. Extract interactive leaf components to separate `"use client"` files.

Files to change: all `src/app/*/page.tsx` and `src/app/articles/*/page.tsx`

**Effort:** Medium (1–2 days) | **Impact:** Unblocks all metadata, canonical, OG, and schema fixes

---

### 2. Add per-page `metadata` exports with unique title + description

Once page files are server components (see #1), add `export const metadata` to every route.

**Files and suggested metadata:**

| Page             | Title                            | Description                    |
| ---------------- | -------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| /prestations     | `Prestations CTO à temps partagé | Adrien Blandin`                | Sparing partner, CTO part-time, définition de MVP pour start-ups early stage.                   |
| /parcours        | `Parcours                        | Adrien Blandin, CTO Freelance` | De développeur backend à CTO : 7 ans chez lePERMISLIBRE, IPO, équipe de 3 à 30 personnes.       |
| /temoignages     | `Témoignages clients             | Adrien Blandin CTO`            | Ce que les CEO disent de leur collaboration avec Adrien Blandin, CTO à temps partagé.           |
| /podcasts        | `Podcasts                        | Adrien Blandin`                | 6 épisodes sur la dette technique, le rôle de CTO et la tech au service du business.            |
| /articles        | `Articles sur le rôle de CTO     | Adrien Blandin`                | Retours d'expérience et réflexions sur le management tech, la dette technique et le leadership. |
| /articles/[slug] | `[Article title]                 | Adrien Blandin`                | [First 155 chars of article body]                                                               |

**Effort:** Low (once #1 is done) | **Impact:** Critical for indexability and CTR

---

### 3. Create `public/robots.txt`

Zero code, 10 minutes.

```
User-agent: *
Allow: /
Disallow: /pdfs/

Sitemap: https://adrien.blandin.me/sitemap.xml
```

**Effort:** Trivial | **Impact:** Critical (unblocks sitemap declaration, sends AI crawler trust signals)

---

### 4. Create `src/app/sitemap.ts`

Generates static `sitemap.xml` at build time. Compatible with `output: "export"`.

```ts
import { MetadataRoute } from "next";

const BASE = "https://adrien.blandin.me";

const articles = [
    {
        slug: "pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience",
        date: "2024-04-03",
    },
    { slug: "etre-developpeur-c-est-bien-plus-que-developper", date: "2024-03-14" },
    { slug: "reussir-ses-recrutements-en-impliquant-son-equipe", date: "2024-02-15" },
    { slug: "etre-le-leader-dont-l-equipe-a-besoin", date: "2024-02-14" },
    { slug: "etre-cto-ou-l-art-de-representer-plusieurs-parties", date: "2024-02-06" },
    { slug: "savoir-communiquer-au-coeur-du-role-de-cto", date: "2024-01-31" },
    { slug: "se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau", date: "2024-01-25" },
    { slug: "qu-est-ce-q-un-bon-cto", date: "2024-01-24" },
    { slug: "dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte", date: "2023-12-20" },
    { slug: "l-anti-dette-technique-la-theorie-de-l-effort-supplementaire", date: "2023-12-12" },
    { slug: "comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple", date: "2023-07-24" },
    { slug: "de-developpeur-backend-a-cto-un-retour-a-zero", date: "2021-02-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        { url: BASE, lastModified: new Date("2024-04-03"), priority: 1, changeFrequency: "monthly" as const },
        { url: `${BASE}/prestations`, lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" as const },
        { url: `${BASE}/parcours`, lastModified: new Date(), priority: 0.8, changeFrequency: "yearly" as const },
        { url: `${BASE}/temoignages`, lastModified: new Date(), priority: 0.8, changeFrequency: "yearly" as const },
        {
            url: `${BASE}/articles`,
            lastModified: new Date("2024-04-03"),
            priority: 0.8,
            changeFrequency: "monthly" as const,
        },
        { url: `${BASE}/podcasts`, lastModified: new Date(), priority: 0.6, changeFrequency: "yearly" as const },
    ];
    const articlePages = articles.map(({ slug, date }) => ({
        url: `${BASE}/articles/${slug}`,
        lastModified: new Date(date),
        priority: 0.7,
        changeFrequency: "yearly" as const,
    }));
    return [...staticPages, ...articlePages];
}
```

**Effort:** Low (30 min) | **Impact:** Critical (content discovery for all 19 pages)

---

### 5. Fix trailing slash configuration

Change `next.config.ts`:

```ts
// Before:
trailingSlash: true,
// After:
trailingSlash: false,
```

This fixes the 404 on all section URLs with trailing slashes (GitHub Pages serves `articles.html` correctly, but cannot find `articles/index.html`).

**Effort:** Trivial (1 line) | **Impact:** Critical (fixes 404s, resolves canonical URL ambiguity)

---

### 6. Add Person + ProfessionalService JSON-LD schema to homepage

Once page files are server components, inject in `src/app/page.tsx` (or `layout.tsx` for global scope):

```tsx
import Script from "next/script"

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adrien.blandin.me/#person",
      "name": "Adrien Blandin",
      "url": "https://adrien.blandin.me",
      "jobTitle": "CTO Freelance",
      "description": "CTO à temps partagé pour start-ups early stage. 7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse.",
      "sameAs": ["https://www.linkedin.com/in/adrienblandin", "https://github.com/sergentrif"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://adrien.blandin.me/#service",
      "name": "Adrien Blandin — CTO Freelance",
      "url": "https://adrien.blandin.me",
      "founder": { "@id": "https://adrien.blandin.me/#person" },
      "areaServed": { "@type": "Country", "name": "France" }
    }
  ]
}

// In JSX:
<Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
```

**Effort:** Low | **Impact:** Critical (Knowledge Panel eligibility, AI entity anchor)

---

### 7. Add BlogPosting + BreadcrumbList schema to all 12 article pages

Template — adapt slug, title, date, description per article:

```tsx
const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            headline: "[Article title]",
            url: "https://adrien.blandin.me/articles/[slug]",
            datePublished: "[YYYY-MM-DD]",
            dateModified: "[YYYY-MM-DD]",
            inLanguage: "fr-FR",
            author: { "@type": "Person", "@id": "https://adrien.blandin.me/#person", name: "Adrien Blandin" },
            publisher: { "@type": "Person", "@id": "https://adrien.blandin.me/#person" },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://adrien.blandin.me/articles/[slug]" },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://adrien.blandin.me" },
                { "@type": "ListItem", position: 2, name: "Articles", item: "https://adrien.blandin.me/articles" },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "[Article title]",
                    item: "https://adrien.blandin.me/articles/[slug]",
                },
            ],
        },
    ],
};
```

**Effort:** Medium (can be templated with a shared component) | **Impact:** Critical (article rich results, breadcrumb in SERPs)

---

### 8. Add Review schema to testimonials page

Wrap the 7 testimonials in `Review` schema attached to the `ProfessionalService` entity. No numeric ratings exist so `AggregateRating` cannot be used. Full JSON-LD available in `FULL-AUDIT-REPORT.md` Schema section.

**Effort:** Low | **Impact:** High (AI citation accuracy, future rich result eligibility)

---

## HIGH — Fix within 1 week

### 9. Add canonical tags and `metadataBase`

```ts
// layout.tsx
metadataBase: new URL('https://adrien.blandin.me'),

// each page.tsx
alternates: { canonical: '/articles' }  // or '/prestations', etc.
```

**Effort:** Low | **Impact:** High (consolidates link equity, resolves duplicate URL risk)

---

### 10. Add Open Graph + Twitter Card meta tags

Default in `layout.tsx`:

```ts
openGraph: {
  type: 'website',
  locale: 'fr_FR',
  url: 'https://adrien.blandin.me',
  siteName: 'Adrien Blandin — CTO Freelance',
  title: 'Adrien Blandin, CTO pour start-ups early stage',
  description: '...',
  images: [{ url: '/og-default.png', width: 1200, height: 630 }],
},
twitter: { card: 'summary_large_image' }
```

Override `og:title`, `og:description`, `og:type: "article"`, and `article:published_time` per article page.

**Effort:** Low | **Impact:** High (LinkedIn/Slack/X sharing cards, CTR from social sharing)

---

### 11. Fix portrait image for LCP

In `src/components/containers/homePage/landingSection/Landing.tsx`:

```tsx
// Before:
<Image src={profilePortrait} alt="Portrait of Adrien Blandin" className="..." />

// After:
<Image
  src={profilePortrait}
  alt="Portrait d'Adrien Blandin"
  priority
  width={232}
  height={308}
  className="..."
/>
```

Also convert `profile_portrait_adrien.png` → `profile_portrait_adrien.webp` and update the import.

**Effort:** Trivial | **Impact:** High (LCP improvement ~0.8–1.5s on mobile)

---

### 12. Add `display: "swap"` to Google Fonts + reduce Bricolage weights

In `src/app/layout.tsx`:

```ts
const firaCode = Fira_Code({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    display: "swap", // ← add this
});

const bricolageGrotesque = Bricolage_Grotesque({
    weight: ["400", "600", "700"], // ← drop "500" and "800" if unused
    subsets: ["latin"],
    variable: "--font-brico-gro",
    display: "swap", // ← add this
});
```

**Effort:** Trivial | **Impact:** High (LCP -0.5s, eliminates FOIT, CLS improvement)

---

### 13. Fix broken testimonials link

In `src/components/containers/temoignagePage/CardContent.tsx` lines 173 and 186:

```tsx
// Before:
href = "manouvellepiscine.com";
// After:
href = "https://www.manouvellepiscine.com/";
```

**Effort:** Trivial | **Impact:** High (broken trust signal on authority-critical page)

---

### 14. Create `public/llms.txt`

```
# Adrien Blandin — CTO Freelance France
> CTO à temps partagé pour start-ups early stage. Sparing partner, définition de MVP, architecture.

## Articles
- [L'anti dette technique — la théorie de l'effort supplémentaire](https://adrien.blandin.me/articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire): Framework sur 5 catégories de dette technique et les 4 échelles temporelles de l'effort de correction.
- [Pourquoi réduire la charge mentale des développeurs via la Developer Experience](https://adrien.blandin.me/articles/pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience): Impact du context-switching sur les équipes tech et stratégies DX pour le réduire.
- [De développeur backend à CTO, un retour à zéro](https://adrien.blandin.me/articles/de-developpeur-backend-a-cto-un-retour-a-zero): Récit de transition dev → CTO, légitimité, feedbacks, sentiment d'improductivité.
- [Dette technique : pourquoi vous ne devriez pas faire de refonte](https://adrien.blandin.me/articles/dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte): Analyse des échecs de refonte et alternatives pragmatiques.
- [Qu'est-ce qu'un bon CTO ?](https://adrien.blandin.me/articles/qu-est-ce-q-un-bon-cto): Définition du rôle de CTO selon la taille d'équipe (5, 10, 20+ développeurs).
- [Être CTO ou l'art de représenter plusieurs parties](https://adrien.blandin.me/articles/etre-cto-ou-l-art-de-representer-plusieurs-parties): Gestion des parties prenantes — équipe, CEO, clients, investisseurs.
- [Être le leader dont l'équipe a besoin](https://adrien.blandin.me/articles/etre-le-leader-dont-l-equipe-a-besoin): Leadership situationnel pour managers tech.
- [Réussir ses recrutements en impliquant son équipe](https://adrien.blandin.me/articles/reussir-ses-recrutements-en-impliquant-son-equipe): Processus de recrutement participatif pour équipes techniques.
- [Savoir communiquer, au cœur du rôle de CTO](https://adrien.blandin.me/articles/savoir-communiquer-au-coeur-du-role-de-cto): Communication technique → non-technique pour CTOs.
- [Se remettre en question : le syndrome de l'imposteur est un cadeau](https://adrien.blandin.me/articles/se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau): Posture de croissance pour leaders tech.
- [Être développeur, c'est bien plus que développer](https://adrien.blandin.me/articles/etre-developpeur-c-est-bien-plus-que-developper): Spectre des responsabilités au-delà du code.
- [Comment réduire la complexité produit pour maintenir un système simple](https://adrien.blandin.me/articles/comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple): Stratégies de simplicité architecturale.

## Services
- [Prestations](https://adrien.blandin.me/prestations): CTO part-time, sparing partner, définition de MVP, conférences.
- [Parcours](https://adrien.blandin.me/parcours): 7 ans CTO chez lePERMISLIBRE, IPO, équipe 3→30 personnes. Depuis 2024, accompagnement d'une dizaine de startups en tant que CTO freelance.
- [Témoignages](https://adrien.blandin.me/temoignages): Retours de 7 CEO (Objow, Data Comply One, Certixio, Omen-data, Olset, Ma nouvelle piscine, emlyon Venture Labs).
```

**Effort:** Low (1 hour) | **Impact:** High (AI search discoverability, content inventory for LLM crawlers)

---

### 15. Promote article titles from `<h2>` to `<h1>`

Each article page has its title as `<h2>`. Change to `<h1>`. One `<h1>` per page, containing the primary keyword for that page.

**Effort:** Low | **Impact:** High (primary on-page relevance signal for search and AI)

---

### 16. Add `<h2>` subheadings inside article bodies

Priority articles first: "L'anti dette technique", "Dette technique pourquoi pas de refonte", "Qu'est-ce qu'un bon CTO". Add 2–3 named `<h2>` section breaks inside the article body to enable passage-level extraction for featured snippets and AI overviews.

**Effort:** Medium | **Impact:** High (AI citation readiness, featured snippet eligibility)

---

### 17. Add author byline + publication date markup to article pages

On each article page, add:

- Author name linked to /parcours (or with schema)
- `<time dateTime="2024-01-24">24 janvier 2024</time>` wrapping the visible date string

**Effort:** Low | **Impact:** High (E-E-A-T, QRG compliance for professional services)

---

### 18. Add security headers via Cloudflare

GitHub Pages does not support custom HTTP response headers. Options:

1. **Cloudflare (recommended):** Free tier CDN in front of GitHub Pages. Configure `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy` via Transform Rules.
2. **Migrate to Vercel:** Native `headers()` in `next.config.ts`, optimal for Next.js.

**Effort:** Medium | **Impact:** High (security, trust signals)

---

## MEDIUM — Fix within 1 month

### 19. Add LinkedIn and GitHub to site footer / /parcours

Link to `https://www.linkedin.com/in/adrienblandin` and `https://github.com/sergentrif` from the footer or /parcours page. Third-party profile corroboration is a standard authority signal. Also add to `sameAs` in Person schema.

**Effort:** Trivial | **Impact:** Medium

---

### 20. Add contact email in crawlable footer text

Add a text email address (obfuscated from spam if needed, but visible to crawlers) in the `<footer>`. All current contact flows through Zcal links only.

**Effort:** Trivial | **Impact:** Medium (QRG trust signal for professional services)

---

### 21. Guard `setActiveCard` in `StickyScroll` with identity check

In `src/components/ui/sticky-scroll-reveal.tsx`, add:

```ts
if (closestBreakpointIndex !== activeCard) {
    setActiveCard(closestBreakpointIndex);
}
```

**Effort:** Trivial | **Impact:** Medium (INP improvement on mobile scroll)

---

### 22. Add explicit `width`/`height` to all `<Image>` components

The portrait in `Landing.tsx` uses Tailwind responsive sizing without explicit `width`/`height` props, which can cause CLS. For `next/image` with static imports, Next.js can auto-infer dimensions — but it's better to be explicit.

**Effort:** Low | **Impact:** Medium (CLS prevention)

---

### 23. Add hreflang (fr + x-default)

The site is French-only targeting France. If clients from Belgium, Switzerland, or Canada are relevant:

```ts
// layout.tsx
alternates: {
  languages: {
    'fr': 'https://adrien.blandin.me',
    'x-default': 'https://adrien.blandin.me',
  }
}
```

**Effort:** Trivial | **Impact:** Medium (low urgency for France-only, relevant if expanding)

---

### 24. Publish 1 new article targeting commercial keywords

The site has been silent for 24 months. Suggested titles aligned with highest-value queries:

- "CTO à temps partagé : comment ça fonctionne concrètement ?" → targets main commercial keyword
- "Quand et comment choisir un CTO freelance pour votre startup ?" → targets CEO buyer queries
- "Comment intégrer l'IA dans son produit tech ? Guide pour fondateurs non-techniques" → targets 2025–2026 growth queries

Publish one article now to reset freshness signals and signal active maintenance.

**Effort:** High (content creation) | **Impact:** Medium-High (freshness signals, new keyword coverage)

---

### 25. Expand case studies on /parcours

The Objow, Edenred, and Certixio engagements are mentioned in passing. Add outcome metrics per case: team size before/after, timeline, technical challenge solved, business result. Even approximate numbers significantly elevate E-E-A-T signals.

**Effort:** Medium | **Impact:** Medium

---

### 26. Expand CII section into a dedicated FAQ/explainer

The CII (Crédit Impôt Innovation) agrément — which saves clients 20% — appears only as a badge on the homepage. Create a `/cii` or `/financement` page or a dedicated section on /prestations explaining: what it is, how it works, what qualifies, how to claim it. This is a genuine competitive differentiator competitors without the agrément cannot match.

**Effort:** Medium | **Impact:** Medium

---

### 27. Add geographic signals

Lyon is never mentioned despite EPSI Lyon and emlyon Venture Labs associations. Add location to /parcours and /prestations ("basé à Lyon, interventions en France"), which enables "CTO freelance Lyon" query coverage.

**Effort:** Trivial | **Impact:** Medium

---

## LOW — Backlog

### 28. Add `willChange: "transform"` and `useReducedMotion` to InfiniteCarousel

**File:** `src/components/ui/InfiniteCarousel.tsx`
Reduces main thread pressure from perpetual carousel animation.

### 29. Switch Google Ads to `strategy="lazyOnload"`

**File:** `src/components/analytics/GoogleAnalytics.tsx`
Defers 70KB gtag.js until page is idle. Only if Ads conversion tracking is not needed on initial page view.

### 30. Convert `AgrementBadge` inline SVG to single `<img>` reference

**File:** `src/components/ui/icons/AgrementBadge.tsx`
158-line SVG rendered multiple times on homepage. Move to `/public/agrement-badge.svg`.

### 31. Add IndexNow key and deploy ping

Register at indexnow.org, place key file in `/public`, add POST to IndexNow API in GitHub Actions deploy step.

### 32. Block `/pdfs/` from indexing

Add `Disallow: /pdfs/` to robots.txt to prevent `/pdfs/presentation.pdf` and `/pdfs/cv.pdf` from being indexed.

### 33. Add `useReducedMotion` support to Framer Motion animations

Accessibility and INP improvement for users with `prefers-reduced-motion` set.

---

## Implementation Priority Matrix

```
Week 1 (Critical):
  Day 1-2: #1 Fix "use client" on page files
  Day 1:   #3 Create robots.txt
  Day 1:   #5 Fix trailingSlash: false
  Day 1:   #13 Fix broken testimonials link
  Day 1:   #11 Add priority to portrait image + convert to webp
  Day 1:   #12 Add display:swap to fonts
  Day 2-3: #2 Add per-page metadata
  Day 3-4: #4 Create sitemap.ts
  Day 4-5: #6 Add Person+ProfessionalService schema
  Day 4-5: #7 Add BlogPosting+BreadcrumbList schema to all articles

Week 2 (High):
  #9  Canonical tags + metadataBase
  #10 Open Graph + Twitter Card tags
  #14 Create llms.txt
  #15 Article titles → <h1>
  #17 Author byline + <time> markup
  #19 Add LinkedIn/GitHub links
  #20 Add contact email

Week 3-4 (Medium):
  #16 Add <h2> subheadings inside article bodies
  #18 Security headers (Cloudflare setup)
  #21 Guard setActiveCard in StickyScroll
  #24 Publish 1 new article
  #25 Expand case studies
  #27 Add Lyon geographic signal

Month 2 (Low):
  #26 CII explainer/FAQ page
  #28-33 Performance micro-optimizations
```

---

_Generated by Claude Code SEO Audit — adrien.blandin.me — 2026-03-16_
