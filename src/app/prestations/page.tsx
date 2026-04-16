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
            name: "Accompagnement mensuel",
            serviceType: "Regard extérieur mensuel pour CEO",
            description:
                "Accompagnement mensuel du CEO comme regard extérieur sur la tech : suivi du plan d'action post-audit, arbitrages, préparation de levée. 4 à 8 heures par mois, engagement trimestriel.",
            provider: { "@id": site.serviceId },
            areaServed: { "@type": "Country", name: "France" },
            url: `${site.url}/prestations`,
        },
        {
            "@type": "Service",
            name: "Due diligence technique",
            serviceType: "Due diligence pré-acquisition et levée de fonds",
            description:
                "Due diligence technique et organisationnelle pour fonds d'investissement et acquéreurs. Même méthodologie que l'audit : documentation, interviews équipe, analyse complète. Livrable avec niveau de risque par point et stratégie d'intégration si acquisition.",
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
    title: "Prestations | Adrien Blandin",
    description:
        "Accompagnement mensuel post-audit, due diligence technique pré-acquisition et conférences pour écoles et accélérateurs.",
    alternates: { canonical: "/prestations" },
    openGraph: {
        title: "Prestations | Adrien Blandin",
        description:
            "Accompagnement mensuel post-audit, due diligence technique pré-acquisition et conférences pour écoles et accélérateurs.",
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
