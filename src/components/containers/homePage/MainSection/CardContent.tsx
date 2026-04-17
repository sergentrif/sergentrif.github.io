import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { ReactNode } from "react";
import { links } from "@/libs/constants";

type cardDataProps = {
    title: string;
    infoBox: string;
    description: string;
    secondaryDescription?: string;
    bulletPoints: string[];
    link: {
        label: string;
        href: string;
    }[];
    design: ReactNode;
    layout: string;
};

export const cardsData: cardDataProps[] = [
    {
        title: "Un état des lieux avant de toucher à quoi que ce soit",
        infoBox: "2 à 4 semaines",
        description:
            "Entretiens individuels avec toute l'équipe, analyse de l'architecture, des rituels, de l'organisation. Pas un audit de code : un état des lieux 360° qui couvre la tech, le produit et le management.",
        secondaryDescription:
            "Livrable : un plan d'action priorisé court, moyen et long terme, en langage business, actionnable immédiatement par le CEO et le CTO sans traduction ni intermédiaire.",
        bulletPoints: [
            "Organisation et vélocité",
            "Architecture et dette technique",
            "Management et adéquation tech-produit-business",
            "Adoption de l'IA",
        ],
        link: [
            {
                label: "Prendre rendez-vous",
                href: `${links.zcal}?utm_source=site&utm_medium=card&utm_campaign=rdv`,
            },
        ],
        design: <DesignA className="max-w-80 w-full h-full" />,
        layout: "regular",
    },
];
