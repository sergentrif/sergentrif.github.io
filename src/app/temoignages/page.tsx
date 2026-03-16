import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { TopTemoignageSection } from "@/components/containers/temoignagePage/TopTemoignageSection";
import { LandingTemoignage } from "@/components/containers/temoignagePage/LandingTemoignage";
import { BottomContactBox } from "@/components/containers/BottomContactBox";
import { testimonials } from "@/libs/testimonials";
import { site } from "@/libs/constants";

const reviewSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfessionalService",
            "@id": site.serviceId,
            name: site.title,
            url: site.url,
            review: testimonials.map((t) => ({
                "@type": "Review",
                author: {
                    "@type": "Person",
                    name: t.author,
                    jobTitle: t.jobTitle,
                    worksFor: {
                        "@type": "Organization",
                        name: t.company,
                        ...(t.companyUrl ? { url: t.companyUrl } : {}),
                    },
                },
                reviewBody: t.paragraphs.join(" "),
            })),
        },
    ],
};

export const metadata: Metadata = {
    title: "Témoignages clients | Adrien Blandin, CTO Freelance",
    description:
        "Découvrez ce que les CEO d'Objow, Data Comply One, Certixio, Olset, Glaaster, emlyon Venture Labs et d'autres startups disent de leur collaboration avec Adrien Blandin.",
    alternates: { canonical: "/temoignages" },
    openGraph: {
        title: "Témoignages clients | Adrien Blandin, CTO Freelance",
        description:
            "Ce que les CEO d'Objow, Data Comply One, Certixio, Olset, Glaaster, emlyon Venture Labs et d'autres disent de leur collaboration avec Adrien Blandin.",
        url: "https://adrien.blandin.me/temoignages",
    },
};

export default function TemoignagesPage() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <JsonLd schema={reviewSchema} />
            <TopTemoignageSection />
            <LandingTemoignage />
            <BottomContactBox />
        </section>
    );
}
