import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Fira_Code, Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "@/assets/styles/globals.css";
import { cn } from "@/libs/utils";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/ui/JsonLd";
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

const dmMono = DM_Mono({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-dm-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        template: "%s | Adrien Blandin",
        default: "Adrien Blandin — CTO Freelance",
    },
    description:
        "Ex-CTO lePERMISLIBRE (IPO). J'audite la tech et l'organisation de startups 10-80 personnes pour donner aux CEOs une vision claire de leur situation technique.",
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
        title: "Adrien Blandin — CTO Freelance",
        description:
            "Ex-CTO lePERMISLIBRE (IPO). J'audite la tech et l'organisation de startups 10-80 personnes pour donner aux CEOs une vision claire de leur situation technique.",
        images: [{ url: "/images/adrien-blandin.webp", width: 400, height: 533, alt: "Portrait Adrien Blandin" }],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.title,
    description: "Ex-CTO lePERMISLIBRE (IPO). Audit technique et organisationnel pour startups 10-80 personnes.",
    inLanguage: "fr-FR",
    author: { "@id": site.personId },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={cn(firaCode.className, bricolageGrotesque.variable, dmMono.variable, "overflow-x-hidden")}>
                <JsonLd schema={websiteSchema} />
                <GoogleAnalytics />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
