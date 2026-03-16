import Link from "next/link";
import { TopArticleSection } from "./TopArticleSection";
import { InfoBoxArticle } from "./InfoBoxArticle";
import { ArticleByline } from "./ArticleByline";
import { JsonLd } from "@/components/ui/JsonLd";

interface ArticleLayoutProps {
    schema: object;
    title: string;
    /** ISO date — e.g. "2024-01-24" */
    date: string;
    /** Localised display date — e.g. "24/01/2024" */
    displayDate: string;
    /** e.g. "~4" */
    readTime: string;
    children: React.ReactNode;
}

export function ArticleLayout({ schema, title, date, displayDate, readTime, children }: ArticleLayoutProps) {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 md:px-36 sm:px-12 px-4 w-full max-w-6xl">
            <JsonLd schema={schema} />
            <TopArticleSection />
            <div className="text-sm md:text-base">
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>{" "}
                /{" "}
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>{" "}
                / {title}
            </div>
            <h1 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase pb-5 md:pb-0">
                {title}
            </h1>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                <time dateTime={date}>{displayDate}</time>, {readTime} minutes de lecture
            </InfoBoxArticle>
            <ArticleByline />
            {children}
        </section>
    );
}
