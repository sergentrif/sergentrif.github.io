import { BottomContactBox } from "@/components/containers/BottomContactBox";
import { buildArticleMetadata, buildArticleSchema } from "@/libs/articleSchema";
import { getArticle } from "@/libs/articles";
import { getArticleContent } from "@/libs/articleContent";
import { ArticleLayout } from "@/components/containers/articlesPage/ArticleLayout";
import { MarkdownArticle } from "@/components/containers/articlesPage/MarkdownArticle";

const { slug, title, date, description, displayDate, readTime } = getArticle(
    "pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience",
);

export const metadata = buildArticleMetadata(slug, title, date, description);

const articleSchema = buildArticleSchema(slug, title, date, description);

const content = getArticleContent(slug);

export default function ArticlesPageFirstArticle() {
    return (
        <ArticleLayout schema={articleSchema} title={title} date={date} displayDate={displayDate} readTime={readTime}>
            <MarkdownArticle content={content} />
            <BottomContactBox />
        </ArticleLayout>
    );
}
