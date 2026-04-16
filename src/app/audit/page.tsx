import type { Metadata } from "next";
import { site, links, auditInfo } from "@/libs/constants";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaButton } from "@/components/ui/CtaButton";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";
import { FaqSection, faqsToSchema } from "@/components/containers/homePage/faqSection/FAQ";

const auditFaqs = [
    {
        question: "Combien ça coûte ?",
        answer: `En moyenne ${auditInfo.price} selon la taille de l'équipe. Le tarif peut varier selon le périmètre exact.`,
    },
    {
        question: "Combien de temps dure un audit ?",
        answer: `En général ${auditInfo.duration} selon la taille de l'équipe et le périmètre.`,
    },
    {
        question: "Est-ce que ça va mettre mon CTO sur la défensive ?",
        answer: "Non. L'audit n'arrive pas en juge. Je travaille avec lui, pas contre lui. La plupart du temps, il est soulagé qu'un regard extérieur pose les mots sur ce qu'il vit déjà. Ce que vous obtenez, c'est un diagnostic partagé - pas un rapport à charge.",
    },
    {
        question: "Faut-il donner accès au code source ?",
        answer: "Rarement, sauf si demandé. L'audit s'appuie avant tout sur les entretiens, la documentation et les schémas d'architecture. Une analyse de code peut être ajoutée au périmètre si vous le souhaitez. Tout reste confidentiel - NDA signé sans problème si nécessaire. Les outils utilisés sont souverains et chiffrés : Proton Mail, Proton Drive, Anytype.",
    },
    {
        question: "Et après l'audit ?",
        answer: "Deux suites possibles. Un accompagnement mensuel (4 à 8h/mois) pour rester en regard extérieur sur l'exécution du plan d'action. Ou une équipe d'exécution si l'audit révèle un besoin concret en dev, design ou produit.",
    },
    {
        question: "En quoi c'est différent d'un cabinet de conseil ?",
        answer: "Pas d'intermédiaire, pas de junior qui instruit le dossier. La même personne fait les entretiens, l'analyse et rédige le livrable. Et l'audit couvre la tech, le produit, l'organisation et le business - pas uniquement la stack.",
    },
];

export const metadata: Metadata = {
    title: "Audit technique et organisationnel startup | Adrien Blandin",
    description: `Audit complet en ${auditInfo.duration} : organisation, vélocité, dette technique, management. Livrable en langage business, pas un rapport technique. En moyenne ${auditInfo.price}. Ex-CTO lePERMISLIBRE.`,
    alternates: { canonical: "/audit" },
    openGraph: {
        type: "website",
        title: "Audit technique et organisationnel startup | Adrien Blandin",
        description: `Audit complet en ${auditInfo.duration} : organisation, vélocité, dette technique, management. Livrable en langage business. En moyenne ${auditInfo.price}.`,
        url: `${site.url}/audit`,
    },
};

const auditSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                { "@type": "ListItem", position: 2, name: "Audit technique", item: `${site.url}/audit` },
            ],
        },
        {
            "@type": "Service",
            name: "Audit technique et organisationnel",
            description: `Audit complet en ${auditInfo.duration} : organisation, vélocité, dette technique, management. Livrable en langage business avec plan d'action priorisé.`,
            provider: { "@id": site.personId },
            offers: {
                "@type": "Offer",
                price: "4000",
                priceCurrency: "EUR",
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    minPrice: "4000",
                    maxPrice: "8000",
                    priceCurrency: "EUR",
                },
            },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/audit`,
        },
        faqsToSchema(auditFaqs),
    ],
};

export default function AuditPage() {
    return (
        <>
            <section className="flex flex-col pt-12 pb-16">
                <JsonLd schema={auditSchema} />

                <div className="flex w-full h-full gap-2 items-center justify-center md:justify-start relative md:right-19 md:-left-12 overflow-x-hidden">
                    <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                    <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Audit technique</h1>
                    <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                </div>

                <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                    {/* Intro */}
                    <div className="flex flex-col gap-6">
                        <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                            En moyenne {auditInfo.price} · {auditInfo.duration} · Livrable en langage business
                        </p>
                        <p className="font-brico-gro font-extrabold lg:text-[2rem] md:text-2xl text-xl leading-tight uppercase tracking-wide text-brand-midnight">
                            Votre tech coûte cher. Vous ne savez pas si elle tient la route.
                        </p>
                        <div className="flex flex-col gap-3 text-brand-fine-blue md:text-lg text-base leading-relaxed">
                            <p>
                                Vos développeurs bossent. Des fonctionnalités sortent. Mais vous n&apos;arrivez pas à
                                savoir si c&apos;est rapide, si c&apos;est solide, ou si ça va tenir quand vous
                                passerez à l&apos;étape suivante.
                            </p>
                            <p>
                                Ce n&apos;est pas une question technique - c&apos;est une question de pilotage. Vous
                                manquez l&apos;information pour décider.
                            </p>
                            <p>
                                L&apos;audit couvre l&apos;organisation, la rapidité d&apos;exécution, le management
                                et l&apos;adéquation entre ce que fait la tech et ce dont le business a besoin. En{" "}
                                {auditInfo.duration}. Le livrable est en langage business : pas un rapport technique à
                                faire traduire, un plan d&apos;action priorisé avec un horizon clair.
                            </p>
                        </div>
                        <CtaButton
                            href={`${links.zcal}?utm_source=site&utm_medium=audit&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                            tracking={{ medium: "audit", campaign: "rdv" }}
                        >
                            Prendre rendez-vous
                        </CtaButton>
                    </div>

                    {/* Ce que l'audit couvre */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Ce que l&apos;audit couvre
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-giants/40">
                                <p>
                                    <span className="font-semibold text-brand-midnight">Stack technique.</span> Choix
                                    technologiques, architecture, dette technique, sécurité, performances,
                                    maintenabilité. Ce qui coûte cher aujourd&apos;hui, et ce qui va coûter cher demain.
                                </p>
                                <p>
                                    <span className="font-semibold text-brand-midnight">Organisation et process.</span>{" "}
                                    Comment les équipes communiquent, prennent des décisions, priorisent. Les process
                                    qui ralentissent et ceux qui tiennent la charge.
                                </p>
                                <p>
                                    <span className="font-semibold text-brand-midnight">Management et équipe.</span> Le
                                    profil de chaque personne clé, les silos de connaissance, les dépendances
                                    critiques. Ce qui se passe si une personne part.
                                </p>
                                <p>
                                    <span className="font-semibold text-brand-midnight">
                                        Adéquation tech / produit / business.
                                    </span>{" "}
                                    Est-ce que ce qui est construit répond à ce dont le business a besoin ? Est-ce que
                                    la tech avance dans la bonne direction ?
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
                                    <span className="font-semibold text-brand-midnight">La préparation.</span> Avant le
                                    premier entretien, la documentation est demandée : organigramme, schémas
                                    d&apos;infrastructure et d&apos;architecture, liste des SaaS, accès au dépôt de
                                    code. L&apos;objectif est d&apos;arriver avec des premières hypothèses - pas des
                                    questions génériques.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    2.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">Les entretiens.</span> Je
                                    rencontre tout le monde : le CEO pour les enjeux business et la vision stratégique,
                                    les directeurs de pôle pour leurs frustrations vis-à-vis de la tech, le responsable
                                    technique pour la vision globale de la stack, et chaque développeur individuellement.
                                    Pour beaucoup, ça ressemble à une séance chez le psy. Une oreille neutre et
                                    objective leur permet de mettre sur la table les frustrations et les non-dits.
                                    C&apos;est ce qu&apos;ils attendent.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    3.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">L&apos;analyse.</span> Je
                                    synthétise, je connecte, je cherche la big picture. Je mets en avant ce qui
                                    fonctionne bien. Je mets aussi en avant ce qui doit changer, avec un niveau de
                                    risque par point.
                                </p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="font-brico-gro font-bold text-brand-midnight text-lg shrink-0 w-6">
                                    4.
                                </span>
                                <p>
                                    <span className="font-semibold text-brand-midnight">Le livrable.</span> J&apos;écris,
                                    j&apos;attends quelques jours, je relis, j&apos;améliore. Ce que je livre
                                    n&apos;est pas un premier jet. Puis une restitution en présentiel ou visio pour en
                                    discuter.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ce que vous ne voyez pas de l'intérieur */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Ce que vous ne voyez pas de l&apos;intérieur
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <p>
                                Dans 100% des entreprises où je suis passé, l&apos;audit a fait remonter quelque chose
                                que le CEO ne voyait pas. Pas parce qu&apos;il ne regardait pas - parce que certaines
                                choses ne se voient que de l&apos;extérieur.
                            </p>
                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-giants/40">
                                <p>
                                    Chez l&apos;un de mes clients, le CEO estimait lui-même les tickets de
                                    développement. Les développeurs exécutaient sans avoir été consultés. Personne ne
                                    trouvait ça anormal, c&apos;était juste comme ça depuis le début. L&apos;équipe
                                    était devenue exécutante. Elle n&apos;avait plus rien à s&apos;approprier.
                                </p>
                                <p>
                                    Chez un autre, les entretiens individuels ont fait apparaître un signal clair : le
                                    développeur senior était en désengagement actif. Ni le CEO ni son associé ne
                                    l&apos;avaient vu venir. Quelques semaines plus tard sans intervention, il partait
                                    - et avec lui, cinq ans de connaissance du produit.
                                </p>
                            </div>
                            <p>
                                Ce sont rarement les clients qui me demandent quand est-ce que j&apos;aurai fini la
                                rédaction. Dans la majeure partie des cas, ce sont les membres de l&apos;équipe. Avec
                                l&apos;espoir du changement.
                            </p>
                        </div>
                    </div>

                    {/* Le livrable */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Ce que vous recevez
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <p>
                                Un état des lieux complet de votre tech et de votre organisation, rédigé pour vous : ce
                                qui va, ce qui doit changer, pourquoi. Chaque recommandation est priorisée sur trois
                                horizons : ce qu&apos;on peut faire dans les jours qui viennent, les semaines, les
                                mois.
                            </p>
                            <p>
                                Pas de jargon non traduit. Pas de liste technique sans impact business. Un document que
                                vous pouvez apporter à votre board.
                            </p>
                            <p>
                                J&apos;ai passé 7 ans CTO chez lePERMISLIBRE, de 3 développeurs à 30, jusqu&apos;à
                                l&apos;introduction en bourse. J&apos;ai aussi été CEO. Mes audits ne sont pas que
                                techniques - ils couvrent aussi le management, le produit et l&apos;adéquation
                                business. Parce que c&apos;est rarement là où vous cherchez que se trouvent les vrais
                                problèmes.
                            </p>
                        </div>
                    </div>

                    {/* Le prix */}
                    <div className="flex flex-col gap-6">
                        <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                            Le prix
                        </h2>
                        <div className="flex flex-col gap-4 text-brand-fine-blue leading-relaxed">
                            <p>
                                En moyenne{" "}
                                <span className="font-semibold text-brand-midnight">{auditInfo.price}</span> selon la
                                taille de l&apos;équipe. Le tarif peut varier selon le périmètre exact.
                            </p>
                            <p>
                                Les détails sont sur la{" "}
                                <a
                                    href="/prestations"
                                    className="underline underline-offset-2 hover:text-brand-midnight transition-colors"
                                >
                                    page Prestations
                                </a>
                                .
                            </p>
                        </div>
                        <CtaButton
                            href={`${links.zcal}?utm_source=site&utm_medium=audit-bottom&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                            tracking={{ medium: "audit-bottom", campaign: "rdv" }}
                        >
                            Prendre rendez-vous
                        </CtaButton>
                    </div>
                </div>
            </section>
            <FaqSection faqs={auditFaqs} />
        </>
    );
}
