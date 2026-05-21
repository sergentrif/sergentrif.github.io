# adrien.blandin.me

Site vitrine + blog, Next.js 15 SSG, déployé sur GitHub Pages.

---

## Développement local

```bash
make install   # Installe les dépendances
make dev       # Dev server sur http://localhost:3000
```

---

## Commandes

```bash
make build       # Build production → dist/
make preview     # Serve dist/ sur :8080
make lint        # ESLint
make format      # Prettier fix
make typecheck   # TypeScript (no emit)
make check       # typecheck + lint + format check
```

---

## Déploiement

Push sur `main` → GitHub Actions :

1. Build Next.js statique
2. Déploiement sur GitHub Pages

Site accessible sur https://adrien.blandin.me

---

## Stack

- Next.js 15 · TypeScript · Tailwind CSS 4
- Framer Motion · Lenis · Radix UI
