import type { Metadata } from "next";
import { site } from "@/libs/constants";
import ParcoursContent from "@/components/containers/parcours/Content";
import { BottomContactBox } from "@/components/containers/BottomContactBox";

export const metadata: Metadata = {
    title: "Adrien Blandin — CTO Freelance Lyon | Parcours & Expérience",
    description:
        "7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse réussie. Depuis 2024, CTO freelance pour une dizaine de startups. Découvrez mon parcours.",
    alternates: { canonical: "/parcours" },
    openGraph: {
        title: "Adrien Blandin — CTO Freelance Lyon | Parcours & Expérience",
        description:
            "7 ans CTO chez lePERMISLIBRE, équipe de 3 à 30 personnes, introduction en bourse réussie. Depuis 2024, CTO freelance pour une dizaine de startups.",
        url: `${site.url}/parcours`,
    },
};

export default function ParcoursPage() {
    return (
        <section className="w-full flex flex-col">
            <ParcoursContent />
            <div className="lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl mx-auto pb-16">
                <BottomContactBox />
            </div>
        </section>
    );
}
