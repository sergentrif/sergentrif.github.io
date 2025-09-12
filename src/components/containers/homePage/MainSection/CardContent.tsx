import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { DesignC } from "@/components/ui/icons/cardsDesign/DesignC";
import { ReactNode } from "react";

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
    title: "Un diagnostic clair sur votre situation tech",
    infoBox: "250€/h",
    description:
      "Vous sentez que la technique vous freine mais vous ne savez pas par où commencer ? En 1h, nous faisons le point sur vos urgences.",
    bulletPoints: [
      "Un état des lieux honnête",
      "Pistes d'action concrètes pour reprendre le contrôle",
    ],
    link: [
      {
        label: "Réserver un créneau de diagnostic",
        href: "https://zcal.co/adrienblandin/conseil-coaching",
      },
    ],
    design: <DesignA />,
    layout: "regular",
  },
  {
    title: "Votre CTO à temps partagé pour scaler sereinement",
    infoBox: "À partir de 9 000€/mois",
    description:
      "Libérez-vous de la gestion technique pour vous concentrer sur votre business.",
    secondaryDescription:
      "Je m'intègre à votre équipe comme un véritable bras droit : présent au quotidien, je pilote les projets, je manage les développeurs et je porte la vision technique à vos côtés pour assurer une croissance maîtrisée.",
    bulletPoints: [
      "Co-construction de la vision produit & tech",
      "Prise en charge du recrutement et du management",
      "Représentation technique auprès des investisseurs et du board",
    ],
    link: [
      {
        label: "Déléguer mon pilotage tech",
        href: "https://zcal.co/adrienblandin/decouverte-cto",
      },
    ],
    design: <DesignC />,
    layout: "regular",
  },
  {
    title: "Une mission ciblée pour structurer votre projet",
    infoBox: "Tarif selon projet",

    description:
      "Un projet mal cadré au départ, c'est la quasi-certitude de perdre du temps et de l'argent. Confiez cette étape clé à un expert habitué à traduire une vision business en plan d'action technique.",
    secondaryDescription:
      "Je m'immerge dans votre besoin le temps d'une mission à périmètre fixe pour livrer un résultat tangible qui sécurise la suite.",
    bulletPoints: [
      "Audit et plan d'action pour assainir votre existant",
      "Cahier des charges qui traduit votre vision en specs claires",
      "Définition de la stack technique pour garantir la scalabilité",
    ],
    link: [
      {
        label: "Discuter de mon projet",
        href: "https://zcal.co/adrienblandin/decouverte-projet",
      },
    ],
    design: <DesignB />,
    layout: "reverse",
  },
];
