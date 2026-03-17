import type { Metadata } from "next";
import { site } from "@/libs/constants";
import { LandingSection } from "@/components/containers/prestationPage/LandingSection";
import { JsonLd } from "@/components/ui/JsonLd";

const prestationsSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
                { "@type": "ListItem", position: 2, name: "Prestations", item: `${site.url}/prestations` },
            ],
        },
        {
            "@type": "Service",
            name: "Sparing Partner CTO",
            serviceType: "Conseil et mentorat CTO",
            description:
                "Accompagnement des CTO et futurs CTO pour structurer leur organisation, affirmer leur leadership technique et gagner en hauteur de vue.",
            provider: { "@id": site.serviceId },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/prestations`,
        },
        {
            "@type": "Service",
            name: "CTO Part-time",
            serviceType: "Direction technique externalisée",
            description:
                "Direction technique expérimentée pour startups et PME, quelques jours par semaine. Roadmap produit, choix technologiques, management d'équipe.",
            provider: { "@id": site.serviceId },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/prestations`,
        },
        {
            "@type": "Service",
            name: "Définition du MVP",
            serviceType: "Prestation au livrable",
            description:
                "Accompagnement à la définition d'un MVP clair, priorisé et techniquement réaliste. Livrable complet incluant architecture, scalabilité et dette acceptable.",
            provider: { "@id": site.serviceId },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/prestations`,
        },
        {
            "@type": "Service",
            name: "Conférencier tech",
            serviceType: "Conférence pour écoles et accélérateurs",
            description:
                "Interventions en écoles et accélérateurs sur les sujets CTO, MVP, due diligence technique, recrutement et structuration d'équipe.",
            provider: { "@id": site.serviceId },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/prestations`,
        },
    ],
};

export const metadata: Metadata = {
    title: "Prestations CTO à temps partagé | Adrien Blandin",
    description:
        "Sparing partner pour CTOs, CTO part-time pour startups, définition de MVP et conférences pour écoles et accélérateurs. Découvrez mes offres d'accompagnement technique.",
    alternates: { canonical: "/prestations" },
    openGraph: {
        title: "Prestations CTO à temps partagé | Adrien Blandin",
        description:
            "Sparing partner pour CTOs, CTO part-time pour startups, définition de MVP et conférences pour écoles et accélérateurs.",
        url: `${site.url}/prestations`,
    },
};

export default function PrestationsPage() {
    return (
        <>
            <JsonLd schema={prestationsSchema} />
            <LandingSection />
        </>
    );
}
