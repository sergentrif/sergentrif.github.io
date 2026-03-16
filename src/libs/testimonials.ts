export interface Testimonial {
    id: number;
    author: string;
    jobTitle: string;
    company: string;
    companyUrl?: string;
    paragraphs: string[];
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        author: "Jonathan le Duc",
        jobTitle: "CEO",
        company: "Objow",
        companyUrl: "https://www.objow.com/",
        paragraphs: [
            "J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
            "Professionnel, impliqué et efficace dans chacune de ses interventions, je peux dire que collaborer avec Adrien est certainement l'une des meilleures décisions que nous avons prises.",
            "Adrien est un CTO talentueux, expérimenté et leader. Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien !",
        ],
    },
    {
        id: 2,
        author: "Bertrand Bucelle",
        jobTitle: "CEO",
        company: "Data Comply One",
        companyUrl: "https://www.datacomplyone.eu/",
        paragraphs: [
            "Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
            "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
        ],
    },
    {
        id: 3,
        author: "Marion Breuleux",
        jobTitle: "CEO",
        company: "Certixio",
        companyUrl: "https://www.certixio.fr/",
        paragraphs: [
            "Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
            "En collaborant avec Adrien, vous saurez très vite apprécier la pertinence de son questionnement, son honnêteté, son sens de l'efficacité et son organisation sans faille. Et votre confiance ne sera pas déçue.",
            "Sur mon projet, il a su très vite trouver la bonne approche, tenir ses engagements tout en étant clair sur sa contribution et sa valeur ajoutée.",
        ],
    },
    {
        id: 4,
        author: "René le Caignec",
        jobTitle: "CEO",
        company: "Omen-data",
        paragraphs: [
            "Adrien est réellement efficace autant dans la définition des besoins que dans la planification et le suivi des projets.",
            "Disponible et réactif, un vrai plaisir de travailler avec lui.",
        ],
    },
    {
        id: 5,
        author: "Rémi Chappoz",
        jobTitle: "Cofondateur",
        company: "Olset",
        companyUrl: "https://www.olset.io/",
        paragraphs: [
            "Nous avons la chance de travailler avec Adrien, notre CTO, qui a joué un rôle clé dans la structuration et l'organisation de notre roadmap technique.",
            "Grâce à sa vision, sa rigueur et sa capacité à rendre les choses claires et concrètes, l'équipe a gagné en efficacité et en cohérence.",
            "Adrien combine excellentes compétences techniques et sens du management — un vrai atout pour n'importe quelle équipe tech.",
        ],
    },
    {
        id: 6,
        author: "Christophe Quétier",
        jobTitle: "Directeur Général",
        company: "Ma nouvelle piscine",
        companyUrl: "https://www.manouvellepiscine.com/",
        paragraphs: [
            "Adrien a pris en compte nos enjeux business pour proposer des choix technologiques adaptés.",
            "Son expertise, la pertinence de ses analyses et sa vision stratégique sont des atouts pour votre société.",
        ],
    },
    {
        id: 7,
        author: "Christel Huber",
        jobTitle: "Operating Manager",
        company: "emlyon venture labs",
        companyUrl:
            "https://em-lyon.com/fr/faculte-recherche/recherche/institute-impactful-innovation-entrepreneurship/venture-labs",
        paragraphs: [
            "Adrien est intervenu dans le cadre de Masterclass que nous organisons pour nos incubés, avec une approche pragmatique, il a su partager son expertise technique.",
            "Très à l'écoute, il apporte son regard éclairé pour allier la vision business et le développement tech : une aide précieuse pour les entrepreneurs !!",
        ],
    },
];
