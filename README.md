# Site Portfolio Adrien Blandin

Portfolio personnel développé avec Next.js 15, déployé sur GitHub Pages avec un domaine personnalisé.

## 🚀 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📦 Build

```bash
# Créer un build de production
npm run build
```

Le site statique sera généré dans le dossier `dist/`.

## 🌐 Déploiement sur GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions à chaque push sur la branche `main`.

### Configuration

- **Domaine personnalisé** : `adrien.blandin.dev` (configuré via le fichier `CNAME`)
- **Workflow** : `.github/workflows/nextjs-gh-pages.yml`
- **Output** : Site 100% statique (SSG - Static Site Generation)

### Fonctionnement du déploiement

1. À chaque push sur `main`, GitHub Actions :
   - Installe les dépendances Node.js
   - Build le site Next.js en mode statique
   - Copie le fichier `CNAME` dans le dossier de distribution
   - Déploie le contenu du dossier `dist/` sur GitHub Pages

2. Le site est accessible à l'adresse : https://adrien.blandin.dev

### Configuration Next.js pour GitHub Pages

Le fichier `next.config.ts` est configuré pour l'export statique :

```typescript
{
  output: 'export',           // Export statique
  distDir: 'dist',           // Dossier de sortie
  trailingSlash: true,       // URLs avec trailing slash
  images: {
    unoptimized: true,       // Images non optimisées (requis pour export statique)
  }
}
```

## 🛠️ Technologies utilisées

- **Framework** : Next.js 15
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion
- **3D** : Three.js avec React Three Fiber
- **UI Components** : Radix UI
- **Smooth Scroll** : Lenis

## 📝 Notes

- Le dossier `dist/` est ignoré par Git (généré automatiquement lors du build)
- Le fichier `.nojekyll` dans `public/` indique à GitHub Pages de ne pas traiter le site comme un site Jekyll
- Le fichier `CNAME` contient le domaine personnalisé et est copié automatiquement dans `dist/` lors du déploiement
