---
layout: article
title:  "Comment réduire la complexité produit pour maintenir un système simple ?"
permalink: /articles/comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple
article_image: /assets/images/articles/comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple.jpg
---

Cet article cherche à expliquer comment [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} veille à maintenir une simplicité (donc une maintenabilité) produit & technique à travers l’exemple de la création de sa nouvelle offre de conduite accélérée qui a mobilisé des dizaines de personnes, d’équipes différentes sur plus d’une année complète. Si vous n’avez pas le temps de tout lire, vous pouvez directement vous rendre en fin d’article afin de connaitre les règles que l’on essaie de s’appliquer.

Après plus d’un an de travail, [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} vient de sortir son offre d’apprentissage du permis de conduire en accéléré. Contrairement à notre formation standard où la réussite de l’examen peut mettre plusieurs mois (tout dépend de la motivation variable des élèves et du rythme qu’ils donnent à leur formation), notre promesse ici est de dispenser une formation complète et un passage à l’examen en moins de 2 mois. D’après nos premiers résultats, nous y arrivons même en moins d’un mois.

Cela en fait donc le mode de formation à privilégier pour ceux qui ont besoin du permis de conduire afin de débuter une expérience professionnelle rapidement ou ceux qui souhaitent mettre à profit leurs 2 mois de vacances estivales pour ne pas avoir à gérer leur apprentissage en parallèle de leurs études.

Sur le papier, cette formation est simple à comprendre, donc elle devrait être simple à mettre en place. En réalité, ce fut loin d’être le cas. Elle a ajouté de nouvelles contraintes que nous n’avions jamais eu à gérer jusqu’alors ce qui aurait pu se traduire par un ajout drastique de complexité produit, donc technique.

Voici les quelques règles de base que nous avons respectées durant une année entière afin de créer une nouvelle offre majeure sans perdre la simplicité de compréhension de notre plateforme.

La première des règles à respecter pour maintenir un produit simple est de **trouver le réel problème à résoudre**. Lorsque les utilisateurs ou le métier arrivent avec une demande de fonctionnalité, elle est déjà enrobée d’un contexte, de détails et de propositions de solutions.

Le problème avec cela, c’est que si la fonctionnalité demandée répond souvent au problème initial (avec plus ou moins de succès), elle s’intègre souvent mal avec les fonctionnalités existantes ou à venir. La mettre en oeuvre telle quelle aboutira donc à la création d’une complexité produit accidentelle, ce que l’on souhaite éviter à tout prix. En cumulant de petites complexités accidentelles sur de multiples fonctionnalités, on se retrouve irrémédiablement avec un produit complexe dans sa globalité.

Il y a un an, nous faisions la toute première réunion de lancement de notre projet de permis accéléré. Durant cette réunion, une quinzaine de personnes concernées étaient présentes et de nombreuses idées ont fusé sur ce à quoi devrait ressembler cette offre. Au final, rien de tout cela n’a été mis en place car l’objectif de cette première réunion était de trouver le réel problème à résoudre et non pas de sortir avec la solution à mettre en place.

L’obtention du permis de conduire en accéléré se réduit à une unique problématique : quelles sont les étapes chronophages d’une formation dite “standard” et comment allons-nous faire pour les raccourcir au maximum ?

Au moment même où l’on se pose cette question, nous nous rendons compte que finalement, ce n’est plus sur la création d’une offre de conduite accélérée que nous travaillons mais sur la réduction des délais d’apprentissage. Le permis accéléré ne sera que le packaging commercial des fonctionnalités et processus opérationnels que l’on mettra en oeuvre pour réduire nos délais d’apprentissage à leur strict minimum.

Comprendre cette distinction est fondamental, c’est elle qui nous permettra de penser un produit sans complexité et donc maintenable sur du long terme.

Lorsque l’on a réalisé que notre problématique était la réduction des délais et non la création d’une nouvelle offre, les différentes étapes du projet ont commencé à être visibles :

1. Réduire le délai de validation des démarches administratives
2. Réduire le délai d’apprentissage et d’obtention du code de la route
3. Réduire le délai de formation à la conduite
4. Réduire le délai d’obtention d’une place d’examen au permis de conduite

À ce stade nous arrivons à un embranchement où il devient à nouveau possible d’introduire de la complexité au sein de notre produit. [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} va désormais fournir 2 types de formation différentes (standard et accélérée) là où il n’en existait qu’une auparavant. Certaines fonctionnalités n’étant disponibles que pour l’une ou l’autre des formations, cela complexifie la compréhension globale de nos règles métiers donc de notre produit au global.

Et si on se projette encore un peu, il y a 2 types de formations que nous ne proposons pas encore : la conduite accompagnée et la conduite supervisée.

Alors, est-ce une obligation que de créer des fonctionnalités qui n’ont de sens que dans un seul type de formation ? Pour moi, la réponse est (souvent) non. Cela nous amène à la deuxième règle produit que l’on essaye de s’appliquer au quotidien : lorsque l’on doit créer une fonctionnalité qui s’applique dans tel cas *mais / sauf / à l’exception de*…, **il faut supprimer tout ce qu’il y a après le *mais***. Chaque mais est un si et chaque si est une nouvelle branche dans un arbre de décisions.

Dans notre cas “Réduire le délai de validation des démarches administratives pour le permis accéléré mais pas pour le permis standard”, il faut supprimer “mais pas pour le permis standard”.

Concrètement, cela se traduit par la création de fonctionnalités qui seront compatibles avec l’intégralité du produit et non pas seulement pour quelques scénarios bien définis à l’avance. Faire simple à long terme s’avère donc complexe à court terme.

Dans notre objectif de réduire les délais de formation dans un cadre de formation accélérée tout en restant compatibles avec l’ensemble de notre produit, nous en sommes donc arrivés à la création de 4 fonctionnalités majeures :

1. La création d’une nouvelle offre commerciale où [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} s’occupe de toutes les démarches administratives. Grâce à cette offre, nous terminons les démarches de nos élèves en 3 jours là où ils mettaient au moins 3 semaines au préalable. Et ce qui est incroyable, c’est que si cette offre est incluse dans notre permis accéléré, il est toutefois possible d’y souscrire en stand-alone.
2. La création d’une nouvelle offre commerciale de “Coaching lors des révisions du code”. Grâce à cette offre, nos élèves peuvent obtenir leur examen du code en quelques semaines là où ils mettaient plusieurs mois au préalable (selon leur motivation variable). Là encore, cette offre est accessible à la fois dans notre permis accéléré mais aussi en stand-alone.
3. La création d’une fonctionnalité à destination de nos enseignants pour planifier l’entièreté de la formation d’un élève. Là où la régularité de la formation dépendait au préalable de la régularité de l’élève, c’est désormais l’enseignant qui va décider d’un rythme adapté à l’élève tout en garantissant une formation rapide. Ici aussi nous avons mis à disposition cette fonctionnalité pour l’intégralité de nos enseignants et de nos formations. La seule subtilité c’est que cette étape est obligatoire dans une formation accélérée là où elle est facultative (mais recommandée dans une formation classique)
4. La réservation d’une place d’examen pour l’élève avant que ce dernier ne soit réellement prêt. Ici, nous récupérons une mécanique déjà existante que nous avons décidé de déclencher plus tôt. Cette possibilité nous est permise grâce au contrat de formation accélérée qui garanti de manière quasi certaine que l’élève sera prêt le jour J.

Ce que l’on voit ici, c’est qu’en enlevant le contexte de formation accélérée, nous avons été capables de penser et développer des fonctionnalités accessibles pour l’intégralité de nos utilisateurs. La compréhension produit s’en trouve facilitée ce qui implique que les développements techniques seront eux aussi facilités.

La formation accélérée devient finalement le simple regroupement obligatoire de fonctionnalités déjà disponibles mais facultatives. À travers ces obligations, à travers ce contrat de formation et avec un soutien pédagogique et opérationnel de nos équipes, la promesse initiale sera tenue pour l’obtention du précieux sésame.

L’histoire pourrait s’arrêter là mais ce serait trop simple. À ce stade, nous serions en mesure de rendre notre offre publique (nous l’avons d’ailleurs sortie en MVP privé pour obtenir des premiers retours terrains) mais cela aurait des effets secondaires assez néfastes pour la compréhension client et le service opérationnel qui en découle :

* son déploiement dépend de notre capacité à trouver des enseignants volontaires pour accompagner plus rapidement les élèves
* les enseignants que l’on doit trouver doivent être présents sur tout le territoire national mais aussi dans les différents type de boite de transmission que l’on propose (boite auto, boite manuelle)
* un élève ne doit pas être capable de souscrire à une offre à laquelle il n’a pas le droit (indisponibilité géographique, autre formation déjà en cours…)
Nous nous retrouvons donc avec une complexification subie de nos offres de formation. Et si on se projette encore un peu, il y a toujours 2 types de formations que nous ne proposons pas encore et qui pourraient venir rajouter de nouvelles difficultés dans un futur proche.

Désormais, la notion de formation accélérée n’existe presque plus dans nos réflexions. Si l’on veut maintenir un système simple et scalable, notre enjeu est plus global : comment gérer 4 types de formations, 2 types de boite différentes et 2 modes de financements soit 16 combinaisons différentes dans des centaines de villes en France ?

Nous avons donc du mettre 3 nouvelles fonctionnalités en place :

1. L’ajout de filtres dans notre boutique que l’on pré-remplit avec les informations connues sur un utilisateur pour ne lui proposer que ce qui l’intéresse réellement en terme de formation
2. Un module d’éligibilité pour expliquer clairement à un utilisateur ce à quoi il est éligible ou non
3. Un module de compatibilité de panier pour indiquer à un utilisateur si les différents produits qu’il a choisi peuvent être achetés simultanément

Ces fonctionnalités ont été pensées pour des cas d’usage que l’on n’a pas encore alors que nous aurions pu nous limiter à des cas d’usage que l’on a vraiment. Cela pourrait sembler contre-productif car à court-terme, cela se traduit par un léger surcout dans le temps de mise en place desdites fonctionnalités. Toutefois, si les cas d’usage n’arrivent jamais, nous aurons mis un peu plus de temps pour faire les choses correctement et si les cas d’usage arrivent, alors la quantité de travail à ce moment sera inférieure car ils auront déjà été prévus dans le fonctionnement existant. Ne restera donc qu’à se concentrer sur les nouveautés avec lesquelles ils viennent et non pas sur l’adaptation des fonctionnalités existantes en plus.

**Savoir où l’on veut aller à moyen-terme et long-terme** est donc la règle numéro 3 que l’on essaye de s’appliquer dans notre vision produit et technique. En sachant où l’on va, chaque brique que l’on ajoute quotidiennement devient un pas de plus vers notre vision au lieu de devenir un obstacle supplémentaire.

La quatrième règle qui me semble indispensable au maintien d’un système simple consiste en le fait d’avoir une **approche *module-first***. Un module est une fonctionnalité complètement autonome dans son fonctionnement. Il est capable de gérer ses pré-requis ainsi que ses cas d’erreurs.

Si l’on reprend l’exemple de nos filtres en boutique, nous partons du principe que leurs valeurs seront pré-remplies pour être plus pertinents aux yeux de nos utilisateurs. Cela implique que les valeurs de pré-remplissage que l’on va utiliser proviennent probablement d’un autre module de notre application. Nous avons donc une fonctionnalité A qui repose sur le bon fonctionnement d’une fonctionnalité B.

Je trouve cela dangereux car le jour où la fonctionnalité B change de comportement, un risque de dysfonctionnement se crée sur la fonctionnalité A. Malheureusement, la personne qui travaillera sur B n’aura probablement pas connaissance qu’en changeant quelques règles métier, elle aura des impacts néfastes à des endroits inconnus (pour elle) de l’application.

Il faut à tout prix prévenir ce genre d’effets indésirables car ils sont vecteurs de frustration et de perte de temps, donc d’efficacité :

1. L’utilisateur va être mécontent et prendre contact avec notre service client
2. Notre service client n’aura pas de réponse immédiate à donner et va prendre contact avec l’équipe technique
3. L’équipe technique va devoir se mettre en condition de reproduction du bug pour ensuite le corriger
4. L’équipe technique devra communiquer la résolution du bug au service client
5. Le service client devra reprendre contact avec l’utilisateur pour lui faire part du solutionnement de son problème
6. Notre module de filtrage doit donc être capable de fonctionner avec ou sans valeurs pré-remplies quitte à les demander lui-même si elles lui sont nécessaires et qu’il ne les a pas.

Ce qui est puissant avec cette approche module-first, c’est qu’elle vient naturellement avec la dernière règle à respecter pour la création d’un système simple et pérenne : il faut **créer des composants réutilisables et réutiliser des composants déjà créés**.

C’est quelque chose qui semble naturel une fois que l’on a un Design System mais cela reste valable même sur des développements techniques purs. Ré-utiliser des fonctionnalités ou des process existants permet de garder la logique métier à un seul et même endroit, donc à ne pas la dupliquer et devoir la maintenir à différents endroits.

Pour qu’une fonctionnalité soit pleinement ré-utilisable, elle doit être (au moins partiellement) configurable. Dans notre exemple de filtres pour la boutique, nous nous sommes rendus compte que nous avions les mêmes besoins pour notre module de réservation de leçons. Il a donc fallu créer un composant indépendant de son contexte (achat ou réservation) que l’on a au passage rendu configurable via les paramètres d’url. Grâce à cela, je suis capable de gérer ma boutique, mon flow de réservation ainsi que divers scénarios personnalisables via l’url pour des besoins marketing ponctuels ou pour accompagner un utilisateur qui aurait du mal à utiliser l’application de lui-même.

Les modules autonomes et personnalisables, en plus d’être simples à maintenir, sont aussi rapides à utiliser puisque le travail a déjà été fait. Ils permettent donc de créer de nouvelles fonctionnalités sur une base existante à une seule condition : il faut savoir faire des concessions sur la fonctionnalité parfaite pour ré-utiliser au maximum ce qui a déjà été créé et s’intégrer dans une vision d’ensemble plus simple à maintenir, donc à faire évoluer.

**Si vous avez décidé de sauter tout le texte précédent pour arriver directement aux règles à respecter dans le maintien d’un système simple, les voici :**

1. Trouver derrière les demandes de fonctionnalité, le problème de fond à résoudre
2. Simplifier le problème de fond en évitant (au maximum) la gestion de cas particuliers
3. Avoir une vision à moyen et long terme pour anticiper maintenant, les problèmes de demain
4. Développer des fonctionnalités entièrement autonomes dans leur bon fonctionnement
5. Créer des fonctionnalités configurables pour faciliter leur réutilisation
6. Créer des fonctionnalités réutilisables et réutiliser les fonctionnalités existantes
