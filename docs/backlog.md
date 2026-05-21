<!-- compacted: 2026-04-29 | extrait de contents.md (~5500 tokens) | backup: docs/contents.md.backup.20260429_101955 -->

# Backlog éditorial — Adrien Blandin

Charger pour choisir le prochain post ou article à rédiger.

---

## Mode 1 — CEO signals

_(Priorité absolue — 7-8 posts/mois. Voix CTO, conséquence business. Jamais de hype, jamais de généralités : chaque angle encode le mécanisme technique derrière le symptôme CEO.)_

### IA adoption — angle CEO

| Type | Priorité | Titre de travail                                                                                                         | Angle (mécanisme technique + conséquence business)                                                                                                                                       | Cas     | Mission  | Status  |
| ---- | -------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- | ------- |
| post | P1       | Mon fond me demande des exemples IA concrets. Je n'en ai pas.                                                            | La question est mal posée — ce qu'il faut vraiment mesurer : vélocité, time-to-market, ratio build/buy. Pas de KPI IA = pas de pilotage possible                                         | Cas B   | -        | backlog |
| post | P1       | 80% des entreprises utilisent l'IA. 80% disent que ça n'a rien changé. Vous n'êtes pas seul.                             | McKinsey juin 2025 — 90% des cas d'usage transformateurs bloqués en phase pilote. Ce n'est pas un problème de technologie. C'est un problème d'organisation.                             | Cas B   | -        | backlog |
| post | P1       | Ce n'est pas un problème de technologie. C'est un problème d'organisation.                                               | L'IA individuelle fonctionne. L'IA collective casse sur les mêmes défauts organisationnels que le reste : specs floues, ownership flou, rituels absents                                  | opinion | -        | backlog |
| post | P1       | On a offert l'IA gratuitement pendant un an. Les habitudes n'ont pas changé.                                             | Adoption progressive = changement jamais prioritaire. L'outil ne change pas l'organisation — l'organisation doit changer pour l'outil. Mécanisme d'inertie                               | opinion | -        | backlog |
| post | P1       | Votre CTO a une stratégie IA pour les développeurs. Pas pour l'équipe entière.                                           | L'IA individuelle ≠ feedback loop inter-métiers. Personne n'a encore résolu comment l'output IA d'un designer devient l'input IA d'un dev                                                | Cas B   | -        | backlog |
| post | P1       | Ce que votre équipe fait vraiment avec l'IA, vous ne le savez pas.                                                       | Sans TokenOps ni rituels de partage, chaque dev a son harness privé. L'organisation n'en bénéficie pas — et ne peut pas l'auditer ni le reproduire                                       | Cas B   | -        | backlog |
| post | P1       | Plus de vélocité IA + même capacité de supervision = plus de dette, pas plus de valeur.                                  | GitClear 2024 : code dupliqué ×8. DORA : stabilité livraisons -7,2% avec IA. Le goulot passe de la production à la validation — et la validation reste humaine                           | Cas B   | -        | backlog |
| post | P1       | Votre CTO vous parle d'agents IA autonomes. Voici ce que vous devriez lui demander.                                      | LLM probabiliste dans un pipeline déterministe = cassure systématique à l'étape N. Trois questions précises à poser sur l'orchestration avant d'investir                                 | Cas B   | -        | backlog |
| post | P1       | Les bonnes pratiques pour utiliser l'IA en équipe n'existent pas encore. Personne ne les a.                              | Les entreprises cherchent à recruter des profils qui ont déjà structuré ça — ils n'existent pas. Désangoissant pour le CEO qui ne voit pas de résultats                                  | opinion | -        | backlog |
| post | P2       | L'IA fonctionne parfaitement pour les solopreneurs. C'est pour ça que vos concurrents partis de zéro avancent plus vite. | Start-up AI native = sans codebase legacy, sans process à réformer, sans équipe à convaincre. Le handicap structurel de la maturité                                                      | Cas A/B | -        | backlog |
| post | P2       | Bloquer les recrutements jusqu'à preuve d'usage IA : radical, mais structurellement cohérent.                            | L'adoption forcée = seule alternative à l'adoption progressive qui ne prend pas. Analyse des mécanismes d'inertie organisationnelle                                                      | opinion | -        | backlog |
| post | P2       | Votre fond va vous demander combien de votre code est généré par IA. Êtes-vous prêt à répondre ?                         | Nadella/Pichai : 25-50% de code IA déclaré. Les investisseurs vont poser la question — et ne pas mesurer est une réponse en soi                                                          | Cas B   | -        | backlog |
| post | P2       | Vos abonnements IA à 100€/mois sont artificiellement bas. Ce que ça implique pour vos choix d'architecture.              | Stratégie Uber — dépendance installée avant la hausse des prix. Argument technique pour la souveraineté du harness et l'open-source local                                                | opinion | -        | backlog |
| post | P2       | Vous avez recruté des juniors cette année. Voici pourquoi c'est peut-être le dernier recrutement de ce profil.           | Stanford/ADP : emploi dev 22-25 ans -20% depuis fin 2022. L'IA supprime le terrain d'apprentissage — pas les métiers. Question sans réponse : comment forme-t-on les seniors de demain ? | opinion | -        | backlog |
| post | P2       | Votre CTO vous budgète combien pour les tokens IA en 2027 ?                                                              | TokenOps = nouvelle ligne budgétaire. Un seul pipeline de prod en boucle peut générer des factures imprévues. FinOps IA = sujet que presque personne n'a structuré                       | Cas B   | -        | backlog |
| post | P2       | Elle voulait un agent IA autonome. On a livré un assistant.                                                              | Recalibrage des attentes : pourquoi le probabiliste casse toujours dans un pipeline déterministe — et ce qu'on peut vraiment automatiser sans risque                                     | Cas B   | certixio | backlog |
| post | P2       | L'IA comme fuite en avant                                                                                                | Startups early-stage qui noient leur proposition de valeur dans la hype IA avant d'avoir validé leur marché. L'IA ne remplace pas une PV                                                 | Cas A   | aaticka  | backlog |

### Symptômes d'achat — angle CEO

| Type | Priorité | Titre de travail                                                                      | Angle (mécanisme technique + conséquence business)                                                                                                                  | Cas     | Mission | Status  |
| ---- | -------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- | ------- |
| post | P1       | Votre roadmap glisse. Tout le monde le sait. Personne ne dit pourquoi.                | Trois causes techniques derrière le glissement chronique : specs insuffisantes avant le dev, dépendances cachées entre tickets, absence de découpage granulaire     | Cas B   | -       | backlog |
| post | P1       | Votre CTO vous dit "bientôt" depuis six semaines.                                     | Ce mot signifie précisément : tâche non découpée, ou dépendance non identifiée, ou personne ne sait ce qui reste à faire. Chacun a une solution différente          | Cas B   | -       | backlog |
| post | P1       | Les estimations sont toujours fausses. Ce n'est pas un problème de méthode.           | Les estimations sont fausses quand les specs sont floues et les dépendances invisibles. Changer de méthode (no-estimate, story points…) ne change rien en amont     | Cas B   | -       | backlog |
| post | P1       | Votre développeur senior ne dit plus rien en réunion. Mauvais signe.                  | Désengagement silencieux : signaux techniques mesurables — PR reviews moins commentées, documentation abandonnée, commits plus rares. Diagnostic avant la démission | Cas B   | -       | backlog |
| post | P1       | Deux développeurs clés sont partis en six mois. Ce n'est pas de la malchance.         | Turnover groupé = symptôme organisationnel. Trois causes systémiques : absence de vision technique, manque d'autonomie, dette qui épuise sans horizon de sortie     | Cas B   | -       | backlog |
| post | P1       | Votre CTO est indispensable. C'est un problème, pas un compliment.                    | Bus factor 1 sur le CTO = organisation qui a arrêté de grandir. Documentation inexistante, décisions non tracées, équipe en dépendance                              | Cas B   | -       | backlog |
| post | P1       | Votre équipe passe plus de temps à corriger qu'à construire.                          | Ratio correctif/constructif > 40% = signe systémique. Causes : absence de tests, dette de documentation, pas de code review. Métrique accessible sans être CTO      | Cas A/B | -       | backlog |
| post | P1       | Votre produit tient par des élastiques. Vous le sentez mais ne pouvez pas le mesurer. | Absence de monitoring, de tests automatisés, de runbooks = la prod tient jusqu'à ce qu'elle ne tienne plus. Comment lire la fragilité technique sans être CTO       | Cas A/B | -       | backlog |
| post | P2       | Chaque déploiement est une source d'anxiété pour votre équipe.                        | Déploiement anxiogène = absence de CI/CD, pas de staging propre, pas de rollback documenté. Signal fort que la dette s'est installée dans les fondations            | Cas B   | -       | backlog |
| post | P2       | Vous recrutez des développeurs mais la vélocité n'augmente pas.                       | Onboarding sans documentation, code opaque, pas de mentor = chaque recrue ralentit l'équipe 3-6 mois avant de contribuer. Recrutement qui coûte avant de rapporter  | Cas B   | -       | backlog |
| post | P2       | Votre board vous pose des questions techniques auxquelles vous ne savez pas répondre. | Ce n'est pas un problème de connaissance — c'est un problème d'information. Comment construire un tableau de bord tech lisible sans être CTO                        | Cas B   | -       | backlog |
| post | P2       | La levée approche. C'est maintenant que vous allez découvrir ce qui manquait.         | Due diligence technique = radiographie à froid. Ce que les investisseurs cherchent vraiment et les trois points qui font capoter les levées                         | Cas A/B | -       | backlog |
| post | P2       | Vous portez la tech tout seul. Jusqu'à quand ?                                        | CEO-CTO ad interim = décisions prises sans le référentiel pour les évaluer. Le coût silencieux des mauvaises décisions accumulées sans arbitre technique            | Cas A   | -       | backlog |
| post | P2       | Votre lead dev plafonne. Vous le voyez mais ne savez pas quoi faire.                  | Lead dev ≠ CTO : périmètre différent, pas problème de talent. Ce que l'un ne peut structurellement pas faire même en voulant bien                                   | Cas A   | -       | backlog |
| post | P2       | Vous avez délégué la tech à une agence. Vous ne savez plus ce que vous possédez.      | Dépendance agence = PI non maîtrisée, code sans documentation, bus factor externe. Comment auditer la situation et reprendre le contrôle progressivement            | Cas A   | -       | backlog |

### Terrain / missions

| Type | Priorité | Titre de travail                                            | Angle                                                                                                                                               | Cas            | Mission    | Status    |
| ---- | -------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------- | --------- |
| post | P1       | Le CEO m'a dit que tout allait bien                         | CEO et CTO, même boîte, deux réalités parallèles. Ce que les entretiens individuels font remonter que la direction ne voit pas                      | Cas B          | hupso      | backlog   |
| post | P1       | Le goulot d'étranglement, c'était lui                       | Le fondateur est souvent le vrai blocage — sans le savoir. Quand l'organisation est construite autour d'une personne qui ne peut pas déléguer       | Cas B          | glaaster   | backlog   |
| post | P1       | Un projet bien pensé est peu visible                        | La valeur d'une bonne archi ne se voit que dans l'avant/après — ou quand quelque chose ne casse pas. Paradoxe de l'excellence technique             | opinion        | olset      | backlog   |
| post | P1       | L'audit ne suffit pas                                       | Diagnostiquer ≠ opérer. Un état des lieux sans suivi = rapport qui dort. Audit et accompagnement = 2 missions distinctes avec 2 valeurs différentes | positionnement | olset      | backlog   |
| post | P1       | Une journée pour convaincre                                 | Démontrer > pitcher. 1j d'atelier → proposition de CTO acceptée. Ce que ça dit sur la manière dont les CEOs prennent vraiment leurs décisions       | positionnement | datacomply | backlog   |
| post | P1       | La valeur différée du bon travail                           | Client difficile à chaud, rappelle 6 semaines plus tard : 3 devs → 1 à 1j/semaine                                                                   | Cas A          | olset      | published |
| post | P2       | L'absence de CTO a un coût                                  | Accumulation silencieuse de mauvaises décisions — chaque décision sans arbitre technique a un coût différé qui se paie au mauvais moment            | Cas A          | beemoov    | backlog   |
| post | P2       | Deux fondateurs, deux visions, zéro arbitre                 | Aucun CDC ne résout un désaccord fondateur. Le vrai problème n'était pas technique — et un CTO peut le révéler mais pas le résoudre                 | Cas B          | olset      | backlog   |
| post | P2       | Edenred frappait à la porte                                 | Grand compte = opportunité et révélateur simultanément. Ce que la tech révèle quand elle doit passer à l'échelle sans l'avoir prévu                 | Cas A          | objow      | backlog   |
| post | P2       | J'ai négocié contre mon client                              | CTO fractionnel en négociation commerciale : droits PI + licences ×2. Quand l'intérêt du client et l'intérêt de son partenaire divergent            | positionnement | objow      | backlog   |
| post | P2       | Le résultat paradoxal                                       | J'ai perdu un client. Son produit m'a donné raison 6 mois plus tard. Ce que ça dit sur la valeur d'un regard extérieur qui refuse de se taire       | positionnement | jami       | backlog   |
| post | P2       | J'aurais dû dire non                                        | Challenger les estimations = responsabilité du CTO. Quand accepter ce qu'on vous demande est le service le moins utile                              | positionnement | olset      | backlog   |
| post | P2       | 75% de mes clients ont abandonné leur projet                | Dire non = compétence core du CTO fractionnel. Ce que ça coûte de ne pas challenger les fondements d'un projet avant de commencer à construire      | opinion        | -          | backlog   |
| post | P2       | Je suis un radar à gâchis                                   | Chaque mission tourne autour du même axe : éviter que du temps, de l'argent ou du talent soit gaspillé. Positionnement par le problème récurrent    | positionnement | -          | backlog   |
| post | P2       | J'ai eu tort sur ma cible                                   | Trois mois de terrain pour remettre en question son positionnement — se traiter comme son propre produit. La rigueur d'un CTO appliquée à soi-même  | opinion        | -          | backlog   |
| post | P2       | Il a racheté l'entreprise et licencié l'équipe le même mois | L'équipe n'est pas un coût, c'est le produit. Ce que perdent les acquéreurs qui ne comprennent pas ce qu'ils ont acheté                             | opinion        | omen-data  | backlog   |
| post | P2       | Trois fondateurs, zéro consensus                            | Aucune spec ne résout un problème de gouvernance. Quand le vrai blocage n'est pas la tech — et comment le nommer sans fracasser la relation         | Cas B          | datacomply | backlog   |
| post | P2       | Analyser des dossiers quand tes clients sont des analystes  | Risque de crédibilité fatal — livrer quelque chose de moins bon que ce que votre client produit lui-même. Comment l'éviter                          | Cas A          | aaticka    | backlog   |
| post | P2       | Le mauvais outil coûte un salarié                           | ROI d'un changement technique quantifié : 6k$/an = 1 ETP. Traduction du coût technique en langage que le CEO comprend et peut défendre au board     | technique      | beemoov    | backlog   |

---

## Mode 2 — CTO crédibilité

_(1 post/mois max. Voix CTO technique avec thèse tranchée. Pipeline livre blanc + positionnement fort. Ne pas dépasser ce rythme avant que des CEOs soient dans la bulle.)_

| Type | Priorité | Titre de travail                                          | Angle                                                                                                            | Cas            | Mission    | Status  |
| ---- | -------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------- | ---------- | ------- |
| post | P2       | 15 micro-services pour lire un ticket de caisse           | Over-engineering comme dette invisible — le coût organisationnel d'une archi mal calibrée                        | technique      | omen-data  | backlog |
| post | P2       | CTO sans titre, sans paie, sans reconnaissance            | Le profil tech qui surcompense face au désordre des autres — et pourquoi ça finit toujours mal                   | technique      | hupso      | backlog |
| post | P2       | Avant de coder, on a redessiné le process                 | Valeur du cadrage fonctionnel avant le dev — le CTO fractionnel ne code pas, il pense                            | technique      | certixio   | backlog |
| post | P2       | 27h de copier-coller par dossier                          | Gains opérationnels IA mesurés et chiffrés — angle ROI terrain, pas théorique                                    | technique      | certixio   | backlog |
| post | P2       | Trois horizons, pas une to-do list                        | Diagnostic sans priorisation = anxiété, pas action. Structurer un plan d'action sur 3 horizons                   | technique      | glaaster   | backlog |
| post | P3       | La dette technique qu'on ne voit pas                      | Framework propriétaire d'un investisseur = bombe à retardement. Dette cachée dans les choix d'architecture       | technique      | datacomply | backlog |
| post | P3       | Ne pas se faire dicter son architecture                   | Distinguer exigence réelle vs préférence habillée en obligation — compétence politique du CTO                    | technique      | objow      | backlog |
| post | P3       | Le monitoring que personne ne regarde                     | Outillage sans rituels = fausse sécurité. L'observabilité n'a de valeur que si quelqu'un la lit                  | technique      | objow      | backlog |
| post | P3       | Une base de données par client                            | Choix d'archi MVP qui devient un boulet au succès — décision irréversible prise sans en mesurer les conséquences | technique      | objow      | backlog |
| post | P3       | Due diligence                                             | Construire en sachant qu'on sera audité change les décisions dès le départ                                       | technique      | objow      | backlog |
| post | P3       | 50% d'économies sur l'infra                               | Migration cloud = projet financier autant que technique. Chiffres réels d'une optimisation                       | technique      | objow      | backlog |
| post | P3       | Offshore ou pas offshore                                  | Le vrai coût d'un budget insuffisant = ne rien construire. Analyse technique des compromis                       | Cas A          | datacomply | backlog |
| post | P3       | Recruter son propre successeur                            | Mission bien exécutée = sortie propre. Construire son remplacement comme critère de réussite                     | positionnement | objow      | backlog |
| post | P3       | Ressusciter un projet mort                                | La tentation de rappeler l'ancienne équipe — et pourquoi ça ne fonctionne presque jamais                         | technique      | omen-data  | backlog |
| post | P3       | L'ingénieur contre le marketing                           | Incompatibilité de cultures de travail, pas de personnes — et comment l'arbitrer                                 | technique      | hupso      | backlog |
| post | P3       | Quand les équipes n'ont connu qu'une seule maison         | Culture "fait maison" = force jusqu'à ce qu'elle devienne un plafond de recrutement                              | technique      | beemoov    | backlog |
| post | P3       | L'audit comme radiographie                                | Interviewer toute l'équipe, pas seulement la direction — et ce que ça change à la qualité du diagnostic          | positionnement | beemoov    | backlog |
| post | P3       | Développer, art ou artisanat ?                            | L'artisanat comme métaphore du craft — contre la culture du vite fait, pour l'intemporel                         | opinion        | -          | backlog |
| post | P3       | La notion de devenir                                      | Les compétences clés du CTO ne sont pas innées, elles se construisent — et ça se planifie                        | opinion        | -          | backlog |
| post | P3       | Le budget comme filtre de priorités                       | Budget contraint = meilleur product manager. Contrainte comme outil de clarification                             | Cas A          | jami       | backlog |
| post | P3       | Parfois la bonne décision c'est de partir                 | Le mentorat ne vise pas toujours à améliorer dans le poste actuel — honnêteté sur les limites                    | technique      | hupso      | backlog |
| post | P3       | La première fois c'était de la chance. La deuxième aussi. | 3e mission pour prouver que ce n'est pas de la chance — le pattern qui se répète                                 | positionnement | -          | backlog |
| post | P3       | La technique c'est du business                            | CTO qui challenge la cible et la proposition de valeur, pas que la stack                                         | positionnement | aaticka    | backlog |
| post | P3       | Ce qui performe sur LinkedIn n'est pas ce qui convertit   | Les milestones font 100+ likes, les cas clients font 15 — pourtant c'est eux qui génèrent les leads              | opinion        | -          | backlog |

---

## Articles

| Type    | Priorité | Titre de travail                                       | Angle                                                                                | Cas       | Status  |
| ------- | -------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------ | --------- | ------- |
| article | P2       | Vendre la dette technique en interne                   | Traduire la dette en risque business pour le CODIR — délai, coût, fragilité chiffrés | technique | backlog |
| article | P2       | L'indispensabilité est un échec                        | Bus Factor, ownership partagé, plan de succession — argument CTO contre lui-même     | technique | backlog |
| article | P3       | Reprendre une codebase qu'on n'a pas écrite            | Auditer sans démolir, internaliser progressivement — méthode complète                | technique | backlog |
| article | P3       | Gérer une crise aiguë                                  | Prise de décision quand la prod est down depuis 4h — framework sous pression         | technique | backlog |
| article | P3       | Que chercher chez un premier développeur               | Critères non évidents pour un CEO qui recrute sans référentiel technique             | Cas A     | backlog |
| article | P3       | Comment lancer une startup tech sans connaître la tech | Décisions structurantes au démarrage — et les erreurs qui coûtent cher plus tard     | Cas A     | backlog |

---

## Backlog — Livre blanc "De développeur à CTO"

Chaque sous-chapitre = 2-3 posts du jeudi (technique/craft). ✅ = déjà publié. [ ] = à produire.

### Introduction — Le "Career Chasm"

- [ ] Le constat : pourquoi 80% des lead devs échouent ou souffrent en devenant CTO
- [ ] Le changement de paradigme : tu n'es plus payé pour le code que tu produis, mais pour les décisions que tu prends
- [ ] La promesse : un manuel sur la posture, l'humain et la politique — la technique n'est qu'un outil

---

### Partie 1 : L'identité du CTO

**Ch.1 — L'évolution du rôle** `management`

- ✅ Les 5 stades : dev → lead tech → engineering manager → VP engineering → CTO _(publié)_
- [ ] Le même titre, des responsabilités radicalement différentes selon le stade de l'entreprise
- [ ] Savoir où tu te situes : accepter que tes compétences d'hier sont tes freins de demain
- [ ] Le deuil du clavier : gérer la perte de dopamine et le sentiment d'inutilité technique
- [ ] La perte de gratification immédiate : du bug résolu en 20 min à l'organisation dont les effets se mesurent en mois

_→ Livre blanc :_ `2026-02-09-cto-6-metiers-en-3-ans`
_→ Matière :_ `2025-11-11-pourquoi-ceos-veulent-devenir-cto`

**Ch.2 — Le coût personnel du rôle** `management` ⭐

- ✅ Ce que ça coûte vraiment — où est ta limite ? _(publié)_
- [ ] Être responsable ne se décrète pas — ça se vit, et ça surprend
- [ ] Solitude du CTO : tu ne peux plus te plaindre à ton équipe
- [ ] Apprendre à tenir dans la durée sans s'épuiser

_→ Livre blanc :_ `2026-03-30-cout-personnel-leadership`
_→ Matière :_ `2025-11-13-talk-le-wagon-introspection`

**Ch.3 — La posture de dirigeant** `management`

- [ ] L'autorité : passer de "pote" à "patron" — gérer ses anciens collègues
- [ ] Servant Leadership : tu ne donnes pas des ordres, tu lèves des obstacles
- [ ] Ne pas être le plus technique — être le plus polyvalent : produit, design, data, business, infra

_→ Matière :_ `2025-08-17-ceos-visionnaires-batisseurs` · `2026-02-15-scaler-startup-scaler-leaders` · `2025-04-13-prendre-decisions-leadership-technique` · `2026-05-12-cto-vs-cpto`

**Ch.4 — Se former une fois en poste** `management`

- [ ] Quitter la veille techno pour la veille management, finance, négociation
- [ ] Se faire accompagner : mentors, pairs CTO, coaches
- [ ] Rejoindre des réseaux (Tech.Rocks, etc.)
- [ ] Solliciter des 1:1 avec des gens qui ont 5 ans d'avance
- [ ] Lire autrement : blogs, retours d'expérience — pas de documentation technique

**Ch.5 — Organisation personnelle** `management`

- [ ] Maker vs Manager Schedule : survivre à l'agenda haché
- [ ] Writing-First & asynchrone : imposer l'écrit pour réduire le bruit et documenter les décisions

_→ Matière :_ `2025-04-09-etre-efficace-3-outils-organisation`

---

### Partie 2 : L'architecture humaine

**Ch.6 — Recruter** `recrutement`

- [ ] Définir l'organigramme cible à 12 mois (Squads, Guildes)
- [ ] Comment sourcer des candidats : marque employeur, job boards, réseaux, cabinets
- ✅ Quelles compétences chercher : je n'embauche que les gens curieux _(publié)_
- ✅ Top performers solitaires vs équipe moyenne qui collabore _(publié)_
- ✅ Quel process de recrutement : vote à bulletin secret _(publié)_
- [ ] Comment onboarder une nouvelle recrue : les 15 premiers jours sont critiques

_→ Livre blanc :_ `2026-02-11-recruter-gens-curieux` · `2026-03-25-10x-developers-equipe` · `2026-03-23-recrutement-vote-bulletin-secret`
_→ Matière :_ `2025-10-13-premiers-recrutements-au-hasard` · `2025-03-04-probleme-1-entrepreneurs-tech-recruter`

**Ch.7 — Les cycles de l'entreprise et les profils** `management` `recrutement`

- [ ] À chaque stade, un profil différent : couteaux suisses < 20 / experts 20-50 / spécialistes 50+
- [ ] Recruter le bon profil au mauvais moment coûte cher dans les deux sens
- [ ] La dépendance croissante aux expertises externes qui ralentit l'équipe — comment l'anticiper

**Ch.8 — Faire grandir et fidéliser** `management`

- [ ] Grilles de salaires et transparence : éliminer les frustrations financières
- [ ] Plans de carrière : voies distinctes pour les experts (IC) et les managers
- [ ] Qui faire monter en responsabilité : quelqu'un qui le veut vraiment, sait dire non, prend des risques calculés
- [ ] Rituels de management : 1:1 hebdo (ne jamais annuler), skip-level, évaluations

**Ch.9 — Les décisions difficiles** `management`

- [ ] Savoir quand se séparer : identifier les signaux faibles (attitude, performance, toxicité)
- [ ] Le licenciement : mener l'entretien avec humanité et fermeté
- [ ] L'offboarding : sécuriser les accès, récupérer le savoir, soigner la sortie
- [ ] Communication de crise : annoncer le départ à l'équipe pour tuer la rumeur

_→ Matière :_ `2026-04-17-developpeur-silencieux-desengagement`

**Ch.10 — L'indispensabilité est un échec** `management`

- [ ] Le Bus Factor : personne (y compris toi) ne doit être indispensable
- [ ] Diviser les responsabilités : ownership partagé
- [ ] Plan de succession : préparer ses lieutenants à prendre le relais

---

### Partie 3 : L'architecture politique

**Ch.11 — Influence interne (le CODIR)** `management`

- [ ] Le CTO Business Partner : traduire les problèmes techniques en risques business (ROI, délai, argent)
- [ ] Gérer le CEO : canaliser le "Shiny Object Syndrome" et savoir dire NON
- [ ] Communication inter-services : vulgariser pour le marketing et les sales — ne pas être la boîte noire
- [ ] La relation CTO/CPO ou CTO/PM : qui arbitre quand la tech et le produit s'opposent ?

_→ Matière :_ `2025-11-15-information-pouvoir-communication` · `2026-04-14-ceo-estimations-a-la-place-des-devs`

**Ch.12 — Vendre la dette technique en interne** `dette` ⭐⭐⭐

- [ ] Le vrai problème : convaincre un CEO d'investir sur quelque chose qui ne produit aucune feature visible
- [ ] Traduire la dette en risque business : délai, coût, fragilité — pas en jargon technique
- [ ] Négocier un budget "qualité" récurrent sans le justifier à chaque sprint
- [ ] La dette technique comme outil de négociation au CODIR

_→ Matière :_ `2024-06-12-dette-technique-pas-de-refonte` · `2025-01-23-podcast-tech-your-dream-dette-technique` · `2025-04-21-bugs-dette-technique-post-pmf` · `2026-05-08-valeur-differee-bon-travail`

**Ch.13 — La relation avec les investisseurs et le board** `management`

- [ ] Quand et comment un CTO se retrouve devant des investisseurs
- [ ] Présenter une roadmap technique à des gens qui ne comprennent pas la tech
- [ ] Défendre un choix d'architecture en comité : les arguments qui fonctionnent, ceux qui ne fonctionnent pas
- [ ] Due diligence technique : ce qu'on attend du CTO quand la boîte lève ou se fait racheter

_→ Matière :_ `2025-02-16-audit-technique-entree-bourse` · `2024-05-15-audit-technique-investisseurs`

**Ch.14 — Influence externe (marque employeur)** `management`

- [ ] Représenter une tech forte : pourquoi tu dois sortir de ta grotte
- [ ] Attirer les talents : podcasts, articles, conférences
- [ ] Open source et présence communautaire : tu es l'ambassadeur

_→ Matière :_ `2024-04-13-pourquoi-ecrire-si-peu-lisent` · `2025-10-09-talk-emlyon-tech-pas-le-probleme`

---

### Partie 4 : L'usine de production

**Ch.15 — La culture et les valeurs** `management`

- ✅ L'erreur est collective : no blame, psychological safety _(publié — 2 posts)_
- [ ] Sur-communication : tout se passe sur les channels publics
- [ ] Entraide obligatoire : interdiction de laisser un collègue bloqué
- [ ] Être à l'écoute et laisser tout le monde s'exprimer — puis trancher quand il n'y a pas de consensus

_→ Livre blanc :_ `2026-04-06-culture-no-blame` · `2026-04-06-erreurs-collectives`

**Ch.16 — Reprendre une codebase qu'on n'a pas écrite** `architecture`

- [ ] Le cas fréquent : arriver dans une boîte qui a construit sa V1 avec une agence ou des freelances
- [ ] Auditer sans démolir : évaluer l'état réel sans démoraliser l'équipe en place
- [ ] Internaliser progressivement : ne pas tout réécrire, ne pas tout garder — construire une stratégie de transition
- [ ] Gérer la relation avec les prestataires sortants : récupérer le savoir, soigner la passation

_→ Matière :_ `2026-03-09-audit-startup-safe-space` · `2024-04-25-startups-agences-developpement-relation` · `2025-05-03-independance-technologique-agences-accompagnement`

**Ch.17 — Le processus de delivery** `process`

- [ ] L'algorithme de production : 1. Supprimer → 2. Faire à la main → 3. Automatiser
- [ ] La règle des 48h : découpage granulaire des tâches pour la vélocité
- [ ] Agile pragmatique : traçabilité, tickets clairs — pas du dogme
- [ ] Les conflits git comme symptôme organisationnel : quand les branches se percutent, c'est l'organisation qui est cassée

_→ Matière :_ `2025-02-28-estimations-developpement-no-estimate` · `2025-02-19-methode-estimer-durees-developpement` · `2025-01-22-entree-bourse-gestion-changement` · `2025-01-26-curl-commits-normalises-standards`

**Ch.18 — Qualité et amélioration continue** `process`

- [ ] QA : la pyramide de tests, pourquoi les devs testent
- [ ] Gestion des incidents : post-mortems obligatoires
- [ ] Gérer une crise aiguë : prise de décision quand la prod est down depuis 4h, CEO qui panique, équipe épuisée
- [ ] Métriques DORA/SPACE : mesurer la santé du delivery sans fliquer les individus

_→ Matière :_ `2025-04-25-table-ronde-lyon-craft-culture-qualite` · `2024-04-21-invitation-table-ronde-lyon-craft`

---

### Partie 5 : La doctrine technique

**Ch.19 — La philosophie "maison en pierre"** `architecture`

- [ ] Le t-shirt blanc : le contenu prime sur la forme — contre la hype, pour l'intemporel
- [ ] Minimalisme radical : une stack "ennuyeuse" est une stack rentable
- [ ] Buy vs Build : ne jamais coder ce que tu peux acheter

_→ Matière :_ `2025-04-05-whatsapp-en-faire-moins-mieux` · `2025-02-22-microservices-architecture-mal-comprise` · `2025-02-17-fabrication-velo-build-vs-buy`

**Ch.20 — Savoir dire non** `architecture` `management`

- [ ] Dire non aux nouvelles technos : la hype a un coût opérationnel réel
- [ ] Dire non aux nouvelles architectures sans raison valide
- [ ] Dire non aux nouvelles features : le périmètre qui grossit sans décision explicite est une dette cachée
- [ ] Quand le quick and dirty est acceptable : les critères pour décider consciemment — et ne pas se mentir

_→ Matière :_ `2026-04-08-dire-non-avant-d-ouvrir-jira` · `2025-03-20-dire-non-livre-chris-voss`

**Ch.21 — L'IA comme changement structurel du métier** `ia`

- [ ] Au-delà de Copilot : l'IA ne change pas seulement la vitesse, elle change la nature du travail
- [ ] Le profil des recrutements en 2025 : le junior augmenté, le senior recentré sur l'architecture et le jugement
- [ ] Le rapport build/buy recalibré : ce qu'on peut déléguer à l'IA, ce qui reste du travail humain
- [ ] Les risques : dette de compréhension, dépendance aux outils, qualité invisible
- [ ] Construire un cadre d'usage pour l'équipe : ni interdire, ni adopter sans réflexion

_→ Matière :_ `2026-03-11-ia-standardisation-equipe` · `2025-02-24-ia-generation-code-bolt-new` · `2026-03-21-article-ia-long-format` · `2026-04-28-agents-ia-orchestration` · `2026-04-30-ia-en-equipe-system-engineering-tokenops` · `2026-05-14-assistant-ia-scripts-python-crons`

**Ch.22 — Stratégie applicative et data** `architecture`

- [ ] Mobile First et UX : l'utilisateur doit être autonome (self-service)
- [ ] Data Driven : Modern Data Stack, analytics, fin des hypothèses
- [ ] Software Craftsmanship : Clean Code, DDD, lisibilité > performance
- [ ] Nettoyage régulier de la codebase : comme la vaisselle — si tu ne le fais pas en continu, tu ne peux plus cuisiner

_→ Matière :_ `2025-05-07-base-de-donnees-atout-equipe-produit`

**Ch.23 — Developer Experience (DevEx)** `process`

- [ ] Outillage : IA (Copilot), CI/CD, environnements (dev, staging, prod)
- [ ] Maintenance automatique : Dependabot, mises à jour
- [ ] Documentation : Notion, OpenAPI — si ce n'est pas écrit, ça n'existe pas

_→ Matière :_ `2025-05-11-developer-experience-atelier-h7` · `2024-04-17-article-developer-experience-publie`

---

### Partie 6 : L'argent

**Ch.24 — FinOps et budget** `finops`

- [ ] Le P&L Tech : construire, défendre et piloter un budget annuel
- [ ] Cost Killing : optimiser les factures Cloud (Azure/AWS) et SaaS
- [ ] Fiscalité : Crédit Impôt Innovation (CII) et CIR
- [ ] Le budget tech comme outil de négociation au CODIR

---

### Partie 7 : Gouvernance et sécurité

**Ch.25 — Sécurité et Zero Trust** `sécurité`

- [ ] Le concept Zero Trust : ne jamais faire confiance, toujours vérifier
- [ ] La politique du moindre privilège
- [ ] Hygiène : 2FA, SSO, gestion de parc (MDM)
- [ ] Comptes pro uniquement

_→ Matière :_ `2025-01-14-attaque-pirate-observabilite`

**Ch.26 — Conformité et risques** `sécurité`

- [ ] RGPD et légal : registre des traitements, droit à l'oubli
- [ ] Audit et continuité : PRA, PCA, pentests
- [ ] Assurance cyber
