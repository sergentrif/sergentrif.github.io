import Link from "next/link";
import { InfoBoxArticle } from "./InfoBoxArticle";
import { ArticleByline } from "./ArticleByline";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";

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
        <section className="flex flex-col pt-12 pb-16">
            <JsonLd schema={schema} />

            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">{title}</h1>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                <div className="flex flex-col gap-6">
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
                    <InfoBoxArticle className="self-start md:text-base text-sm">
                        <time dateTime={date}>{displayDate}</time>, {readTime} minutes de lecture
                    </InfoBoxArticle>
                    <ArticleByline />
                </div>
                {children}
            </div>
        </section>
    );
}
