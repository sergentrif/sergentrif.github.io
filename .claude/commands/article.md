# Rédiger le prochain article de blog

Contexte ou contrainte optionnelle : $ARGUMENTS

## Workflow

1. Lire `docs/contents.md` → identifier le prochain item type "article" + vérifier la répartition éditoriale
2. Lire `docs/ghostwriter.md` (section Articles)
3. Si le sujet s'appuie sur des cas clients : lire `docs/missions.md` (missions concernées uniquement)
4. Lire `docs/business.md` pour le positionnement et les chiffres clés
5. Rédiger
6. Proposer pour validation — ne pas créer le fichier avant accord

## Après validation

Créer `src/content/articles/<slug>.md` avec ce frontmatter :

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

Puis mettre à jour `docs/contents.md` : déplacer l'item du backlog vers le tableau "Publié".
