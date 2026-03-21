# Git — conventional commits, rebase, push

## Conventions de ce repo

- **Conventional commits** : `type(scope): description` en minuscules, impératif, sans majuscule ni point final
    - Types valides : `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`
    - Scope optionnel entre parenthèses (ex: `feat(articles): ...`)
- **Stratégie** : rebase (jamais de merge commit), squash à la merge de PR
- **Branche cible** : `main` sauf indication contraire

## Commande demandée : $ARGUMENTS

---

### Si la commande est `commit` (ou vide)

1. `git status` pour voir ce qui a changé
2. `git diff --stat HEAD` pour un résumé
3. Analyser les changements et proposer un message conventional commit adapté
4. Stager les fichiers pertinents (pas de `git add -A` en aveugle — exclure `.env`, fichiers sensibles, binaires non voulus)
5. Créer le commit avec ce format :

```
git commit -m "$(cat <<'EOF'
type(scope): description courte

Corps optionnel si la description seule ne suffit pas.

https://claude.ai/code/session_01AG7dKKNTmfQ439NyyxaZmc
EOF
)"
```

---

### Si la commande est `push`

1. Vérifier la branche courante (`git branch --show-current`)
2. `git push -u origin <branche>` — refuser si la branche est `main`
3. En cas d'échec réseau, retenter jusqu'à 4 fois (2s, 4s, 8s, 16s)

---

### Si la commande est `rebase`

Objectif : rebase de la branche courante sur `main` (ou la branche passée en argument).

1. `git fetch origin <cible>`
2. `git rebase origin/<cible>`
3. En cas de conflits : les afficher et guider la résolution fichier par fichier
4. Ne jamais utiliser `git merge` — toujours `git rebase`

---

### Si la commande est `done` ou `pr-ready`

Préparer la branche pour la PR (squash + push) :

1. `git status` — vérifier qu'il n'y a pas de changements non commités
2. `git fetch origin main`
3. `git rebase origin/main` — résoudre les conflits si besoin
4. `git push -u origin <branche>` (force-with-lease si déjà pushé)
5. Afficher un résumé des commits de la branche (`git log origin/main..HEAD --oneline`)
   et rappeler que la PR sera squashée : le titre de la PR doit suivre le conventional commit

---

### Si la commande est `log`

`git log origin/main..HEAD --oneline` pour voir les commits de la branche courante.

---

### Règles générales

- Ne jamais push sur `main` directement
- Ne jamais utiliser `--no-verify` sauf si l'utilisateur le demande explicitement
- Ne jamais amender un commit déjà pushé (utiliser un nouveau commit)
- Toujours utiliser `--force-with-lease` plutôt que `--force`
