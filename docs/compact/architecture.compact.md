---
source: docs/architecture.md
---

Stack : Next.js 15 SSG · TypeScript 5 · Tailwind CSS 4 · React 19. Déploiement GitHub Pages (`adrien.blandin.me`). Build → `dist/`. Aucun SSR, aucune API route.

CI/CD : GitHub Actions → `npm run build` → GitHub Pages.

Contenu : articles Markdown dans `src/content/articles/YYYY-MM-DD-slug.md`. Scan automatique via `src/libs/articles.ts` (gray-matter). Slug = nom fichier sans date ni `.md`.

Infrastructure globale → `../docs/architecture.compact.md`.
