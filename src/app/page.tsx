import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { site, legal } from "@/libs/constants";
import { JsonLd } from "@/components/ui/JsonLd";
import { Landing } from "@/components/containers/homePage/landingSection/Landing";
import { MainCardSection } from "@/components/containers/homePage/MainSection/MainContent";
import { EditorialSection } from "@/components/containers/homePage/editorialSection/Editorial";
import { TemoignageSection } from "@/components/containers/homePage/temoignageSection/Temoignage";
import { KrmaPresentation } from "@/components/containers/homePage/moreSection/KrmaPresentation";
import { CiiPresentation } from "@/components/containers/homePage/moreSection/CiiPresentation";
import { FaqSection } from "@/components/containers/homePage/faqSection/FAQ";
import { DiagnosticCallout } from "@/components/containers/homePage/diagnosticCallout/DiagnosticCallout";

export const metadata: Metadata = {
    title: "Adrien Blandin — CTO freelance • Machine à auditer la tech",
    description:
        "J'interviens quand le CEO sent que sa tech coince mais ne sait pas pourquoi. 7 ans CTO chez lePERMISLIBRE, 3 → 30 personnes, IPO. Audit technique et organisationnel. Basé à Lyon, partout en France.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        title: "Adrien Blandin — CTO freelance • Machine à auditer la tech",
        description:
            "J'interviens quand le CEO sent que sa tech coince mais ne sait pas pourquoi. 7 ans CTO chez lePERMISLIBRE, 3 → 30 personnes, IPO. Audit technique et organisationnel.",
        url: site.url,
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": site.personId,
            name: site.name,
            url: site.url,
            image: `${site.url}/images/adrien-blandin.webp`,
            jobTitle: "CTO Freelance",
            description:
                "Machine à auditer la tech. 7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse. Audit technique et organisationnel pour startups 10-80 personnes.",
            knowsAbout: [
                "Audit technique et organisationnel",
                "Architecture technique",
                "Management d'équipe tech",
                "Stratégie produit",
                "Recrutement technique",
                "Due diligence technique",
            ],
            knowsLanguage: "fr",
            worksFor: { "@id": site.serviceId },
            sameAs: ["https://www.linkedin.com/in/adrienblandin", "https://github.com/sergentrif"],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Est-ce que ça va braquer mon CTO ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Non. L'audit n'est pas une inspection externe qui arrive en juge. Je travaille avec votre CTO, pas contre lui. La plupart du temps, il est soulagé qu'un regard extérieur pose les mots sur ce qu'il vit déjà. Ce que vous obtenez, c'est un diagnostic partagé - pas un rapport à charge.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Combien ça coûte ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "En moyenne entre 4 000 et 8 000 € selon la taille de l'équipe. Moins pour une très petite équipe, plus au-delà de 5 à 6 développeurs. 2 à 3 semaines, livrable en langage business.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Qu'est-ce que j'obtiens à la fin ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Un état des lieux complet et un plan d'action priorisé court, moyen et long terme - pensé pour être actionnable immédiatement par le CEO ou le CTO, sans traduction ni intermédiaire.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Est-ce qu'on peut continuer ensemble après ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Oui, de deux façons. Un accompagnement mensuel (4 à 8h/mois) pour rester en regard extérieur sur l'exécution. Ou une équipe d'exécution si l'audit révèle un besoin concret en dev, design ou produit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "En quoi c'est différent d'un cabinet de conseil ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Vous parlez directement à quelqu'un qui a fait : 7 ans CTO chez lePERMISLIBRE (3 à 30 personnes, IPO), 2 ans aux côtés d'Objow face à un grand compte Edenred, et une quinzaine de startups auditées depuis. J'ai aussi été CEO. Mon audit couvre la tech, le produit, l'organisation et le business - pas uniquement la stack.",
                    },
                },
            ],
        },
        {
            "@type": "ProfessionalService",
            "@id": site.serviceId,
            name: site.title,
            url: site.url,
            description:
                "Audit technique et organisationnel pour startups de 10 à 80 personnes. CTO freelance, basé à Lyon, intervient partout en France.",
            founder: { "@id": site.personId },
            email: legal.email,
            address: {
                "@type": "PostalAddress",
                streetAddress: "2 rue des varennes",
                addressLocality: "Collonges-au-Mont-d'Or",
                postalCode: "69660",
                addressCountry: "FR",
            },
            serviceType: ["Audit technique et organisationnel", "Accompagnement CEO/CTO", "CTO Part-time"],
            areaServed: { "@type": "Country", name: "France" },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Prestations",
                url: `${site.url}/prestations`,
            },
        },
    ],
};

export default function Home() {
    return (
        <ReactLenis root>
            <JsonLd schema={personSchema} />
            <main className="max-w-[1920px] w-full mx-auto">
                <Landing />
                <EditorialSection />
                <MainCardSection />
                <TemoignageSection />
                <DiagnosticCallout />
                <KrmaPresentation />
                <CiiPresentation />
                <FaqSection />
            </main>
        </ReactLenis>
    );
}
