import { readFileSync } from "fs";
import path from "path";

export function getArticleContent(slug: string): string {
    return readFileSync(path.join(process.cwd(), "src/content/articles", `${slug}.md`), "utf-8");
}
