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

**Pages** (`src/app/`): App Router pages. Articles use a single dynamic route `src/app/articles/[slug]/page.tsx` — no individual page files per article.

**`src/libs/`**: source de vérité pour données partagées entre pages — `articles.ts` (scan dynamique des `.md` via gray-matter + `getArticle(slug)`), `testimonials.ts` (8 témoignages), `constants.ts` (config site : URL, nom, IDs Schema.org). Pas de duplication dans les `page.tsx`.

## Créer un nouvel article

**Une seule étape** : créer `src/content/articles/<slug>.md` avec ce frontmatter :

```markdown
---
title: "Titre de l'article"
date: "YYYY-MM-DD"
displayDate: "DD/MM/YYYY"
description: >-
    Description SEO (1-2 phrases).
readTime: "~X"
excerpt: >-
    Premier paragraphe affiché dans la liste des articles (1-3 phrases).
---

Contenu de l'article en Markdown...
```

- Le `slug` est le nom du fichier sans `.md` (ex: `mon-article.md` → `/articles/mon-article`)
- `articles.ts` scanne automatiquement le dossier et trie par `date` décroissante
- La liste des articles et le sitemap se mettent à jour sans aucune autre modification
- Contenu Markdown supporté : `###`/`##` titres, `**gras**`, `*italique*`, `[lien](url)`, `---` séparateur, `> blockquote`, listes `- item`

**Components** split by role:

- `src/components/containers/` — page-specific sections, organized per page (e.g. `homePage/`, `podcastPage/`)
- `src/components/ui/` — reusable primitives and icons
- `src/components/header/` · `src/components/footer/` · `src/components/analytics/`

**Fonts**: Fira Code (body) + Bricolage Grotesque (`--font-brico-gro` CSS var).

**Key libs**: Motion/Framer Motion (animations), Lenis (smooth scroll), Radix UI Popover (contact modal), Tailwind CSS 4.

**Static export constraints**: No server-side features (API routes, SSR). `trailingSlash: false` — internal links do NOT include trailing slash. Next.js image optimization is enabled (SSG generates optimized images at build time).

## Copywriting

All written content (articles, pages, CTAs, testimonials) must follow the rules in [`COPYWRITING-RULES.md`](./COPYWRITING-RULES.md). These rules are derived from analysis of all 12 published articles and the timescanner.io product site.

Key distinctions:

- **Articles** — first-person "je", vouvoiement, short paragraphs, no summary conclusions, H2/H3 only for step-by-step or taxonomic content, personal examples always name lePERMISLIBRE explicitly.
- **Marketing pages** (Prestations, landing) — product voice (no "je"), pain-first, outcome-based titles, transparent pricing, specific CTAs.
- **Never** use filler phrases ("il est important de noter"), passive voice where active works, or vague testimonials.
