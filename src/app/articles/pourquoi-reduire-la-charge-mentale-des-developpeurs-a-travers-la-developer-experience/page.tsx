"use client";

import Link from "next/link";
import { links } from "@/libs/constants";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";

export default function ArticlesPageFirstArticle() {
    return (
        <section className="flex flex-col justify-center items-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <div className="text-sm md:text-sm">
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>
                /
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>
                /Pourquoi réduire la charge mentale des développeurs à travers la&nbsp;
                <span className="italic">Developer Experience</span>&nbsp;?
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-widest uppercase">
                Pourquoi réduire la charge mentale des développeurs à travers la&nbsp;
                <span className="italic">Developer Experience</span>&nbsp;?
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                03/04/2024, ~8 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    J’ai récemment abordé la diversité des tâches que doivent traiter les développeurs au travers d’un
                    article nommé&nbsp;
                    <Link
                        href="/articles/etre-developpeur-c-est-bien-plus-que-developper"
                        className="font-bold hover:scale-105 underline md:whitespace-nowrap"
                    >
                        Être développeur, c’est bien plus que développer
                    </Link>
                    . Il est important d’avoir conscience de cette diversité de tâches, car elle est génératrice de
                    temps perdu. Et perdre du temps, c’est quelque chose que l’on veut éviter à tout prix.
                </p>
                <p>
                    Ce que l’on aimerai, c’est que les développeurs se concentrent sur le développement de
                    fonctionnalités. C’est cette tâche qui est directement génératrice de valeur pour l’entreprise.
                </p>
                <p>
                    En plus d’être chronophages, nombreuses de ces tâches sont désagréables pour les développeurs. Ils
                    ne prennent aucun plaisir à les réaliser !
                </p>
                <p>
                    La question la plus importante à laquelle nous allons essayer de répondre est donc :&nbsp;
                    <span className="font-bold">
                        pourquoi les développeurs perdent-ils du temps avec la multiplicité des tâches ?
                    </span>
                    &nbsp;Comprendre cela est crucial. Le temps, c’est de l’argent. Et une entreprise doit être
                    rentable.
                </p>
                <p>
                    Cela peut paraitre fou mais 100 tâches d’une heure prendront plus de temps à réaliser qu’une seule
                    tâche de cent heures. La multiplicité des tâches induit un effet secondaire. Plus il y a de tâches à
                    réaliser, plus il y a de temps passé à changer de tâche.
                </p>
                <p>
                    C’est ce que l’on appelle le <span className="italic">context switching</span>.
                </p>
                <p>
                    Pour chaque tâche que l’on arrête, il y a un temps de mise en pause qui est fixe. Pour chaque tâche
                    que l’on démarre, il y a un temps de préparation qui est fixe.
                </p>
                <p>
                    C’est comme lorsque devez choisir une file d’attente à la caisse du supermarché. Le plus important
                    n’est pas tant la quantité d’articles en attente à scanner. Le plus important, c’est surtout le
                    nombre de clients qui attendent. Pourquoi ? Car l’hôtesse de caisse doit réaliser, pour chaque
                    client, un nombre identique de tâches dont la durée est toujours la même : dire bonjour, annoncer le
                    montant à payer, demander le mode de règlement, attendre le règlement, [rendre la monnaie], donner
                    le ticket de caisse, dire au-revoir…
                </p>
                <p>
                    Pour un développeur, c’est la même chose : lire les spécifications demandées, créer une nouvelle
                    branche git, remettre à 0 son jeu de données de tests, sauvegarder son travail git, mettre en ligne
                    sa fonctionnalité…
                </p>
                <p>
                    Ces temps fixes peuvent être de l’ordre de plusieurs minutes à chaque fois. Et plus un développeur
                    change de tâches, plus ces temps vont s’additionner. À la fin de la journée cela peut représenter
                    plusieurs dizaines de minutes.
                </p>
                <p> Sur l’ensemble de votre équipe, cela représente des heures de perdues chaque jour.</p>
                <div>
                    Mais il y a encore plus chronophage. Lorsqu’il change de tâche, le développeur (comme tout le monde)
                    perd soudainement son état de concentration. Ce qui peut sembler anodin ne l’est pas.&nbsp;
                    <Link
                        href={links.etude_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:scale-105 underline whitespace-nowrap"
                    >
                        Cette étude
                    </Link>
                    &nbsp;prouve qu’il faut 20 minutes après un changement de tâche, pour retrouver sa pleine
                    concentration. 20 minutes durant lesquelles l’efficacité n’est plus à son apogée.
                </div>
                <div>
                    Développer est un métier de concentration. Les développeurs cherchent à atteindre&nbsp;
                    <Link
                        href={links.flow_state}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:scale-105 underline whitespace-nowrap"
                    >
                        l’état de flow
                    </Link>
                    . Un état où le temps ralenti et seule la tâche à accomplir existe. Pourtant, chacune des tâches
                    annexes, chacune des interruptions vont interrompre cet état.
                </div>
                <p>
                    L’ensemble de ces tâches que l‘on attends des développeurs ont donc un coût. Elles les forcent à se
                    rappeler de tout ce qu’ils doivent faire. Puis, de changer régulièrement d’activité. Perdant de
                    fait, temps et concentration. C’est ce que j’appelle, leur charge mentale.
                </p>
                <p>
                    En tant que managers, nous avons une responsabilité. Celle de tout faire pour réduire cette charge
                    mentale. Nous devons réduire le nombre de choses auxquelles ils doivent penser chaque jour. Ils
                    doivent se concentrer sur ce qui importe le plus : créer de la valeur business à travers le
                    développement.
                </p>
                <p>
                    Attention, souhaiter que les développeurs se concentrent sur le développement ne signifie pas
                    développer tout et n’importe quoi, à n’importe quel prix. L’idée est de leur faire gagner du temps
                    et de l’énergie pour des fonctionnalités qui ont un impact positif sur le business.
                </p>
                <p>
                    C’est dans cette quête de réduction de la charge mentale, que réside à mes yeux le concept et
                    l’intérêt de la&nbsp;<span className="italic">Developer Experience</span>. Et ce, à travers deux
                    questions fondamentales :
                </p>
                <ul className="list-decimal list-inside flex flex-col gap-1">
                    <li className="pl-1 ml-4">
                        Quelles sont les tâches sans valeur ajoutée, qui font perdre du temps aux développeurs ?
                    </li>
                    <li className="pl-1 ml-4">
                        Comment pouvons-nous faire pour qu’ils perdent moins de temps sur ces tâches ?
                    </li>
                </ul>
                <div>
                    David Heinemeier Hansson, le fondateur de Basecamp, a écrit&nbsp;
                    <Link
                        href={links.musk_algo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:scale-105 underline whitespace-nowrap"
                    >
                        The Musk Algorithm
                    </Link>
                    , un article qui tente de décrypter la méthode Elon Musk. Loin de me positionner sur ces deux
                    personnages controversés, la méthode proposée me semble hyper-pertinente.
                </div>
                <p>
                    Celle-ci repose sur le fait de supprimer tout ce qui est inutile au quotidien. Puis, de simplifier
                    ce qu’il reste et qui est donc utile. N’hésitez pas à challenger régulièrement l’ensemble de votre
                    organisation, vos processus ou vos rituels. Le moindre ajout, la moindre suppression, peut remettre
                    tout le reste en question. L’objectif est de&nbsp;<span className="font-bold">toujours</span>
                    &nbsp;avoir le&nbsp;
                    <span className="font-bold">minimum nécessaire</span>&nbsp;pour répondre à vos enjeux du moment.
                </p>
                <p>
                    C’est l’erreur que l’on voit le plus lorsqu’une entreprise veut devenir “agile” du jour au
                    lendemain. Elle prends l’ensemble des rituels recommandés par un framework et les impose tous
                    immédiatement. Hors, chaque rituel répond à une problématique précise. Si vous n’avez pas la
                    problématique, épargnez-vous le rituel ! Ce dernier ne fera qu’alourdir votre quotidien.
                </p>
                <p>
                    De même, il faut être pragmatique. Nous avons vu que chaque processus, chaque rituel, a un coût
                    (temps, charge mentale…). Si le gain obtenu grâce au processus est supérieur au coût du problème
                    initial, alors ce processus mérite d’être conservé. Mais si le gain n’est pas là, inutile d’en payer
                    le coût.
                </p>
                <div>
                    Dernièrement, Google a mené une étude qui s’appelle&nbsp;
                    <Link
                        href={links.computer_org}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:scale-105 underline"
                    >
                        Build Latency, Predictability, and Developer Productivity
                    </Link>
                    . Celle-ci démontre que le temps anticipé pour la réalisation d’une tâche automatique, influence les
                    développeurs dans le choix de ce qu’ils vont faire en attendant que cette tâche se termine.
                </div>
                <p>
                    Prenons l’exemple d’un développeur qui doit attendre que des tests automatisés se terminent pour
                    mettre en ligne sa fonctionnalité. Il ne fera pas la même chose si ces tests s’exécutent en une ou
                    vingt minutes. Si les tests mettent une minute à s’exécuter, il y a fort à parier que le développeur
                    se contentera d’attendre. Si les tests mettent 20 minutes à s’exécuter, le développeur cherchera
                    autre chose à faire en attendant.
                </p>
                <p>
                    Nous pourrions penser que c’est une bonne chose. Que chaque minute de son temps est utilisée à bon
                    escient. Or, c’est justement en changeant de tâche que se produit le phénomène de&nbsp;
                    <span className="italic">context switching</span>. C’est à ce moment-là que le développeur commence
                    à perdre temps et concentration. Une fois plongé pleinement dans sa nouvelle tâche, il risque
                    d’oublier qu’il attendait la fin de la première. Il le remarquera plus tard, mettant en ligne sa
                    fonctionnalité avec du retard. Tout en ayant subi 2 changements de tâche.
                </p>
                <p>
                    C’est là ou la phase d’accélération du Musk Algorithm prends tout son sens. En accélérant chaque
                    étape d’un processus, nous réduisons le temps total de son ensemble. Ce faisant, nous décourageons
                    le&nbsp;<span className="italic">context switching</span>, ce qui est bénéfique pour l’efficacité de
                    l’équipe.
                </p>
                <p> Des fois, attendre est la meilleure des chose à faire.</p>
                <p>
                    Il est légitime de vouloir rendre certaines tâches obligatoires dans le quotidien de votre équipe.
                    Que ce soit des tests à réaliser ou de la Code Review à faire, toutes ces tâches ont leur intérêt et
                    leurs inconvénients. Si elles sont pertinentes pour vous, si vous en acceptez le coût pour
                    bénéficier de leur gain, alors, une seule chose est importante. Supprimer la charge mentale associée
                    à ces tâches.
                </p>
                <p>
                    Pour faire simple, vous devez les automatiser pour que plus personne n’ait à y penser. Puis, vous
                    devez les accélérez pour que les développeurs attendent leur déroulement, sans changer de sujet.
                </p>
                <p>
                    Investir dans la&nbsp;<span className="italic">Developer Experience</span>, c’est investir dans
                    l’efficacité de votre équipe technique. En plus de perdre moins de temps, vos développeurs
                    travaillent dans de bonnes conditions. Investir dans le moral de vos collaborateurs, c’est réduire
                    votre taux de turnover.
                </p>
                <BottomContactBox />
            </div>
        </section>
    );
}
