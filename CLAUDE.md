# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build → dist/
npm run preview      # Serve dist/ on :8080
npm run lint         # ESLint
npm run format:check # Prettier check
npm run format:write # Prettier fix
npm run ts:check     # TypeScript check (no emit)
```

No test suite — manual verification via `npm run preview` after build.

## Architecture

Static portfolio site (Next.js 15 SSG, App Router). Output goes to `dist/` for GitHub Pages deployment at `adrien.blandin.me`.

**Pages** (`src/app/`): App Router pages. Articles are plain `.tsx` files — no CMS, content is hardcoded in each `page.tsx`.

**`src/libs/`**: source de vérité pour données partagées entre pages — `articles.ts` (métadonnées des 12 articles + `getArticle(slug)`), `testimonials.ts` (7 témoignages), `constants.ts` (config site : URL, nom, IDs Schema.org). Pas de duplication dans les `page.tsx`.

**Components** split by role:

- `src/components/containers/` — page-specific sections, organized per page (e.g. `homePage/`, `podcastPage/`)
- `src/components/ui/` — reusable primitives and icons
- `src/components/header/` · `src/components/footer/` · `src/components/analytics/`

**Fonts**: Fira Code (body) + Bricolage Grotesque (`--font-brico-gro` CSS var).

**Key libs**: Framer Motion (animations), Three.js + React Three Fiber (3D), Lenis (smooth scroll), Radix UI Popover (contact modal), Tailwind CSS 4.

**Static export constraints**: No server-side features (API routes, SSR, image optimization). `trailingSlash: true` — all internal links must include trailing slash.

## Copywriting

All written content (articles, pages, CTAs, testimonials) must follow the rules in [`COPYWRITING-RULES.md`](./COPYWRITING-RULES.md). These rules are derived from analysis of all 12 published articles and the timescanner.io product site.

Key distinctions:

- **Articles** — first-person "je", vouvoiement, short paragraphs, no summary conclusions, H2/H3 only for step-by-step or taxonomic content, personal examples always name lePERMISLIBRE explicitly.
- **Marketing pages** (Prestations, landing) — product voice (no "je"), pain-first, outcome-based titles, transparent pricing, specific CTAs.
- **Never** use filler phrases ("il est important de noter"), passive voice where active works, or vague testimonials.
