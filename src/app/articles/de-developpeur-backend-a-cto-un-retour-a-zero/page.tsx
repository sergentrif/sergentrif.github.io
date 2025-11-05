"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";

export default function ArticleSixthPage() {
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
                /De développeur backend à CTO, un retour à zéro
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-widest uppercase">
                De développeur backend à CTO, un retour à zéro
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                24/02/2021, ~7 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Il y a un an, suite au départ de notre CTO, la proposition d’assumer ce rôle m’a été faite. Cela
                    faisait déjà 3 ans que je travaillais pour{" "}
                    <Link
                        href={links.le_permislibre}
                        className="font-bold underline"
                        target="_blank"
                        rel="nooponer noreferrer"
                    >
                        lePERMISLIBRE
                    </Link>{" "}
                    en tant qu’ingénieur backend principal.
                </p>
                <p>
                    J’ai rejoint l’entreprise lorsqu’il n’y avait que 5 employés, cela ressemblait donc à une évolution
                    logique pour eux comme pour moi. Après une courte période de réflexion j’ai décidé d’accepter cette
                    proposition, n’ayant pas grand chose à perdre dans cette tentative.
                </p>
                <p>
                    Pour une raison inconnue, peut-être l’envie de faire un point personnel ou de partager ce que j’ai
                    appris durant cette année, je me suis mis en tête d’écrire un bref article.
                </p>
                <p>
                    Si je ne devais garder qu’une seule leçon, c’est qu’être CTO n’est absolument pas l’évolution du
                    métier de développeur. Lead Dev en est une évolution, Head Of Engineering une autre mais CTO est un
                    métier différent, plus proche du management que de la technique.
                </p>
                <p>
                    J’ai par le passé tenté de créer une start-up (Canalmatch ndlr) où j’assumais le rôle de CTO.
                    Naïvement, je pensais que cette fois-ci ne serait pas bien différent d’alors. Hors, être CTO parce
                    qu’on est le seul développeur d’une entreprise de 2 personnes n’a rien à voir avec le fait de
                    diriger une équipe technique au sein d’une entreprise plus conséquente (35 personnes aujourd’hui).
                </p>
                <p>
                    J’ai donc attaqué ce nouveau poste en pensant que peu de choses changeraient concrètement pour moi :
                    je continuerai à développer tout en consacrant un peu de temps à la gestion d’équipe et aux réunions
                    stratégiques de la boite.
                </p>
                <p>
                    Lors de ma prise de fonction, nous n’étions plus que 3 développeurs dans l’équipe. Nous devions
                    impérativement recruter et pourtant je me sentais entièrement responsable de notre productivité et
                    de la quantité (et la qualité) des sujets que nous pouvions traiter.
                </p>
                <p>
                    Durant presque un an j’ai donc passé mon temps à jongler entre le management et le développement. Ce
                    qui est bien lorsque l’on essaye de tout faire, c’est que l’on fait tout mal. Mes développements
                    étaient bâclés car je devais gérer l’équipe et ma gestion d’équipe était bâclée car je devais
                    développer.
                </p>
                <p>
                    Ajoutez à ça une entreprise qui croît très vite et vous obtenez une année particulièrement
                    stressante.
                </p>
                <p>
                    Début 2021 j’ai donc pris la décision de ne presque plus coder, ou seulement en dépannage lorsque je
                    suis à jour de toutes mes obligations. Ce choix a été rendu bien plus facile car les développeurs
                    recrutés au premier semestre 2020 commençaient à être parfaitement formés et autonomes. Je n’étais
                    donc plus nécessaire techniquement.
                </p>
                <p>C’est là que s’opère la partie difficile : accepter que l’on n’est plus développeur.</p>
                <p>
                    Cela veut par conséquent dire qu’il faut déléguer une grande partie des choix et conceptions
                    techniques. Même si vous pensez déjà connaitre la réponse à une problématique, celle-ci doit venir
                    de votre équipe. Ils doivent y réfléchir eux-même et arriver à leur propre solution.
                </p>
                <p>
                    Mais après tout, si vous embauchez des personnes que vous pensez talentueuses, c’est pour leur faire
                    confiance non ? De toutes façons, rien ne vous empêche de participer à la conclusion d’une
                    discussion et de vous exprimer à ce moment là.
                </p>
                <p>
                    Alors si je ne développe plus, si je ne suis plus dans l’opérationnel, quel est mon rôle aujourd’hui
                    ? Ma conclusion au terme de cette première année est que mon but est d’être là pour l’équipe. Tout
                    tourne autour d’elle.
                </p>
                <p>
                    Il faut l’agrandir (si nécessaire) : cela implique de passer des heures chaque semaine à réfléchir
                    aux recrutements pertinents, à lire des CVs et faire passer des entretiens pour trouver les profils
                    qui viendront l’enrichir et la faire grandir.
                </p>
                <p>
                    Il faut la construire : une fois les profils recrutés il faut s’assurer que chacun trouve son
                    épanouissement personnel bien sûr, mais surtout qu’il s’intègre et fonctionne en collectif. La
                    communication et l’entraide sont la clé, les joueurs solo n’ont pas leur place. Mon rôle est donc
                    d’impliquer tout le monde et rabâcher en permanence les règles de communication et de fonctionnement
                    à plusieurs.
                </p>
                <p>Si la progression personnelle est une nécessité, chacun doit aussi aider les autres à s’élever.</p>
                <ul>
                    <p>
                        Pour que chacun puisse se concentrer sur lui-même, sur ses collègues et sur son travail il faut
                        donc créer un cadre propice à cela :
                    </p>
                    <li>
                        préparer le terrain en amont des développements (workflows, maquettes, designs, wordings,
                        conceptions techniques) pour limiter le nombre d’allers/retours lors du développement
                    </li>
                    <li>
                        mettre en place des process de développement stricts pour favoriser l’organisation, mais pas
                        trop pour ne pas brider l’autonomie et l’initiative protéger l’équipe technique des sujets
                        imprévus qui peuvent chambouler le travail en cours et les priorités du moment
                    </li>
                    <li>
                        synchroniser le travail des différentes personnes et services impliqués pour ajouter de la
                        fluidité dans le développement
                    </li>
                </ul>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <p className="-ml-4">
                        Si les développeurs sont dans l’opérationnel à court et moyen terme, l’objectif du CTO doit être
                        de penser au long terme et à la stratégie pour l’atteindre :
                    </p>

                    <li>identifier les problématiques à venir</li>
                    <li>
                        faire émerger (de l’équipe) l’infra et la stack voulues pour répondre aux problématiques
                        identifiées
                    </li>
                    <li>
                        concevoir une stratégie qui permettra de mettre en oeuvre les solutions à long terme tout en
                        continuant à produire au quotidien
                    </li>
                    <li>s’assurer que le plan de développement se déroule correctement</li>
                </ul>
                <p>
                    Au final, on prend des dizaines de micro-décisions chaque jour en espérant prendre plus souvent de
                    bonnes décisions que de mauvaises.
                </p>
                Passer de développeur à CTO n’est pas une transition aisée. Il faut prendre conscience et accepter que
                c’est un métier complètement nouveau pour lequel il n’existe ni formation, ni école. C’est un métier que
                l’on doit apprendre sur le tas et qui demande donc une remise en question permanente : sur les projets,
                sur l’équipe, sur l’entreprise mais sur soi avant tout.
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <p className="-ml-4">À titre personnel j’ai éprouvé trois grandes difficultés :</p>
                    <li className="font-bold">Le manque de légitimité</li>
                </ul>
                <p>
                    Pourquoi moi ? Parce que j’étais le plus “ancien” à ce moment-là ? J’ai longtemps pensé qu’être à la
                    tête d’une équipe technique impliquait nécessairement d’être la personne la plus compétente dans ce
                    domaine.
                </p>
                <p>
                    Même si la connaissance technique est un pré-requis important, “être le meilleur” n’en est pas un,
                    puisque développer n’est pas le coeur de ce métier : on est là pour manager.
                </p>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <p className="-ml-4">Lorsque l’on en prend conscience, tout va mieux !</p>
                    <li className="font-bold">Le manque de feedbacks</li>
                </ul>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <p className="-ml-4">
                        Comment savoir si l’on fait bien les choses lorsqu’il n’y a personne pour nous le dire ?
                    </p>

                    <li className="font-bold">Le sentiment d’improductivité</li>
                </ul>
                <p>
                    En tant que développeur on se sent facilement productif lorsque l’on ajoute/enlève du code. En tant
                    que CTO, on anticipe, on organise, on fluidifie mais nous ne sommes pas dans le “concret”. Peut-on
                    en déduire que notre boulot est bien fait tant qu’on a pas de problème majeur ?
                </p>
                <p>
                    Cette conception du métier de CTO est très personnelle, elle est le fruit de mes réflexions après un
                    an passé à la tête de l’équipe technique de{" "}
                    <Link
                        href={links.le_permislibre}
                        className="font-bold underline"
                        target="_blank"
                        rel="nooponer noreferrer"
                    >
                        lePERMISLIBRE
                    </Link>
                    . Je n’ai pas la prétention de penser qu’elle est universelle ou simplement valable.
                </p>
                <p>
                    Je suis persuadé que mon métier est différent de celui exercé par le CTO de Doctolib, qui a lui
                    aussi un métier différent du CTO de Google (voici un article à ce sujet que j’ai apprécié :{" "}
                    <Link
                        href={links.stages_of_CTO_career}
                        className="font-bold underline"
                        target="_blank"
                        rel="nooponer noreferrer"
                    >
                        5 stages of CTO career
                    </Link>
                    .
                </p>
                <p>
                    Chaque entreprise, chaque équipe est unique et ce métier doit s’adapter aux conditions dans
                    lesquelles il s’exerce. Je souhaitais simplement apporter mon retour sur expérience à ceux qui
                    seraient “promus” et deviendraient à nouveau débutant dans un métier qu’ils pensaient connaitre.
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
