import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { site } from "@/libs/constants";
import { JsonLd } from "@/components/ui/JsonLd";
import { Landing } from "@/components/containers/homePage/landingSection/Landing";
import { MainCardSection } from "@/components/containers/homePage/MainSection/MainContent";
import { TemoignageSection } from "@/components/containers/homePage/temoignageSection/Temoignage";
import { KrmaPresentation } from "@/components/containers/homePage/moreSection/KrmaPresentation";
import { CiiPresentation } from "@/components/containers/homePage/moreSection/CiiPresentation";

export const metadata: Metadata = {
    title: "Adrien Blandin — CTO à temps partagé pour start-ups early stage",
    description:
        "J'aide les CEO à transformer leur tech en accélérateur de croissance. CTO à temps partagé, sparing partner pour CTOs, définition de MVP. Basé à Lyon, France.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        title: "Adrien Blandin — CTO à temps partagé pour start-ups early stage",
        description:
            "J'aide les CEO à transformer leur tech en accélérateur de croissance. CTO à temps partagé, sparing partner, définition de MVP.",
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
            jobTitle: "CTO Freelance",
            description:
                "CTO à temps partagé pour start-ups early stage et PME. 7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse réussie.",
            knowsAbout: [
                "Architecture technique",
                "Management d'équipe tech",
                "Stratégie produit",
                "Recrutement technique",
                "Due diligence technique",
                "Roadmap produit",
            ],
            sameAs: ["https://www.linkedin.com/in/adrienblandin", "https://github.com/sergentrif"],
        },
        {
            "@type": "ProfessionalService",
            "@id": site.serviceId,
            name: site.title,
            url: site.url,
            description:
                "CTO à temps partagé pour start-ups early stage et PME. Sparing partner pour CTOs, définition de MVP, conférences pour écoles et accélérateurs.",
            founder: { "@id": site.personId },
            serviceType: ["CTO Part-time", "Sparing partner", "Définition de MVP", "Conférencier tech"],
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
                <MainCardSection />
                <TemoignageSection />
                <KrmaPresentation />
                <CiiPresentation />
            </main>
        </ReactLenis>
    );
}
