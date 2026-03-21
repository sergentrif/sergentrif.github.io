import { BottomContactBox } from "@/components/containers/BottomContactBox";
import { buildArticleMetadata, buildArticleSchema } from "@/libs/articleSchema";
import { articles, getArticle } from "@/libs/articles";
import { getArticleContent } from "@/libs/articleContent";
import { ArticleLayout } from "@/components/containers/articlesPage/ArticleLayout";
import { MarkdownArticle } from "@/components/containers/articlesPage/MarkdownArticle";

export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { title, date, description } = getArticle(slug);
    return buildArticleMetadata(slug, title, date, description);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { title, date, description, displayDate, readTime } = getArticle(slug);
    const articleSchema = buildArticleSchema(slug, title, date, description);
    const content = getArticleContent(slug);

    return (
        <ArticleLayout schema={articleSchema} title={title} date={date} displayDate={displayDate} readTime={readTime}>
            <MarkdownArticle content={content} />
            <BottomContactBox />
        </ArticleLayout>
    );
}
