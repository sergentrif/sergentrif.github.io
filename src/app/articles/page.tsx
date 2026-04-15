import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { site } from "@/libs/constants";
import { articles } from "@/libs/articles";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";

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
        <section className="flex flex-col pt-12 pb-16">
            <JsonLd schema={articlesSchema} />
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Articles</h1>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>
            <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                {articles.map((article, index) => (
                    <Fragment key={article.slug}>
                        <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-tight uppercase">
                            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                        </h2>
                        <p className="text-brand-fine-blue max-w-5xl md:px-4 px-0 text-base">{article.excerpt}</p>
                        <InfoBoxArticle className="self-end text-sm md:text-base">{article.displayDate}</InfoBoxArticle>
                        {index < articles.length - 1 && <div className="border-linear-gradient w-full" />}
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
