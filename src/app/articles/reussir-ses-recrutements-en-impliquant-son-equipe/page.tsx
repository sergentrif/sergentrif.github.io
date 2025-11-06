"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";

export default function ArticleThirdPage() {
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
                /Réussir ses recrutements en impliquant son équipe
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Réussir ses recrutements en impliquant son équipe
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                15/02/2024, ~10 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Au cours des dernières années, j’ai conduit des centaines d’entretiens de recrutement. Cela n’a
                    jamais été un exercice que j’apprécie particulièrement. Pourtant, je suis persuadé que c’est la
                    tâche la plus importante à traiter. Et ce, même si l’on pense ne pas en avoir le temps.
                </p>
                <p>
                    Recruter les bonnes personnes peut conduire une entreprise vers le succès. L’inverse est tout aussi
                    vrai. Je m’étais donc fixé pour objectif de construire la meilleure équipe technique possible.
                </p>
                <p>
                    Le marché du recrutement de développeurs est complexe. La demande est supérieure à l’offre. Beaucoup
                    d’entreprises se battent pour trop peu de candidats. Et si comme moi vous voulez les meilleurs,
                    alors la concurrence est rude sur leurs profils. Les entreprises rivalisent pour se démarquer :
                    salaires élevés, avantages en tous genres… J’ai vu des profils juniors être embauchés en sortie
                    d’école entre 55K€ et 60K€ brut annuel.
                </p>
                <p>
                    Impossible de s’aligner. Toutes les entreprises n’ont pas des moyens aussi importants. Toutes ne
                    peuvent pas se permettre des salaires plus élevés que la norme du marché.
                </p>
                <p>
                    Alors, comment attirer les meilleurs profils lorsque l’on ne peut pas s’aligner sur les conditions
                    matérielles ?
                </p>
                <p>
                    La première chose à faire est de mettre en place les évidences : une mutuelle décente, une
                    contribution aux transports et aux repas, une politique de télétravail flexible… Il faut montrer que
                    l’entreprise n’est pas juste là pour tirer profit des employés. Elle cherche aussi leur rendre la
                    pareille.
                </p>
                <p> Mais ensuite ? Je suis convaincu qu’il faut remettre l’humain au coeur de tout.</p>
                <p>
                    Nous avons repensé notre processus de recrutement à travers deux convictions clés. Le parcours doit
                    être exigeant et l’équipe en place doit y participer à 100%. Recruter n’est pas la corvée des RH.
                    Ils doivent bien sûr intervenir, mais surtout en début et fin de parcours.
                </p>
                <p>
                    En début de parcours, pour pré-filtrer les candidats qui seront reçus par l’équipe de développement.
                    Ces derniers ont un métier de concentration et chaque interruption est préjudiciable. Il faut
                    s’assurer que les profils qu’ils rencontreront sont qualifiés. Ils doivent avoir des chances
                    concrètes de réussir le parcours de recrutement.
                </p>
                <p> En fin de parcours, pour s’occuper des démarches administratives et finaliser l’embauche.</p>
                <p> Et entre ces deux entretiens RH, nous avons mis en place 3 entretiens techniques.</p>
            </div>

            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Vendre un projet
            </h2>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Le premier entretien doit être conduit par le CTO ou un responsable technique. C’est un entretien
                    commercial. Il faut donner envie aux candidats de rejoindre l’entreprise. Ce n’est pas la stack
                    technique qui les fait rêver. Ce qu’il faut mettre en avant, c’est une vision, une mission et une
                    équipe. Un projet en somme.
                </p>
                <p>
                    Bien sûr, les choix de technologies et de méthodes de développement vont aider. Mais finalement,
                    c’est la cerise sur le gâteau. Nombreux sont les candidats prêts à rejoindre un projet incroyable
                    avec des bases bancales. Peu ont envie d’un projet inintéressant très bien exécuté.
                </p>
                <p>
                    Cet entretien a pour vocation de convaincre le candidat à rejoindre l’aventure. Cela aide aussi
                    l’entreprise à savoir si elle désire recruter le candidat.
                </p>
                <p>
                    Il faut toujours savoir arrêter un processus de recrutement le plus tôt possible. Le temps de chacun
                    est précieux. Il est inutile d’infliger à un candidat des heures d’échanges si l’on sait que ça
                    n’aboutira pas. J’ai parfois mis un terme à des recrutements durant l’entretien en lui-même. Cela
                    peut sembler brutal. Toutefois, laisser quelqu’un tenter d’aller au bout de quelque chose qu’il ne
                    comprends pas, n’est pas un cadeau à faire.
                </p>
                <p>
                    Pour limiter les pertes de temps, j’ai pour habitude de commencer par les questions les plus
                    litigieuses. Les modalités de télétravail en font souvent partie.
                </p>
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Valider les compétences techniques
            </h2>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Le deuxième entretien est un exercice technique. En général, j’ai pour habitude de faire des
                    exercices de conception ou de modélisation (base de données, API, UML). Maitriser des technologies
                    ne m’intéresse pas, elles peuvent s’apprendre rapidement. Synthétiser un problème complexe en
                    architecture simple et une compétence primordiale, plus difficile à assimiler.
                </p>
                <p>
                    Cet entretien dure en général 2 heures dont une heure d’exercice et une heure d’échange. Il me
                    semble inutile et irrespectueux d’en demander plus à un postulant. Son temps aussi est précieux.
                </p>
                <p>
                    Ici, la conduite de cet entretien est toute indiquée pour un responsable technique et un membre de
                    son équipe. Cet entretien est axé sur les compétences techniques. Il est essentiel que les personnes
                    qui interviennent soient expertes dans ce domaine. Si l’on cherche à recruter un développeur
                    backend, l’entretien doit être conduit par un lead backend et un autre développeur backend.
                </p>
                <p>
                    J’aime le format de conception car il pousse à l’échange. Comprendre le pourquoi des choix et les
                    challenger avec de nouvelles problématiques. Voir le candidat appréhender les impacts des
                    changements, ou non. Je suis vieux jeu à ce sujet mais des feuilles de papier et un tableau blanc
                    sont les seuls éléments nécessaires.
                </p>
            </div>

            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Valider le fit humain
            </h2>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Si l’entretien technique s’est bien passé, alors démarre le dernier entretien. Son objectif est de
                    faire rencontrer au candidat, des personnes avec qui il travaillera. 3 personnes me semble être le
                    bon chiffre. En mettre plus s’apparenterait à de l’intimidation.
                </p>
                <p>
                    Si notre candidat est un profil backend, inutile de mettre des membres de l’équipe backend. Ces
                    compétences auront déjà été validées lors de l’entretien précédent. Nous allons plutôt chercher une
                    diversité de profils complémentaires. Ici, un développeur frontend, un data analyst et un product
                    manager seraient adéquats. L’idée est de cercler au mieux l’ensemble des interactions que le
                    candidat doit être en mesure d’avoir par la suite.
                </p>
                <p>
                    Il est toujours bien d’avoir des profils seniors et chevronnés dans cet entretien. Mais il faut
                    aussi faire participer des profils plus juniors. Ils sont plus à même de détecter les qualités de
                    leadership et de mentorat nécessaires à un bon équilibre dans l’équipe.
                </p>
                <p>
                    Cet entretien peut sembler informel et il doit l’être dans la forme. Cela peut être une visio d’une
                    heure ou bien un déjeuner au restaurant. Néanmoins, il est aussi important que les autres et
                    l’équipe doit rester intransigeante. C’est peut-être la dernière étape mais elle peut être échouée.
                </p>
                <p>
                    Au niveau du contenu, chacun posera des questions quant à son domaine d’expertise. Il faut réussir à
                    se projeter sur ce à quoi ressembleront les échanges futurs. Attention à ne pas faire doublon avec
                    les sujets abordés dans les entretiens préalables.
                </p>
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Oui ou non, il faut faire un choix
            </h2>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    À ce stade, le candidat a donc vu 6 personnes sans compter les RH. Il est temps de décider s’il
                    pourra rejoindre l’équipe.
                </p>
                <p>
                    Le format le plus intéressant est de faire voter à bulletin secret, chaque personne qui a participé
                    au processus de recrutement. Le vote doit avoir lieu immédiatement avant que les uns et les autres
                    aient eu le temps de s’échanger leurs avis. Les opinions doivent rester personnelles. Les votes
                    doivent être binaires. Oui ou non. Il est interdit de mettre un “… mais …”.
                </p>
                <p>
                    Une fois ces votes en votre possession, il est l’heure d’animer le débat. Chacun doit prendre la
                    parole pour annoncer son vote et expliquer sa décision. Ici, l’échange et le désaccord sont
                    fortement encouragés. C’est le dernier moment pour relier les points et mieux cerner la personnalité
                    du postulant.
                </p>
                <p>
                    Lorsque chacun a pu s’exprimer, vous pouvez refaire un vote pour voir si certains avis ont évolué
                    suite au débat.
                </p>
                <p>
                    En cas d’accord total, il n’y a pas de raison de tergiverser. Vous pouvez faire une proposition à
                    votre candidat immédiatement.
                </p>
                <p>
                    Avoir moins 30% de désaccord est acceptable. Vous pouvez faire votre proposition sans crainte. Vous
                    pouvez aussi ne pas la faire. C’est au responsable de prendre cette décision et de trancher selon ce
                    qu’il a entendu.
                </p>
                <p>
                    Au dessus de 30% de désaccord, il y a un doute. Et lorsqu’il y a un doute il n’y en a pas. Ne faites
                    pas de proposition.
                </p>
                <p>
                    En utilisant cette méthode de recrutement, j’ai obtenu 100% d’acceptation à mes propositions. Et ce,
                    même lorsque le salaire proposé était inférieur à ce que la concurrence offrait au candidat.
                </p>
                <p>
                    Ce n’est pas parce qu’il y a plusieurs étapes, qu’il faut forcément que ce soit long. Il est tout à
                    fait possible d’enchainer les entretiens si le candidat est disponible. Attention, il est
                    intéressant de laisser 48 heures après chaque entretien pour digérer ce qu’il s’est passé. Cela
                    permet de se forger un avis objectif. Passé ce délai, il faut rapidement donner sa réponse au
                    candidat. Même si on le refuse, c’est une question de respect pour le temps consacré.
                </p>
                <p> Alors pourquoi ça fonctionne ?</p>
                <p>
                    Pour votre équipe déjà, c’est valorisant. Les développeurs sont impliqués dans le processus de
                    recrutement. Cela veut dire que leur voix compte et qu’ils participent activement à la prise de
                    décision. C’est responsabilisant et je n’ai jamais vu quelqu’un ne pas assumer cette responsabilité
                    avec sérieux. Ils construisent l’équipe dans laquelle ils vont travailler. L’enjeu est fort.
                </p>
                <p>
                    Ne recruter que les meilleurs implique que les profils déjà en place font eux aussi partie des
                    meilleurs. Mettre un niveau d’exigence élevé est la garantie pour chacun de savoir qu’il est
                    lui-même exceptionnel. Tout comme les personnes à ses côtés.
                </p>
                <p>
                    Pour l’entreprise, on réduit les risques de mauvais recrutements. Avec au moins 6 interlocuteurs, on
                    couvre un spectre d’analyse de compétences et de savoir-être plus large. On utilise l’intelligence
                    collective pour prendre de meilleures décisions.
                </p>
                <p>
                    J’ai raté plusieurs recrutements ces dernières années. À chaque fois que cela est arrivé, c’est
                    parce que j’ai transigé avec mes propres règles. Je n’avais pas assez de candidats alors j’enlevais
                    des critères d’exigence pour augmenter le taux de réussite.
                </p>
                <p>
                    Finalement, pour le candidat il devient difficile de dire non. Il aura participé à plus de 4
                    entretiens où il aura rencontré presque une dizaine de personnes. Mis bout à bout, ces rencontres
                    auront duré plusieurs heures. Le candidat a investi une énergie non négligeable qui décourage de
                    faire marche arrière.
                </p>
                <p>
                    À travers des échanges informels, il aura fait la connaissance de sa future équipe. C’est comme s’il
                    en faisait déjà partie.
                </p>
                <p> C’est quand même plus sympa que 8 heures de questions / réponses à faire seul chez soi.</p>
            </div>
            <BottomContactBox />
        </section>
    );
}
