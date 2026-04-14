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

Static portfolio site (Next.js 15 SSG, App Router). Output goes to `dist/` for GitHub Pages at `adrien.blandin.me`. No server-side features (API routes, SSR). `trailingSlash: false`.

**Pages** (`src/app/`): App Router pages. Articles → route dynamique `src/app/articles/[slug]/page.tsx`.

**`src/libs/`**: source de vérité — `articles.ts` (scan `.md` via gray-matter + `getArticle(slug)`), `testimonials.ts`, `constants.ts` (URL, nom, IDs Schema.org).

**Components**: `src/components/containers/` (sections par page) · `src/components/ui/` (primitives) · `header/` · `footer/` · `analytics/`

**Fonts**: Fira Code (body) + Bricolage Grotesque (`--font-brico-gro`). **Libs**: Motion/Framer Motion · Lenis · Radix UI Popover · Tailwind CSS 4.

## Créer un nouvel article

**Une seule étape** : créer `src/content/articles/<slug>.md` :

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

Slug = nom du fichier sans `.md`. Scan automatique → liste et sitemap mis à jour sans autre modification.

Markdown supporté : `###`/`##` titres · `**gras**` · `*italique*` · `[lien](url)` · `---` séparateur · `> blockquote` · listes `- item`

---

## Documentation de référence

Chaque fichier est chargé uniquement quand la tâche le nécessite. Ne pas tout lire systématiquement.

| Fichier | Contenu | Quand le charger |
|---------|---------|-----------------|
| `docs/ghostwriter.md` | Voix, ton, typographie, règles de rédaction. Couvre tous les formats (articles, posts LinkedIn, emails, présentations). | Toute tâche de rédaction ou relecture |
| `docs/copywriter.md` | Spécificités du site vitrine : voix par page, règles marketing. Pointe vers ghostwriter.md pour la voix. | Modification de pages du site uniquement |
| `docs/business.md` | Positionnement, cible, douleur, offres, avantage compétitif, verbatim home page, contenus LinkedIn profil | Rédaction de contenu orienté client (pages site, posts mission/client) |
| `docs/marketing.md` | Stratégie de prospection, prescripteurs, routine hebdo | Planification, choix d'angle pour un contenu |
| `docs/missions.md` | Détail de chaque mission client (contexte, actions, résultats, insights) | Rédaction d'un contenu qui s'appuie sur un cas client |
| `docs/contents.md` | Stratégie éditoriale + index éditorial : backlog, statuts, historique de publication | Toute tâche éditoriale (savoir quoi écrire, quoi a été publié, quelle répartition suivre) |

---

## Skills éditoriaux

| Commande | Action |
|----------|--------|
| `/post` | Rédiger le prochain post LinkedIn |
| `/article` | Rédiger le prochain article de blog |
| `/relecture` | Améliorer un contenu existant |
| `/page` | Modifier le contenu d'une page du site |
