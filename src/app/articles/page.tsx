import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { site } from "@/libs/constants";
import { articles } from "@/libs/articles";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import { JsonLd } from "@/components/ui/JsonLd";

const articlesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                { "@type": "ListItem", position: 2, name: "Articles", item: `${site.url}/articles` },
            ],
        },
        {
            "@type": "Blog",
            "@id": `${site.url}/articles`,
            name: "Articles sur le rôle de CTO",
            description:
                "Retours d'expérience et réflexions sur le management tech, la dette technique, le recrutement et le leadership — par Adrien Blandin, CTO freelance.",
            url: `${site.url}/articles`,
            author: { "@id": site.personId },
            inLanguage: "fr-FR",
            blogPost: articles.map(({ slug, title, date }) => ({
                "@type": "BlogPosting",
                headline: title,
                url: `${site.url}/articles/${slug}`,
                datePublished: date,
            })),
        },
    ],
};

export const metadata: Metadata = {
    title: "Articles sur le rôle de CTO | Adrien Blandin",
    description:
        "Retours d'expérience et réflexions sur le management tech, la dette technique, le recrutement et le leadership — par Adrien Blandin, CTO freelance.",
    alternates: { canonical: "/articles" },
    openGraph: {
        title: "Articles sur le rôle de CTO | Adrien Blandin",
        description:
            "Retours d'expérience et réflexions sur le management tech, la dette technique, le recrutement et le leadership par un CTO freelance.",
        url: `${site.url}/articles`,
    },
};

export default function LandingArticlesPage() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <JsonLd schema={articlesSchema} />
            <TopArticleSection />
            {articles.map((article, index) => (
                <Fragment key={article.slug}>
                    <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-tight uppercase">
                        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="text-brand-fine-blue max-w-5xl md:px-4 px-0 text-base">{article.excerpt}</p>
                    <InfoBoxArticle className="self-end text-sm md:text-base">{article.displayDate}</InfoBoxArticle>
                    {index < articles.length - 1 && <div className="border-linear-gradient w-full mb-6" />}
                </Fragment>
            ))}
        </section>
    );
}
