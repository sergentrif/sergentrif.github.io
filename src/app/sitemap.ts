import { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { articles } from "@/libs/articles";
import { site } from "@/libs/constants";

export const dynamic = "force-static";

const BASE = site.url;

// Priorités et fréquences par route (surcharge des défauts)
const PAGE_CONFIG: Record<string, Partial<MetadataRoute.Sitemap[number]>> = {
    "/": { priority: 1, changeFrequency: "monthly" },
    "/audit": { priority: 0.9, changeFrequency: "monthly" },
    "/diagnostic": { priority: 0.9, changeFrequency: "monthly" },
    "/prestations": { priority: 0.9, changeFrequency: "monthly" },
    "/parcours": { priority: 0.8, changeFrequency: "yearly" },
    "/temoignages": { priority: 0.8, changeFrequency: "yearly" },
    "/articles": { priority: 0.8, changeFrequency: "monthly" },
    "/diagnostic-pro-bono": { priority: 0.7, changeFrequency: "yearly" },
    "/podcasts": { priority: 0.6, changeFrequency: "yearly" },
    "/mentions-legales": { priority: 0.1, changeFrequency: "yearly" },
    "/politique-de-confidentialite": { priority: 0.1, changeFrequency: "yearly" },
};

function discoverStaticRoutes(): string[] {
    const appDir = join(process.cwd(), "src/app");

    function scan(dir: string, base: string): string[] {
        const routes: string[] = [];

        for (const entry of readdirSync(dir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                // Ignorer les segments dynamiques et les groupes de routes
                if (entry.name.startsWith("[") || entry.name.startsWith("(")) continue;
                routes.push(...scan(join(dir, entry.name), `${base}/${entry.name}`));
            } else if (entry.name === "page.tsx") {
                routes.push(base || "/");
            }
        }

        return routes;
    }

    return scan(appDir, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = discoverStaticRoutes().map((route) => {
        const config = PAGE_CONFIG[route] ?? {};
        return {
            url: route === "/" ? BASE : `${BASE}${route}`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.5,
            ...config,
        };
    });

    const articlePages: MetadataRoute.Sitemap = articles.map(({ slug, date }) => ({
        url: `${BASE}/articles/${slug}`,
        lastModified: new Date(date),
        changeFrequency: "yearly",
        priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
}
