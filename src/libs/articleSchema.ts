const BASE = "https://adrien.blandin.me";

export function buildArticleSchema(slug: string, title: string, date: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: title,
                url: `${BASE}/articles/${slug}`,
                datePublished: date,
                dateModified: date,
                inLanguage: "fr-FR",
                description,
                author: { "@type": "Person", "@id": `${BASE}/#person`, name: "Adrien Blandin" },
                publisher: { "@type": "Person", "@id": `${BASE}/#person` },
                mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/articles/${slug}` },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
                    { "@type": "ListItem", position: 2, name: "Articles", item: `${BASE}/articles` },
                    { "@type": "ListItem", position: 3, name: title, item: `${BASE}/articles/${slug}` },
                ],
            },
        ],
    };
}
