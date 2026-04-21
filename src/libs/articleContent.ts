import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

export function getArticleContent(slug: string): string {
    const dir = path.join(process.cwd(), "src/content/articles");
    const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
    const filename = files.find((f) => f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "") === slug);
    if (!filename) throw new Error(`Article file not found for slug: ${slug}`);
    const raw = readFileSync(path.join(dir, filename), "utf-8");
    return matter(raw).content;
}
