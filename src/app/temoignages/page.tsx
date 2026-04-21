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
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
                ratingCount: String(testimonials.length),
                reviewCount: String(testimonials.length),
            },
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
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "1",
                },
            })),
        },
    ],
};

export const metadata: Metadata = {
    title: "Témoignages clients | Adrien Blandin, CTO Freelance",
    description:
        "Retours de CEO accompagnés en CTO freelance : Objow, Data Comply One, Certixio, Olset, Glaaster, Omen-data, Ma nouvelle piscine, emlyon Venture Labs.",
    alternates: { canonical: "/temoignages" },
    openGraph: {
        title: "Témoignages clients | Adrien Blandin, CTO Freelance",
        description:
            "Retours de CEO accompagnés en CTO freelance : Objow, Data Comply One, Certixio, Olset, Glaaster, Omen-data, Ma nouvelle piscine, emlyon Venture Labs.",
        url: `${site.url}/temoignages`,
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
