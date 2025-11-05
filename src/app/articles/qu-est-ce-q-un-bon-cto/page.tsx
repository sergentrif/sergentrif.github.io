"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";

export default function ArticleSeventhPage() {
    return (
        <section className="flex flex-col justify-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <div className="text-sm md:text-sm">
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>
                /
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>
                /Qu’est ce qu’un bon CTO ?
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-widest uppercase">
                Qu’est ce qu’un bon CTO ?
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                24/01/2024, ~4 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Que vous soyez un dirigeant d’entreprise qui cherche à recruter son prochain CTO ou un développeur
                    qui souhaite le devenir, la question des compétences à avoir pour assumer ce rôle avec succès rôle
                    se pose inévitablement.
                </p>
                <p>
                    Le point négatif, c’est qu’il n’y a pas de liste universelle pour répondre à cette question. Il faut
                    d’abord identifier à quel stade de développement en est l’entreprise. Ensuite, quelle est
                    l’importance du département technique dans la réalisation de son chiffre d’affaires.
                </p>

                <p>
                    La question des compétences est primordiale. Même si le CTO est très bon, il convient que son
                    approche corresponde à la culture et aux attentes de l’entreprise. Sans quoi, la collaboration
                    risque d’être un échec assuré. Chaque CTO a une approche qui lui est propre et au final, beaucoup se
                    valent. Cependant, toutes ne sont pas adaptées à toutes les entreprises.
                </p>

                <p>
                    Trouver le bon CTO pour une entreprise est une tâche fastidieuse et chronophage. Cela peut
                    facilement prendre plusieurs mois, voire une année complète. Se précipiter sur le premier venu pour
                    avancer serait par contre une erreur.
                </p>

                <p>
                    Si vous êtes pressé, n’hésitez pas à passer par un CTO en freelance. Il vous permettra d’avancer
                    rapidement tout en préparant sa propre succession chez vous. Auto-promo : je fournis ce genre de
                    prestations que vous pourrez&nbsp;
                    <Link href="/" className="font-bold underline whitespace-nowrap">
                        découvrir ici
                    </Link>
                    .
                </p>

                <p>
                    En parlant du stade de développement de l’entreprise, le sujet implicite est la taille de l’équipe
                    technique. J’ai déjà eu l’occasion de l’aborder ainsi que ses impacts dans mon article :&nbsp;
                    <Link
                        href="/articles/de-developpeur-backend-a-cto-un-retour-a-zero"
                        className="font-bold underline"
                    >
                        de développeur backend à CTO, un retour à zéro
                    </Link>
                    .
                </p>

                <p>
                    Pour faire (très) simple, des équipes de 5, 10, 25, 50… développeurs ne demanderont pas les mêmes
                    compétences de la part du directeur technique.
                </p>

                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <p className="-ml-4">Voici quelques exemples basés sur mon parcours personnel :</p>
                    <li>
                        Jusqu’à 5 développeurs, le métier de CTO ressemble surtout à un rôle de développeur principal ou
                        d’architecte technique.
                    </li>
                    <li>
                        Entre 5 et 10, le métier évolue vers de la chefferie de projet. Nous sommes proches d’un métier
                        d’Engineering Manager avec une dimension technique forte. Il est encore possible de mettre
                        partiellement les mains dans le code.
                    </li>
                    <li>
                        Passé 10 développeurs, il devient difficile de continuer à contribuer soi-même. Nous sommes
                        moins hands-on et plus hands-off. Le CTO n’appartient plus à l’équipe technique et doit
                        collaborer activement au sein de sa&nbsp;
                        <Link
                            href={links.youtube_first_team}
                            className="font-bold underline whitespace-nowrap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            first-team
                        </Link>
                        . En général, les autres C-Levels. Il prends de la hauteur pour commencer à avoir un impact en
                        dehors de son département.
                    </li>
                    <li>
                        Au delà de 20 développeurs, le CTO rentre dans un rôle stratégique vis à vis du business. Il a
                        un rôle d’influence auprès du management intermédiaire qui aura probablement (mais pas
                        nécessairement) vu le jour.
                    </li>
                    <li>
                        Je n’ai jamais expérimenté au delà de 50 développeurs et suis donc incapable de faire un retour
                        du rôle de CTO à cette étape.
                    </li>
                    <li>
                        La première question à se poser dans le recrutement de votre CTO est de savoir ce que vous
                        attendez de lui. En fonction du stade de développement de votre entreprise, le métier de CTO
                        sera radicalement différent. Les compétences demandées ne seront plus les mêmes. Plus l’équipe
                        technique est petite, plus l’expertise technique est importante. Plus l’équipe technique est
                        grande, plus l’expertise managériale est importante.
                    </li>
                </ul>

                <p>
                    Ne négligez pas non plus le métier et la culture de l’entreprise. Ces deux points auront un impact
                    sur le rôle du CTO au sein de l’entreprise et donc des compétences attendues. Une entreprise dont le
                    coeur de métier n’est pas la technique aura un besoin d’innovation moins fort. Le CTO sera
                    probablement moins impliqué au sein des sujets business.
                </p>

                <p>
                    Toutefois, il y a une chose qui ne change pas, peu importe le stade de développement de
                    l’entreprise. Le CTO restera toujours le représentant de l’équipe technique vis à vis de
                    l’entreprise et des dirigeants. Il sera le relai des informations bi-directionnelles.
                </p>

                <p>
                    Pour assumer ce rôle de représentation avec succès et évoluer au rythme de l’entreprise et de ses
                    besoins, plusieurs compétences clés sont nécessaires.
                </p>

                <p>
                    Vous découvrirez la première de ces compétences en vous rendant sur l’article suivant :&nbsp;
                    <Link
                        href="/articles/se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau"
                        className="font-bold underline"
                    >
                        se remettre en question : le syndrome de l’imposteur est un cadeau
                    </Link>
                    .
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
