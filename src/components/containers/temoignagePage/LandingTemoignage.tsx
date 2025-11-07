"use client";

import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";
import { EmLyonSchoolIcon } from "@/components/ui/icons/brandLogo/EmLyonSchool";
import { MNPIcon } from "@/components/ui/icons/brandLogo/MNP";
import Image from "next/image";
import DCOIcon from "@/components/ui/icons/brandLogo/DCOIcon.webp";
import { cn } from "@/libs/utils";

const content = [
    {
        id: 1,
        description: [
            "”J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
            "Professionnel, impliqué et efficace dans chacune de ses interventions, je peux dire que collaborer avec Adrien est certainement l’une des meilleures décisions que nous avons prises.",
            "Adrien est un CTO talentueux, expérimenté et leader. Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien !",
        ],
        content: (
            <div className="flex flex-col self-center gap-8 px-4">
                <Link href="https://www.objow.com/" target="_blank" rel="noopener noreferrer">
                    <ObjowIcon
                        className={cn(
                            "max-w-49 max-h-12.25 w-full h-full relative bottom-2 left-2",
                            "lg:bottom-2 lg:left-10",
                        )}
                    />
                </Link>
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
            "”Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
            "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href="https://www.datacomplyone.eu/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={DCOIcon}
                        alt="Data Comply One Logo"
                        className="lg:max-w-32 lg:max-h-22 max-w-28 max-h-18 w-full h-full relative lg:left-18 lg:bottom-2 left-11"
                    />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Bertrand Bucelle</p>
                    <Link
                        href="https://www.datacomplyone.eu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>CEO - Data Comply One</span>
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 4,
        description: [
            "“Adrien est réellement efficace autant dans la définition des besoins que dans la planification et le suivi des projets.",
            "Disponible et réactif, un vrai plaisir de travailler avec lui.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <div>
                    <p className="text-3xl">Omen-data</p>
                </div>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>René le Caignec</p>
                    <p>CEO - Omen-data</p>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        description: [
            "”Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
            "En collaborant avec Adrien, vous saurez très vite apprécier la pertinence de son questionnement, son honnêteté, son sens de l'efficacité et son organisation sans faille. Et votre confiance ne sera pas déçue.",
            "Sur mon projet, il a su très vite trouver la bonne approche, tenir ses engagements tout en étant clair sur sa contribution et sa valeur ajoutée.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href="https://www.certixio.fr/" target="_blank" rel="noopener noreferrer">
                    <p className="text-3xl">CERTIXIO</p>
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Marion Breuleux</p>
                    <Link
                        href="https://www.certixio.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>CEO - CERTIXIO</span>
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 5,
        description: [
            "”Nous avons la chance de travailler avec Adrien, notre CTO, qui a joué un rôle clé dans la structuration et l’organisation de notre roadmap technique.",
            "Grâce à sa vision, sa rigueur et sa capacité à rendre les choses claires et concrètes, l’équipe a gagné en efficacité et en cohérence.",
            "Adrien combine excellentes compétences techniques et sens du management — un vrai atout pour n’importe quelle équipe tech.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href="https://www.olset.io/" target="_blank" rel="noopener noreferrer">
                    <p className="text-3xl">Olset</p>
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Rémi Chappoz</p>
                    <Link
                        href="https://www.olset.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>Cofondateur - Olset</span>
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 6,
        description: [
            "”Adrien a pris en compte nos enjeux business pour proposer des choix technologiques adaptés.",
            "Son expertise, la pertinence de ses analyses et sa vision stratégique sont des atouts pour votre société.",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href="manouvellepiscine.com" target="_blank" rel="noopener noreferrer">
                    <MNPIcon />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Christophe Quétier</p>
                    <Link
                        href="manouvellepiscine.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>Directeur Général - Ma nouvelle piscine</span>
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 7,
        description: [
            "”Adrien est intervenu dans le cadre de Masterclass que nous organisons pour nos incubés, avec une approche pragmatique, il a su partager son expertise technique.",
            "Très à l'écoute, il apporte son regard éclairé pour allier la vision business et le développement tech : une aide précieuse pour les entrepreneurs !!",
        ],
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link
                    href="https://em-lyon.com/fr/faculte-recherche/recherche/institute-impactful-innovation-entrepreneurship/venture-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <EmLyonSchoolIcon
                        className={cn(
                            "max-w-18 max-h-16 relative top-2 left-14 flex self-center w-full h-full text-[#ed1c24]",
                            "lg:max-h-24 lg:max-w-22 lg:-top-2 lg:left-23",
                        )}
                    />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>Christel Huber</p>
                    <Link
                        href="https://em-lyon.com/fr/faculte-recherche/recherche/institute-impactful-innovation-entrepreneurship/venture-labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        <span>Operating Manager - emlyon venture labs</span>
                    </Link>
                </div>
            </div>
        ),
    },
];

const content_mobile = [
    {
        id: 8,
        logo: (
            <Link href="https://www.datacomplyone.eu/" target="_blank" rel="noopener noreferrer">
                <Image src={DCOIcon} alt="Data Comply One Logo" className="max-w-28 max-h-18 w-full h-full" />
            </Link>
        ),
        description: [
            "”Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
            "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
        ],
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>Bertrand Bucelle</p>
                <Link
                    href="https://www.datacomplyone.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <span>CEO - Data Comply One</span>
                </Link>
            </div>
        ),
    },
    {
        id: 9,
        logo: (
            <Link href="https://www.objow.com/" target="_blank" rel="noopener noreferrer">
                <ObjowIcon className="max-w-45 max-h-11 w-full h-full self-start" />
            </Link>
        ),
        description: [
            "”J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
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
        id: 10,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl">CERTIXIO</p>
                <span className="font-brico-gro self-end">#IA</span>
            </div>
        ),
        description: [
            "“Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
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
    {
        id: 11,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl">Omen-data</p>
                <span className="font-brico-gro self-end">#</span>
            </div>
        ),
        description: [
            "“Adrien est réellement efficace autant dans la définition des besoins que dans la planification et le suivi des projets.",
            "Disponible et réactif, un vrai plaisir de travailler avec lui.",
        ],
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>René le Caignec</p>
                <p>CEO - Omen-data</p>
            </div>
        ),
    },
    {
        id: 12,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl">Olset</p>
                <span className="font-brico-gro self-end">#</span>
            </div>
        ),
        description: [
            "”Nous avons la chance de travailler avec Adrien, notre CTO, qui a joué un rôle clé dans la structuration et l’organisation de notre roadmap technique.",
            "Grâce à sa vision, sa rigueur et sa capacité à rendre les choses claires et concrètes, l’équipe a gagné en efficacité et en cohérence.",
            "Adrien combine excellentes compétences techniques et sens du management — un vrai atout pour n’importe quelle équipe tech.",
        ],
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p>Rémi Chappoz</p>
                <Link
                    href="https://www.olset.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <span>Cofondateur - Olset</span>
                </Link>
            </div>
        ),
    },
    {
        id: 13,
        logo: <MNPIcon />,
        description: [
            "”Adrien a pris en compte nos enjeux business pour proposer des choix technologiques adaptés.",
            "Son expertise, la pertinence de ses analyses et sa vision stratégique sont des atouts pour votre société.",
        ],
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p>Christophe Quétier</p>
                <Link
                    href="manouvellepiscine.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <span>Directeur Général - Ma nouvelle piscine</span>
                </Link>
            </div>
        ),
    },
    {
        id: 14,
        logo: <EmLyonSchoolIcon className={cn("max-w-18 max-h-16  flex self-center w-full h-full text-[#ed1c24]")} />,
        description: [
            "”Adrien a pris en compte nos enjeux business pour proposer des choix technologiques adaptés.",
            "Son expertise, la pertinence de ses analyses et sa vision stratégique sont des atouts pour votre société.",
        ],
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p>Christel Huber</p>
                <Link
                    href="https://em-lyon.com/fr/faculte-recherche/recherche/institute-impactful-innovation-entrepreneurship/venture-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <span>Operating Manager - emlyon venture labs</span>
                </Link>
            </div>
        ),
    },
];

export function LandingTemoignage() {
    return (
        <section className="">
            <div className="flex flex-col md:gap-6 gap-2 pb-4">
                <h2 className="font-bold font-brico-gro uppercase tracking-wide md:text-3xl text-xl max-w-[47rem] md:justify-center">
                    Témoignages clients
                </h2>
                <p className="text-brand-fine-blue flex max-w-4xl w-full md:text-base text-sm">
                    Découvrez ce que mes précédents collaborateurs disent de mon apport en tant que CTO. Ces témoignages
                    reflètent mon engagement à transformer des défis techniques en succès tangibles pour votre
                    entreprise.
                </p>
            </div>
            <div className="w-full py-4 hidden md:flex">
                <StickyScroll content={content} />
            </div>
            <div className="flex flex-col pt-8 gap-8 md:hidden w-full">
                {content_mobile.map((item) => (
                    <div key={item.id} className="flex flex-col rounded-2xl bg-brand-surface h-full w-full">
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-row">{item.logo}</div>
                            <div className="border-linear-gradient" />
                            <div className="flex flex-col gap-4 text-brand-fine-blue">
                                {item.description.map((paragraph, index) => (
                                    <p key={index} className="text-base leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col">{item.author}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
