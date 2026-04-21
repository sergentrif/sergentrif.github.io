import { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { articles } from "@/libs/articles";
import { site } from "@/libs/constants";

export const dynamic = "force-static";

const BASE = site.url;

const NOINDEX_ROUTES = new Set(["/mentions-legales", "/politique-de-confidentialite"]);

const PAGE_LAST_MODIFIED: Record<string, string> = {
    "/": "2026-04-16",
    "/audit": "2026-04-17",
    "/diagnostic": "2026-04-17",
    "/prestations": "2026-04-17",
    "/parcours": "2026-04-17",
    "/temoignages": "2026-03-17",
    "/articles": "2026-04-16",
    "/diagnostic-pro-bono": "2026-04-17",
    "/podcasts": "2026-03-17",
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
    const staticPages: MetadataRoute.Sitemap = discoverStaticRoutes()
        .filter((route) => !NOINDEX_ROUTES.has(route))
        .map((route) => ({
            url: route === "/" ? BASE : `${BASE}${route}`,
            lastModified: new Date(PAGE_LAST_MODIFIED[route] ?? "2026-04-01"),
        }));

    const articlePages: MetadataRoute.Sitemap = articles.map(({ slug, date }) => ({
        url: `${BASE}/articles/${slug}`,
        lastModified: new Date(date),
    }));

    return [...staticPages, ...articlePages];
}
