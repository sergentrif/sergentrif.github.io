import type { Metadata } from "next";
import { site, links } from "@/libs/constants";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { FaqSection, faqsToSchema } from "@/components/containers/homePage/faqSection/FAQ";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";

const proBonoFaqs = [
    {
        question: "C'est vraiment gratuit ?",
        answer: "Oui. 45 minutes en visio, sans contrepartie. Pas d'engagement, pas de suite obligatoire. C'est le principe du pro bono.",
    },
    {
        question: "Pourquoi vous faites ça ?",
        answer: "Ce n'est pas nouveau. Je le fais depuis des années en marge de mes interventions à l'emlyon, à l'INRIA, au H7, au Wagon. Beaucoup de CEOs m'ont aussi mis en relation avec des amis qui avaient besoin d'un regard tech. Je formalise simplement ce qui existe déjà.",
    },
    {
        question: "Qu'est-ce qui se passe pendant les 45 minutes ?",
        answer: "Vous décrivez votre situation. Je pose des questions. Je vous dis ce que j'observe : si vous avez un vrai problème tech, si c'est autre chose, ou si vous n'avez pas de problème du tout. Franc, sans filtre, sans argumentaire.",
    },
    {
        question: "Y a-t-il une suite obligatoire ?",
        answer: "Non. Si un audit a du sens, je vous le dirai. Si ce n'est pas le cas, je vous le dirai aussi. La décision vous appartient entièrement.",
    },
    {
        question: "Il y a des places disponibles quand ?",
        answer: "Deux créneaux par semaine, une session par CEO. Les disponibilités sont visibles à l'inscription.",
    },
];

export const metadata: Metadata = {
    title: "Diagnostic tech pro bono — 45 min de conseil gratuit pour CEOs | Adrien Blandin",
    description:
        "45 minutes en visio pour les CEOs qui ont un vrai problème tech mais pas encore le budget pour un audit. Deux créneaux par semaine, une session par CEO. Inscription libre. Ex-CTO lePERMISLIBRE.",
    alternates: { canonical: "/diagnostic-pro-bono" },
    openGraph: {
        type: "website",
        title: "Diagnostic tech pro bono — 45 min de conseil gratuit pour CEOs",
        description:
            "Deux créneaux par semaine, une session par CEO, 45 minutes en visio. Vous m'indiquez votre problème, on en parle franchement. Inscription libre.",
        url: `${site.url}/diagnostic-pro-bono`,
    },
};

const proBonoSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Diagnostic pro bono",
                    item: `${site.url}/diagnostic-pro-bono`,
                },
            ],
        },
        {
            "@type": "Service",
            name: "Diagnostic tech pro bono",
            description:
                "45 minutes de conseil gratuit en visio pour CEOs de startups tech. Deux créneaux par semaine, une session par CEO, inscription libre.",
            provider: { "@id": site.personId },
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
            },
            url: `${site.url}/diagnostic-pro-bono`,
        },
        faqsToSchema(proBonoFaqs),
    ],
};

export default function DiagnosticProBonoPage() {
    return (
        <>
            <section className="flex flex-col pt-12 pb-16">
                <JsonLd schema={proBonoSchema} />

                <div className="flex w-full h-full gap-2 items-center justify-center md:justify-start relative md:right-19 md:-left-12 overflow-x-hidden">
                    <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                    <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Diagnostic pro bono</h1>
                    <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                </div>

                <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                    {/* Intro */}
                    <div className="flex flex-col gap-6">
                        <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                            Gratuit - 45 minutes - 2 créneaux par semaine
                        </p>
                        <p className="font-brico-gro font-extrabold lg:text-[2rem] md:text-2xl text-xl leading-tight uppercase tracking-wide text-brand-midnight">
                            Votre tech coince. Pas encore le budget pour un audit.
                        </p>
                        <div className="flex flex-col gap-3 text-brand-fine-blue md:text-lg text-base leading-relaxed">
                            <p>
                                Un audit, ça tourne généralement autour de quelques milliers d&apos;euros. Ce n&apos;est
                                pas anodin. Avant d&apos;y aller, il faut savoir si vous avez vraiment un problème tech
                                - ou si c&apos;est autre chose.
                            </p>
                            <p>
                                Ce n&apos;est pas une nouvelle idée. À chaque fois que j&apos;interviens à
                                l&apos;emlyon, à l&apos;INRIA, au H7, au Wagon - je repars avec quelques échanges
                                improvisés avec des fondateurs qui ont des questions tech. Beaucoup de CEOs m&apos;ont
                                aussi mis en relation avec des amis qui avaient besoin d&apos;un regard externe. Je
                                formalise simplement ce qui existe déjà.
                            </p>
                            <p>
                                Deux créneaux par semaine, une session par CEO, 45 minutes en visio. Vous
                                m&apos;indiquez votre situation à l&apos;inscription, et on en parle sans filtre. Pas de
                                rapport, pas d&apos;engagement, pas d&apos;argumentaire de vente.
                            </p>
                            <p>
                                Je vous dis ce que j&apos;observe. Si vous avez un vrai problème, vous repartez avec un
                                point de vue clair dessus. Si vous n&apos;en avez pas, je vous le dis aussi.
                            </p>
                        </div>
                        <CtaButton
                            href={`${links.zcal_pro_bono}?utm_source=site&utm_medium=pro-bono&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                            tracking={{ event: "appointment_booking", medium: "pro-bono" }}
                        >
                            Choisir un créneau
                        </CtaButton>
                    </div>

                    {/* À qui ça s'adresse */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            À qui ça s&apos;adresse
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <p>
                                Vous êtes CEO d&apos;une startup de 10 à 80 personnes. Vous avez une équipe technique,
                                un doute tech qui revient, et vous ne savez pas si ça justifie d&apos;investir.
                            </p>
                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-giants/40">
                                <p>
                                    <span className="font-semibold text-brand-midnight">
                                        Le budget n&apos;est pas là aujourd&apos;hui.
                                    </span>{" "}
                                    Pas parce que vous ne voyez pas l&apos;intérêt d&apos;un regard externe - mais parce
                                    que ce n&apos;est pas le bon moment.
                                </p>
                                <p>
                                    <span className="font-semibold text-brand-midnight">
                                        Vous n&apos;êtes pas encore convaincu d&apos;avoir un problème.
                                    </span>{" "}
                                    Ou vous avez un doute diffus, pas encore formulé. 45 minutes suffisent souvent à
                                    savoir si c&apos;est réel.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Comment ça se passe */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Comment ça se passe
                        </h2>
                        <div className="flex flex-col gap-6 text-brand-fine-blue leading-relaxed">
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    1.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">À l&apos;inscription,</span>{" "}
                                    vous décrivez votre situation en quelques lignes. Le problème que vous percevez, ce
                                    qui vous préoccupe, le contexte de votre équipe.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    2.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">Pendant 45 minutes,</span> on
                                    creuse ensemble. Je pose des questions, vous répondez. Je vous dis ce que
                                    j&apos;entends et ce que ça m&apos;évoque.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    3.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">À la fin,</span> vous avez un
                                    point de vue externe, honnête, sur ce que vous vivez. Si un audit a du sens, je vous
                                    le dirai. Si ce n&apos;est pas le cas, je vous le dirai aussi.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ce que ce n'est pas */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Ce que ce n&apos;est pas
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <p>
                                Ce n&apos;est pas un audit. Pas d&apos;analyse de code, pas de livrables, pas
                                d&apos;état des lieux documenté.
                            </p>
                            <p>
                                Ce n&apos;est pas un argumentaire de vente déguisé. Je ne cherche pas à vous convaincre
                                de quoi que ce soit. J&apos;ai mis en place ce programme parce que j&apos;ai été CEO moi
                                aussi, et que j&apos;aurais aimé avoir accès à ce type d&apos;échange avant
                                d&apos;investir.
                            </p>
                            <p>
                                J&apos;ai passé 7 ans CTO chez lePERMISLIBRE, de 3 développeurs à 30, jusqu&apos;à
                                l&apos;introduction en bourse. J&apos;ai aussi fondé deux startups. Les questions que
                                vous vous posez, je les ai posées des deux côtés de la table.
                            </p>
                        </div>
                        <CtaButton
                            href={`${links.zcal_pro_bono}?utm_source=site&utm_medium=pro-bono-bottom&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                            tracking={{ event: "appointment_booking", medium: "pro-bono-bottom" }}
                        >
                            Choisir un créneau
                        </CtaButton>
                    </div>
                </div>
            </section>
            <FaqSection faqs={proBonoFaqs} />
        </>
    );
}
