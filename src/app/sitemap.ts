import { MetadataRoute } from "next";
import { articles } from "@/libs/articles";
import { site } from "@/libs/constants";

export const dynamic = "force-static";

const BASE = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE, lastModified: new Date("2024-04-03"), changeFrequency: "monthly", priority: 1 },
        { url: `${BASE}/prestations`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/parcours`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.8 },
        { url: `${BASE}/temoignages`, lastModified: new Date("2026-03-17"), changeFrequency: "yearly", priority: 0.8 },
        { url: `${BASE}/articles`, lastModified: new Date("2024-04-03"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/podcasts`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.6 },
        {
            url: `${BASE}/politique-de-confidentialite`,
            lastModified: new Date("2026-03-17"),
            changeFrequency: "yearly",
            priority: 0.1,
        },
    ];

    const articlePages: MetadataRoute.Sitemap = articles.map(({ slug, date }) => ({
        url: `${BASE}/articles/${slug}`,
        lastModified: new Date(date),
        changeFrequency: "yearly",
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
