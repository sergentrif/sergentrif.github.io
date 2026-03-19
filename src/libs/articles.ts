export interface ArticleMeta {
    slug: string;
    title: string;
    date: string;
    displayDate: string;
    description: string;
    readTime: string;
    excerpt: string;
}

export const articles: ArticleMeta[] = [
    {
        slug: "la-revolution-ia-le-tertiaire-a-l-heure-de-l-automatisation",
        title: "La révolution IA : le tertiaire à l'heure de l'automatisation",
        date: "2026-03-19",
        displayDate: "19/03/2026",
        description:
            "L'IA ne supprime pas des métiers — elle supprime des niveaux d'exercice. Analyse de la révolution qui touche tous les métiers du tertiaire, et de la question sans réponse : comment forme-t-on les seniors de demain ?",
        readTime: "~7",
        excerpt:
            "En 3 ans, on est passé de \"l'IA est un gadget pour les développeurs\" à des PDG qui déclarent que 25 à 50% du code produit chez eux est généré par IA. Que les chiffres soient exacts ou gonflés pour rassurer les investisseurs, la direction est claire.",
    },
    {
        slug: "pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience",
        title: "Pourquoi réduire la charge mentale des développeurs à travers la Developer Experience ?",
        date: "2024-04-03",
        displayDate: "03/04/2024",
        description:
            "Comment réduire la charge mentale des développeurs via la Developer Experience ? Stratégies concrètes pour limiter le context-switching dans les équipes tech.",
        readTime: "~8",
        excerpt:
            "J'ai récemment abordé la diversité des tâches que doivent traiter les développeurs au travers d'un article nommé Être développeur, c'est bien plus que développer. Il est important d'avoir conscience de cette diversité de tâches, car elle est génératrice de temps perdu. Et perdre du temps, c'est quelque chose que l'on veut éviter à tout prix.",
    },
    {
        slug: "etre-developpeur-c-est-bien-plus-que-developper",
        title: "Être développeur, c'est bien plus que développer",
        date: "2024-03-14",
        displayDate: "14/03/2024",
        description:
            "Au-delà du code : la diversité réelle des tâches d'un développeur au quotidien. Pour les dirigeants qui collaborent avec des équipes techniques.",
        readTime: "~12",
        excerpt:
            "Vous côtoyez des développeurs dans le cadre de votre travail ? Alors, il y a de fortes chances que vous n'ayez aucune connaissance de ce qu'ils font au quotidien. Beaucoup pensent que développer est un métier facile. Après tout, il suffit d'écrire du code puis de le mettre en production en évitant les bugs.",
    },
    {
        slug: "reussir-ses-recrutements-en-impliquant-son-equipe",
        title: "Réussir ses recrutements en impliquant son équipe",
        date: "2024-02-15",
        displayDate: "15/02/2024",
        description:
            "Impliquer son équipe dans le recrutement : méthode concrète pour recruter de meilleurs profils techniques avec l'adhésion de l'équipe.",
        readTime: "~10",
        excerpt:
            "Au cours des dernières années, j'ai conduit des centaines d'entretiens de recrutement. Cela n'a jamais été un exercice que j'apprécie particulièrement. Pourtant, je suis persuadé que c'est la tâche la plus importante à traiter. Et ce, même si l'on pense ne pas en avoir le temps.",
    },
    {
        slug: "etre-le-leader-dont-l-equipe-a-besoin",
        title: "Être le leader dont l'équipe a besoin",
        date: "2024-02-14",
        displayDate: "14/02/2024",
        description:
            "Comment adopter la posture de leader dont votre équipe technique a besoin, selon le contexte et le stade de développement de l'entreprise.",
        readTime: "~6",
        excerpt:
            "Être à un poste de dirigeant implique directement de savoir décider. Mais indirectement, cela implique d'être un leader et de savoir faire preuve de leadership. Ces deux notions ont des définitions différentes pour chacun. Cependant, nous pouvons dire qu'un leader doit savoir montrer le chemin à suivre. Il doit savoir convaincre son équipe de l'y accompagner.",
    },
    {
        slug: "etre-cto-ou-l-art-de-representer-plusieurs-parties",
        title: "Être CTO ou l'art de représenter plusieurs parties",
        date: "2024-02-06",
        displayDate: "06/02/2024",
        description:
            "Le CTO comme intermédiaire stratégique : comment représenter simultanément l'équipe technique, les dirigeants et les partenaires externes.",
        readTime: "~6",
        excerpt:
            "En tant qu'intermédiaire, le CTO représente plusieurs interlocuteurs différents. D'abord, il représente l'équipe technique auprès des dirigeants. Ensuite, il représente les dirigeants auprès de l'équipe technique. Enfin, il représente l'entreprise auprès du monde extérieur.",
    },
    {
        slug: "savoir-communiquer-au-coeur-du-role-de-cto",
        title: "Savoir communiquer, au cœur du rôle de CTO",
        date: "2024-01-31",
        displayDate: "31/01/2024",
        description:
            "La communication, compétence clé du CTO : comment traduire les enjeux techniques pour les dirigeants et les enjeux business pour les développeurs.",
        readTime: "~5",
        excerpt:
            "Le CTO a une position particulière au sein de l'entreprise. Au yeux des dirigeants, il représente l'équipe technique. Au yeux de l'équipe technique, il représente les dirigeants.",
    },
    {
        slug: "se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau",
        title: "Se remettre en question : le syndrome de l'imposteur est un cadeau",
        date: "2024-01-25",
        displayDate: "25/01/2024",
        description:
            "Pourquoi le syndrome de l'imposteur est une force pour un CTO : comment la remise en question permanente devient un avantage compétitif durable.",
        readTime: "~4",
        excerpt:
            "La première des compétences qu'il me semble nécessaire de trouver chez un CTO est sa capacité à se remettre en question. De mon expérience, celle-ci s'accompagne parfois de ce que l'on nomme le syndrome de l'imposteur. Un doute maladif qui nie les accomplissements personnels.",
    },
    {
        slug: "qu-est-ce-q-un-bon-cto",
        title: "Qu'est-ce qu'un bon CTO ?",
        date: "2024-01-24",
        displayDate: "24/01/2024",
        description:
            "Qu'est-ce qu'un bon CTO ? Les compétences varient selon la taille d'équipe (5, 10, 20+ développeurs). Guide pratique pour recruter son CTO ou évoluer vers ce rôle.",
        readTime: "~4",
        excerpt:
            "Que vous soyez un dirigeant d'entreprise qui cherche à recruter son prochain CTO ou un développeur qui souhaite le devenir, la question des compétences à avoir pour assumer ce rôle avec succès se pose inévitablement.",
    },
    {
        slug: "dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte",
        title: "Dette technique : pourquoi vous ne devriez pas faire de refonte",
        date: "2023-12-20",
        displayDate: "20/12/2023",
        description:
            "Pourquoi les refontes techniques échouent-elles si souvent ? Analyse et alternatives pragmatiques pour gérer la dette technique sans refonte globale.",
        readTime: "~16",
        excerpt:
            "Dans ma récente exploration de la gestion de la dette technique, j'ai partagé une perspective proactive que j'ai baptisée l'effort supplémentaire. Cette approche vise à prévenir la dégradation de la base de code en maintenant une vigilance constante. Cependant, elle ne s'attaque pas aux problèmes existants, au code déjà en ruine.",
    },
    {
        slug: "l-anti-dette-technique-la-theorie-de-l-effort-supplementaire",
        title: "L'anti dette technique : la théorie de l'effort supplémentaire",
        date: "2023-12-12",
        displayDate: "12/12/2023",
        description:
            "L'anti dette technique : framework original en 5 catégories et la théorie de l'effort supplémentaire pour maintenir un code sain sans refonte globale.",
        readTime: "~14",
        excerpt:
            "Après une carrière de 15 ans dans le domaine du développement logiciel, d'abord en tant que développeur puis en tant que CTO, j'ai constamment entendu parler de \"dette technique\". C'est un terme si omniprésent qu'il semble avoir perdu une partie de sa signification initiale.",
    },
    {
        slug: "comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple",
        title: "Comment réduire la complexité produit pour maintenir un système simple ?",
        date: "2023-07-24",
        displayDate: "24/07/2023",
        description:
            "Comment lePERMISLIBRE réduit la complexité produit pour maintenir un système simple — retour d'expérience sur un projet mobilisant 30+ personnes sur un an.",
        readTime: "~16",
        excerpt:
            "Cet article cherche à expliquer comment lePERMISLIBRE veille à maintenir une simplicité (donc une maintenabilité) produit & technique à travers l'exemple de la création de sa nouvelle offre de conduite accélérée qui a mobilisé des dizaines de personnes, d'équipes différentes sur plus d'une année complète.",
    },
    {
        slug: "de-developpeur-backend-a-cto-un-retour-a-zero",
        title: "De développeur backend à CTO, un retour à zéro",
        date: "2021-02-24",
        displayDate: "24/02/2021",
        description:
            "Récit personnel de transition de développeur backend à CTO : légitimité, absence de feedbacks et sentiment d'improductivité dans un nouveau rôle.",
        readTime: "~7",
        excerpt:
            "Il y a un an, suite au départ de notre CTO, la proposition d'assumer ce rôle m'a été faite. Cela faisait déjà 3 ans que je travaillais pour lePERMISLIBRE en tant qu'ingénieur backend principal.",
    },
];

export function getArticle(slug: string): ArticleMeta {
    const article = articles.find((a) => a.slug === slug);
    if (!article) throw new Error(`Article not found: ${slug}`);
    return article;
}
