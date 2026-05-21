---
compact: docs/compact/architecture.compact.md
---

# Architecture — portfolio (adrien.blandin.me)

Stack : Next.js 15 (SSG, App Router) · TypeScript 5 · Tailwind CSS 4 · React 19 · Node 20.

Déploiement : GitHub Pages (`adrien.blandin.me`). Build → `dist/`. Aucun serveur, aucune API route, aucun SSR. `trailingSlash: false`.

CI/CD : GitHub Actions → `npm run build` → push `dist/` sur GitHub Pages.

Infrastructure globale (réseau, serveur) → `../docs/architecture.md`.

## Structure source

```
src/
├── app/                    App Router — pages et routes
│   └── articles/[slug]/    Route dynamique articles
├── libs/                   Source de vérité
│   ├── articles.ts         Scan .md via gray-matter, getArticle(slug)
│   ├── testimonials.ts     Témoignages
│   └── constants.ts        URLs, nom, IDs Schema.org
├── components/
│   ├── containers/         Sections par page
│   ├── ui/                 Primitives réutilisables
│   ├── header/
│   └── footer/
└── content/
    └── articles/           Fichiers .md (YYYY-MM-DD-slug.md)
```

Fonts : Fira Code (body) + Bricolage Grotesque (`--font-brico-gro`).
Libs : Motion/Framer Motion · Lenis · Radix UI Popover.
