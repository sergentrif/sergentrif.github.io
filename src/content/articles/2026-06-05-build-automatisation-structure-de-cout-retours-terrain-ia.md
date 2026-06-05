---
title: "Build, automatisation, structure de coût : retours terrain de l'IA sur mes projets personnels."
date: "2026-06-05"
displayDate: "05/06/2026"
description: >-
    Bilan sur plusieurs mois d'expérimentation - l'IA comme outil de build sur Timescanner et mon site vitrine, et comme outil d'automatisation pour ma prospection et ma veille. Structure de coût, limites structurelles, et où ne pas l'utiliser.
readTime: "~15"
excerpt: >-
    Ces derniers mois, j'ai du mal à avoir une conversation professionnelle qui ne finisse pas sur l'IA. Déjeuners entre CTOs, afterworks entre entrepreneurs, conférences dans l'écosystème start-up - la discussion y revient systématiquement, sur chacune des tables.
---

Ces derniers mois, j'ai du mal à avoir une conversation professionnelle qui ne finisse pas sur l'IA. Déjeuners entre CTOs, afterworks entre entrepreneurs, conférences dans l'écosystème start-up - la discussion y revient systématiquement, sur chacune des tables. Et quand je prends mon shot de dopamine en scrollant infiniment sur LinkedIn, encore de l'IA, mais en pire. Algorithme oblige, là-bas les discours sont au mieux dramatiques ("l'Europe n'est pas prête à ce qui arrive"), au pire mensongers ("j'ai automatisé 100% de ma prospection en quelques heures avec l'IA").

Mais face aux positions simplistes sur le sujet, et face aux promesses qui semblaient mensongères, j'ai pris le temps d'expérimenter avec ces outils pour déterminer ce qu'il était vraiment possible d'en faire. Aussi parce que j'avais peur d'être laissé sur le carreau. Le fameux FOMO.

Alors aujourd'hui, avec plusieurs mois de recul, il est temps de faire le bilan sur ce que j'ai réellement réussi à construire avec l'IA. D'une part, avec l'IA comme outil de build, et de l'autre, avec l'IA comme outil d'automatisation.

J'utilise l'IA dans le cadre de deux projets complètement différents :

- [Timescanner](https://www.timescanner.io) : un SaaS de _time-tracking_ qui m'aide à calculer en quelques secondes le nombre d'heures travaillées pour chacun de mes clients comme CTO part-time, afin d'établir instantanément des factures qui soient justes.
- [adrien.blandin.me](https://adrien.blandin.me) : mon site vitrine pour présenter mes activités de CTO part-time et d'audit, composé d'un backend invisible pour automatiser un certain nombre de mes tâches rébarbatives.

Ces deux projets reposent sur une architecture 3-tiers classique : webapp frontend, API backend, base de données. Une architecture suffisamment représentative d'une start-up standard pour que les conclusions soient transposables.

## L'IA comme outil de build - l'exemple Timescanner

Timescanner est mon projet le plus représentatif de l'écosystème start-up. C'est un SaaS à destination d'une niche d'utilisateurs : les personnes qui travaillent en _fractional_. Il fait une seule chose et il la fait bien.

Conçu en architecture 3-tiers, les technos sont plutôt lambda sur le marché :

- Base de données PostgreSQL
- API en PHP avec Symfony
- Webapp en TypeScript avec React
- Site vitrine en Ruby avec Jekyll (la seule techno un peu obsolète)

C'est un projet qui a à la fois suivi le parcours entrepreneurial de la création d'une start-up et traversé les différentes ères du développement assisté par IA : l'autocomplétion avec GitHub Copilot en 2023, le copier-coller depuis ChatGPT en 2024, la discussion dans un panel dédié avec approve/decline dans Cursor, puis l'émergence des _harness_, tous deux en 2025.

J'ai créé Timescanner en 2024, lorsque je me suis lancé en tant que CTO freelance. J'ai assez vite compris que je n'avais pas envie de passer quatre heures chaque fin de mois à établir mes factures. Par ailleurs, je ne voulais pas ajouter un nouvel outil à mon quotidien pour suivre mes temps de travail, alors que tout était déjà indiqué dans mon agenda.

J'ai donc écrit un script Python qui lit mon agenda (un fichier .ics qui respecte la norme iCal) et me fait une synthèse directement dans ma console. Puis lorsque le script était fonctionnel et m'apportait toutes les informations dont j'avais besoin, je l'ai mis sur un serveur pour qu'il s'exécute à intervalle régulier via un CRON et qu'il m'envoie un email avec le résumé mensuel.

Ensuite, nous avons créé Krma, le collectif de freelances qui m'accompagne. Et eux aussi ont eu besoin de faire le suivi de leurs temps de travail. J'ai donc transformé mon script en API et j'en ai profité pour changer de technologie. J'avais initialement choisi Python pour progresser et mieux accompagner un client qui utilise cette technologie. Mais j'ai écrit l'API en PHP, un langage que je maîtrise mieux et qui me permettait d'être plus véloce dans le développement.

Une fois l'API écrite, j'ai eu besoin d'une webapp pour que les profils les moins techniques de mon collectif (design, product management) puissent eux aussi l'utiliser. À ce moment-là, j'ai utilisé bolt.new pour faire l'interface frontend. Une version simple, sans authentification ni paiement. C'était réellement bluffant : en quelques heures, une webapp était née sous mes yeux. Grâce à des spécifications techniques précises sur le fonctionnement de l'API et les fonctionnalités que je désirais, j'ai obtenu très vite le résultat escompté.

J'ai donc voulu itérer vite sur l'ajout de nouvelles fonctionnalités, et tout a commencé à devenir plus long, plus laborieux. Chaque fonctionnalité nouvelle en cassait une ancienne, et tout cela commençait à consommer énormément de tokens.

Lorsqu'est venu le temps d'ajouter les fonctionnalités d'authentification et de paiement - pour permettre à n'importe qui de s'inscrire et utiliser le service - j'ai fait le choix de reprendre la main sur l'implémentation. Ces modules étant trop critiques pour les laisser sans revue.

La déconvenue fut violente. En remettant les mains dans le code, j'ai réalisé que ce qui avait été généré n'était qu'une immondice monumentale. L'app était belle mais ses fondations atroces. Par ailleurs, la quantité de duplication de code ou de code mort était extrêmement élevée.

Ce n'est pas un problème propre à Bolt. GitClear a analysé 211 millions de lignes de code entre 2020 et 2024, sur les repos de Google, Microsoft et Meta : en 2024, la fréquence des blocs de code dupliqués a été multipliée par 8. Pour la première fois de l'histoire de leur dataset, le copy/paste a dépassé le refactoring. La part du code consacrée à la réutilisation intelligente est passée de 25% des lignes modifiées en 2021 à moins de 10% en 2024. C'est structurel : l'IA fonctionne bien sur des tâches petites, bien spécifiées, bien découpées. Sur de grands chunks de code, elle perd le fil. Elle n'a pas la capacité d'un humain à gérer un contexte aussi large - et la moindre imprécision de prompt produit des résultats indésirables qu'on ne détecte souvent qu'à l'usage.

Avec l'aide de Nicolas, notre développeur frontend, nous avons donc réécrit l'intégralité de l'application frontend, pour avoir une base solide pour les évolutions à venir.

Depuis lors, je n'écris plus une seule ligne de code personnellement sur ce projet. Nous avons utilisé la codebase existante comme exemple pour Claude Code, afin qu'il sache comment travailler sur le projet avec une qualité d'output qui nous convienne. Les déboires avec Bolt - code mort, duplication, casse de fonctionnalités - nous ont servi de signal d'alarme pour penser un workflow de travail qui permette de délivrer vite, mais de manière qualitative.

L'environnement repose sur un module git principal qui contient tout ce qui est global - orchestration, docker-compose, docs/ et un fichier CLAUDE.md. Ce module pointe vers des submodules git qui ne contiennent que ce qui leur est propre. Le gros du travail consiste à rédiger des fichiers d'instructions complets, à jour et compacts. Claude les connaît, mais n'est pas obligé de les charger à chaque session. C'est la construction d'un _harness_ - un système documenté qui enveloppe le modèle et lui dit comment travailler - exactement ce qu'on ferait pour un développeur qui intègre une équipe. Je reviendrai sur ce setup en détail dans un article dédié.

Au final, Timescanner est un projet lambda développé avec l'IA. Il n'y a qu'une seule fonctionnalité qui utilise réellement l'IA : la génération de comptes-rendus d'activité à destination des clients, sur la base des événements de votre agenda.

J'ai un temps envisagé d'utiliser l'IA pour faire directement le calcul des temps de travail. C'est possible. Mais faire lire un fichier de 5Mo - des dizaines de milliers de lignes - à une IA à chaque requête HTTP représente un coût non négligeable en tokens. Alors que ce fichier se lit très bien et à coût nul par un simple script. Utiliser l'IA dans ce cadre-là, c'est sortir le bazooka pour tuer une mouche.

Cet exemple illustre une limite fondamentale de l'IA par rapport au SaaS traditionnel. Le concept d'un SaaS est simple : on build une fois, on déploie mille fois. La rentabilité du modèle vient des économies d'échelle - le coût marginal d'un utilisateur supplémentaire tend vers zéro. Avec l'IA, cette logique s'inverse : on build mille fois pour déployer mille fois. La consommation de tokens augmente avec l'usage, les économies d'échelle n'existent pas. Des leviers d'optimisation existent - nettoyer les contenus avant envoi, récupérer l'information en amont pour éviter des appels LLM inutiles - mais la structure de coût reste fondamentalement linéaire.

Le deuxième projet illustre l'autre usage : l'IA comme outil d'automatisation.

## L'IA comme outil d'automatisation - l'exemple adrien.blandin.me

Mon écosystème personnel contient deux parties distinctes.

### Le site vitrine

Le site vitrine est une webapp développée avec Next.js. Dans le fond, l'usage de l'IA sur ce projet ressemble beaucoup à l'usage que j'en ai avec Timescanner : Claude Code est en charge de développer entièrement le site grâce à un environnement de travail et des workflows pensés pour un développement assisté par IA à 100%.

Je n'interviens donc pas dessus personnellement - je ne suis pas non plus très bon en frontend, il faut le reconnaître. Et même les process de déploiement et la CI/CD sont entièrement développés avec l'aide de Claude.

Ce qui est néanmoins notable, c'est de comprendre que tout ce qui n'est pas "as code" n'a plus aucune valeur. Pour que l'IA comprenne ce qui existe et comment ça fonctionne, elle doit pouvoir en lire les contenus. Il était donc important pour moi que tout le pipeline de déploiement existe directement dans le projet.

De la même manière, ce site est un site vitrine. Il doit mettre en avant qui je suis, ce que je fais, quelles sont mes expériences, mes succès. Le copywriting des pages de présentation est donc un des éléments les plus importants, tout comme le ghostwriting des articles de blog (que j'écris toujours à la main mais qui sont ensuite corrigés et améliorés par Claude). Pour que Claude ait suffisamment de matière sur ces sujets, mon site vitrine contient donc l'intégralité des contenus que je produis (articles, podcasts et posts LinkedIn) sous forme de fichiers markdown unitaires, avec un fichier d'index qui fait la synthèse de tous les contenus pour l'aider à trouver ce qu'il cherche.

### L'assistant

Mais l'élément le plus notable, c'est mon assistant personnel. Il y a des tâches que je fais au quotidien, qui sont chronophages et dont je ne tire aucun plaisir. En général, tout ce qui touche de près ou de loin à la prospection :

- détection de signaux d'achat (levées de fonds)
- identification d'entreprises à contacter (consultation de portfolios investisseurs)
- qualification de ces différentes entreprises (est-ce qu'elles sont dans la tech, est-ce qu'elles ont une webapp, est-ce qu'il y a déjà un CTO, est-ce qu'il y a une équipe à manager...)
- identification de la prestation de service à proposer (audit, due dil, CTO part-time, collectif de freelances, mentorat lead tech)
- identification de la personne à contacter (CEO, CTO) selon la prestation à proposer
- séquence de contact (emails, relances...)

Et puis il y a d'autres tâches annexes, pas forcément déplaisantes en tant que telles mais sur lesquelles je peux là encore gagner un peu de temps :

- identification des événements networking où il serait intéressant que je participe
- veille technique
- lecture des informations du jour (local, national, mondial)

Ce sont toutes les tâches de prospection que j'ai essayé d'automatiser sans succès avec OpenClaw. Pourquoi ça n'a pas fonctionné ? Parce qu'OpenClaw est un orchestrateur probabiliste : à chaque itération, il redéveloppe les outils dont il a besoin pour s'acquitter de sa tâche, avec les bugs que ça implique et les phases de correction que ça nécessite. Le résultat de chaque tâche est imprévisible alors que chaque agent attend que l'output du précédent soit systématiquement toujours le même. Ces erreurs de parcours - bugs, correctifs, erreurs de format - créent des allers-retours qui, traduits dans une stack IA, n'ont qu'une seule signification : gaspillage de tokens, donc d'argent.

J'ai donc pris la décision d'inverser complètement le rapport de force. Ce ne sont plus des agents IA qui se réveillent pour accomplir une tâche et déterminer par eux-mêmes la meilleure façon d'y parvenir. C'est désormais un simple backend Python dont les scripts se déclenchent via des CRONs.

Simple. Banal.

La détection de signaux repose sur un système vieux de bientôt 30 ans : les flux RSS. Chaque jour, un script tout à fait déterministe lit un ensemble de flux RSS pertinents pour mon activité professionnelle. Une fois le XML nettoyé, le contenu des différents articles est envoyé à un LLM dont les tâches sont simples : déterminer si le contenu contient des signaux pertinents pour mon activité (levée de fonds, sortie d'un nouveau produit, fusion, acquisition...) et identifier le nom de l'entreprise concernée. Si un signal pertinent est détecté et qu'une entreprise est identifiée, alors je crée une entrée en base de données.

Un autre CRON se déclenche chaque jour un peu après, pour démarrer la phase de qualification des entreprises extraites. Pour chacune, les résultats d'une recherche web exécutée via l'API de Brave sont envoyés à un LLM qui aura pour objectif de déterminer le site web de l'entreprise ainsi que son profil LinkedIn. Une fois ces éléments identifiés, du scraping est effectué avec Playwright et là encore, le contenu nettoyé des pages HTML récupérées est envoyé à un LLM pour identifier un certain nombre d'éléments : est-ce que cette entreprise semble être dans le secteur de la tech, est-ce qu'elle semble avoir une application web ou mobile. Quelques options supplémentaires me permettent d'essayer de trouver la personne à démarcher ou si l'entreprise dispose déjà d'un CTO ou d'une équipe technique.

Il me reste une dernière feature que j'ai beaucoup utilisée au tout début : le scraping de masse. J'enregistre en base de données des pages HTML de portefeuilles d'investissement de fonds. Un script inspecte chacun de ces portefeuilles et extrait l'intégralité des start-ups découvertes pour les enregistrer en base de données, afin qu'elles puissent ensuite passer dans le process de qualification.

Une fois les entreprises qualifiées, un CRON m'envoie chaque semaine par email un fichier CSV que j'importe dans mon CRM pour démarrer la séquence Lemlist. Lemlist me coûte 120€ par mois - séquences email et email finder. Ce qu'ils proposent aussi, c'est un module de détection de signaux, facturé à chaque signal détecté. C'est précisément cette fonctionnalité que j'ai remplacée.

Le même pattern s'applique à ma veille et à mes événements. Chaque matin, un CRON lit un ensemble de flux RSS couvrant l'actualité locale, nationale et mondiale, nettoie le XML et envoie le tout à Sonnet pour en extraire une synthèse quotidienne qui m'est envoyée par email. Pour les événements networking, même logique : un CRON lit les agendas iCal de la French Tech, Lyon Tech Hub et quelques autres, et me produit une fois par mois la liste des événements auxquels je devrais participer.

Est-ce que la prospection convertit ? Non, pas plus qu'avant. La conversion via Lemlist reste médiocre - mais elle l'était tout autant quand je qualifiais à la main. Ce que la machine a changé : je passais une dizaine d'heures par semaine à qualifier des startups manuellement. Maintenant, zéro.

Des flux RSS, des fichiers CSV, des CRONs, des protocoles IMAP/SMTP : une stack des années 1990/2000, à une époque où le Web cherchait à construire des standards ouverts. Des protocoles que n'importe quel système pouvait lire et implémenter, et dont les normes sont aujourd'hui parfaitement connues des LLMs. Le Web 2 a rompu avec cette logique. Les plateformes ont capté les usages sans produire de standard : pas de protocole ouvert pour les fils de réseaux sociaux, pas de standard pour les messageries directes. IRC a perdu la bataille commerciale face à Slack et Discord - non pas parce que le standard était mauvais, mais parce que les plateformes propriétaires ont gagné le marché. Conséquence directe : les LLMs manipulent bien ce qui est ouvert et documenté, mal ce qui est fermé et propriétaire. Ce sont les formats du Web 1 qui reviennent dans les pipelines IA - pas ceux du Web 2.

L'orchestration est déterministe. Chaque appel LLM est accompagné d'un certain nombre de documents de contexte vis-à-vis de mon activité professionnelle (mes prestations, mes clients cibles, des extraits de missions et de références passées, des recommandations clients) pour que le LLM qualifie au mieux les entreprises et m'aide à choisir l'angle d'approche le plus pertinent.

Ce déterminisme me permet de tout optimiser. Les fichiers XML et HTML sont systématiquement nettoyés avant l'envoi aux LLMs pour réduire la quantité de tokens en input. Si je peux travailler sur le résumé RSS d'un article, je le fais ; si je ne peux pas, alors je vais fetcher le contenu de l'article. J'essaie également de récupérer les informations le plus tôt possible : si un lien web ou LinkedIn pour une startup est présent sur la page portefeuille d'un fonds ou dans un article RSS, je le récupère à ce moment-là pour économiser des requêtes API Brave et des appels LLM ensuite.

Enfin, j'utilise des modèles différents selon les besoins : Haiku 4.5 pour l'analyse, l'extraction de données et la qualification. Sonnet 4.6 pour la rédaction de contenus (emails...).

Certaines tâches pourraient être accomplies à moindre coût via des modèles plus traditionnels de machine learning ou de scraping - analyse des pages web, identification des noms des entreprises - mais l'IA est ici un bon compromis : pas besoin d'investir du temps pour créer et configurer un modèle custom.

Au final, ma stack est d'une banalité monumentale. Bien loin des mirages vendus sur les réseaux sociaux qui promettent de pouvoir gérer une entreprise de A à Z en configurant trois agents en deux heures. Ma stack est une stack de production : prévisible, monitorée, économe. C'est un ensemble de tâches consécutives dont les inputs et les outputs sont toujours les mêmes. L'IA est utilisée massivement mais uniquement pour ce qu'elle apporte d'unique : l'analyse et la génération de contenus.

En l'état, ma machine de prospection en production me coûte 5 centimes par jour. Ma machine de veille technique aussi. Pour quelque chose de fiable.

---

L'IA n'a pas inventé l'automatisation. Ce que j'avais avant - des scripts, des CRONs, des exports CSV - c'était déjà de l'automatisation. Ce que l'IA a ajouté tient en deux choses : la capacité à traiter du contenu non structuré pour l'automatisation, et la génération de code sur des tâches petites, bien spécifiées, bien découpées pour le build. En dehors de ces deux zones, elle est chère, imprévisible, et ses coûts sont linéaires.

McKinsey l'a mesuré : plus de 80% des organisations qui utilisent l'IA générative n'en voient aucun impact tangible sur leur résultat. Ce que j'observe dans l'écosystème explique en partie pourquoi : on cherche à tout faire passer par l'IA, y compris ce qu'un script de 20 lignes fait mieux, plus vite, pour zéro centime.

Ce n'est pas l'outil qui remplace la boîte à outils. C'est un outil dans la boîte. Un bon outil, pour les tâches où rien d'autre ne fait le travail.

Le SaaS n'est pas mort. Le développeur n'a jamais été aussi utile. La question n'est pas "comment utiliser l'IA partout" - c'est "où l'utiliser, et où ne pas le faire."

Ce bilan est le mien - celui d'un individu qui travaille seul sur ses propres projets. Ce que ça donne à l'échelle d'une équipe, c'est un problème d'une autre nature.

---

Vous vous posez les mêmes questions sur l'IA dans votre équipe - ce qui vaut vraiment le coup, et ce qui ne vaut pas ?

Un échange de 30 minutes suffit souvent à clarifier ce qui coince. Pas de jargon, pas d'engagement.

[Prendre rendez-vous](https://zcal.co/adrienblandin/decouverte-cto?utm_source=site&utm_medium=bottom_cta&utm_campaign=rdv)

---

### Sources

Qualité du code généré par IA :

- GitClear, "AI Copilot Code Quality 2025", analyse de 211 millions de lignes de code (2020-2024) — [gitclear.com](https://www.gitclear.com/ai_assistant_code_quality_2025_research)

Adoption de l'IA vs. impact réel :

- McKinsey, "The state of AI: How organizations are rewiring to capture value", mars 2025 — [mckinsey.com](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value)

---

_PS 1 : J'ai longuement écrit sur la révolution IA dans le secteur tertiaire ici : [adrien.blandin.me/articles/la-revolution-ia-le-tertiaire-a-l-heure-de-l-automatisation](https://adrien.blandin.me/articles/la-revolution-ia-le-tertiaire-a-l-heure-de-l-automatisation)_

_PS 2 : Mes expériences avec OpenClaw et les limites de l'orchestration agentique sont détaillées ici : [adrien.blandin.me/articles/agents-ia-orchestration-deterministe](https://adrien.blandin.me/articles/agents-ia-orchestration-deterministe)_

_PS 3 : Sur ce que ça soulève à l'échelle d'une équipe technique : [adrien.blandin.me/articles/structurer-ia-equipe-technique-questions-sans-reponse](https://adrien.blandin.me/articles/structurer-ia-equipe-technique-questions-sans-reponse)_
