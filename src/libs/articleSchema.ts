import type { Metadata } from "next";
import { site } from "@/libs/constants";

export function buildArticleMetadata(slug: string, title: string, date: string, description: string): Metadata {
    return {
        title: `${title} | ${site.name}`,
        description,
        alternates: { canonical: `/articles/${slug}` },
        openGraph: {
            type: "article",
            title,
            description,
            url: `${site.url}/articles/${slug}`,
            publishedTime: date,
            authors: [site.name],
        },
    };
}

export function buildArticleSchema(
    slug: string,
    title: string,
    date: string,
    description: string,
    lastModified?: string,
) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                headline: title,
                url: `${site.url}/articles/${slug}`,
                datePublished: date,
                dateModified: lastModified ?? date,
                inLanguage: "fr-FR",
                description,
                image: `${site.url}/images/adrien-blandin.webp`,
                author: { "@type": "Person", "@id": site.personId, name: site.name },
                publisher: {
                    "@type": "Person",
                    "@id": site.personId,
                    name: site.name,
                    image: `${site.url}/images/adrien-blandin.webp`,
                },
                mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/articles/${slug}` },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                    { "@type": "ListItem", position: 2, name: "Articles", item: `${site.url}/articles` },
                    { "@type": "ListItem", position: 3, name: title, item: `${site.url}/articles/${slug}` },
                ],
            },
        ],
    };
}
