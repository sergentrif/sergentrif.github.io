---
title: "Agents IA : probabiliste vs déterministe"
date: "2026-04-27"
displayDate: "27/04/2026"
description: >-
    J'ai testé l'orchestration par agents IA (OpenClaw, Make) sur un pipeline de prospection automatisé. Échec à l'étape 1. Même résultat en 2h avec Claude Code et des scripts python. Ce n'est pas un problème d'outil - c'est un problème structurel.
readTime: "~5"
excerpt: >-
    Je passe beaucoup trop de temps sur LinkedIn. Chaque jour je vois des centaines de personnes qui ont automatisé l'intégralité de leur activité professionnelle. Ça semble trop beau pour être vrai. Ça l'est.
---

Je passe beaucoup trop de temps sur Linkedin.
Chaque jour je vois des centaines de personnes qui ont automatisé l'intégralité de leur activité professionnelle. Ils ont des pipelines complets "d'IA agentique" : des centaines d'agents qui travaillent chaque minute en parallèle pour eux. Et depuis qu'ils ont ça, ils obtiennent quarante rendez-vous chaque semaine. Sans rien faire. Ça semble trop beau pour être vrai. Ça l'est.

À côté d'eux, je me sens en retard. Alors j'essaie de builder dessus.
Je commente CLAUDE, PROMPT ou n'importe quel mot à la con qu'on me demande pour obtenir la recette secrète d'un business florissant, sans effort. Tout ce que j'ai obtenu : des pages Notion qui me disent de m'inscrire à un quelconque SaaS vibe-codé à 100€ par mois. De la publicité déguisée. Du bricolage dominical.

J'ai donc tenté ce que l'autre moitié des influenceurs nous vend comme la solution miracle : OpenClaw. Un orchestrateur d'agents IA - on crée des agents, des déclencheurs (message WhatsApp, cron, etc.) et on laisse l'outil faire le travail.

Le cas d'usage vendu partout est toujours le même : détecter des signaux sur le marché, construire un backlog de prospects, enrichir leurs profils en consultant leur site et leur LinkedIn, les ajouter en relation, vérifier les connexions, engager la conversation. Un pipeline de prospection entièrement automatisé. Six étapes, zéro intervention humaine.

Je n'ai pas réussi à faire fonctionner l'étape 1. Ni avec OpenClaw, ni avec Make avant lui - la sortie de l'étape 1 n'était jamais au bon format pour enchaîner sur l'étape 2. Le pipeline s'arrêtait là, à chaque fois.

La tâche : détecter des signaux depuis des flux RSS. Une start-up qui réalise une levée de fonds, un concurrent qui recrute massivement. Les flux RSS sont une norme. Un format qui n'évolue pas. Quelque chose que l'on sait automatiser et lire avec un cron et un script python depuis presque 30 ans.

J'aurais pu choisir une tâche plus favorable. Mais c'est précisément celle que tout le monde vend.

J'ai configuré OpenClaw pour travailler as code : un vrai projet tech avec déploiement Github Actions, des fichiers de configuration pour les crons, un config.json que chaque agent doit lire pour partager les mêmes chemins de ressources. J'ai créé des skills dédiés dont le seul rôle était d'exécuter des scripts python. Chaque agent avait sa liste de skills. J'ai recréé un framework. J'ai documenté chaque instruction pour ne laisser aucune marge d'erreur. Avec des règles strictes : n'improvise pas.

Chaque exécution me coûte 0,10€. L'agent recrée sans cesse un nouveau script de scraping de zéro - script déjà écrit et fourni. Des fois il enregistre les données dans le bon fichier, des fois il en crée un nouveau. Souvent ses scripts ne fonctionnent pas ou il n'a pas les bons droits d'écriture. Il finit toujours par avancer, malgré les erreurs. Mais il réinvente la roue à chaque itération. Il refait en permanence des choses qu'il a déjà réalisées quelques heures auparavant. Et derrière, il brûle des quantités de tokens astronomiques pour quelque chose que l'on sait faire à moindre coût depuis longtemps.

C'est là le problème structurel, pas un problème d'outil. Un LLM est probabiliste par nature : il ne produit jamais deux fois exactement le même résultat. Une tâche déterministe, elle, doit toujours produire le même résultat avec les mêmes inputs - lire un flux, parser un format, écrire dans un fichier. Jusqu'à maintenant on utilisait des scripts qui font précisément ce dont on a besoin. Là on a un agent qui fait à peu près ce qu'on a besoin. Dans une stack de production où les étapes doivent s'enchaîner les unes après les autres, "à peu près" ne suffit pas. Les six agents doivent faire un sans-faute. Ils ne le font pas.

Il ne m'a fallu que 2 heures pour développer le même projet avec Claude Code : scraping de flux RSS, déploiement via Github Actions, application en production. Dans une techno que je ne maîtrisais pas. En écrivant cet article. La différence : avec Claude Code, je suis l'orchestrateur. Je valide chaque décision avant de passer à la suivante. Une mauvaise décision autonome dans un pipeline de production casse le flow complet - et personne n'est là pour le voir.

2 heures pour industrialiser ce que j'ai échoué à faire fonctionner pendant plusieurs jours avec OpenClaw.

J'utilise maintenant l'orchestration traditionnelle pour tout ce qui est déterministe - crons, scripts, webhooks. Et l'inférence uniquement là où elle a de la valeur.

La génération de messages : avec un bon contexte et de bonnes instructions, les résultats sont reproductibles. Chaque prospect est différent, chaque message doit l'être aussi. Impossible à scripter.

L'enrichissement de profils : le LLM scrape des sites sans en connaître la structure en amont. Là où un script classique casserait au premier changement de template, le LLM trouve les informations quoi qu'il arrive. Avec une nuance : les sources HTML brutes coûtent cher en tokens. On prépare le terrain en amont - nettoyer le HTML, filtrer les mots communs - pour que le modèle reçoive moins, travaille mieux, coûte moins cher.

Ce sont mes scripts qui déclenchent l'appel au LLM - pas l'inverse.

Ce que vendent ces influenceurs, c'est du vent. À chaque fois, de la publicité déguisée.
