"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";

export default function ArticleFithPage() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 md:px-36 sm:px-12 px-4 w-full max-w-6xl">
            <TopArticleSection />
            <div className="text-sm md:text-sm">
                <Link href="/" className="hover:underline italic font-bold whitespace-nowrap">
                    Accueil
                </Link>
                /
                <Link href="/articles" className="hover:underline italic font-bold whitespace-nowrap">
                    Articles
                </Link>
                /Être CTO ou l’art de représenter plusieurs parties
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Être CTO ou l’art de représenter plusieurs parties
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                06/02/2024, ~6 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    En tant qu’intermédiaire, le CTO représente plusieurs interlocuteurs différents. D’abord, il
                    représente l’équipe technique auprès des dirigeants. Ensuite, il représente les dirigeants auprès de
                    l’équipe technique. Enfin, il représente l’entreprise auprès du monde extérieur.
                </p>
                <p>
                    Cet article est la quatrième partie d’une série axée sur les compétences à chercher chez un CTO. Si
                    vous n’avez pas encore lu le troisième article, je vous encourage à le faire ici :&nbsp;
                    <Link href="/articles/savoir-communiquer-au-coeur-du-role-de-cto" className="font-bold underline">
                        savoir communiquer, au cœur du rôle de CTO
                    </Link>
                </p>
                <p>
                    Cette position centrale vient avec son lot de difficultés que beaucoup ont du mal à endosser. Ils
                    finissent par “choisir un camp” entre l’équipe qu’ils managent et la direction. Peu importe le choix
                    qui est fait. Le simple fait de s’être positionné se traduira par une perte de légitimité envers
                    l’autre partie.
                </p>
                <p>
                    Le CTO doit donc apprendre à jongler efficacement. Il doit savoir promouvoir son équipe, sans tomber
                    dans une adoration aveugle. Il doit être objectif sur les forces et faiblesses des individus, pour
                    les challenger et les aider à progresser. Trouver des excuses en cas de problème et se voiler la
                    face ne fera grandir personne. Cela ne servira pas non plus les intérêts de l’entreprise.
                </p>
                <p>
                    Beaucoup de leaders adoptent cette posture de facilité. Ce faisant, ils ne s’élèvent pas au dessus
                    de leur équipe pour la servir comme il le faut. Ils restent bloqués à l’intérieur de celle-ci. Cette
                    approche semble pour beaucoup, plus humaine et plus bienveillante. Toutefois, elle posera des
                    problèmes de responsabilité. Être un bon représentant, être un bon leader, c’est savoir prendre des
                    décisions difficiles. C’est parfois acter qu’un membre de l’équipe n’a plus sa place dans celle-ci.
                    Il est impossible de prendre ce genre de décisions lorsque l’on est à l’intérieur de l’équipe. Il ne
                    faut jamais oublier les conséquences humaines que représentent ces décisions.
                </p>
                <p>
                    S’il faut être capable de toujours dire les choses, cela implique de savoir féliciter et
                    récompenser. Lorsque les choses sont bien faites, il faut le verbaliser. Être juste et dire du
                    positif est la condition requise pour se permettre de dire du négatif. Sinon, les critiques seront
                    systématiquement perçues comme non objectives. Elles seront vues comme un moyen de dénigrer les
                    individus alors qu’il faut les aider à progresser.
                </p>
                <p>Une main de fer dans un gant de velours en somme.</p>
                <p>
                    Le CTO doit donc savoir dire les choses à son équipe, qu’elles soient positives ou négatives. Mais
                    il doit être en mesure de faire le même exercice envers les dirigeants de l’entreprise. Sa mission
                    est de mettre la technique au service des intérêts économiques de l’entreprise. Pour réussir cela,
                    il faut parfois contrarier les opinions des uns et des autres.
                </p>
                <p>
                    Certaines décisions difficiles mais nécessaires devront être présentées et défendues auprès des
                    équipes. C’est le cas lorsque l’on abandonne un projet sur lequel certains ont travaillé durant
                    plusieurs semaines. D’autres fois, certaines idées vont venir desservir les intérêts de
                    l’entreprise. Par exemple, lorsque l’on souhaite lancer trop de projets en simultané. Cela aura un
                    impact sur les chances de réussite de chacun de ces projets.
                </p>
                <p>
                    C’est le rôle du CTO que d’anticiper les impacts des demandes des dirigeants et de les prévenir des
                    risques qui y sont liés. Il a un rôle de conseil et doit être capable de dire ce qu’il pense. Même
                    s’il est persuadé que les dirigeants se trompent.
                </p>
                <p>
                    Attention, ces discussions doivent bien sûr avoir lieu en vase clos. À la fin, qu’elle que soit la
                    décision adoptée, le CTO doit être capable de s’y plier et la défendre. Même si elle ne lui plait
                    pas. Il est une voix au sein des dirigeants mais n’est pas la direction à lui seul. Selon son statut
                    (associé, freelance…), son poids dans la décision retenue ne sera pas non plus le même.
                </p>
                <p>
                    En tant que représentant technique, il est nécessaire que le CTO aie cette légitimité auprès de
                    toutes les parties. Il doit savoir de quoi il parle, en le simplifiant lorsqu’il s’adresse à des
                    personnes non techniques. Il doit comprendre les enjeux des échanges de son équipe pour les
                    challenger. Nul besoin d’être le meilleur, seulement le plus polyvalent. Avoir été sur le terrain à
                    une période de sa carrière pour en comprendre les concepts me semble être un pré-requis au rôle.
                </p>
                <p>
                    En tant que leader et représentant, il est important qu’il tire chacun vers le haut et lui donne
                    envie de progresser. Pour cela, il ne doit jamais s’attribuer la moindre réussite. Il doit toujours
                    mettre en avant les personnes qui ont contribué au succès d’un projet.
                </p>
                <p>
                    Le CTO va mettre en place la vision, la stratégie et faire des choix décisifs. Mais c’est rarement
                    lui qui va façonner et donner vie aux projets. C’est l’équipe en charge de la bonne exécution qui
                    devra être félicitée et récompensée pour le travail accompli.
                </p>
                <p>
                    Inversement, les échecs doivent être collectifs. Aucun individu à l’exception du CTO ne doit porter
                    seul, la responsabilité d’une erreur. Lorsqu’un projet échoue, il faut chercher la responsabilité au
                    niveau hiérarchique supérieur de ceux qui ont travaillé. Même dans une organisation où chacun
                    travaille en grande autonomie. Les responsables ont toujours un droit de regard sur ce qui est fait.
                    S’ils l’exercent et que cela échoue, cela devient leur erreur. S’ils ne l’exercent pas et que cela
                    échoue, ils auraient du l’exercer.
                </p>
                <p>
                    En tant que dirigeant, ne recrutez jamais un directeur qui s’attribue à lui seul les réussites de
                    son équipe. En cas de problème, il n’assumera pas ses responsabilités et cherchera un bouc émissaire
                    à qui faire porter le chapeau.
                </p>
                <p>
                    Représenter est un jeu d’équilibre. Il faut sortir des émotions et adopter une posture objective,
                    une posture de neutralité. Envers son équipe mais aussi envers les dirigeants. L’objectif est
                    toujours le même pour le CTO : faire en sorte que son équipe atteigne les objectifs de l’entreprise.
                </p>
                <p>
                    Vous découvrirez la dernière des compétences d’un bon CTO en vous rendant sur l’article suivant :
                    &nbsp;
                    <Link href="/articles/etre-le-leader-dont-l-equipe-a-besoin" className="font-bold underline">
                        être le leader dont l’équipe a besoin.
                    </Link>
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
