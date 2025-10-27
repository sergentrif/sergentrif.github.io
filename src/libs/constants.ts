import { Route } from "next";

export const links = {
    linkedin: "https://www.linkedin.com/company/krma-team/",
    github: "https://github.com/krma-team",
    email: "your-email@example.com",
    calendly_adrien:
        "https://calendly.com/adrienblandin/prendre-rendez-vous?utm_medium=organic&utm_source=adrien.blandin.dev&utm_campaign=homepage&utm_content=navbar&month=2025-08",
};

export const legal = {
    raison_sociale: "Abventure",
    adresse_siege_social: "2 rue des varennes 69660 Collonges au mont d’or",
    nom_hebergeur: "AWS",
    adresse_hebergeur: "Paris France.",
    email: "adrien.blandin@gmail.com",
    date_mise_a_jour: "25/08/2025",
};

export const navLinks: { href: Route; label: string }[] = [
    { href: "/articles", label: "Articles" },
    { href: "/parcours", label: "Parcours" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/prestations", label: "Prestations" },
    { href: "/temoignages", label: "Témoignages" },
];
