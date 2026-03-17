import type { Metadata } from "next";
import { site } from "@/libs/constants";
import { LandingSection } from "@/components/containers/podcastPage";

export const metadata: Metadata = {
    title: "Podcasts | Adrien Blandin, CTO Freelance",
    description:
        "6 épisodes sur la dette technique, le rôle de CTO et la tech au service du business. If This Then Dev, CTOZ, SRC et plus — disponibles sur Apple Podcasts, Spotify et YouTube.",
    alternates: { canonical: "/podcasts" },
    openGraph: {
        title: "Podcasts | Adrien Blandin, CTO Freelance",
        description:
            "6 épisodes sur la dette technique, le rôle de CTO et la tech au service du business. Disponibles sur Apple Podcasts, Spotify et YouTube.",
        url: `${site.url}/podcasts`,
    },
};

export default function PodcastsPage() {
    return <LandingSection />;
}
