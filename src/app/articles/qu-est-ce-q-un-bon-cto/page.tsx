"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";

export default function ArticleSeventhPage() {
    return (
        <section className="flex flex-col justify-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <div>
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>
                /
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>
                /Qu’est ce qu’un bon CTO ?
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                Qu’est ce qu’un bon CTO ?
            </h2>
            <InfoBoxArticle className="self-start -mt-8">24/01/2024, ~4 minutes de lecture</InfoBoxArticle>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue"></div>
            <BottomContactBox />
        </section>
    );
}
