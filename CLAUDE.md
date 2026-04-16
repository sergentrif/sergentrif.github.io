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

## Design system — pages à une colonne

Pages concernées : diagnostic, pro-bono, parcours, articles (liste + article), mentions-légales, confidentialité.

**Structure type (arrow header) :**

```jsx
<section className="flex flex-col pt-12 pb-16">
  <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
    <ContactModalArrowIcon ... />
    <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Titre</h1>
    <ContactModalArrowIcon className="rotate-180 scale-y-[-1] ..." />
  </div>
  <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
    <div className="flex flex-col gap-6"> {/* bloc */}
      <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">…</h2>
      <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">…</div>
    </div>
  </div>
</section>
```

**Séparateurs :**

- Pages texte : aucun séparateur visuel entre blocs. L'espacement (`md:gap-16`) suffit.
- `border-linear-gradient` : liste d'articles uniquement (entre chaque article).
- `border-brand-lavender border-b-2` : cards et page prestations uniquement.

**Pages validées par le designer — ne pas modifier le layout :** homepage, prestations, témoignages, podcasts.

**Rôle de `/prestations` :** ce qui vient après ou à côté de l'audit (accompagnement, due diligence, conférences). L'audit a sa propre page `/audit` — ne pas le remettre sur `/prestations`.

---

## Documentation de référence

Chaque fichier est chargé uniquement quand la tâche le nécessite. Ne pas tout lire systématiquement.

| Fichier               | Contenu                                                                                                                 | Quand le charger                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `docs/ghostwriter.md` | Voix, ton, typographie, règles de rédaction. Couvre tous les formats (articles, posts LinkedIn, emails, présentations). | Toute tâche de rédaction ou relecture                                                     |
| `docs/copywriter.md`  | Spécificités du site vitrine : voix par page, règles marketing. Pointe vers ghostwriter.md pour la voix.                | Modification de pages du site uniquement                                                  |
| `docs/business.md`    | Positionnement, cible, douleur, offres, avantage compétitif, verbatim home page, contenus LinkedIn profil               | Rédaction de contenu orienté client (pages site, posts mission/client)                    |
| `docs/marketing.md`   | Stratégie de prospection, prescripteurs, routine hebdo                                                                  | Planification, choix d'angle pour un contenu                                              |
| `docs/missions.md`    | Détail de chaque mission client (contexte, actions, résultats, insights)                                                | Rédaction d'un contenu qui s'appuie sur un cas client                                     |
| `docs/contents.md`    | Stratégie éditoriale + index éditorial : backlog, statuts, historique de publication                                    | Toute tâche éditoriale (savoir quoi écrire, quoi a été publié, quelle répartition suivre) |

---

## Skills éditoriaux

| Commande     | Action                                 |
| ------------ | -------------------------------------- |
| `/post`      | Rédiger le prochain post LinkedIn      |
| `/article`   | Rédiger le prochain article de blog    |
| `/relecture` | Améliorer un contenu existant          |
| `/page`      | Modifier le contenu d'une page du site |
