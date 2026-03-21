import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

export function getArticleContent(slug: string): string {
    const raw = readFileSync(path.join(process.cwd(), "src/content/articles", `${slug}.md`), "utf-8");
    return matter(raw).content;
}
