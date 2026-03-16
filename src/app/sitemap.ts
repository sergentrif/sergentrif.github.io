import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://adrien.blandin.me";

const articles: { slug: string; date: string }[] = [
    {
        slug: "pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience",
        date: "2024-04-03",
    },
    { slug: "etre-developpeur-c-est-bien-plus-que-developper", date: "2024-03-14" },
    { slug: "reussir-ses-recrutements-en-impliquant-son-equipe", date: "2024-02-15" },
    { slug: "etre-le-leader-dont-l-equipe-a-besoin", date: "2024-02-14" },
    { slug: "etre-cto-ou-l-art-de-representer-plusieurs-parties", date: "2024-02-06" },
    { slug: "savoir-communiquer-au-coeur-du-role-de-cto", date: "2024-01-31" },
    { slug: "se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau", date: "2024-01-25" },
    { slug: "qu-est-ce-q-un-bon-cto", date: "2024-01-24" },
    { slug: "dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte", date: "2023-12-20" },
    { slug: "l-anti-dette-technique-la-theorie-de-l-effort-supplementaire", date: "2023-12-12" },
    { slug: "comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple", date: "2023-07-24" },
    { slug: "de-developpeur-backend-a-cto-un-retour-a-zero", date: "2021-02-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE, lastModified: new Date("2024-04-03"), changeFrequency: "monthly", priority: 1 },
        { url: `${BASE}/prestations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/parcours`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
        { url: `${BASE}/temoignages`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
        { url: `${BASE}/articles`, lastModified: new Date("2024-04-03"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/podcasts`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    ];

    const articlePages: MetadataRoute.Sitemap = articles.map(({ slug, date }) => ({
        url: `${BASE}/articles/${slug}`,
        lastModified: new Date(date),
        changeFrequency: "yearly",
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
