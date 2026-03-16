import type { Metadata } from "next";
import { BottomContactBox } from "@/components/containers/BottomContactBox";

export const metadata: Metadata = {
    title: "Témoignages clients | Adrien Blandin, CTO Freelance",
    description:
        "Découvrez ce que les CEO d'Objow, Data Comply One, Certixio, Olset, emlyon Venture Labs et d'autres startups disent de leur collaboration avec Adrien Blandin.",
    alternates: { canonical: "/temoignages" },
    openGraph: {
        title: "Témoignages clients | Adrien Blandin, CTO Freelance",
        description:
            "Ce que les CEO d'Objow, Data Comply One, Certixio, Olset, emlyon Venture Labs et d'autres disent de leur collaboration avec Adrien Blandin.",
        url: "https://adrien.blandin.me/temoignages",
    },
};
import { TopTemoignageSection } from "@/components/containers/temoignagePage/TopTemoignageSection";
import { LandingTemoignage } from "@/components/containers/temoignagePage/LandingTemoignage";

export default function TemoignagesPage() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <TopTemoignageSection />
            <LandingTemoignage />
            <BottomContactBox />
        </section>
    );
}
