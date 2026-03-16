import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
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
        url: "https://adrien.blandin.me",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://adrien.blandin.me/#person",
            name: "Adrien Blandin",
            url: "https://adrien.blandin.me",
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
            "@id": "https://adrien.blandin.me/#service",
            name: "Adrien Blandin — CTO Freelance",
            url: "https://adrien.blandin.me",
            description:
                "CTO à temps partagé pour start-ups early stage et PME. Sparing partner pour CTOs, définition de MVP, conférences pour écoles et accélérateurs.",
            founder: { "@id": "https://adrien.blandin.me/#person" },
            serviceType: ["CTO Part-time", "Sparing partner", "Définition de MVP", "Conférencier tech"],
            areaServed: { "@type": "Country", name: "France" },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Prestations",
                url: "https://adrien.blandin.me/prestations",
            },
        },
    ],
};

export default function Home() {
    return (
        <ReactLenis root>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
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
