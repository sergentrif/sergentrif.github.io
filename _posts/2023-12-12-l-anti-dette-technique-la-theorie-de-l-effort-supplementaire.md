---
layout: article
title:  "L'anti dette technique : la théorie de l'effort supplémentaire"
permalink: /articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire
date:   2023-12-12 00:00:00 +0000
---

Après une carrière de 15 ans dans le domaine du développement logiciel, d'abord en tant que développeur puis en tant que CTO, j'ai constamment entendu parler de "dette technique". C'est un terme si omniprésent qu'il semble avoir perdu une partie de sa signification initiale. 

À mon sens, la dette technique se traduit principalement par une diminution de l'efficacité, se manifestant par des délais de développement allongés, souvent entravés par des imprévus ou des complications techniques nécessitant une résolution préalable. Elle engendre des frustrations, affectant autant les équipes de développement que les entreprises elles-mêmes.

Il est essentiel, à mon avis, de clarifier les différentes situations qui contribuent à une perte d'efficacité :
1. **La dette technique :** Ce terme, devenu générique, englobe désormais toutes les défaillances techniques alors qu’il est le résultat d'un choix délibéré de privilégier une solution rapide, peu scalable, mais techniquement incomplète, en échange d'un gain de temps immédiat, au détriment de l'avenir.
2. **Les prototypes en production :** Ils représentent une variante de la dette technique. Développés sous la contrainte de sacrifier la qualité car "ils ne devraient pas évoluer", ils finissent pourtant par être modifiés, car cela semble plus rapide que de repartir de zéro.
3. **Le code legacy :** Souvent le meilleur choix au moment de sa rédaction, ce type de code peut encore fonctionner efficacement. Cependant, il devient obsolète à mesure que le projet global et les pratiques de développement évoluent, restant le seul à ne pas être mis à jour.
4. **Les mauvais choix techniques :** Contrairement à la dette technique, ces choix ne sont pas délibérés. Ils résultent souvent d'une mauvaise compréhension des enjeux commerciaux, parfois mal expliqués, combinée à des choix d'architecture inappropriés, aboutissant à une solution inadaptée et techniquement pénalisante.
5. **Les bugs :** Leur apparition n'est généralement pas volontaire et résulte d'une conception technique incomplète, d'un manque de tests ou d'un temps insuffisant consacré aux correctifs. Cependant, choisir de ne pas corriger des bugs connus est une décision délibérée, en pesant l'impact du bug contre celui des nouvelles fonctionnalités potentielles.

Regrouper toutes ces situations sous une même étiquette conduit à une solution unique pour les résoudre, alors qu'ils nécessitent chacun une approche spécifique. Cette solution souvent évoquée, presque aussi célèbre que la dette technique elle-même, est le "refactoring" : la refonte, souvent totale, de la fonctionnalité ou même du projet dans son ensemble.

Bien que je ne développerai pas ici le sujet des refontes techniques, ce qui me préoccupe le plus dans les différentes solutions envisageables est leur nature réactive. Nous attendons que les problèmes surviennent pour les résoudre.
C'est comparable à faire de la prévention routière uniquement auprès des victimes d'accidents, alors que l'éducation devrait cibler ceux qui n'ont pas encore été impliqués dans un tel événement.

Depuis quelques mois, j'ai finalement réussi à théoriser et nommer une stratégie que j'applique depuis des années dans le domaine de la conception technique : l'*effort supplémentaire*. J'ai évoqué cette idée lors de ma participation à l'épisode [Anticiper les bugs : Minority Report du bug](https://open.spotify.com/episode/5QrTn83tLCFRpQPo31hY8n){:target="_blank"} du podcast [If This Then Dev](https://www.ifttd.io/){:target="_blank"}. Cette discussion m'a inspiré à écrire cet article pour explorer plus en profondeur cette approche.

En revenant sur les cinq situations de frustration que nous avons identifiés, faire le choix de l'*effort supplémentaire* apparaît comme une alternative à la dette technique et aux prototypes en production. Cette stratégie aide à réduire les bugs et les mauvais choix techniques, bien qu'elle ne puisse pas résoudre les problèmes liés au code legacy. Elle permet plutôt d'apprécier ce code pour ce qu'il est : fonctionnel et nécessitant peu d'entretien.

L'*effort supplémentaire* implique une vision à long terme du développement, qui peut sembler contraire aux principes du *[YAGNI](https://fr.wikipedia.org/wiki/YAGNI){:target="_blank"}* (You Ain’t Gonna Need It) et du *[KISS](https://fr.wikipedia.org/wiki/Principe_KISS){:target="_blank"}* (Keep It Simple, Stupid). Certains pourraient y voir de l'*over-engineering*, mais pour moi, c'est l'antithèse de la dette technique. C'est un investissement en temps aujourd'hui pour un gain en temps demain. Cette approche repose sur l'anticipation, l'exigence, la rigueur et la qualité, que je considère comme des valeurs fondamentales pour réussir ses investissements en réduisant les risques.

Pour illustrer cette pensée, considérons l'exemple historique des [Chênes français, le trésor de Colbert](https://www.lemonde.fr/idees/article/2011/04/27/les-chenes-francais-le-tresor-de-colbert_1512747_3232.html){:target="_blank"}. Louis XIV, voulant construire une flotte, a été confronté à la nécessité de planter des milliers de chênes, qui mettent environ 100 ans à pousser. Colbert a alors mis en place des mesures et des règlementations qui ont transformé durablement les industries du bois et de la construction navale.

Ce qui est fascinant, c'est la capacité à se projeter loin dans le temps pour entreprendre des actions dont les effets ne se manifesteraient qu'après sa mort. Aujourd'hui, notre code forestier est encore influencé par ces décisions, et certains chênes plantés à cette époque existent toujours.

En tirant un parallèle avec le développement logiciel, nous pouvons observer que dans les deux cas, le succès de la démarche repose sur deux aspects :

- Une vision claire des objectifs, même lointains.
- Une appréciation claire de ce qu'il faut préserver : pour Colbert, c'était les forêts; pour nous, c'est notre base de code.

L'objectif devient alors de progresser vers nos buts, à un rythme soutenu, sans dégrader notre base de code. Nous devons définir quatre échelles de temps pour y parvenir :

1. **Le long terme :** sur plusieurs années, établit la direction générale.
2. **Le moyen terme :** sur plusieurs mois, fournit un contexte plus détaillé pour les objectifs à court terme.
3. **Le court terme :** sur plusieurs semaines, représente notre travail quotidien, en anticipant le moyen terme et en visant le long terme.
4. **Le très court terme :** sur quelques jours, englobe les réactions immédiates à des situations imprévues comme les incidents en production ou les urgences légales.

Le très court terme peut sembler moins pertinent en termes de vision et de planification, mais il est crucial pour gérer les urgences sans compromettre nos objectifs à long terme. Une analyse postérieure pour identifier des améliorations potentielles est recommandée.

Le court et le moyen terme représentent le quotidien et les étapes vers notre destination finale. Le backlog est au cœur de ces enjeux. Selon la taille et la structure de l'entreprise, le backlog peut prendre différentes formes, allant des notes personnelles aux listes plus formalisées.

La maîtrise du backlog est essentielle. Même si la majorité des éléments ne se concrétisera jamais en raison d'un ratio coût/bénéfice défavorable, il est crucial de les connaître parfaitement. Le défi n'est pas tant le manque de valeur du gain, mais souvent le coût élevé associé.

Lorsque je mentionne le backlog, mon intérêt ne réside pas tant dans cet outil en soi, car il n'est finalement qu'un support. La véritable valeur réside dans ce qu'il symbolise : un réservoir d'informations, de connaissances et de projets interconnectés, qui, une fois combinés, prennent du sens et commencent à tisser une histoire cohérente.

La notion d'*effort supplémentaire* prend tout son sens ici. Il s'agit d'exploiter chaque fonctionnalité développée, validée et mise en œuvre pour résoudre d'autres problèmes actuels ou futurs, réduisant ainsi considérablement les coûts. L'idée principale est d'ajouter plus de contexte, de scénarios et, par conséquent, de contraintes dans notre processus de réflexion en maîtrisant le backlog. Cela diffère de l'*over-engineering* en ce sens que l'objectif n'est pas de créer aujourd'hui les fonctionnalités de demain, mais de préparer le terrain pour les intégrer facilement plus tard, en ayant anticipé et évité les obstacles potentiels.

Prenons l'exemple concret de mon expérience chez [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"}. Lorsque nous avons entrepris de refondre notre parcours d'inscription, nous disposions de deux offres commerciales : la conduite classique en boîte manuelle et la conduite accélérée. Cependant, l'équipe savait que d'autres équipes travaillaient sur de nouvelles offres.

L'équipe aurait pu se limiter à un parcours d'inscription adapté uniquement aux offres existantes, laissant le soin d'intégrer les nouvelles offres aux équipes responsables de leur développement. Au lieu de cela, elle a procédé comme si ces nouvelles offres (conduite automatique, assurance permis, conduite accompagnée) existaient déjà. Cette anticipation a rendu la préparation plus complexe et allongé le temps de lancement, mais une fois les nouvelles offres lancées, elles ont été intégrées sans effort supplémentaire dans le parcours d'inscription. Ces scénarios anticipés, traités dans le cadre d'un projet similaire, ont été implémentés à moindre coût et de manière plus fluide, maintenant ainsi un haut niveau de qualité dans notre base de code.

C'est pour cette raison que je parle de "temps investi" plutôt que de "temps perdu".

Un autre exemple est la rémunération des enseignants avec lesquels [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} collabore. Lors de la mise en place de ce système, l'objectif principal était de rémunérer chaque enseignant pour ses services et la location de son véhicule. Nous aurions pu nous arrêter là avec une solution simple, mais nous nous sommes demandé :

- Les enseignants pourraient-ils être rémunérés pour d'autres services ?
- La rémunération pourrait-elle varier dans le temps ?

Avec ces questions supplémentaires, la solution technique mise en place dépassait le strict nécessaire du périmètre initial. Elle permettait une personnalisation des motifs de rémunération et leur variation dans le temps pour chaque enseignant.

Cependant, nous n'avons pas défini de nouveaux motifs de rémunération ni développé le back-office pour les faire évoluer dans le temps. Mais si le besoin se présentait, nous pourrions le faire à moindre coût, les bases étant déjà en place.

Le temps de réflexion et de développement a été légèrement plus long que nécessaire, mais seulement de quelques heures.

Pendant plusieurs mois, cet investissement en temps n'a pas porté ses fruits, jusqu'à l'arrivée du COVID-19. [lePERMISLIBRE](https://lepermislibre.fr){:target="_blank"} a alors décidé de soutenir ses enseignants partenaires avec une "prime exceptionnelle" pour compenser les coûts liés au matériel d'hygiène. S'en est suivie une autre prime pour compenser la hausse des prix de l'essence. Ces primes ont été mises en place très rapidement, compensant largement le surplus de temps initial. Chaque nouveau scénario traité a réduit d'autant plus le coût initial de développement.

Nous sommes face à un cercle vertueux en développement logiciel, où le but est de développer pour réutiliser. En procédant ainsi, chaque problème rencontré peut être résolu en exploitant des fonctionnalités préexistantes. Plus nous avons travaillé dans cette optique par le passé, plus nous disposons d'un large éventail d'options de réutilisation pour chaque nouveau défi.

Cette approche dépasse la simple notion de retour sur investissement. Elle représente une prophétie auto-réalisatrice : en prenant en compte un contexte étendu dans notre travail de conception, nous préparons des solutions pour des problèmes futurs. Lorsqu'un problème survient, il est aisément surmontable, la base de code ayant déjà anticipé ou prévu de l'espace pour sa résolution. Investir 10% d'effort aujourd'hui peut signifier une économie de 30% ou plus demain.

Je ne vois pas cette méthode en contradiction avec les principes établis de développement logiciel :

- **Le *YAGNI* :** disposer d'une gamme étendue d'outils nous prépare à de nouvelles tâches. Finalement, ces outils trouvent souvent leur utilité.
- **L’*over-engineering* :** nous ne développons pas inutilement, mais nous évitons les problèmes futurs de conception.
- **Le *KISS* :** même si une solution n'est pas utilisée, sa conception reste pertinente. Rien n'est superflu, tout au plus, cela apporte de la qualité.

En reprenant les quatre temporalités :

1. Le **long terme** fixe la direction et guide l'équipe dans ses décisions structurales ou philosophiques.
2. Le **moyen terme** enrichit le contexte et les scénarios pour la conception et le développement à court terme.
3. Le **court terme** représente le travail quotidien, anticipant le moyen terme tout en progressant vers le long terme.
4. Le **très court terme** inclut les imprévus qui peuvent affecter le court terme.

Ainsi, l'*effort supplémentaire* n'est pas une réaction alarmiste ou passive face à la dette technique, mais une approche proactive et préventive. C'est une philosophie et un comportement à adopter pour éviter de se retrouver paralysés par une dette technique.

Certains pourraient argumenter que cette philosophie s'apparente à une quête excessive de qualité, suggérant qu'une concentration exclusive sur l'essentiel serait plus rapide. Toutefois, je suis convaincu que c'est précisément grâce à cette approche que nous gagnons en vitesse actuellement, souvent sans même nous en apercevoir. Je partage l'idée qu'il est préférable de nettoyer après avoir cuisiné plutôt que de remettre à plus tard; le gras s'enlève toujours plus aisément avant qu'il n'ait le temps de sécher.

En tant que CTO ces dernières années, j'ai rarement eu à parler de "dette technique", ce qui ne nous a pas empêchés d'avancer et de construire les fondations de la croissance de notre entreprise. Cela ne signifie pas que tout est parfait, mais cela démontre l'existence d'alternatives à l'immobilisation d'une entreprise pour rembourser sa dette.

Il est important de noter que, tout comme les dettes financières, la dette technique est parfois nécessaire, particulièrement dans des situations sans alternative (start-ups en phase initiale, difficultés financières...). Mais dès que vous avez le choix, il est préférable de rembourser ces dettes, d'investir tôt et de récolter les bénéfices.

Pour ceux qui souhaitent approfondir leur compréhension de la dette technique, voici quelques lectures recommandées :

- [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html){:target="_blank"} de Martin Fowler.
- [From Technical Debt to Design Integrity](https://medium.com/@ziobrando/from-technical-debt-to-design-integrity-48e7056b6776){:target="_blank"} de Alberto Brandolini.
