import type { Metadata } from "next";
import ParcoursContent from "@/components/containers/parcours/Content";

export const metadata: Metadata = {
    title: "Parcours | Adrien Blandin, CTO Freelance",
    description:
        "7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse réussie. Depuis 2024, CTO freelance pour une dizaine de startups. Découvrez mon parcours.",
    alternates: { canonical: "/parcours" },
    openGraph: {
        title: "Parcours | Adrien Blandin, CTO Freelance",
        description:
            "7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse réussie. Depuis 2024, CTO freelance pour une dizaine de startups.",
        url: "https://adrien.blandin.me/parcours",
    },
};

export default function ParcoursPage() {
    return (
        <section className="w-full flex flex-col">
            <ParcoursContent />
        </section>
    );
}
