import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Fira_Code, Bricolage_Grotesque } from "next/font/google";
import "@/assets/styles/globals.css";
import { cn } from "@/libs/utils";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { site } from "@/libs/constants";

const firaCode = Fira_Code({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-brico-gro",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: "Adrien Blandin — CTO à temps partagé pour start-ups early stage",
    description:
        "Après avoir développé une équipe technique de 3 à 30 personnes jusqu'à l'introduction en bourse réussie de l'entreprise, j'accompagne désormais des start-ups et PME en tant que CTO à temps partagé.",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: site.url,
        siteName: site.title,
        title: "Adrien Blandin — CTO à temps partagé pour start-ups early stage",
        description:
            "Après avoir développé une équipe technique de 3 à 30 personnes jusqu'à l'introduction en bourse réussie de l'entreprise, j'accompagne désormais des start-ups et PME en tant que CTO à temps partagé.",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={cn(firaCode.className, bricolageGrotesque.variable, "overflow-x-hidden")}>
                <GoogleAnalytics />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
