# Rédiger le prochain post LinkedIn

Contexte ou contrainte optionnelle : $ARGUMENTS

## Workflow

1. Lire `docs/contents.md` → identifier le prochain item P1 type "post" + vérifier la répartition éditoriale (Cas B minimum 2/mois, équilibre mission/technique/perso)
2. Lire `docs/ghostwriter.md` (section Posts LinkedIn)
3. Si le post s'appuie sur une mission : lire `docs/missions.md` (mission concernée uniquement)
4. Si besoin d'angle stratégique ou de positionnement : lire `docs/business.md`
5. Rédiger : un seul point, hook factuel, typographie stricte. **Clôture obligatoire :** terminer par une question ouverte ou un angle que le lecteur peut contredire — jamais par une conclusion fermée. L'espace pour le désaccord génère les commentaires.
6. Proposer pour validation — ne pas créer le fichier avant accord

## Après validation

Créer `src/content/posts/YYYY-MM-DD-slug.md` avec ce frontmatter :

```markdown
---
title: "Titre ou hook du post"
date: "YYYY-MM-DD"
type: "post"
platform: "linkedin"
status: "published"
angle: "Description courte de l'angle"
case: "Cas A | Cas B | technique | perso | positionnement"
mission: "slug-mission (si applicable)"
url: "https://linkedin.com/..."
---

Contenu du post...
```

Puis mettre à jour `docs/contents.md` :

1. Déplacer l'item du backlog vers le tableau "Publié", remplir date et URL.
2. Identifier le chapitre du livre blanc le plus pertinent pour ce post (section "Backlog — Livre blanc").
    - Si le post a été écrit explicitement pour le livre blanc : l'ajouter à la ligne `*→ Livre blanc :*` du chapitre (créer la ligne si elle n'existe pas).
    - Si le post est thématiquement lié sans être un post livre blanc : l'ajouter à la ligne `*→ Matière :*` du chapitre (créer la ligne si elle n'existe pas).
    - Si le post n'est lié à aucun chapitre : ne rien faire.
