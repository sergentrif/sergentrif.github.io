"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";

export default function ArticleFourthPage() {
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
                /Être le leader dont l’équipe a besoin
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-widest uppercase">
                Être le leader dont l’équipe a besoin
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                14/02/2024, ~6 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Être à un poste de dirigeant implique directement de savoir décider. Mais indirectement, cela
                    implique d’être un leader et de savoir faire preuve de leadership. Ces deux notions ont des
                    définitions différentes pour chacun. Cependant, nous pouvons dire qu’un leader doit savoir montrer
                    le chemin à suivre. Il doit savoir convaincre son équipe de l’y accompagner.
                </p>
                <p>
                    Cet article est la dernière partie d’une série axée sur les compétences à chercher chez un CTO. Si
                    vous n’avez pas encore lu le quatrième article, je vous encourage à le faire ici :&nbsp;
                    <Link
                        href="/articles/etre-cto-ou-l-art-de-representer-plusieurs-parties"
                        className="font-bold underline"
                    >
                        être CTO ou l’art de représenter plusieurs parties
                    </Link>
                </p>
                <p>
                    Pour montrer le chemin à suivre, il faut être en première ligne. Il y a une différence entre un chef
                    et un leader. Être l’un n’implique pas être l’autre. Pour être un bon CTO, mieux vaut savoir être
                    les deux.
                </p>
                <p>
                    Être le “chef” est un rapport hiérarchique. C’est donner des ordres et les voir suivis. C’est
                    souvent nécessaire pour que chaque membre d’une équipe respecte un plan et contribue à son succès.
                    Et ce, malgré les différentes opinions personnelles sur ce qu’il faudrait faire ou non.
                </p>

                <p>
                    Mais le leadership ne peut se réduire à cela. Un leader ne se contente pas de donner des ordres de
                    loin. Il ne se met pas à l’abri des éclaboussures. Il est le premier à affronter les obstacles.
                </p>

                <p>
                    Souvent, le CTO ne peut pas aider. Ses compétences peuvent être inutiles à un instant T. Pourtant,
                    il doit toujours être présent et faire de son mieux. Partager le fardeau est la seule. chose qui
                    importe. Ne jamais attendre des autres ce que l’on n’est pas prêt à faire soi même.
                </p>

                <p>
                    C’est le cas lorsque votre entreprise se fait attaquer par des pirates un week-end. De même quand
                    vous avez une mise en production à faire la nuit. Des personnes bien plus compétentes que le CTO
                    seront mobilisées pour traiter ces tâches. Être présent dans les situations difficiles prouve que
                    l’on reconnait l’implication et le travail fourni. Il faut le faire, même si la seule action à notre
                    portée est de détendre l’atmosphère.
                </p>

                <p>
                    Être présent permet de donner son accord pour des décisions prises dans le feu de l’action. C’est là
                    un gage de ré-assurance pour les équipes sur le terrain qui permet de diminuer la pression.
                </p>

                <p>
                    Pour décider d’un chemin à suivre, encore faut-il avoir plusieurs options sur la table. Pour guider,
                    encore faut-il avoir décidé d’une seule de ces options. Pour embrasser son rôle de leader, le CTO
                    doit mobiliser d’autres compétences qui l’aideront à construire une vision pour son entreprise.
                </p>

                <p>
                    S’il dispose d’une forte expertise technique, le CTO est en mesure de construire cette vision seul.
                    C’est probablement ce qu’il fera tant qu’il sera hands-on. Jusqu’à ce que l’équipe devienne trop
                    conséquente et que sa connaissance technique des projets régresse.
                </p>

                <p>
                    Si le CTO n’a pas d’expertise technique ou si l’équipe grandit, il faut que de nouveaux leaders
                    émergent dans l’entreprise. Le CTO doit apprendre à se mettre en retrait pour que la vision
                    technique provienne désormais de son équipe. Il doit prendre un rôle de mentor pour catalyser les
                    envies de chacun qu’il devra ensuite canaliser. Il est nécessaire de créer un climat d’échange pour
                    faire émerger de tous des idées, y compris des plus juniors. Ils ont une énergie débordante, souvent
                    un peu naïve. Mais elle apporte un vent de fraicheur salvateur.
                </p>

                <p>
                    Il est peu probable qu’une équipe de plusieurs individus se mettre d’accord sur la direction à
                    suivre. Et même lorsque cela est le cas, il est possible que cette direction ne soit pas alignée
                    avec la stratégie de l’entreprise. Elle peut être incompatible avec la vision d’autres départements,
                    y compris techniques. Décider d’une architecture event-driven sans que l’équipe infrastructure soit
                    staffée pour, serait une erreur.
                </p>

                <p>
                    C’est là où le CTO intervient à nouveau. Il doit prendre cette matière brute, ces idées mises sur la
                    table pour les transformer en un projet global et cohérent. Ses compétences en communication sont
                    mises à rude épreuve. Il doit être capable de refuser des idées, des projets ou des propositions
                    entières. Il doit s’assurer de la pertinence du résultat final. Ce sont des choix qu’il faudra
                    défendre. Il faudra réussir à embarquer toute l’entreprise pour leur mise en oeuvre et leur succès.
                </p>

                <p> La vision technique doit être pensée en adéquation avec les projets et besoins de l’entreprise.</p>

                <p>
                    Construire une vision technique à atteindre est la première étape à accomplir. C’est choisir la
                    destination à atteindre sur une carte routière. Il n’y a pas de bonnes ou de mauvaises destinations.
                    Il y a des destinations différentes, avec chacune leurs avantages et inconvénients.
                </p>

                <p>Mais une fois la destination choisie, il reste le trajet à faire.</p>

                <p>
                    Le CTO doit donc s’assurer qu’un plan de mise en oeuvre est conçu. Il devra s’appuyer sur les
                    compétences de son équipe pour le créer. Il faut réduire les risques au maximum pour augmenter les
                    chances de succès dans la réalisation.
                </p>

                <p>
                    Une fois le plan de mise en oeuvre validé, il reste le plus dur. Faire en sorte qu’il soit respecté,
                    que les différentes étapes planifiées sont bien atteintes les unes après les autres. Tout en sachant
                    s’adapter aux imprévu du quotidien.
                </p>

                <p>
                    Faire des choix et en assumer les responsabilités, qu’elles qu’en soit les conséquences. Décider
                    d’une destination et le chemin à emprunter. Là se trouve l’essence du leadership. Chaque décision a
                    un impact sur le futur de l’entreprise. Monolithe ou micro-services ? Démarrer une refonte ou ne pas
                    le faire ? Recruter un profil ou passer son tour ? Il faut savoir choisir pour avancer.
                </p>

                <p>
                    Beaucoup ont peur de l’échec et évitent donc de prendre des risques. Ils avancent, doucement. C’est
                    incompatible avec un rôle de leader. Un leader fait des erreurs. L’important est simplement de
                    prendre plus souvent de bonnes décisions que de mauvaises.
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
