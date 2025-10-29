import { Route } from "next";

export const links = {
    linkedin: "https://www.linkedin.com/company/krma-team/",
    github: "https://github.com/krma-team",
    email: "your-email@example.com",
    le_permislibre: "https://www.lepermislibre.fr/",
    wiki_imposteur: "https://fr.wikipedia.org/wiki/Syndrome_de_l%27imposteur",
    etude_pdf: "https://ics.uci.edu/~gmark/CHI2005.pdf",
    flow_state: "https://fr.wikipedia.org/wiki/Flow_(psychologie)",
    musk_algo: "https://world.hey.com/dhh/the-musk-algorithm-977bf312",
    computer_org: "https://www.computer.org/csdl/magazine/so/2023/04/10176199/1OAJyfknInm",
    assur_quality: "https://fr.wikipedia.org/wiki/Assurance_qualit%C3%A9",
    deployment_continuity: "https://fr.wikipedia.org/wiki/D%C3%A9ploiement_continu",
    monitoring: "https://fr.wikipedia.org/wiki/Surveillance_(informatique)",
    code_review: "https://fr.wikipedia.org/wiki/Revue_de_code",
    veille_tech: "https://fr.wikipedia.org/wiki/Veille_technologique",
    concept_proof: "Proof Of Concept",
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
