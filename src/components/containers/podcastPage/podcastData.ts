export interface PodcastEpisode {
    id: number; // Identifiant unique de l'épisode
    title: string; // Titre de l'épisode affiché en grand
    description: string; // Description courte (premier paragraphe)
    detailedDescription: string; // Description détaillée (deuxième paragraphe, optionnel)
    embedUrl: string; // URL d'embed YouTube (ex: "https://www.youtube.com/embed/VIDEO_ID") ou "EMBED_YT" pour placeholder
    podcastLinks: {
        apple?: string;
        spotify?: string;
        youtube?: string;
    };
    imagePosition: "left" | "right";
}

export const podcastEpisodes: PodcastEpisode[] = [
    {
        id: 1,
        title: "La dette technique est un choix volontaire",
        description:
            "Dans cet épisode, j'accueille Adrien Blandin, qui est aujourd'hui solopreneur pour parler de la maîtrise de la dette technique.",
        detailedDescription:
            "Adrien nous partage son parcours, ses expériences et nous éclaire sur des concepts clés comme la définition de la dette technique, les impacts du code et les méthodes pour bien refactoriser du code.",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            apple: "https://podcasts.apple.com/...",
            spotify: "https://open.spotify.com/...",
            youtube: "https://youtube.com/...",
        },
        imagePosition: "right",
    },
    {
        id: 2,
        title: "Quand la tech et le produit ne font qu'un",
        description:
            "🎤 Cette semaine, nous avons le plaisir de partager un nouvel épisode avec Adrien BLANDIN, CTO chez lePERMISLIBRE au micro de Hervé LOKROU, CTO chez Batch.",
        detailedDescription:
            "Passionné par l'entrepreneuriat depuis toujours, Adrien, se lance dans l'aventure dès sa sortie d'école d'ingénieur.",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            apple: "https://podcasts.apple.com/...",
            spotify: "https://open.spotify.com/...",
            youtube: "https://youtube.com/...",
        },
        imagePosition: "left",
    },
    {
        id: 3,
        title: "Tout s'enchaîne bien",
        description:
            "Avec Adrien, il n'y a pas de mauvaises nouvelles. Un échec, c'est un rebond à venir. Après ses études, il se lance dans l'entrepreneuriat.",
        detailedDescription:
            "Il crée une entreprise qui va réussir et qui se terminera et qui commencera et … Tout s'enchaîne bien ! Dès la sortie de l'école, Adrien se lance dans l'entrepreneuriat, cette expérience va solder par un échec dont il analyse les raisons.",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            apple: "https://podcasts.apple.com/...",
            spotify: "https://open.spotify.com/...",
            youtube: "https://youtube.com/...",
        },
        imagePosition: "right",
    },
    {
        id: 4,
        title: "Anticiper les bugs",
        description:
            "Le D.I.V. de la semaine est Adrien Blandin [ @adrienblandin ], CTO @ lePERMISLIBRE [https://www.lepermislibre.fr/], une auto-école dont l'apprentissage du code, les heures de conduite, se passent directement en ligne.",
        detailedDescription:
            "Adrien vient nous partager les pratiques qu'il a mises en place pour obtenir un meilleur feedback client et",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            apple: "https://podcasts.apple.com/...",
            spotify: "https://open.spotify.com/...",
            youtube: "https://youtube.com/...",
        },
        imagePosition: "left",
    },
    {
        id: 5,
        title: "Quelles frontières entre Tech et Produit dans une startup ? Échange avec 2 CPTO expérimentés",
        description:
            "Dans ce live organisé par CO-CTO, David Dhenaux et Adrien Blandin, CTO / CPTO expérimentés, viennent nous partager leur regard sur la frontière entre Tech et Produit.",
        detailedDescription: "Quels sont les enjeux de ces deux équipes ? Qui porte la responsabilité de quoi ?",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            youtube: "https://youtube.com/...",
        },
        imagePosition: "right",
    },
    {
        id: 6,
        title: "Dev bas niveau: Voyage au centre de l'application",
        description: "",
        detailedDescription: "",
        embedUrl: "EMBED_YT",
        podcastLinks: {
            apple: "https://podcasts.apple.com/...",
        },
        imagePosition: "left",
    },
];
