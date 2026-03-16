export interface ArticleMeta {
    slug: string;
    title: string;
    date: string;
    displayDate: string;
    description: string;
    readTime: string;
}

export const articles: ArticleMeta[] = [
    {
        slug: "pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience",
        title: "Pourquoi réduire la charge mentale des développeurs à travers la Developer Experience ?",
        date: "2024-04-03",
        displayDate: "03/04/2024",
        description:
            "Comment réduire la charge mentale des développeurs via la Developer Experience ? Stratégies concrètes pour limiter le context-switching dans les équipes tech.",
        readTime: "~8",
    },
    {
        slug: "etre-developpeur-c-est-bien-plus-que-developper",
        title: "Être développeur, c'est bien plus que développer",
        date: "2024-03-14",
        displayDate: "14/03/2024",
        description:
            "Au-delà du code : la diversité réelle des tâches d'un développeur au quotidien. Pour les dirigeants qui collaborent avec des équipes techniques.",
        readTime: "~12",
    },
    {
        slug: "reussir-ses-recrutements-en-impliquant-son-equipe",
        title: "Réussir ses recrutements en impliquant son équipe",
        date: "2024-02-15",
        displayDate: "15/02/2024",
        description:
            "Impliquer son équipe dans le recrutement : méthode concrète pour recruter de meilleurs profils techniques avec l'adhésion de l'équipe.",
        readTime: "~10",
    },
    {
        slug: "etre-le-leader-dont-l-equipe-a-besoin",
        title: "Être le leader dont l'équipe a besoin",
        date: "2024-02-14",
        displayDate: "14/02/2024",
        description:
            "Comment adopter la posture de leader dont votre équipe technique a besoin, selon le contexte et le stade de développement de l'entreprise.",
        readTime: "~6",
    },
    {
        slug: "etre-cto-ou-l-art-de-representer-plusieurs-parties",
        title: "Être CTO ou l'art de représenter plusieurs parties",
        date: "2024-02-06",
        displayDate: "06/02/2024",
        description:
            "Le CTO comme intermédiaire stratégique : comment représenter simultanément l'équipe technique, les dirigeants et les partenaires externes.",
        readTime: "~6",
    },
    {
        slug: "savoir-communiquer-au-coeur-du-role-de-cto",
        title: "Savoir communiquer, au cœur du rôle de CTO",
        date: "2024-01-31",
        displayDate: "31/01/2024",
        description:
            "La communication, compétence clé du CTO : comment traduire les enjeux techniques pour les dirigeants et les enjeux business pour les développeurs.",
        readTime: "~5",
    },
    {
        slug: "se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau",
        title: "Se remettre en question : le syndrome de l'imposteur est un cadeau",
        date: "2024-01-25",
        displayDate: "25/01/2024",
        description:
            "Pourquoi le syndrome de l'imposteur est une force pour un CTO : comment la remise en question permanente devient un avantage compétitif durable.",
        readTime: "~4",
    },
    {
        slug: "qu-est-ce-q-un-bon-cto",
        title: "Qu'est-ce qu'un bon CTO ?",
        date: "2024-01-24",
        displayDate: "24/01/2024",
        description:
            "Qu'est-ce qu'un bon CTO ? Les compétences varient selon la taille d'équipe (5, 10, 20+ développeurs). Guide pratique pour recruter son CTO ou évoluer vers ce rôle.",
        readTime: "~4",
    },
    {
        slug: "dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte",
        title: "Dette technique : pourquoi vous ne devriez pas faire de refonte",
        date: "2023-12-20",
        displayDate: "20/12/2023",
        description:
            "Pourquoi les refontes techniques échouent-elles si souvent ? Analyse et alternatives pragmatiques pour gérer la dette technique sans refonte globale.",
        readTime: "~16",
    },
    {
        slug: "l-anti-dette-technique-la-theorie-de-l-effort-supplementaire",
        title: "L'anti dette technique : la théorie de l'effort supplémentaire",
        date: "2023-12-12",
        displayDate: "12/12/2023",
        description:
            "L'anti dette technique : framework original en 5 catégories et la théorie de l'effort supplémentaire pour maintenir un code sain sans refonte globale.",
        readTime: "~14",
    },
    {
        slug: "comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple",
        title: "Comment réduire la complexité produit pour maintenir un système simple ?",
        date: "2023-07-24",
        displayDate: "24/07/2023",
        description:
            "Comment lePERMISLIBRE réduit la complexité produit pour maintenir un système simple — retour d'expérience sur un projet mobilisant 30+ personnes sur un an.",
        readTime: "~16",
    },
    {
        slug: "de-developpeur-backend-a-cto-un-retour-a-zero",
        title: "De développeur backend à CTO, un retour à zéro",
        date: "2021-02-24",
        displayDate: "24/02/2021",
        description:
            "Récit personnel de transition de développeur backend à CTO : légitimité, absence de feedbacks et sentiment d'improductivité dans un nouveau rôle.",
        readTime: "~7",
    },
];

export function getArticle(slug: string): ArticleMeta {
    const article = articles.find((a) => a.slug === slug);
    if (!article) throw new Error(`Article not found: ${slug}`);
    return article;
}
