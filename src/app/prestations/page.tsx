import type { Metadata } from "next";
import { LandingSection } from "@/components/containers/prestationPage/LandingSection";

export const metadata: Metadata = {
    title: "Prestations CTO à temps partagé | Adrien Blandin",
    description:
        "Sparing partner pour CTOs, CTO part-time pour startups, définition de MVP et conférences pour écoles et accélérateurs. Découvrez mes offres d'accompagnement technique.",
    alternates: { canonical: "/prestations" },
    openGraph: {
        title: "Prestations CTO à temps partagé | Adrien Blandin",
        description:
            "Sparing partner pour CTOs, CTO part-time pour startups, définition de MVP et conférences pour écoles et accélérateurs.",
        url: "https://adrien.blandin.me/prestations",
    },
};

export default function PrestationsPage() {
    return <LandingSection />;
}
