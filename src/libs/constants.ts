import { Route } from "next";

export const links = {
    linkedin: "https://www.linkedin.com/in/adrienblandin",
    github: "https://github.com/sergentrif",
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
    concept_proof: "https://fr.wikipedia.org/wiki/Preuve_de_concept",
    youtube_first_team: "https://www.youtube.com/watch?v=BjE_mPoZPSg",
    acm_queue: "https://queue.acm.org/detail.cfm?id=3454124",
    atlassian_site: "https://www.atlassian.com/devops/frameworks/dora-metrics",
    syndrome_imposteur_wiki: "https://fr.wikipedia.org/wiki/Syndrome_de_l%27imposteur",
    SolvingEngineeringStrategyCrisis: "https://lethain.com/solving-the-engineering-strategy-crisis/",
    adrien_spotify_podcast: "https://open.spotify.com/episode/5QrTn83tLCFRpQPo31hY8n",
    if_this_then_dev_podcast: "https://www.ifttd.io/",
    yagni: "https://fr.wikipedia.org/wiki/YAGNI",
    kiss: "https://fr.wikipedia.org/wiki/Principe_KISS",
    tresore_colbert_wiki:
        "https://www.lemonde.fr/idees/article/2011/04/27/les-chenes-francais-le-tresor-de-colbert_1512747_3232.html",
    technical_debt: "https://martinfowler.com/bliki/TechnicalDebt.html",
    from_tech_debt_to_design_int: "https://medium.com/@ziobrando/from-technical-debt-to-design-integrity-48e7056b6776",
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
