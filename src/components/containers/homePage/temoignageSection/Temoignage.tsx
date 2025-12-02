import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { content, content_mobile } from "./CardsContent";

export const TemoignageSection = () => {
    return (
        <section className="flex flex-col items-center py-6 gap-2 pb-24 px-4 md:px-16 lg:px-32">
            <h2 className="max-w-7xl font-brico-gro lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-wide uppercase">
                transformer des défis techniques en succès tangibles pour votre entreprise
            </h2>
            <div className="lg:text-lg text-sm font-normal flex self-start pb-8">
                <Link className="flex gap-1 items-center" href="/temoignages">
                    Voir tous les témoignages
                    <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                </Link>
            </div>
            <div className="w-full py-4 hidden md:flex">
                <StickyScroll content={content} />
            </div>
            <div className="flex flex-col gap-24 md:hidden w-full">
                {content_mobile.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col rounded-2xl bg-brand-surface sticky top-25 h-full w-full"
                    >
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-row">{item.logo}</div>
                            <div className="border-linear-gradient" />
                            <div className="flex flex-col gap-4 text-brand-fine-blue">
                                {item.description.map((paragraph, index) => (
                                    <p key={index} className="text-base leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col">{item.author}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
