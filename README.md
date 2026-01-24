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

## 📦 Build et Test Local

### Build de production

```bash
# Créer un build de production
npm run build
```

Le site statique sera généré dans le dossier `dist/`.

### Tester le build statique localement

Pour vérifier que votre build statique fonctionne correctement avant de le déployer :

```bash
# 1. Créer le build
npm run build

# 2. Vérifier le build (optionnel mais recommandé)
./verify-build.sh

# 3. Prévisualiser le site statique
npm run preview
```

Le site sera accessible sur [http://localhost:8080](http://localhost:8080)

**Alternative avec npx :**

```bash
# Avec serve (recommandé)
npx serve dist

# Avec http-server
npx http-server dist -p 8080
```

### Script de vérification automatique

Le script `verify-build.sh` vérifie automatiquement :

- ✅ Présence du dossier `dist/`
- ✅ Fichier `index.html` généré
- ✅ Fichier `.nojekyll` présent
- ✅ Dossier `_next/` avec les assets
- ✅ Toutes les pages principales
- 📊 Statistiques du build (nombre de fichiers, taille)

### Vérifications manuelles à effectuer

Après avoir lancé le serveur local, vérifiez :

- ✅ Toutes les pages se chargent correctement
- ✅ Les images et assets sont bien chargés
- ✅ La navigation fonctionne (liens internes)
- ✅ Les animations et interactions fonctionnent
- ✅ Le scroll smooth (Lenis) fonctionne
- ✅ Les composants 3D (Three.js) se chargent
- ✅ Pas d'erreurs dans la console du navigateur

## 🌐 Déploiement sur GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions à chaque push sur la branche `main`.

### Configuration

- **Domaine personnalisé** : `adrien.blandin.me` (configuré via le fichier `CNAME`)
- **Workflow** : `.github/workflows/nextjs-gh-pages.yml`
- **Output** : Site 100% statique (SSG - Static Site Generation)

### Fonctionnement du déploiement

1. À chaque push sur `main`, GitHub Actions :
    - Installe les dépendances Node.js
    - Build le site Next.js en mode statique
    - Copie le fichier `CNAME` dans le dossier de distribution
    - Déploie le contenu du dossier `dist/` sur GitHub Pages

2. Le site est accessible à l'adresse : https://adrien.blandin.me

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
