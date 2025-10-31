"use client";

import Link from "next/link";
import { links } from "@/libs/constants";
import { InfoBoxArticle } from "./InfoBoxArticle";
import { TopArticleSection } from "./TopArticleSection";

export const LandingArticlePage = () => {
    return (
        <section className="flex flex-col justify-center items-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="/articles/pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience">
                    Pourquoi réduire la charge mentale des développeurs à travers la Developer
                    <span className="whitespace-nowrap">Experience ?</span>
                </Link>
            </h2>
            <p className="text-brand-fine-blue max-w-5xl md:px-4 px-0">
                J&apos;ai récemment abordé la diversité des tâches que doivent traiter les développeurs au travers
                d&apos;un article nommé&nbsp;
                <Link
                    className="hover:underline italic font-bold whitespace-nowrap"
                    href="/articles/etre-developpeur-c-est-bien-plus-que-developper"
                >
                    Être développeur, c&apos;est bien plus que développer
                </Link>
                . Il est important d&apos;avoir conscience de cette diversité de tâches, car elle est génératrice de
                temps perdu. Et perdre du temps, c&apos;est quelque chose que l&apos;on veut éviter à tout prix.
            </p>
            <InfoBoxArticle className="self-end">03/04/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="/articles/etre-developpeur-c-est-bien-plus-que-developper">
                    Être développeur, c&apos;est bien plus que développer
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Vous côtoyez des développeurs dans le cadre de votre travail ? Alors, il y a de fortes chances que vous
                n&apos;ayez aucune connaissance de ce qu&apos;ils font au quotidien. Beaucoup pensent que développer est
                un métier facile. Après tout, il suffit d&apos;écrire du code puis de le mettre en production en évitant
                les bugs.
            </p>
            <InfoBoxArticle className="self-end"> 14/03/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="/articles/reussir-ses-recrutements-en-impliquant-son-equipe">
                    Réussir ses recrutements en impliquant son équipe
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Au cours des dernières années, j&apos;ai conduit des centaines d&apos;entretiens de recrutement. Cela
                n&apos;a jamais été un exercice que j&apos;apprécie particulièrement. Pourtant, je suis persuadé que
                c&apos;est la tâche la plus importante à traiter. Et ce, même si l&apos;on pense ne pas en avoir le
                temps.
            </p>
            <InfoBoxArticle className="self-end"> 15/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="/articles/etre-le-leader-dont-l-equipe-a-besoin">
                    Être le leader dont l&apos;équipe a besoin
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Être à un poste de dirigeant implique directement de savoir décider. Mais indirectement, cela implique
                d&apos;être un leader et de savoir faire preuve de leadership. Ces deux notions ont des définitions
                différentes pour chacun. Cependant, nous pouvons dire qu&apos;un leader doit savoir montrer le chemin à
                suivre. Il doit savoir convaincre son équipe de l&apos;y accompagner.
            </p>
            <InfoBoxArticle className="self-end">14/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="/articles/etre-cto-ou-l-art-de-representer-plusieurs-parties">
                    Être CTO ou l&apos;art de représenter plusieurs parties
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                En tant qu&apos;intermédiaire, le CTO représente plusieurs interlocuteurs différents. D&apos;abord, il
                représente l&apos;équipe technique auprès des dirigeants. Ensuite, il représente les dirigeants auprès
                de l&apos;équipe technique. Enfin, il représente l&apos;entreprise auprès du monde extérieur.
            </p>
            <InfoBoxArticle className="self-end">06/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">Savoir communiquer, au cœur du rôle de CTO</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Le CTO a une position particulière au sein de l&apos;entreprise. Au yeux des dirigeants, il représente
                l&apos;équipe technique. Au yeux de l&apos;équipe technique, il représente les dirigeants.
            </p>
            <InfoBoxArticle className="self-end">31/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">Se remettre en question : le syndrome de l&apos;imposteur est un cadeau</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                La première des compétences qu&apos;il me semble nécessaire de trouver chez un CTO est sa capacité à se
                remettre en question. De mon expérience, celle-ci s&apos;accompagne parfois de ce que l&apos;on nomme
                le&nbsp;
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline italic font-bold whitespace-nowrap"
                    href={links.wiki_imposteur}
                >
                    syndrome de l&apos;imposteur
                </Link>
                . Un doute maladif qui nie les accomplissements personnels.
            </p>
            <InfoBoxArticle className="self-end"> 25/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">Qu&apos;est ce qu&apos;un bon CTO ?</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Que vous soyez un dirigeant d&apos;entreprise qui cherche à recruter son prochain CTO ou un développeur
                qui souhaite le devenir, la question des compétences à avoir pour assumer ce rôle avec succès rôle se
                pose inévitablement.
            </p>
            <InfoBoxArticle className="self-end"> 24/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">Dette technique : pourquoi vous ne devriez pas faire de refonte</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Dans ma récente exploration de la gestion de la dette technique, j&apos;ai partagé une perspective
                proactive que j&apos;ai baptisée{" "}
                <Link href="" className="hover:underline italic font-bold whitespace-nowrap">
                    l&apos;effort supplémentaire
                </Link>
                . Cette approche vise à prévenir la dégradation de la base de code en maintenant une vigilance
                constante. Cependant, elle ne s&apos;attaque pas aux problèmes existants, au code déjà en ruine.
            </p>
            <InfoBoxArticle className="self-end">20/12/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">L&apos;anti dette technique : la théorie de l&apos;effort supplémentaire</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Après une carrière de 15 ans dans le domaine du développement logiciel, d&apos;abord en tant que
                développeur puis en tant que CTO, j&apos;ai constamment entendu parler de &quot;dette technique&quot;.
                C&apos;est un terme si omniprésent qu&apos;il semble avoir perdu une partie de sa signification
                initiale.
            </p>
            <InfoBoxArticle className="self-end">12/12/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">Comment réduire la complexité produit pour maintenir un système simple ?</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Cet article cherche à expliquer comment&nbsp;
                <Link
                    href={links.le_permislibre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline italic font-bold whitespace-nowrap"
                >
                    lePERMISLIBRE
                </Link>
                &nbsp;veille à maintenir une simplicité (donc une maintenabilité) produit & technique à travers
                l&apos;exemple de la création de sa nouvelle offre de conduite accélérée qui a mobilisé des dizaines de
                personnes, d&apos;équipes différentes sur plus d&apos;une année complète. Si vous n&apos;avez pas le
                temps de tout lire, vous pouvez directement vous rendre en fin d&apos;article afin de connaitre les
                règles que l&apos;on essaie de s&apos;appliquer.
            </p>
            <InfoBoxArticle className="self-end"> 24/07/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro hover:underline hover:scale-101 lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                <Link href="">De développeur backend à CTO, un retour à zéro</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0">
                Il y a un an, suite au départ de notre CTO, la proposition d&apos;assumer ce rôle m&apos;a été faite.
                Cela faisait déjà 3 ans que je travaillais pour&nbsp;
                <Link
                    href={links.le_permislibre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline italic font-bold whitespace-nowrap"
                >
                    lePERMISLIBRE
                </Link>
                &nbsp;en tant qu&apos;ingénieur backend principal.
            </p>
            <InfoBoxArticle className="self-end"> 24/02/2021</InfoBoxArticle>
        </section>
    );
};
