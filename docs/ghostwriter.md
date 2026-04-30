# Ghostwriter — Adrien Blandin

Référence unique pour tout contenu rédigé par ou pour Adrien.
Deux modes : rédaction A→Z ou relecture/amélioration.
Dans les deux cas : gommer les imperfections, jamais écraser la voix.

---

## 1. Voix

### Forces naturelles à préserver

- Phrases courtes, assertives. Pas de transitions molles.
- Ancré dans l'expérience terrain - jamais dans la théorie.
- Introspectif : part de lui, analyse son propre comportement, en tire une position universelle.
- Les détails humains et concrets restent (anecdotes, lieux, noms de clients, chiffres réels).
- Conclusions tranchées - il prend position, il n'invite pas à réfléchir.
- Anglicismes assumés : stack, CTO, squads, roadmap, build…
- Ton pragmatique, légèrement désabusé. Jamais cynique, jamais moralisateur.
- "Philosophie technique" : il théorise à partir du terrain. Force en article, à doser en post LinkedIn.
- Style assertif et dense - pas minimaliste. Les phrases s'enchaînent, elles ne s'empilent pas.
- Registre oral assumé quand c'est juste : "merde en prod" plutôt que "part en prod".

### Règles typographiques

- Pas de tirets cadratins (—) : ni en incise, ni en liste, jamais. Tiret simple (-) à la place.
- Pas de majuscule après les deux points quand ce qui suit est une continuation de phrase.
- Les deux points comme outil rythmique : poser une tension, résoudre immédiatement.
- Parallélisme dans les listes : phrases courtes, structure identique.

### Rythme de phrase

- Transitions courtes : "L'objectif :" pas "Le principe directeur :".
- Conclusions négatives toujours suivies d'une affirmation. "Ce n'est pas X, c'est Y." Pas juste "Pas X."
- Les listes tiennent en fragments parallèles, pas en phrases complètes.

### Interdits transversaux

Valables pour tous les formats, classés par fréquence de violation :

- **La conclusion flottante** : bon diagnostic, pas de choix. Il décrit deux positions, se dérobe à la troisième. Si la conclusion contient "ça dépend" ou "il faut trouver l'équilibre" sans préciser lequel - elle n'est pas encore écrite.
- **Le paragraph-manifeste** : quand un principe lui est cher, il liste ses convictions ("Je crois au travail, je crois à l'effort…"). Un seul principe énoncé, développé immédiatement. Pas une liste.
- **Le glissement CTO→CEO** : sur un contenu CEO, les termes techniques apparaissent sans traduction business. Signal d'alerte : "architecture", "stack", "dette technique" sans conséquence business immédiate.
- Connecteurs logiques inutiles : "Car", "Ainsi", "En effet", "Par conséquent", "Néanmoins".
- Formules marketing : "clé en main", "cercle vertueux", "valeur ajoutée".
- Formule symétrique qui sonne comme une IA.
- "Il est important de noter que", "il convient de", "force est de constater".
- Voix passive quand la voix active est possible.
- Intro générique ("Dans le monde professionnel d'aujourd'hui…").
- Conclusion qui résume ce qui vient d'être dit.
- Métaphores grandiloquentes, storytelling forcé, ton inspirational.
- Jargon non balisé (_synergies_, _ownership_).

---

## 2. Articles (adrien.blandin.me)

- Premier paragraphe = enjeu immédiat. Zéro préambule.
- Paragraphes de 2-4 phrases. Phrase seule = emphase volontaire.
- H2/H3 uniquement si phases nommées (process, taxonomie). Articles d'opinion = pas de headings.
- Listes : uniquement pour du concret énumérable. Jamais à la place d'un argument.
- Fin = renvoi article suivant ou CTA contact. Jamais de conclusion-résumé.
- Exemples tirés de lePERMISLIBRE, Objow, Edenred, Batch. Pas d'exemples génériques.
- Si un post LinkedIn sur le même sujet existe : le post pointe vers l'article, pas l'inverse.

### Rhétorique

- Vouvoiement du lecteur. "Je" toujours, "nous" seulement pour désigner une équipe dans un exemple.
- Crédibilité par le vécu : nommer lePERMISLIBRE (jamais "mon ancienne entreprise"), contextualiser (7 ans, 3→30 devs, intro en bourse).
- Positions tranchées ("je suis convaincu", "à mes yeux") + limites explicites ("je n'ai jamais expérimenté au-delà de X").
- Chiffres explicites. Jamais "beaucoup" quand un chiffre existe.
- Anglicismes en italique : _context switching_, _Developer Experience_, _flow state_.
- Transitions adversatives : "Pourtant", "Cependant", "Toutefois", "Attention".
- Humour ponctuel : une phrase courte, jamais forcée, souvent fin de section.

---

## 3. Posts LinkedIn

### Ciblage : CTO ou CEO

Deux audiences distinctes. Les confondre est le glissement le plus fréquent.

**Posts CTO/management** : peuvent mentionner architecture, stack, dette technique.

**Posts CEO** (Cas A : sans CTO / Cas B : avec CTO qui doute) : douleur business, pas technique. Le CEO ne sait pas ce qu'est une dette technique - il sait que son produit ralentit, que son équipe rame.

Traductions obligatoires sur posts CEO :

- "dette technique" → "les décisions rapides d'il y a deux ans qui coûtent cher aujourd'hui"
- "architecture monolithique" → "tout est câblé ensemble, changer une chose casse autre chose"
- "pas de CI/CD" → "chaque mise en prod est une prise de risque manuelle"

### Hook

Fait accompli, chiffre, annonce, déclaration - jamais une introduction à une réflexion.

Qui fonctionnent :

- Fait accompli : "Ça y est, c'est officiellement la fin de ma collaboration avec Objow."
- Déclaration première personne : "Je ne cherche jamais le coupable quand quelque chose merde en prod."
- Chiffre concret : "J'ai refusé plusieurs packages à 100k€+."
- Autodérision : "Attention, ce post contient des passages difficiles d'auto-satisfaction."
- Émotion brute : "Putain, c'est dingue tout ce que l'on peut changer en un an."
- Contredire l'ambiance générale de LinkedIn : "Je n'ai pas de conseil à donner sur l'IA."
- Citation directe d'une conversation réelle.
- Pratique inattendue : "Tous mes recrutements se terminent par un vote à bulletin secret."

Qui ne fonctionnent pas :

- Annonce d'une réflexion : "La vraie interrogation autour de l'IA en 2025…"
- Généralisation sur un rôle : "Être CTO en scale-up c'est…"
- Promesse de liste : "Il y a deux choses que j'observe systématiquement…"
- Question rhétorique en ouverture.
- Maxime en ouverture - la placer en deuxième ligne après un hook réel.
- Titre d'article déguisé en hook.

### Hook + maxime

Quand un post repose sur un principe fort : hook ancré dans le réel → maxime en deuxième ligne.
Ex : "Je ne cherche jamais le coupable quand quelque chose merde en prod. Seuls ceux qui ne font rien, ne font pas d'erreurs."
Le hook crée la réaction, la maxime pose le socle.

### Règles post

- Un seul point. Si "quel est le point central ?" contient "et aussi" → c'est deux posts.
- Pas de hashtags en corps de texte.
- PS 1 / PS 2 pour les précisions qui enrichissent sans alourdir le corps.

### Test avant publication

- Le hook annonce-t-il un fait ou une réflexion ?
- Un seul point central ?
- La dernière ligne tranche-t-elle ou observe-t-elle ?
- CEO ou CTO ? Termes techniques traduits si CEO ?
- Des tirets cadratins (—) ? → remplacer par (-).
- Des majuscules après les deux points ? → corriger.
- Le registre oral a-t-il été lissé ? → restaurer.

---

## 4. Description LinkedIn (À propos)

**Objectif :** que le bon CEO se reconnaisse et ait envie d'écrire.

**Contenu :**

- Partir de la douleur du lecteur, pas de l'offre. Une seule douleur tenue sur tout le texte.
- La crédibilité arrive après la reconnaissance, jamais avant.
- lePERMISLIBRE nommé explicitement avec contexte. Jamais "mon ancienne entreprise".
- Pas de liste de prestations. Pas de mention de krma.

**Fin :**

- Invitation directe à échanger. "On peut en parler en 30 minutes" pas "n'hésitez pas à me contacter".

---

## 5. Emails et messages courts

Formats : cold mails prospection, messages LinkedIn directs, relances.

- Enjeu du destinataire en ligne 1. Pas de présentation de soi avant la pertinence.
- Maximum 5-6 lignes. Chaque ligne justifie sa présence.
- Pas de formule d'accroche ("J'espère que vous allez bien").
- La crédibilité tient en une phrase : lePERMISLIBRE + chiffre + rôle actuel. Pas un CV.
- Un seul CTA par message. Concret et daté si possible ("15 min cette semaine ?").
- Relance : une ligne, ton direct, pas d'excuse pour relancer.

---

## 6. Contenus en anglais (Timescanner)

Posts LinkedIn, cold messages, pages marketing.

Erreurs syntaxiques récurrentes à corriger :

- "I always ended not starting" → "I never managed to start"
- "a tool I will forgot" → "a tool I'll forget"
- "count time" → "track time"
- Liens en milieu de phrase → les mettre en fin de paragraphe ou CTA séparé.

Ton : même registre qu'en français. Direct, expérience terrain, pas de formules LinkedIn américaines.

