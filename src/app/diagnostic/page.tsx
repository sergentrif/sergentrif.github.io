import type { Metadata } from "next";
import { site, links } from "@/libs/constants";
import { JsonLd } from "@/components/ui/JsonLd";
import { Simulator } from "@/components/containers/simulatorPage/Simulator";
import { CtaButton } from "@/components/ui/CtaButton";
import { ShareButton } from "@/components/ui/ShareButton";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";

export const metadata: Metadata = {
    title: "Diagnostic tech CEO : votre équipe technique est-elle un frein ? | Adrien Blandin",
    description:
        "10 questions sans jargon technique pour savoir si votre tech avance bien — ou si elle freine votre croissance. Résultat immédiat, gratuit, par un ex-CTO lePERMISLIBRE.",
    alternates: { canonical: "/diagnostic" },
    openGraph: {
        type: "website",
        title: "Diagnostic tech CEO : votre équipe technique est-elle un frein ?",
        description:
            "10 questions sans jargon technique pour savoir si votre tech avance bien — ou si elle freine votre croissance. Résultat immédiat, gratuit.",
        url: `${site.url}/diagnostic`,
        images: [
            {
                url: `${site.url}/images/diagnostic-og.png`,
                width: 1200,
                height: 630,
                alt: "Diagnostic éclair — Votre tech est-elle un frein à votre croissance ?",
            },
        ],
    },
};

const diagnosticSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                { "@type": "ListItem", position: 2, name: "Diagnostic éclair", item: `${site.url}/diagnostic` },
            ],
        },
        {
            "@type": "WebPage",
            name: "Diagnostic tech CEO : votre équipe technique est-elle un frein ?",
            description:
                "10 questions non techniques pour évaluer la santé de votre équipe tech. Résultat immédiat avec recommandation adaptée à votre situation.",
            url: `${site.url}/diagnostic`,
            author: { "@id": site.personId },
            speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", ".seo-intro"],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "À qui s'adresse ce diagnostic tech ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aux CEO et fondateurs de startups de 10 à 80 personnes qui ont une équipe technique et un doute sur son efficacité. Avec ou sans CTO en place.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Que signifie la zone rouge dans le diagnostic ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Un score de 0 à 9 sur 20 indique que votre tech freine probablement votre croissance. Pas parce que vos développeurs sont mauvais, mais parce que l'organisation, les process ou le management manquent de structure. Un audit permet de passer du flou à un plan d'action.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Ce diagnostic remplace-t-il un audit technique ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Non. Il vous dit si vous en avez besoin, et à quel niveau d'urgence. L'audit couvre ensuite l'organisation, l'architecture, la vélocité, le management et l'adéquation produit-business.",
                    },
                },
            ],
        },
    ],
};

export default function DiagnosticPage() {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <JsonLd schema={diagnosticSchema} />

            <div className="flex w-full h-full gap-2 items-center justify-center md:justify-start relative md:right-19 md:-left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Diagnostic éclair</h1>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                {/* Intro + quiz */}
                <div className="flex flex-col gap-6 w-full seo-intro">
                    <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                        Gratuit - 3 minutes - En ligne
                    </p>
                    <p className="font-brico-gro font-extrabold lg:text-[2rem] md:text-2xl text-xl leading-tight uppercase tracking-wide text-brand-midnight">
                        Votre tech est-elle un frein à votre croissance ?
                    </p>
                    <div className="flex flex-col gap-3 text-brand-fine-blue md:text-lg text-base leading-relaxed">
                        <p>
                            La plupart des CEOs que je rencontre savent que quelque chose cloche dans leur tech. Ils ne
                            savent juste pas quoi.
                        </p>
                        <p>
                            Ce diagnostic pose les 10 questions que j&apos;utilise en début de chaque audit. Sans
                            jargon. Résultat immédiat.
                        </p>
                    </div>
                    <ShareButton
                        path="/diagnostic"
                        title="Diagnostic éclair — 3 minutes"
                        text="Votre tech est-elle un frein à votre croissance ? 10 questions pour le savoir."
                    />
                </div>

                <Simulator />

                {/* À qui s'adresse ce diagnostic */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        À qui s&apos;adresse ce diagnostic ?
                    </h2>
                    <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                        <p>
                            Vous êtes CEO ou fondateur d&apos;une startup de 10 à 80 personnes. Vous avez une équipe
                            technique. Et vous avez ce doute qui revient : votre tech avance-t-elle vraiment ?
                        </p>
                        <p>
                            Vos développeurs bossent, les réunions ont lieu, les fonctionnalités sortent. Mais vous ne
                            savez pas si c&apos;est rapide, si c&apos;est solide, si ça tient à l&apos;échelle.
                        </p>
                        <p>Ce diagnostic a été conçu pour deux profils précis.</p>
                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-giants/40">
                            <p>
                                <span className="font-semibold text-brand-midnight">
                                    Vous n&apos;avez pas de CTO identifié.
                                </span>{" "}
                                Vous prenez des décisions techniques dans un domaine qui n&apos;est pas le vôtre, et
                                vous le savez. Ce diagnostic vous dit si vous avez raison de vous inquiéter.
                            </p>
                            <p>
                                <span className="font-semibold text-brand-midnight">
                                    Vous avez un CTO, mais un doute s&apos;est installé.
                                </span>{" "}
                                Pas sur sa compétence - sur ce que vous n&apos;arrivez pas à lire. Ce diagnostic vous
                                donne un point de départ pour en parler sans mettre tout le monde sur la défensive.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ce que chaque zone signifie */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        Ce que chaque zone signifie
                    </h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 items-start p-4 rounded-xl bg-brand-green/10 border border-brand-green">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-green shrink-0 mt-1.5" />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-brand-midnight text-sm">Zone verte - 16 à 20 points</p>
                                <p className="text-brand-fine-blue text-sm leading-relaxed">
                                    Votre organisation technique est structurée. Les bases sont là. Si vous avez un
                                    doute ponctuel, un échange de 30 minutes suffit souvent à le lever.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 rounded-xl bg-brand-lime/20 border border-brand-lime">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shrink-0 mt-1.5" />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-brand-midnight text-sm">Zone jaune - 10 à 15 points</p>
                                <p className="text-brand-fine-blue text-sm leading-relaxed">
                                    Des signaux existent. Ils ne sont pas encore critiques, mais ils deviennent des
                                    problèmes business si rien ne change. Un audit de 2 à 4 semaines permet
                                    d&apos;identifier précisément où ça coince.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-4 rounded-xl bg-brand-giants/10 border border-brand-giants">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-giants shrink-0 mt-1.5" />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-brand-midnight text-sm">Zone rouge - 0 à 9 points</p>
                                <p className="text-brand-fine-blue text-sm leading-relaxed">
                                    Votre tech freine probablement votre croissance. Pas parce que vos développeurs sont
                                    mauvais - mais parce que l&apos;organisation, les process ou le management manquent
                                    de structure. Un audit pose le diagnostic. Puis on décide quoi faire.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Et après */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        Et après ?
                    </h2>
                    <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                        <p>
                            Ce diagnostic ne remplace pas un audit. Il vous dit si vous en avez besoin - et à quel
                            niveau d&apos;urgence.
                        </p>
                        <p>
                            J&apos;ai passé 7 ans CTO chez lePERMISLIBRE, de 3 développeurs à 30, jusqu&apos;à
                            l&apos;introduction en bourse. J&apos;ai aussi été CEO. J&apos;ai vécu les deux : ne pas
                            comprendre ce que faisait mon équipe quand j&apos;étais CEO, et ne pas être compris de mon
                            CEO quand j&apos;étais CTO.
                        </p>
                        <p>
                            Mes audits couvrent l&apos;organisation, la rapidité d&apos;exécution, le management et
                            l&apos;adéquation entre ce que fait la tech et ce dont le business a besoin. Le livrable est
                            en langage business : pas un rapport technique à faire traduire, une liste de décisions à
                            prendre dans l&apos;ordre.
                        </p>
                    </div>
                    <CtaButton
                        href={`${links.zcal}?utm_source=site&utm_medium=diagnostic&utm_campaign=rdv`}
                        target="_blank"
                        rel="noopener noreferrer"
                        tracking={{ medium: "diagnostic", campaign: "rdv" }}
                    >
                        Prendre rendez-vous
                    </CtaButton>
                </div>
            </div>
        </section>
    );
}
