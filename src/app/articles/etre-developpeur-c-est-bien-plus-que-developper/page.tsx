"use client";

import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";
import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";

export default function ArticlesPageSecondArticle() {
    return (
        <section className="flex flex-col justify-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <div>
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>
                /
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>
                /Être développeur, c’est bien plus que développer
                <span className="italic">Developer Experience</span>&nbsp;?
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-widest uppercase">
                Être développeur, c’est bien plus que développer
            </h2>
            <InfoBoxArticle className="self-start -mt-8">14/03/2024, ~12 minutes de lecture</InfoBoxArticle>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <p>
                    Vous côtoyez des développeurs dans le cadre de votre travail ? Alors, il y a de fortes chances que
                    vous n’ayez aucune connaissance de ce qu’ils font au quotidien. Beaucoup pensent que développer est
                    un métier facile. Après tout, il suffit d’écrire du code puis de le mettre en production en évitant
                    les bugs.
                </p>
                <p>
                    Si vous êtes dans cette situation, ce n’est pas grave. Vous n’êtes pas le seul. Être incompris est
                    le fardeau des métiers techniques. Et en même temps, c’est normal. Ces métiers nécessitent des
                    compétences qui ne s’acquièrent qu’avec une formation spécifique.
                </p>
                <p>
                    C’est pourquoi, nous allons découvrir ensemble les tâches qui occupent le quotidien des
                    développeurs. Celles dont ils doivent s’acquitter pour réussir les projets qui leur sont demandés.
                    Vous comprendrez pourquoi il est difficile d’estimer le temps d’un projet. Et donc, pourquoi les
                    délais sont souvent plus longs que prévus.
                </p>
                <p> J’ai divisé l’ensemble des ces tâches en six catégories distinctes.</p>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Les pré-requis du développement
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        Ces tâches sont un fil rouge qui suit les développeurs tout au long de leur carrière. Bien sûr,
                        elles peuvent être ignorées. Mais cela serait au détriment de la réputation (satisfaction, bad
                        buzz) et des finances (amendes) de l’entreprise.
                    </p>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Ne pas créer de failles de sécurité</span> : chaque développement
                        induit un risque de sécurité en augmentant la surface d’exposition. Le développeur doit veiller
                        à ce que les données confidentielles des utilisateurs ne soient pas exploitables par n’importe
                        qui. Par ailleurs, des attaquants ne doivent pas pouvoir infiltrer les réseaux et les machines
                        de l’entreprise.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Respect les contraintes imposées par la RGPD</span> : personne
                        n’aime ça. Mais c’est une obligation légale qui va dans le sens de l’utilisateur. Le développeur
                        doit respecter les règles en vigueur, à chaque nouvelle fonctionnalité.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Maintenir un bon niveau de performances applicatives</span> : il est
                        très facile de dégrader une application. Une petite fonctionnalité peut avoir de gros impacts.
                        Les choix techniques diffèrent en fonction du nombre d’utilisateurs et de fonctionnalités du
                        projet. C’est pourquoi, les développeurs doivent y penser en permanence. Ils devront faire
                        évoluer les technologies plusieurs fois durant la vie de l’entreprise.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Maintenir un bon niveau de disponibilité applicative</span> : il est
                        très facile de rendre indisponible une application. Les développeurs doivent travailler à la
                        sécurité du projet et ses performances. Ils doivent aussi mettre en place des mécanismes pour
                        garantir l’accès à l’application. Certaines entreprises ont des objectifs forts à ce sujet.
                        Votre prestataire de paiements ne doit pas être indisponible, ne serait-ce que quelques heures.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Maintenir un code lisible</span> : écrire du code, c’est raconter
                        une histoire. Il y a une infinité de façons de l’écrire, toutes différentes. Sauf qu’ici, le
                        livre se rédige à plusieurs. Cela veut dire que ce qu’un développeur écrit, doit être compris
                        par les autres. Et ce, même si le développeur en question a quitté l’entreprise depuis des
                        années. Si plus personne ne comprends comment a été conçu votre projet, alors ce dernier ne
                        pourra plus évoluer.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">[Mettre à jour les données en temps réel]</span> : plus optionnel
                        que les autres, ce pré-requis s’applique à certaines entreprises ou certaines fonctionnalités
                        précises. Mettre à jour des données en temps réel pour les utilisateurs n’est pas toujours
                        simple. Si c’est un besoin fort, c’est une contrainte supplémentaire à intégrer au
                        développement.
                    </li>
                </ul>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Le processus de développement
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        Ici, aucune obligation de réaliser l’ensemble de ces tâches. Selon l’entreprise, ses pratiques
                        et sa culture, certaines pourraient même ne pas exister. Dans certains cas, les tâches peuvent
                        être assignées à des personnes différentes. Selon le niveau d’expertise et d’expérience, toutes
                        n’auront pas le même rôle. En pratique, les développeurs se retrouvent souvent à en faire la
                        majeure partie.
                    </p>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Collaborer avec l’équipe produit</span> : lorsque l’entreprise
                        dispose d’une culture produit forte, les développeurs consacrent du temps à penser les
                        fonctionnalités avec les designers. Ils les aident à valider les faisabilités techniques,
                        modifiant les maquettes le cas échéant.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Concevoir techniquement les développements</span> : on ne monte pas
                        un meuble sans regarder la notice. Pour un développeur, c’est la même chose. Il ne devrait pas
                        développer sans savoir ce qu’il doit faire au préalable. À la seule différence, qu’il est
                        lui-même en charge de rédiger la notice.
                    </li>

                    <li className="pl-1 ml-4">
                        <span className="font-bold">Prendre connaissances des tâches attendues</span> : dans certains
                        cas, ce n’est pas le développeur en charge du développement qui a rédigé les spécifications
                        techniques. La première étape de son travail sera donc de comprendre ce qui est attendu, donc ce
                        qu’il doit faire.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Estimer le temps de travail nécessaire</span> : toutes les
                        entreprises et tous les projets ne requièrent pas d’estimation. Cependant, cela reste une
                        pratique très fréquente. L’équipe qui prépare son travail à venir est souvent en charge de
                        l’estimer temporellement. Cela permet de donner de la visibilité au reste de l’entreprise.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Développer les fonctionnalités</span> : c’est le coeur du métier de
                        développeur. C’est là qu’il transforme des idées et des concepts, en lignes de code tangibles
                        qui leur donneront vie.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Tester son travail</span> : certaines entreprises ont des équipes
                        dédiées d’
                        <Link
                            href={links.assur_quality}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:scale-105 underline"
                        >
                            Assurance Qualité
                        </Link>
                        &nbsp;pour gérer cette étape. Pour les autres, il est attendu que le développeur procède à une
                        batterie de tests. Il doit s’assurer que son travail fonctionne correctement, sans (trop) de
                        bugs. On trouve des tests&nbsp;<span className="italic">manuels</span>&nbsp;à réaliser, mais
                        aussi des tests&nbsp;
                        <span className="italic">automatiques</span>&nbsp;à rédiger (tests unitaires, tests
                        fonctionnels, tests end to end, monkey testing…)
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Corriger son code</span> : les bonnes pratiques attendent des
                        développeurs qu’ils relisent et approuvent le code écrit par leurs collègues. Cela implique que
                        souvent, le code n’est pas approuvé dès la première lecture. L’auteur d’une fonctionnalité devra
                        donc ré-écrire certaines parties de son code pour valider l’étape de relecture.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Corriger les conflits</span> : lorsque de nombreux développeurs
                        travaillent sur une base de code partagée, plusieurs d’entre eux modifient souvent la même
                        fonctionnalité au même moment. Cela résulte en des conflits que les développeurs devront
                        résoudre.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Mettre en production sa fonctionnalité</span> : la finalité d’un
                        développement est sa mise en ligne. Cette étape peut être très simple en fonction du processus
                        de déploiement ainsi que de la nature de la fonctionnalité. Un changement de wording en&nbsp;
                        <Link
                            href={links.deployment_continuity}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:scale-105 underline"
                        >
                            déploiement continu
                        </Link>
                        &nbsp; sera simple et rapide. Une migration de base de données en déploiement manuel le sera
                        beaucoup moins.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Rédiger la documentation</span> : pour simplifier le travail des
                        autres développeurs, il est recommandé de documenter le code qui a été écrit. Cela les aidera à
                        utiliser ou faire évoluer la fonctionnalité.
                    </li>
                </ul>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Le Service Après-Vente
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        Le travail ne se termine pas lorsqu’une fonctionnalité est mise en production. Il débute
                        seulement. Dès lors que quelque chose existe en production, il faut le maintenir, le corriger et
                        le faire évoluer.
                    </p>

                    <li className="pl-1 ml-4">
                        <span className="font-bold">Assurer le support technique</span> : une fois les fonctionnalités
                        mises en production, ces dernières doivent fonctionner correctement. Elles ne doivent pas avoir
                        de bugs ou en créer dans d’autres fonctionnalités. Les développeurs doivent consacrer du temps à
                        la surveillance automatisée des projets, que l’on appelle le&nbps;
                        <Link
                            href={links.monitoring}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:scale-105 underline"
                        >
                            monitoring
                        </Link>
                        &nbps;. Ils doivent aussi participer au support technique humain des utilisateurs.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Annuler les mises en production</span> : lorsqu’un bug est détecté,
                        une mesure de précaution consiste en un retour en arrière de l’application. Au moins, le temps
                        de corriger le problème. Selon les outils à disposition du développeur, cette étape peut prendre
                        du temps.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Corriger les bugs</span> : ils font partie intégrante du quotidien.
                        Il est impossible de développer un projet sans en créer. Il faut par contre les résoudre.
                        Corriger un bug, c’est d’abord le comprendre. Le développeur doit se mettre dans les mêmes
                        conditions d’apparition pour le reproduire. Une fois cette tâche réussie, il pourra identifier
                        ce qui ne marche pas et développer un correctif.
                    </li>
                </ul>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Les imprévus du quotidien
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        Nous aimerions que tout se déroule toujours comme nous le souhaitons. Mais c’est rarement le
                        cas. Les journées sont rythmées par de nombreux imprévus qui tombent toujours au moment le moins
                        opportun.
                    </p>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Gérer les incidents techniques</span> : un datacenter qui prends
                        feu, un prestataire qui tombe, une attaque de hackers… De nombreux éléments peuvent mettre à mal
                        vos applications. Et ce, sans que votre équipe n’en soit responsable. Nous pouvons anticiper au
                        mieux et travailler à la résilience, mais le risque 0 n’existera jamais. Par contre, les
                        développeurs seront toujours mobilisés pour trouver des solutions dans le feu de l’action.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Répondre aux questions du métier</span> : même avec la meilleure
                        documentation, il y aura toujours quelqu’un pour solliciter un développeur et lui demander de
                        lui expliquer le fonctionnement d’une fonctionnalité.
                    </li>

                    <li className="pl-1 ml-4">
                        <span className="font-bold">Développer des fonctionnalités au dernier-moment</span> : un code
                        promotionnel unique à créer pour signer un deal, une demande importante du CEO à faire de toute
                        urgence, rembourser automatiquement 1000 clients pour faire gagner du temps au service
                        comptable… De nombreuses demandes arrivent sur le bureau des développeurs sans passer par le
                        processus de priorisation classique.
                    </li>
                </ul>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Aider les autres développeurs
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        Ils ont beau être seuls devant leur ordinateur, développer est un travail collectif. Certains
                        des meilleurs développeurs ne consacrent d’ailleurs aucun temps à développer. Pourtant, s’ils
                        n’étaient pas là, la productivité de toute l’équipe en souffrirait.
                    </p>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Approuver les conceptions techniques</span> : pour garantir la
                        cohérence d’un système dans son ensemble, il est important que tous les développeurs respectent
                        les mêmes façons de faire. Il est recommandé que chaque conception technique réalisée par un
                        développeur, soit relue et validée par un autre.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Approuver les développements réalisés</span> : nous l’avons vu, il y
                        a souvent un processus de&nbsp;
                        <Link
                            href={links.code_review}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:scale-105 underline"
                        >
                            Code Review
                        </Link>
                        &nbsp; en place. Cela garantit une uniformisation des développements, en réduisant le risque de
                        bugs grâce à un regard extérieur. Chaque développeur doit donc relire le travail des autres.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Accompagner les autres développeurs</span> : de temps en temps, les
                        développeurs n’arrivent pas à résoudre seuls, les problèmes auxquels ils font face. Ils ont
                        besoin d’homologues, pour les écouter et les aider
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">Former les autres développeurs</span> : une équipe est aussi forte
                        que son élément le plus faible. C’est pourquoi, il est important de faire progresser tout le
                        monde. Les développeurs expérimentés doivent transmettre leur savoir aux autres. Pour cela, de
                        nombreux formats existent tels que des ateliers collectifs ou individuels.
                    </li>
                </ul>
            </div>
            <h3 className="font-brico-gro lg:text-[2rem] md:text-3xl text-lg font-bold tracking-widest uppercase">
                Se former soi-même
            </h3>
            <div className="flex flex-col gap-10 px-4 text-brand-fine-blue">
                <ul className="list-disc list-outside flex flex-col gap-5">
                    <p>
                        L’informatique est un univers en perpétuelle évolution. Un développeur qui ne se forme pas est
                        un développeur qui sera vite obsolète. Une carrière professionnelle dure en moyenne 40 ans. Les
                        développeurs doivent rester à jour durant toute cette période.
                    </p>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">
                            Faire de la{" "}
                            <Link
                                href={links.veille_tech}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:scale-105 underline"
                            >
                                veille technique
                            </Link>
                        </span>{" "}
                        : il est important que les développeurs soient au courant des nouveautés techniques et des
                        évolutions des bonnes pratiques. C’est ce qui permettra à votre projet d’évoluer et de continuer
                        à rester compétitif. Pour réussir cela, ils doivent investir du temps dans l’auto-formation.
                    </li>
                    <li className="pl-1 ml-4">
                        <span className="font-bold">
                            Développer des{" "}
                            <Link
                                href={links.concept_proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:scale-105 underline"
                            >
                                Proof Of Concept
                            </Link>
                        </span>{" "}
                        : lorsqu’une technologie semble avoir du potentiel pour votre entreprise, il est important de
                        laisser certaines personnes le vérifier. Cela permet de ne pas s’engager tête baissée dans une
                        évolution qui ne serait pas viable.
                    </li>
                </ul>
                <p>
                    Le développement n’est finalement qu’une petite partie de l’activité des développeurs. Toutes les
                    autres tâches sont soi à son service, soit des obstacles à son bon déroulement.
                </p>
                <p>
                    C’est souvent cela qui est vecteur d’incompréhension entre le métier et la technique. Lorsque nous
                    souhaitons le développement d’une fonctionnalité, nous ne nous rendons pas compte du nombre de
                    tâches annexes à celle-ci. Les développeurs aussi font souvent cette erreur. Quand ils estiment le
                    temps nécessaire à un projet, ils n’intègrent en général que le processus de développement en
                    lui-même.
                </p>
                <p>
                    Et c’est d’ailleurs sur le développement que l’on aimerait qu’ils se concentrent. C’est cette tâche
                    qui est directement génératrice de valeur pour le projet ou l’entreprise.
                </p>
                <p>
                    Pour maximiser le temps consacré à générer de la valeur, il est important de trouver comment réduire
                    le temps consacré aux tâches annexes. Si vous souhaitez savoir comment faire, rendez-vous dans mon
                    article suivant :{" "}
                    <Link
                        href="/articles/pourquoi-reduire-la-charge-mentale-des-developpeurs-a-travers-la-developer-experience"
                        className="font-bold hover:scale-105 underline"
                    >
                        pourquoi réduire la charge mentale des développeurs à travers la Developer{" "}
                        <span className="whitespace-nowrap">Experience ?</span>
                    </Link>
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
