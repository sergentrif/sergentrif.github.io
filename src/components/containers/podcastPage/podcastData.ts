import { podcastLinks } from "@/libs/constants";
import ITTD_img from "@/assets/images/ITTD.png";
import { StaticImageData } from "next/image";

export interface PodcastEpisode {
    id: number; // Identifiant unique de l'épisode
    title: string; // Titre de l'épisode affiché en grand
    description: string; // Description courte (premier paragraphe)
    detailedDescription: string; // Description détaillée (deuxième paragraphe, optionnel)
    moreDescription?: string; // Description supplémentaire affichée dans l'accordéon "Lire plus"
    thumbnailUrl?: string | StaticImageData;
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
        moreDescription:
            "Nous abordons ensemble les méthodes pour choisir les développeurs et les CTO avec lesquels travailler, ainsi que les bonnes pratiques pour éviter l'accumulation de dette technique et assurer la pérennité des projets. Un épisode riche en conseils pratiques et en réflexions sur les enjeux techniques des startups.",
        thumbnailUrl: "https://img.youtube.com/vi/gayO92jY2js/maxresdefault.jpg",
        podcastLinks: podcastLinks.episode1,
        imagePosition: "right",
    },
    {
        id: 2,
        title: "Quand la tech et le produit ne font qu'un",
        description:
            "🎤 Cette semaine, nous avons le plaisir de partager un nouvel épisode avec Adrien BLANDIN, CTO chez lePERMISLIBRE au micro de Hervé LOKROU, CTO chez Batch.",
        detailedDescription:
            "Passionné par l'entrepreneuriat depuis toujours, Adrien, se lance dans l'aventure dès sa sortie d'école d'ingénieur,  puis fera quelques années chez Batch avant de remonter une société.",
        moreDescription:
            "Il intègre lePERMISLIBRE il y a 7 ans, dont il est aujourd'hui le CTO. A la tête d'une équipe de 25 personnes, Adrien nous explique comment il a réussi à se former sur le tas, quelles ont été ses sources d'inspiration pour manager son équipe avec pour particularité, que sa team technique contient également le produit et la data. La conviction d'Adrien est claire : ” tout le monde construit des applications, c'est juste que chacun a un rôle différent. ”Il nous parle également de l'importance de faire des erreurs et d'en tirer des leçons pour arriver à progresser et de tous les rituels qu'il a mis en place pour que son équipe puisse émettre leurs critiques, positives ou négatives.Un podcast concret et instructif, à découvrir sans plus attendre.",
        thumbnailUrl: "https://img.youtube.com/vi/hgfdy4G-Mik/maxresdefault.jpg",
        podcastLinks: podcastLinks.episode2,
        imagePosition: "left",
    },
    {
        id: 3,
        title: "Tout s'enchaîne bien",
        description:
            "Avec Adrien, il n'y a pas de mauvaises nouvelles. Un échec, c'est un rebond à venir. Après ses études, il se lance dans l'entrepreneuriat.",
        detailedDescription:
            "Il crée une entreprise qui va réussir et qui se terminera et qui commencera et … Tout s'enchaîne bien ! Dès la sortie de l'école, Adrien se lance dans l'entrepreneuriat, cette expérience va solder par un échec dont il analyse les raisons principales.",
        moreDescription:
            "Manque de complémentarité avec son associé, aucun d’eux n’avait la casquette commerciale pour aller vendre un produit pourtant abouti. Il enchaîne avec une expérience hyper enrichissante chez Appgratis qu’il n’aurait pas décrochée selon lui sans son expérience précédente. Il arrive au moment critique du « pivot » de Appgratis vers Batch (pour en savoir plus sur cette histoire incroyable d’une société dont le business modèle s’écroule du genre au lendemain lorsque Apple bannit Appgratis de l’Appstore je vous renvoie vers l’épisode CTO’z avec Antoine Guenard. Le pivot fonctionne mais malgré tout il y a quelques départs qui s’organisent de manière expliquée et bienveillante. Adrien doit quitter Batch mais là encore il se dit : « c’est le timing parfait finalement » car il se lance dans une nouvelle aventure entrepreneuriale : Canalmatch. Cette fois-ci les utilisateurs sont là, le produit est adopté mais il se heurte à la difficulté de monétiser son service. Il arrive à Lepermislibre en tant que développeur Back end. Il devient CTO avec une posture humble et très orientée produit. Ce qui l’intéresse dans le développement, c’est de construire de chouettes produits, robustes et de qualité. Aujourd’hui, en tant que CTO, ce qui l’intéresse, c’est toujours de construire.. mais cette fois-ci c’est l’équipe qui construira le produit. Et chez Lepermislibre, pas de répit à venir sur les évolutions produits 😉",
        thumbnailUrl: "https://img.youtube.com/vi/JwuQgm9hJWQ/maxresdefault.jpg",
        podcastLinks: podcastLinks.episode3,
        imagePosition: "right",
    },
    {
        id: 4,
        title: "Anticiper les bugs",
        description:
            "Le D.I.V. de la semaine est Adrien Blandin [@adrienblandin], CTO lePERMISLIBRE, une auto-école dont l'apprentissage du code, les heures de conduite, se passent directement en ligne.",
        detailedDescription:
            "Adrien vient nous partager les pratiques qu'il a mises en place pour obtenir un meilleur feedback client et comment il encourage la bonne écriture de code et la documentation.",
        moreDescription:
            "Avec son équipe il a mis en place un ensemble de bonnes pratiques qui permet de maintenir une qualité de code optimale et de réduire drastiquement le nombre d'erreurs mises en production. Au-delà de simples règles, c'est un état d'esprit partagé et entretenu par l'ensemble de l'équipe. Toutes ces petites choses mises bout à bout ont grandement contribué à une IPO réussie.",
        thumbnailUrl: "https://img.youtube.com/vi/F0pNodJ5VCU/maxresdefault.jpg",
        podcastLinks: podcastLinks.episode4,
        imagePosition: "left",
    },
    {
        id: 5,
        title: "Quelles frontières entre Tech et Produit dans une startup ? Échange avec 2 CPTO expérimentés",
        description:
            "Dans ce live organisé par CO-CTO, David Dhenaux et Adrien Blandin, CTO / CPTO expérimentés, viennent nous partager leur regard sur la frontière entre Tech et Produit.",
        detailedDescription: "Quels sont les enjeux de ces deux équipes ? Qui porte la responsabilité de quoi ?",
        moreDescription: "Qu'est-ce que ce rôle de CPTO dont on entend de plus en plus parler ? Bon visionnage !",
        thumbnailUrl: "https://img.youtube.com/vi/18k2mgwhNhA/maxresdefault.jpg",
        podcastLinks: podcastLinks.episode5,
        imagePosition: "right",
    },
    {
        id: 6,
        title: "Dev bas niveau: Voyage au centre de l'application",
        description: "Pour l'épisode #204 je recevais Christophe Le Douarec. On en débrief avec Adrien.",
        detailedDescription: "",
        thumbnailUrl: ITTD_img,
        podcastLinks: podcastLinks.episode6,
        imagePosition: "left",
    },
];
