"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { content, content_mobile } from "@/components/containers/temoignagePage/CardContent";

export function LandingTemoignage() {
    return (
        <section className="">
            <div className="flex flex-col md:gap-6 gap-2 pb-4">
                <h2 className="font-bold font-brico-gro uppercase tracking-wide md:text-3xl text-xl max-w-[47rem] md:justify-center">
                    Témoignages clients
                </h2>
                <p className="text-brand-fine-blue flex max-w-4xl w-full md:text-base text-sm">
                    Découvrez ce que mes précédents collaborateurs disent de mon apport en tant que CTO. Ces témoignages
                    reflètent mon engagement à transformer des défis techniques en succès tangibles pour votre
                    entreprise.
                </p>
            </div>
            <div className="w-full py-4 hidden md:flex">
                <StickyScroll content={content} />
            </div>
            <div className="flex flex-col pt-8 gap-8 md:hidden w-full">
                {content_mobile.map((item) => (
                    <div key={item.id} className="flex flex-col rounded-2xl bg-brand-surface h-full w-full">
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
}
