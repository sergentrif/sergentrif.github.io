---
title: "J'ai commenté CLAUDE, PROMPT, et n'importe quel mot-clé qu'on me demande sur LinkedIn pour obtenir la recette secrète d'un business automatisé."
date: "2026-04-28"
type: "post"
platform: "linkedin"
status: "published"
angle: "LLM probabiliste vs tâche déterministe — hype agents IA vs réalité production"
case: "opinion"
mission: ""
url: "https://adrien.blandin.me/articles/agents-ia-orchestration-deterministe"
---

J'ai commenté CLAUDE, PROMPT, et n'importe quel mot-clé qu'on me demande sur LinkedIn pour obtenir la recette secrète d'un business automatisé.
Tout ce que j'ai obtenu, ce sont des pages Notion avec un SaaS à 100€ par mois. De la publicité déguisée.

J'ai quand même testé avec OpenClaw, un orchestrateur d'agents IA. Cas d'usage vendu partout : un pipeline de prospection en six étapes avec zéro intervention humaine.

Je n'ai pas réussi à passer l'étape 1, à savoir de scraper des flux RSS (un format qui n'évolue pas depuis 30 ans…).

L'agent fait à peu près ce qu'on lui demande. Sauf que dans un pipeline de production, "à peu près", ça casse tout. Ce n'est pas un problème d'outil. C'est un problème structurel. Un LLM est probabiliste.

Une tâche déterministe doit produire le même résultat avec les mêmes inputs. Lire un flux, parser, écrire dans un fichier. Ça doit être déterministe.

J'ai passé 2 heures avec Claude Code pour avoir le même projet en production. La différence c'est que je suis l'orchestrateur. Je valide chaque décision.

J'utilise maintenant des scripts pour tout ce qui est déterministe et l'inférence là où elle a de la valeur : messages personnalisés, enrichissement de profils. Ce sont mes scripts qui déclenchent l'appel au LLM. Pas l'inverse.

Quelqu'un a un pipeline d'agents IA qui tourne vraiment en production ? Pas en démo LinkedIn.

PS : vous trouverez le test complet et les cas où l'IA apporte réellement de la valeur → https://adrien.blandin.me/articles/agents-ia-orchestration-deterministe
