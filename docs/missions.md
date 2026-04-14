# Missions — Adrien Blandin

Matière première pour la rédaction de contenus. Contexte, actions, résultats, et insights clés de chaque mission.

---

## Objow — Audit technique
*Mars 2024*

### Contexte
Architecture single-tenant (une BDD par client). Tâches asynchrones non scalables. Pas de CI/CD. Monitoring installé mais non utilisé. Stack fragile au moment où Edenred exigeait des garanties de SLA, sécurité, scalabilité.

### Actions
- Audit complet : infra, BDD, architecture, tooling, produit, management, profils individuels
- Plan de migration vers une architecture multi-tenant
- Identification des priorités : quick wins sécurité vs dette long terme
- Cadrage réaliste pour ne pas se laisser dicter l'architecture par Edenred

### Résultats
- Plan de migration actionnable, risques critiques identifiés avant engagement avec Edenred

### Insights
- Un grand compte qui arrive = opportunité ET révélateur simultanément
- Monitoring sans rituels = fausse sécurité
- Distinguer exigence légitime d'Edenred vs préférence habillée en obligation

---

## Objow — CTO fractionnel part-time
*2 ans (2024-2026)*

### Contexte
Suite à l'audit. Fondateur CEO/CTO seul aux commandes. Edenred exigeait des garanties industrielles. Entreprise avec produit et marché mais sans maturité technique pour passer à l'échelle.

### Actions
- Migration infra serveur dédié → Azure cloud
- CI/CD : 1 déploiement/semaine → 10/jour
- Optimisation coûts infra : ÷2
- Supervision Kadeos Incentive (partenariat Edenred 2 ans, validation archi et sécu groupe)
- Négociation contrat Edenred : obtention droits de propriété intellectuelle, licences ×2
- Recrutement 2 lead developers + 1 CTO successeur
- Gestion prestataires (freelances, infogérant, agences)
- Due diligence Mootiv
- Challenge vision produit, correction dette technique, développement features

### Résultats
- "Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien" — Jonathan le Duc, CEO
- "J'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement"
- Déploiements ×10, coûts infra ÷2, licences Edenred ×2, succession recrutée

### Insights
- Vraie valeur = temps retrouvé pour Jonathan (CEO + CTO simultanément avant)
- Mission bien exécutée = sortie propre, pas dépendance
- Construire en sachant qu'on sera audité change les décisions quotidiennes

---

## Aaticka — Cadrage fonctionnel
*Juillet 2024*

### Contexte
Startup early-stage, matching startup/investisseur. 2 fondateurs non alignés. IA de partout alors que la vraie valeur = la mise en relation.

### Actions
- Ateliers produit : personas, problèmes utilisateurs, architecture technique (Webflow + React/Remix + Symfony + PostgreSQL)
- Identification du risque de crédibilité : module d'analyse automatique ciblant des professionnels de l'analyse → disqualification définitive au moindre bug
- Cadrage MVP réaliste : IA en v2, argument business (le module réduirait le volume de dossiers alors que le volume est l'enjeu n°1)
- Conclusion : déconseillé de construire l'application

### Résultats
- Application non développée — bonne décision
- "Ils ont dépensé un peu pour économiser beaucoup"

### Insights
- 2 fondateurs non alignés + IA partout = fuite en avant classique
- Analyser des dossiers quand ta cible est des analystes = risque de crédibilité fatal
- Dire non dans une relation client-prestataire = valeur, pas échec

---

## Jami — Cadrage & développement

### Contexte
Venue me solliciter suite à une aide gratuite. Voulait une application de A à Z. Très peu de budget, syndrome "je veux tout".

### Actions
- Stack technique, maquettes, devis
- Conseil honnête : budget insuffisant pour les fonctionnalités demandées, il faut prioriser

### Résultats
- Partie chez un autre prestataire, refus d'entendre le conseil
- Son MVP en production = exactement les fonctionnalités qu'on lui avait conseillé de garder

### Insights
- Résultat commercial négatif, impact réel et mesurable
- La valeur d'un conseil honnête ne se mesure pas toujours dans la relation commerciale immédiate
- Relation énergivore (justifier le temps facturé > produire) = pattern fréquent sans culture tech

---

## Certixio — CDC + POC
*Mai 2025*

### Contexte
Certification RGPD. Process de rédaction de dossiers RNCP/RS trop manuel : 27h de prompts/copier-coller sur 40h au total. Impossible de scaler.

### Actions
- Conception produit + CDC avec 3 options de delivery (V0.1, V0.2, V1.0)
- Architecture 3-tier évolutive pensée pour SaaS B2B
- Intégration LLM via LangChain, gestion fine des prompts (modifiable sans redéploiement)
- Réflexion assistant IA vs agent autonome pour calibrer les attentes
- Développement POC (différent de la demande initiale après redéfinition du process)

### Résultats
- "La pertinence de son questionnement, son honnêteté, son sens de l'efficacité et son organisation sans faille" — Marion Breuleux, CEO
- ⚠️ Impayé sur le POC. Témoignage utilisable, relation terminée.

### Insights
- Elle voulait un agent autonome, on a livré un assistant. Bon choix — calibration des attentes IA = valeur concrète
- Le process a été redessiné avant de coder

---

## Olset — Audit & plan d'action
*Octobre 2025*

### Contexte
2 APIs Python silotées, Excel/PowerBI en guise de BDD, backoffice mélangé webapp, pas d'auth unifiée, pas de CI/CD. 3 freelances indépendants, 2 fondateurs qui se concertent peu.

### Actions
- Diagnostic + architecture cible (schéma Whimsical)
- Vision : unification des applications, centralisation des données
- Chantiers priorisés avec owners et deadlines : refonte BDD, migration Excel → SQL, fusion APIs, object storage, auth JWT, CI/CD, Dockerisation

### Résultats
- "Adrien a joué un rôle clé dans la structuration et l'organisation de notre roadmap technique" — Rémi Chappoz, cofondateur
- *Feedback 1,5 mois après la fin de mission (avril 2026)* : budget et délai dépassés, vécu difficile pendant la mission. Mais 1,5 mois plus tard : 1 seul développeur à 1j/semaine avance seul là où il en fallait 3. Les nouveaux développements, anticipés dans la refacto, s'implémentent désormais rapidement. Les clients commencent à percevoir la valeur.

### Insights
- Audit fait en 3j / 5 → suivi enchaîné sans revalidation → erreur
- **Leçon** : audit et suivi = 2 missions distinctes (2 contrats, 2 briefs, 2 validations)
- Vrai problème = gouvernance (pas la techno, qui était correcte dès le début)
- Maquettes UX skippées pour économiser → fondateurs réfractaires au changement d'outil
- **Un projet bien pensé est peu visible** : quand tout se passe bien c'est juste la norme. La valeur d'une bonne architecture ne se perçoit qu'avec un avant/après — ou quand quelque chose ne casse pas.

---

## DataComply One — CDC

### Contexte
SaaS certification RGPD pour PME/ETI. Parcours complexe (diagnostic → plan d'action → certification → widget → renouvellement). 3 fondateurs non alignés. Dépendance sur framework propriétaire créé par un investisseur.

### Actions
- CDC exhaustif avec discipline MVP stricte (❌ [v2] assumés)
- Widget iframe micro-service isolé (archi sécurité/perf)
- Devis de développement (trop cher → offshore refusé → projet non lancé)

### Résultats
- "Aligner les aspects techniques avec la vision business, une qualité rare" — Bertrand Bucelle, CEO
- Projet non lancé (budget). Le CEO a rappelé pour proposer le poste de CTO.

### Insights
- Framework propriétaire d'un investisseur = risque invisible (recrutement impossible, valorisation bloquée, conflit d'intérêts structurel)
- 1 journée dans un contexte difficile → CEO rappelle pour proposer le CTO : démontrer > pitcher
- Relation dysfonctionnelle entre CTO interne et fondateurs non-tech (contexte difficile pendant l'atelier)

---

## Omen-data — CTO fractionnel

### Contexte
Projet d'analyse de tickets de caisse ayant coulé pendant le COVID. Founder voulait le ressusciter. Stack over-engineered : 15 applications distinctes, micro-services aux responsabilités qui se chevauchent.

### Actions
- Onboarding long sur stack opaque (entretiens ancienne équipe, plusieurs mois)
- Management équipe 3 freelances (data analyst, dev/devops)
- Simplification : remplacement ORM + micro-services traitement d'images par un seul LLM

### Résultats
- Stack simplifiée, équipe alignée
- Mission arrêtée par l'acquéreur (a vu le budget prestataires, a coupé tout le monde sans comprendre qu'il venait d'arrêter ce qu'il venait d'acheter)

### Insights
- 15 micro-services pour lire un ticket de caisse = over-engineering classique
- Acquéreur sans culture technique qui optimise immédiatement = détruit la valeur qu'il vient de payer
- Dans une boîte tech, l'équipe n'est pas un coût, c'est le produit

---

## Beemoov — Audit tech & organisation
*Février 2025*

### Contexte
Studio jeu vidéo. Angular + Flutter pour du jeu vidéo → frustration designers, retards mobiles chroniques. Dépendances croisées entre projets. Absence de CTO. Responsabilités non attribuées. Culture "tout faire soi-même" (devs n'ayant connu qu'une seule entreprise).

### Actions
- Audit 360 : entretiens de toute l'équipe (pas seulement la direction)
- Recommandation Unity avec ROI chiffré : 6k$/an = 1 ETP récupéré
- Plan de modernisation stack outillage (SaaS, Modern Data Stack, Keycloak)
- Plan d'action 8 mois avec responsables nommés
- Recommandation recrutement CTO

### Résultats
- ROI immédiat chiffré : 6k$/an = 1 ETP

### Insights
- Mauvais choix technique = coût dans la masse salariale, pas dans la stack
- Audit individuel (pas seulement la direction) révèle ce que les fondateurs ne voient pas
- Absence de CTO = accumulation silencieuse de mauvaises décisions, pas une panne franche
- Culture "fait maison" = force jusqu'à ce qu'elle devienne un plafond

---

## Glaaster — Audit organisation & produit
*Février 2026*

### Contexte
CEO triple rôle CEO/CPO/PO. Désalignement avec associé. Dev senior en désengagement actif (alerte rouge). Tickets vagues, estimations faites par le CEO à la place des devs, recettage en urgence. Pas de QA.

### Actions
- Entretiens individuels, analyse des processus, cartographie org
- Identification du vrai problème : le CEO est le goulot, pas le produit
- Redéfinition des rôles : Florian → PM, Victor → Lead Dev
- Plan d'action 3 horizons : immédiat / quelques semaines / un mois
- Recommandations QA et dette technique

### Résultats
- "Un plan d'action actionnable, structuré en plusieurs étapes et options" — Baptiste Brejon, CEO
- Audit au moment clé du début de scale

### Insights
- CEO triple rôle = ne fait aucun des trois correctement + prive l'équipe d'autonomie
- Désengagement dev senior = signal faible lisible seulement de l'extérieur
- Diagnostic sans priorisation = anxiété, pas action → d'où les 3 horizons

---

## Hupso — Mentorat CTO

### Contexte
CTO (Boris) sans titre, sans rémunération adaptée, relation dysfonctionnelle avec son CEO (Arnaud) qui pensait que tout allait bien.

### Actions
- Quelques séances de mentorat CTO uniquement (pas de livrable technique)
- Espace pour comprendre sa situation et ce qu'il voulait en faire

### Résultats
- Boris a compris qu'il voulait partir. Démission quelques semaines plus tard.

### Insights
- CEO : "la tech va bien". CTO : en difficulté depuis des mois. Même entreprise, deux réalités
- Boris compensait le désordre des autres par une rigueur excessive (tout par écrit) → épuisement
- Conflit ingénieur/marketing : incompatibilité de cultures de travail, pas de personnes
- Le mentorat ne vise pas toujours à améliorer quelqu'un dans son poste actuel

---

## Interventions prescripteurs

- Hub612 (relation existante)
- H7 (relation existante)
- emlyon venture labs : masterclass pour incubés. "Approche pragmatique, il a su partager son expertise technique. Très à l'écoute." — Christel Huber, Operating Manager
