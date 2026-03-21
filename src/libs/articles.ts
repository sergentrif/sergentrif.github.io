import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleMeta {
    slug: string;
    title: string;
    date: string;
    displayDate: string;
    description: string;
    readTime: string;
    excerpt: string;
}

function loadArticles(): ArticleMeta[] {
    const dir = path.join(process.cwd(), "src/content/articles");
    const files = readdirSync(dir).filter((f) => f.endsWith(".md"));

    const metas: ArticleMeta[] = files.map((file) => {
        const slug = file.replace(/\.md$/, "").replace(/[^a-z0-9-]/gi, "");
        const raw = readFileSync(path.join(dir, file), "utf-8");
        const { data } = matter(raw);
        return {
            slug,
            title: data.title,
            date: data.date,
            displayDate: data.displayDate,
            description: data.description,
            readTime: data.readTime,
            excerpt: data.excerpt,
        };
    });

    return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const articles: ArticleMeta[] = loadArticles();

export function getArticle(slug: string): ArticleMeta {
    const article = articles.find((a) => a.slug === slug);
    if (!article) throw new Error(`Article not found: ${slug}`);
    return article;
}
