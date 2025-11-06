import Link from "next/link";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";

const content = [
    {
        id: 1,
        description: [
            "J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
            "Professionnel, impliqué et efficace dans chacune de ses interventions, je peux dire que collaborer avec Adrien est certainement l’une des meilleures décisions que nous avons prises.",
            "Adrien est un CTO talentueux, expérimenté et leader. Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien !",
        ],
        content: (
            <div className="flex flex-col self-center gap-8 px-4">
                <ObjowIcon className="max-w-49 max-h-12.25 w-full h-full" />
                <div className="w-13 border-linear-gradient" />
                <div className="uppercase text-brand-fine-blue font-medium">
                    <p>Jonathan le Duc</p>
                    <Link
                        href="https://www.objow.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>CEO - Objow</span>
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        description: [
            "Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
            "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href="https://www.datacomplyone.com/" className="flex flex-col gap-1 text-3xl">
                    Data Comply One
                    <span className="tracking-wide text-base">#RGPD</span>
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Bertrand Bucelle</p>
                    <p>CEO - Data Comply One</p>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        description: [
            "Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
            "En collaborant avec Adrien, vous saurez très vite apprécier la pertinence de son questionnement, son honnêteté, son sens de l'efficacité et son organisation sans faille. Et votre confiance ne sera pas déçue.",
            "Sur mon projet, il a su très vite trouver la bonne approche, tenir ses engagements tout en étant clair sur sa contribution et sa valeur ajoutée.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <div>
                    <p className="text-3xl">CERTIXIO</p>
                    <span className="tracking-wide">#IA</span>
                </div>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Marion Breuleux</p>
                    <p>CEO - CERTIXIO</p>
                </div>
            </div>
        ),
    },
];

const content_mobile = [
    {
        id: 1,
        logo: (
            <Link
                href="https://www.datacomplyone.com/"
                className="flex justify-between w-full text-2xl uppercase text-brand-fine-blue font-medium"
            >
                Data Comply One
                <span className="tracking-wide text-base self-end">#RGPD</span>
            </Link>
        ),
        description: [
            "Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
            "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
        ],
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>Bertrand Bucelle</p>
                <p>CEO - Data Comply One</p>
            </div>
        ),
    },
    {
        id: 2,
        logo: <ObjowIcon className="max-w-45 max-h-11 w-full h-full self-start" />,
        description: [
            "J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
            "Professionnel, impliqué et efficace dans chacune de ses interventions, je peux dire que collaborer avec Adrien est certainement l'une des meilleures décisions que nous avons prises.",
            "Adrien est un CTO talentueux, expérimenté et leader. Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien !",
        ],
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>Jonathan le Duc</p>
                <Link
                    href="https://www.objow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <span>CEO - Objow</span>
                </Link>
            </div>
        ),
    },
    {
        id: 3,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl">CERTIXIO</p>
                <span className=" tracking-wide self-end">#IA</span>
            </div>
        ),
        description: [
            "Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
            "En collaborant avec Adrien, vous saurez très vite apprécier la pertinence de son questionnement, son honnêteté, son son sens de l'efficacité et son organisation sans faille. Et votre confiance ne sera pas déçue.",
            "Sur mon projet, il a su très vite trouver la bonne approche, tenir ses engagements tout en étant clair sur sa contribution et sa valeur ajoutée.",
        ],
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>Marion Breuleux</p>
                <p>CEO - CERTIXIO</p>
            </div>
        ),
    },
];

export { content, content_mobile };
