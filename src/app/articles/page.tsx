"use client";

import Link from "next/link";
import { links } from "@/libs/constants";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";

export default function LandingArticlesPage() {
    return (
        <section className="flex flex-col justify-center items-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience">
                    Pourquoi réduire la charge mentale des développeurs à travers la Developer&nbsp;
                    <span className="whitespace-nowrap">Experience ?</span>
                </Link>
            </h2>
            <p className="text-brand-fine-blue max-w-5xl md:px-4 px-0 md:text-base text-sm">
                J’ai récemment abordé la diversité des tâches que doivent traiter les développeurs au travers d’un
                article nommé&nbsp;
                <Link
                    className="underline italic font-bold"
                    href="/articles/etre-developpeur-c-est-bien-plus-que-developper"
                >
                    Être développeur, c’est bien plus que développer
                </Link>
                . Il est important d’avoir conscience de cette diversité de tâches, car elle est génératrice de temps
                perdu. Et perdre du temps, c’est quelque chose que l’on veut éviter à tout prix.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">03/04/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/etre-developpeur-c-est-bien-plus-que-developper">
                    Être développeur, c’est bien plus que développer
                </Link>
            </h2>
            <p className="text-brand-fine-blue max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Vous côtoyez des développeurs dans le cadre de votre travail ? Alors, il y a de fortes chances que vous
                n’ayez aucune connaissance de ce qu’ils font au quotidien. Beaucoup pensent que développer est un métier
                facile. Après tout, il suffit d’écrire du code puis de le mettre en production en évitant les bugs.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base"> 14/03/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/reussir-ses-recrutements-en-impliquant-son-equipe">
                    Réussir ses recrutements en impliquant son équipe
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Au cours des dernières années, j’ai conduit des centaines d’entretiens de recrutement. Cela n’a jamais
                été un exercice que j’apprécie particulièrement. Pourtant, je suis persuadé que c’est la tâche la plus
                importante à traiter. Et ce, même si l’on pense ne pas en avoir le temps.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base"> 15/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/etre-le-leader-dont-l-equipe-a-besoin">
                    Être le leader dont l’équipe a besoin
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Être à un poste de dirigeant implique directement de savoir décider. Mais indirectement, cela implique
                d’être un leader et de savoir faire preuve de leadership. Ces deux notions ont des définitions
                différentes pour chacun. Cependant, nous pouvons dire qu’un leader doit savoir montrer le chemin à
                suivre. Il doit savoir convaincre son équipe de l’y accompagner.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">14/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/etre-cto-ou-l-art-de-representer-plusieurs-parties">
                    Être CTO ou l’art de représenter plusieurs parties
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                En tant qu’intermédiaire, le CTO représente plusieurs interlocuteurs différents. D’abord, il représente
                l’équipe technique auprès des dirigeants. Ensuite, il représente les dirigeants auprès de l’équipe
                technique. Enfin, il représente l’entreprise auprès du monde extérieur.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">06/02/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/savoir-communiquer-au-coeur-du-role-de-cto">
                    Savoir communiquer, au cœur du rôle de CTO
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Le CTO a une position particulière au sein de l’entreprise. Au yeux des dirigeants, il représente
                l’équipe technique. Au yeux de l’équipe technique, il représente les dirigeants.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">31/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau">
                    Se remettre en question : le syndrome de l’imposteur est un cadeau
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                La première des compétences qu’il me semble nécessaire de trouver chez un CTO est sa capacité à se
                remettre en question. De mon expérience, celle-ci s’accompagne parfois de ce que l’on nomme le&nbsp;
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline italic font-bold whitespace-nowrap"
                    href={links.wiki_imposteur}
                >
                    syndrome de l’imposteur
                </Link>
                . Un doute maladif qui nie les accomplissements personnels.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base"> 25/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/qu-est-ce-q-un-bon-cto">Qu’est ce qu’un bon CTO ?</Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Que vous soyez un dirigeant d’entreprise qui cherche à recruter son prochain CTO ou un développeur qui
                souhaite le devenir, la question des compétences à avoir pour assumer ce rôle avec succès rôle se pose
                inévitablement.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base"> 24/01/2024</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/dette-technique-pourquoi-vous-ne-devriez-pas-faire-de-refonte">
                    Dette technique : pourquoi vous ne devriez pas faire de refonte
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Dans ma récente exploration de la gestion de la dette technique, j’ai partagé une perspective proactive
                que j’ai baptisée&nbsp;
                <Link
                    href="/articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire"
                    className="underline italic font-bold whitespace-nowrap"
                >
                    l’effort supplémentaire
                </Link>
                . Cette approche vise à prévenir la dégradation de la base de code en maintenant une vigilance
                constante. Cependant, elle ne s’attaque pas aux problèmes existants, au code déjà en ruine.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">20/12/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire">
                    L’anti dette technique : la théorie de l’effort supplémentaire
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Après une carrière de 15 ans dans le domaine du développement logiciel, d’abord en tant que développeur
                puis en tant que CTO, j’ai constamment entendu parler de &quot;dette technique&quot;. C’est un terme si
                omniprésent qu’il semble avoir perdu une partie de sa signification initiale.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">12/12/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/comment-reduire-la-complexite-produit-pour-maintenir-un-systeme-simple">
                    Comment réduire la complexité produit pour maintenir un système simple ?
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Cet article cherche à expliquer comment&nbsp;
                <Link
                    href={links.le_permislibre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline italic font-bold whitespace-nowrap"
                >
                    lePERMISLIBRE
                </Link>
                &nbsp;veille à maintenir une simplicité (donc une maintenabilité) produit & technique à travers
                l’exemple de la création de sa nouvelle offre de conduite accélérée qui a mobilisé des dizaines de
                personnes, d’équipes différentes sur plus d’une année complète. Si vous n’avez pas le temps de tout
                lire, vous pouvez directement vous rendre en fin d’article afin de connaitre les règles que l’on essaie
                de s’appliquer.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base"> 24/07/2023</InfoBoxArticle>
            <div className="border-linear-gradient w-full mb-6" />
            <h2 className="self-start font-brico-gro underline hover:scale-101 md:text-3xl text-xl font-bold tracking-widest uppercase">
                <Link href="/articles/de-developpeur-backend-a-cto-un-retour-a-zero">
                    De développeur backend à CTO, un retour à zéro
                </Link>
            </h2>
            <p className="text-brand-fine-blue  max-w-5xl md:px-4 px-0 md:text-base text-sm">
                Il y a un an, suite au départ de notre CTO, la proposition d’assumer ce rôle m’a été faite. Cela faisait
                déjà 3 ans que je travaillais pour&nbsp;
                <Link
                    href={links.le_permislibre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline italic font-bold whitespace-nowrap"
                >
                    lePERMISLIBRE
                </Link>
                &nbsp;en tant qu’ingénieur backend principal.
            </p>
            <InfoBoxArticle className="self-end text-sm md:text-base">24/02/2021</InfoBoxArticle>
        </section>
    );
}
