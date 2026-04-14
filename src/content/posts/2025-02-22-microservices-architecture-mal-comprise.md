---
title: "Les microservices sont l'architecture technique la plus mal comprise."
date: "2025-02-22"
type: "post"
platform: "linkedin"
status: "published"
angle: "Les microservices résolvent des problèmes organisationnels, pas techniques — attention aux excès"
case: "technique"
mission: ""
url: ""
---

Les microservices sont l'architecture technique la plus mal comprise.

Beaucoup pensent que c'est une (voire LA) solution à des problèmes de scale techniques.

Je suis persuadé que c'est faux.

L'architecture en microservices est une solution technique à des problèmes organisationnels.

S'il commence à y avoir des dizaines de développeurs dans votre équipe et que leur travail se retrouve souvent en conflit avec celui des autres,

Si, lorsque vous rencontrez des anomalies ou des bugs dans vos projets, il y a un réel manque de responsabilisation de la part de vos développeurs pour les corriger et maintenir une plateforme stable,

Alors, l'architecture en microservices peut aider à résoudre ces problèmes.

Mais ce sera au prix d'une sur-complexité technique et donc d'une perte de rapidité dans le développement.

Quand on cherche la stabilité, c'est un juste milieu acceptable. Mais quand on est en phase de construction de son entreprise, mieux vaut l'éviter.

J'ai vu des développeurs monter des architectures de plus de 20 microservices pour des start-ups dont l'équipe technique ne dépasse pas les deux développeurs.

Autant dire que, lorsque ces architectes quittent l'entreprise, plus personne n'est en mesure de faire évoluer le projet.

On le maintient en route, au mieux.

Ce sont des choix déconnectés du business, déconnectés de la gestion d'une équipe au sens large.

Souvent, les dirigeants sont impuissants face à ces décisions. Ils acceptent sans en comprendre les enjeux. Ils acceptent pour que l'équipe technique "se fasse plaisir".

Il existe une exception majeure que je vois et pour laquelle j'ai recommandé la mise en place de microservices dédiés au cours de ma carrière :

Lorsque l'on veut isoler une fonctionnalité qui risque d'être sur-sollicitée, sans que l'on en ait le contrôle. Par exemple, un widget qui s'affiche sur les sites de vos clients.

Cela permet d'éviter les dommages collatéraux sur notre projet principal.
