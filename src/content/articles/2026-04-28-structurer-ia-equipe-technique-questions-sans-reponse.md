---
title: "Structurer l'IA dans une ÉQUIPE technique, les questions sans réponse"
date: "2026-04-28"
displayDate: "28/04/2026"
description: >-
    On sait utiliser l'IA individuellement. On ne sait pas encore l'utiliser en équipe. Voici les questions structurantes que je travaille avec les CTOs que j'accompagne.
readTime: "~10"
excerpt: >-
    À l'heure où je parle, chaque CEO a déjà demandé à son CTO quelle est la stratégie IA de son entreprise. L'obsession est toujours la même : augmenter la productivité à masse salariale égale, ou maintenir la productivité en réduisant la masse salariale. Mais la question que personne ne pose encore clairement : on sait utiliser l'IA individuellement. On ne sait pas encore l'utiliser en équipe.
---

À l'heure où je parle, chaque CEO a déjà demandé à son CTO quelle est la stratégie IA de son entreprise. L'obsession est toujours la même : augmenter la productivité à masse salariale égale, ou maintenir la productivité en réduisant la masse salariale.

Mais la question que personne ne pose encore clairement, c'est celle-là : on sait utiliser l'IA individuellement. On ne sait pas encore l'utiliser en équipe.

Et c'est un problème d'une autre nature.

---

La majeure partie des développeurs a franchi le cap de l'IA individuelle. Les designers sont en cours. On a construit des harness, des AGENT.md, des règles, des agents, des skills, des MCP. On crée de la documentation, du contexte. On fait de la code review assistée. Tout le monde a aujourd'hui son abonnement à 100€+.

Ces outils ont changé de nature depuis 2023. Ce qu'on appelle aujourd'hui un harness, c'est fondamentalement du prompt engineering structuré - du contexte donné à un agent pour cadrer ses réponses. Simple dans le principe, mais suffisant pour rendre l'IA qualitative dans ses outputs. L'autocomplétion bancale de 2023 et les hallucinations permanentes, c'est derrière nous. Les modèles s'améliorent, et les outils de contextualisation ont suivi.

Résultat : les solopreneurs, les indie hackers, les toutes petites structures ont été les premiers à capitaliser dessus. Pas parce qu'ils sont plus avancés techniquement. Parce qu'ils n'ont pas de contrainte organisationnelle. Un seul cerveau, un seul harness, un seul flux de travail.

Le problème commence dès qu'on est plusieurs.

---

On a beaucoup parlé de prompt engineering ces deux dernières années. L'art de formuler la bonne requête pour obtenir le meilleur résultat. C'était de la rhétorique appliquée à un modèle.

Ce temps est derrière nous.

Ce dans quoi on entre maintenant, c'est le system engineering : concevoir l'environnement dans lequel l'IA opère. Les règles, les agents, les skills, les formats d'échange, les cycles de validation. Ce n'est plus "comment je parle à l'IA". C'est "comment je construis le système dans lequel elle travaille".

Et ça, on ne sait pas encore le faire en équipe. C'est de là que viennent toutes les questions qui suivent.

---

Dans une équipe de 10, 20, 50 personnes, travailler avec l'IA ne ressemble plus du tout à travailler seul avec l'IA. Les start-ups avec des équipes structurées, les PME sans direction technique claire, les grands comptes avec des équipes de 100 personnes - toutes ces organisations ont un problème commun : sans cadre collectif autour de l'IA, elles l'exploitent de manière inégale et non reproductible.

Et le risque n'est pas juste de rater une opportunité. C'est de se faire dépasser par une concurrence construite autour de l'IA dès le départ - ce qu'on appelle "AI native" - qui n'a pas à faire évoluer ses process existants, ni à requalifier ses équipes, ni à convaincre en interne.

C'est exactement ce qu'il se passe dans l'automobile. De nouveaux constructeurs émergent sur le véhicule électrique parce qu'ils n'ont pas la barrière à l'entrée d'un moteur thermique, ni la contrainte de reconvertir leurs lignes de production. Ils se sont construits sur l'électrique uniquement. Ils prennent le leadership pendant que les anciens cherchent à se transformer.

L'histoire se répète.

---

Voilà donc les questions qu'il faut se poser. Des réponses émergent sur certains de ces sujets. Aucune n'est encore industrialisée à l'échelle d'une équipe. Ce sont celles que me posent les CTOs que j'accompagne, et celles sur lesquelles on travaille concrètement.

### Comment avoir une feedback loop complète ?

Le développeur de 2026 utilise l'IA pour développer. Il a son harness, son AGENT.md personnel et celui de son projet. Mais développer dans une entreprise n'a jamais été un métier solitaire. Quand on fait partie d'une équipe, on collabore avec des designers, des experts SEO, des copywriters, d'autres développeurs, des équipes sécurité, des responsables RGPD.

Chacun utilise l'IA individuellement. Pas de problème. Mais comment faire en sorte que l'output IA des uns devienne l'input IA des autres ?

C'est là que ça coince aujourd'hui. Un designer qui produit une maquette Figma n'alimente pas directement le harness d'un développeur. Figma n'est pas un format standard - c'est un outil de collaboration humaine, pas un format d'échange entre agents. On voit des designers commencer à produire directement du HTML et du markdown, utilisables par les développeurs comme input IA. On voit les rôles se frôler, les frontières bouger. Mais tous ces nouveaux flux en sont encore au stade du bricolage. On ne sait pas encore ce qui va en sortir.

C'est la question centrale. Les autres en découlent.

### Comment maintenir ce que l'IA produit ?

L'IA génère du code vite. Beaucoup plus vite qu'une équipe humaine ne peut le relire, le comprendre et le valider. On commence à le vivre sur le marché : les humains ont du mal à suivre la cadence. Le goulot n'est plus la production. C'est la validation.

Les chiffres commencent à confirmer ce qu'on observe sur le terrain. GitClear a analysé 211 millions de lignes de code modifiées entre 2020 et 2024 : la fréquence des blocs de code dupliqués a été multipliée par 8 en 2024. Le rapport DORA de Google la même année a trouvé qu'une hausse de 25% de l'usage de l'IA améliore les code reviews, mais entraîne une baisse de 7,2% de la stabilité des livraisons. Plus de production, moins de stabilité. Et selon le rapport State of Software Delivery 2025 de Harness, 67% des développeurs passent aujourd'hui plus de temps à déboguer du code généré par IA qu'avant.

L'open-source l'a déjà démontré à plus grande échelle. Les contributions générées par IA ont explosé avant de submerger les mainteneurs. Daniel Stenberg, créateur de cURL, a fermé le programme de bug bounty du projet après avoir constaté que seules 5% des soumissions étaient valides. Le même mécanisme s'applique en interne : plus on produit vite avec des agents, plus la complexité de maintenance augmente. Du code qui fonctionne mais qu'on ne comprend pas, c'est de la dette. Elle ne se voit pas immédiatement. Elle se paie plus tard.

Plus de production avec la même capacité de supervision, ça ne crée pas de la valeur. Ça crée de la dette.

### Comment gérer un catalogue de règles, d'agents et de skills au niveau de l'organisation ?

L'inférence IA repose sur la qualité des instructions qu'on lui fournit. Ces instructions prennent différentes formes : règles générales qui définissent le comportement de l'assistant, agents dédiés à un thème particulier, skills concentrés sur une tâche technique précise.

Chacun a ses propres attentes, ses propres façons de faire. Ça a toujours été le cas en développement, et la capacité à aligner une équipe sur des pratiques communes a toujours été un cheval de bataille de la collaboration technique.

Aujourd'hui les instructions vivent directement dans un projet. Mais une entreprise peut avoir de nombreuses applications, elles-mêmes constituées de nombreux projets. Des outils commencent à émerger pour centraliser ces règles dans un repo partagé. Aucun n'est encore devenu le standard. Comment gérer ce catalogue ? Comment définir des guidelines qui s'appliqueraient partout, avec la possibilité d'en modifier tout ou partie selon les contextes ?

### Comment gérer l'ownership des instructions en dehors de la tech ?

Certains choix ne relèvent pas de la tech, même si la tech en est le medium. Les guidelines SEO, le copywriting, le discours marketing, les règles de sécurité - tous ces domaines sont clients de la tech. Ils fournissent des specs que les équipes implémentent.

Mais dans un monde où les développeurs sont dopés à l'IA, toutes ces contraintes peuvent être injectées directement dans les assistants pour être appliquées à la source. Où écrire ces instructions pour qu'elles soient accessibles à des intervenants non techniques ? Comment s'assurer que les développeurs travaillent toujours avec la dernière version validée ? Comment gérer ce cycle de vie, et s'assurer qu'ils ne peuvent pas modifier ces instructions unilatéralement ?

### Comment développer au sein d'une application constituée de plusieurs couches ?

On distingue aujourd'hui deux usages distincts : le développeur qui démarre un projet de zéro avec l'IA, et qui se retrouve en général avec une stack fullstack et monolithique - souvent du Javascript. Et le développeur qui intègre l'IA dans un projet existant mais continue de travailler de manière relativement isolée.

Ces deux usages fonctionnent pour les solopreneurs et les jeunes structures. Mais de nombreuses stacks plus matures sont construites sur des architectures 3-tiers ou des micro-services. Pour ces développeurs, le travail est plus complexe. On ne peut pas juste demander à l'agent de "développer la feature X" en lui donnant un bout de specs. Le découpage et l'ordonnancement multi-projets restent effectués par un être humain.

Comment indiquer demain les spécifications fonctionnelles d'une nouvelle feature, et permettre à l'agent d'intervenir sur les différents repositories nécessaires sans que ça ne casse tout ?

### Comment obfusquer des données avant leur envoi aux LLMs ?

Que ce soit vos développeurs qui utilisent leur harness, ou vos applications de production qui appellent les APIs des providers de LLM, dans les deux cas, des données confidentielles finissent sur des serveurs tiers. Souvent aux États-Unis.

Des solutions existent - modèles on-premise, outils d'anonymisation, offres cloud avec isolation réseau. Aucune n'est simple à déployer à l'échelle d'une équipe entière. En attendant, bon nombre d'entreprises ont simplement interdit l'usage de l'IA en interne. Mais surveiller chaque usage individuel reste difficile. L'obfuscation et l'anonymisation des données vont être des sujets centraux des prochaines années. Quel système mettre en place ? Comment s'assurer du respect à l'échelle ?

### Comment surveiller la consommation de tokens (TokenOps) ?

L'IA va probablement devenir une ligne à part entière sur les budgets. Deux futurs sont possibles sur sa financiarisation : soit les modèles ne sont pas rentables aujourd'hui et les prix vont augmenter, soit l'open-source et la concurrence vont les faire baisser. Dans les deux cas, les modèles restent gourmands.

Dans une stack de production, ça peut aller très vite. Un script qui boucle sur N éléments et appelle une API de LLM pour chacun peut se traduire par des factures conséquentes. Des outils de monitoring de tokens existent déjà. Mais les intégrer dans les process d'une équipe - savoir quel appel est légitime, quel agent consomme trop, quel pipeline optimiser en priorité - c'est un chantier que presque personne n'a encore structuré.

### Comment gérer le déterminisme des comportements des agents ?

J'ai commencé à aborder cette question dans [cet article](https://adrien.blandin.me/articles/agents-ia-orchestration-deterministe). Un agent IA est par essence probabiliste : deux fois le même prompt, deux réponses différentes.

Or dans notre métier, un système sain a des comportements prévisibles. C'est ce qui permet d'automatiser les tâches d'un pipeline complexe, l'output de chacune devenant l'input de la suivante. La vraie question n'est pas comment rendre les agents déterministes - c'est comment borner leur espace de réponses pour que l'indéterminisme reste dans des limites acceptables. Des patterns d'orchestration commencent à répondre à ça. Aucun n'est encore une évidence.

### Quelle place pour le processus produit ?

Plus j'utilise l'IA et plus j'ai l'impression que le processus produit n'a jamais été aussi important : prioriser les tâches à faire, spécifier fonctionnellement et techniquement chacune d'entre elles, les découper en sous-tâches faciles à développer sans connaître tout le contexte.

Sans ce processus, le travail est brouillon. On improvise en temps réel avec l'IA. Elle implémente des solutions bancales qu'on raffine ensuite. Ce n'est pas que les résultats ne sont pas bons - c'est qu'ils ont constitué une dépense majeure de tokens pour quelque chose qu'on aurait pu faire seuls en amont : réfléchir à ce qui vaut le coup d'être construit et comment.

Ce processus, c'est celui qu'on a structuré dans les équipes tech au cours de la dernière décennie : un Product Manager pour la discovery et la priorisation, un Product Designer pour le maquettage et la spécification fonctionnelle, un Tech Lead pour la spécification technique, des développeurs pour l'implémentation. On voit aujourd'hui ces rôles se rapprocher, se frôler. Ce qui va en sortir exactement, personne ne le sait encore.

Si la question de l'impact de l'IA sur les métiers vous intéresse au-delà de la tech, j'ai développé ce sujet dans un autre article : [La révolution IA : le tertiaire à l'heure de l'automatisation](https://adrien.blandin.me/articles/la-revolution-ia-le-tertiaire-a-lheure-de-lautomatisation).

---

Ces questions vont atterrir sur le bureau du CTO. De la même manière qu'il est aujourd'hui responsable de l'infra, du FinOps, de la CI/CD, du process de développement, de la sécurité - il va devoir ajouter une corde à son arc. La dimension IA va devenir un sujet structurant de la construction d'une équipe technique. À grande échelle, certains s'entoureront d'un VP AI ou d'un Head of AI. Mais l'IA étant au cœur du processus de développement lui-même, difficile de déléguer complètement cette responsabilité à quelqu'un qui n'en est pas issu.

Une étude McKinsey de juin 2025 résume bien où on en est : près de 80% des entreprises déclarent utiliser l'IA générative, mais environ autant admettent que ces outils n'ont pas significativement affecté leurs résultats. Et 90% des cas d'usage les plus transformateurs restent bloqués en phase pilote. Ce n'est pas un problème de technologie. C'est un problème d'organisation.

Nous sommes au stade du Far-West de l'IA collective. L'industrialisation n'a pas encore commencé. Les entreprises cherchent à recruter des leaders techniques qui ont déjà organisé et systématisé ça dans des équipes - mais ces profils n'existent pas encore. Les bonnes pratiques se construisent maintenant.

Si vous travaillez dans une équipe qui cherche des réponses à ces questions, prenez contact avec moi. C'est précisément ce sur quoi je travaille avec mon équipe, et ce qu'on tente de structurer dans les start-ups où on intervient.
