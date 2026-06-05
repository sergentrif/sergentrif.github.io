# CLAUDE.md — portfolio (adrien.blandin.me)

@../CLAUDE.md

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

**Une seule étape** : créer `src/content/articles/YYYY-MM-DD-<slug>.md` (le préfixe date est strippé automatiquement pour l'URL) :

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

Sources : format `- Auteur, "Titre", date — [Label](url)` (tiret cadratin `—` dans les citations uniquement).

Après création : mettre à jour `docs/contents.md` + `docs/compact/contents.compact.md`.

---

## Design system

Structure pages à une colonne + composants → `../docs/compact/design-system.compact.md`.

**Pages validées (ne pas modifier le layout) :** homepage, prestations, témoignages, podcasts.
**Rôle de `/prestations` :** accompagnement, due diligence, conférences. L'audit a sa propre page `/audit`.

---

## Documentation de référence

Chaque fichier est chargé uniquement quand la tâche le nécessite. Ne pas tout lire systématiquement.

| Fichier                            | Contenu                                                                                                                 | Quand le charger                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `../docs/ghostwriter.md`           | Voix, ton, typographie, règles de rédaction. Couvre tous les formats (articles, posts LinkedIn, emails, présentations). | Toute tâche de rédaction ou relecture                                  |
| `../docs/copywriter.md`            | Spécificités du site vitrine : voix par page, règles marketing. Pointe vers ghostwriter.md pour la voix.                | Modification de pages du site uniquement                               |
| `../docs/business.md`              | Positionnement, cible, douleur, offres, avantage compétitif, verbatim home page, contenus LinkedIn profil               | Rédaction de contenu orienté client (pages site, posts mission/client) |
| `../docs/marketing.md`             | Stratégie de prospection, prescripteurs, routine hebdo                                                                  | Planification, choix d'angle pour un contenu                           |
| `../docs/missions.md`              | Détail de chaque mission client (contexte, actions, résultats, insights)                                                | Rédaction d'un contenu qui s'appuie sur un cas client                  |
| `docs/compact/contents.compact.md` | Stratégie éditoriale + 2026 posts + articles publiés (condensé)                                                         | Connaître la stratégie, vérifier ce qui a déjà été publié              |
| `docs/compact/backlog.compact.md`  | Backlog P1/P2 + structure livre blanc "De développeur à CTO" (condensé)                                                 | Choisir le prochain post ou article à rédiger                          |
| `../docs/design-system.md`         | Couleurs, typographie, espacements, composants extraits de Figma                                                        | Modification de composants UI ou ajout d'un nouveau composant          |

---

## Tracking

- URLs dans `src/libs/constants.ts` : propres, sans paramètres. UTM et paramètres de tracking → dans les composants à l'usage.
- Tout lien vers le site dans un contenu externe → ajouter UTMs. Convention :
  - LinkedIn post : `utm_source=linkedin` · `utm_medium=post` · `utm_campaign=<thème>`
  - Email : `utm_source=email` · `utm_medium=newsletter` · `utm_campaign=<thème>`
  - CTA site : `utm_source=site` · `utm_medium=bottom_cta|header` · `utm_campaign=<thème>`

---

## Créer des posts LinkedIn

Frontmatter :

```yaml
title: "Hook du post"
date: "YYYY-MM-DD"
type: "post"
platform: "linkedin"
status: "planned" | "published"
angle: "description de l'angle en une ligne"
case: "opinion" | "Cas A" | "Cas B" | "technique" | "positionnement" | "mission" | "perso"
mission: "" | "slug-mission"
url: ""
```

Signature obligatoire en fin de post :

```
---

Adrien Blandin - CTO freelance • Machine à auditer les équipes techniques.
```

**Dériver depuis un article :**
1. Identifier 3-5 angles distincts dans l'article
2. Proposer structure (nb posts, angles, dates) → attendre validation
3. Écrire les posts avec UTMs (`utm_source=linkedin&utm_medium=post&utm_campaign=<thème>`)
4. Mettre à jour `docs/contents.md` + `docs/compact/contents.compact.md`
