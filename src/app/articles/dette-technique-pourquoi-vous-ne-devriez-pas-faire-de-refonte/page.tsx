"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";

export default function ArticleNinePage() {
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
                /Dette technique : pourquoi vous ne devriez pas faire de refonte
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-widest uppercase">
                Dette technique : pourquoi vous ne devriez pas faire de refonte{" "}
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                20/12/2023, ~16 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Dans ma récente exploration de la gestion de la dette technique, j’ai partagé une perspective
                    proactive que j’ai baptisée{" "}
                    <Link
                        href="/articles/l-anti-dette-technique-la-theorie-de-l-effort-supplementaire"
                        className="underline font-bold"
                    >
                        l’effort supplémentaire
                    </Link>
                    . Cette approche vise à prévenir la dégradation de la base de code en maintenant une vigilance
                    constante. Cependant, elle ne s’attaque pas aux problèmes existants, au code déjà en ruine.
                </p>
                <p>
                    Au fil des années, travailler sur un projet unique m’a exposé à de nombreuses requêtes de refontes,
                    souvent étiquetées comme “dette technique”. Certains termes, tels que “refonte” et “refactoring”,
                    déclenchent chez moi une alerte immédiate. En tant que développeur, j’ai non seulement souvent
                    formulé ces demandes, mais je les ai aussi dirigées.
                </p>
                <p>
                    La refonte, malgré son aspect intimidant, est un outil essentiel pour le développement et la
                    pérennité d’un projet de qualité. Prenons un exemple : consacrer deux mois à refondre la structure
                    du code, puis un mois à développer une nouvelle fonctionnalité, est souvent plus bénéfique que de
                    passer trois mois sur la fonctionnalité seule, en luttant contre les limitations existantes. Un tel
                    investissement de temps permet non seulement d’aboutir à un meilleur produit, mais aussi d’enrichir
                    l’ensemble du travail.
                </p>
                <p>
                    Alors, pourquoi les refontes m’apparaissent-elles si préoccupantes ? Le problème réside souvent dans
                    les motivations à leur origine – elles sont parfois proposées pour de mauvaises raisons, et réussir
                    une refonte, en particulier avec le niveau de succès escompté, est un défi ardu.
                </p>
                <p>
                    J’ai assisté à de nombreuses refontes échouées qui, dans le meilleur des cas, ont coûté des mois,
                    voire des années de travail à leurs entreprises. Plus préoccupant encore, dans des situations où les
                    ressources financières étaient limitées, le temps et les efforts consacrés à ces refontes se sont
                    faits au détriment des impératifs commerciaux, conduisant parfois les entreprises vers une issue
                    fatale.
                </p>
                <p>
                    Une des principales raisons menant à une refonte est souvent la difficulté ressentie par certains
                    développeurs à déchiffrer le code existant écrit par d’autres. Ce défi ne signifie pas forcément que
                    le code est défectueux ou obsolète ; il peut simplement indiquer que le code est rédigé dans un
                    style ou une méthode peu familière pour le développeur concerné.
                </p>
                <p>
                    Les demandes de refonte émanent fréquemment de développeurs récemment intégrés à l’entreprise ou à
                    un projet spécifique. Pour eux, la refonte est un moyen de se familiariser avec un environnement de
                    code inconnu, un moyen de reprendre le contrôle dans un contexte incertain.
                </p>
                <p>
                    Ayant moi-même été dans cette situation, j’ai dirigé plusieurs refontes, car réécrire le code m’a
                    aidé à comprendre ses mécanismes et à en reprendre le contrôle.
                </p>
                <p>
                    J’aime comparer un projet de développement logiciel à une maison. La version initiale, sans dette
                    technique, est comparable à une maison neuve, livrée par le constructeur. Avec le temps, tout comme
                    une maison évolue sous l’influence de ses occupants successifs, un projet informatique se transforme
                    au gré des interventions des différents développeurs. Chaque modification, qu’elle soit mineure ou
                    majeure, s’écarte progressivement de la conception initiale, ajoutant des couches de complexité.
                </p>
                <p>
                    Se lancer dans une refonte sans une compréhension approfondie du fonctionnement actuel et des
                    raisons sous-jacentes des choix précédents peut mener à ignorer des problèmes fondamentaux ou à en
                    créer de nouveaux. Ce phénomène est semblable à une maison qui subit des réparations successives,
                    chacune traitant un problème immédiat sans tenir compte de l’architecture globale.
                </p>
                <p>
                    L’accumulation de correctifs isolés, sans une vision d’ensemble cohérente, conduit souvent les
                    développeurs à percevoir ces modifications comme de la dette technique, appelant une refonte
                    apparemment inévitable. Le danger réside dans le développement d’une nouvelle version qui néglige
                    les ajustements précédents, essentiels au fonctionnement du système. Ainsi, lorsque la refonte est
                    mise en place, des problèmes réapparaissent, nécessitant des correctifs qui, à leur tour,
                    introduisent de la dette technique dans un projet tout neuf.
                </p>
                <p>
                    Cet écueil s’est manifesté chez{" "}
                    <Link
                        href={links.le_permislibre}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-bold whitespace-nowrap"
                    >
                        lePERMISLIBRE
                    </Link>{" "}
                    lors de la refonte de notre module d’entraînement au code de la route. Ce module avait évolué
                    pendant cinq ans, recevant des correctifs pour s’adapter aux évolutions des navigateurs web, surtout
                    sur mobile. Quand la nouvelle version a été lancée, de nombreux ajustements critiques, perçus à tort
                    comme du code incompréhensible et inutile, avaient été omis. Leur absence a été rapidement
                    ressentie, nous forçant à réintégrer ces correctifs dans la nouvelle structure, créant ainsi
                    involontairement de la dette technique pour les futurs développeurs.
                </p>
                <p>
                    La refonte technique est souvent perçue comme une baguette magique pour transformer du code
                    vieillissant en une solution parfaite. Cependant, cette vision idéaliste sous-estime la complexité
                    du développement d’un projet. Lors d’une refonte, nous espérons que les problèmes existants
                    disparaîtront comme par magie. Mais en réalité, le processus de développement est jalonné
                    d’obstacles imprévus et de décisions difficiles, souvent prises dans des situations inattendues ou
                    face à des défis difficilement surmontables.
                </p>
                <p>
                    Ces décisions prises en cours de route peuvent complexifier excessivement le projet. Parfois, cette
                    complexité s’avère si grande que le nouveau code est considéré comme de la dette technique dès son
                    lancement.
                </p>
                <p>
                    Nous avons vécu cette réalité en redéveloppant l’une des applications de{" "}
                    <Link
                        href={links.le_permislibre}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-bold whitespace-nowrap"
                    >
                        lePERMISLIBRE
                    </Link>
                    . L’objectif était d’améliorer l’expérience utilisateur (UX) et l’interface utilisateur (UI), avec
                    une refonte significative de certaines fonctionnalités clés et de leur architecture technique. Déjà
                    ambitieux, ce projet a été complexifié par notre décision d’intégrer de nouvelles technologies pour
                    résoudre certaines lacunes sans nécessité immédiate. La gestion de ces objectifs multiples nous a
                    détournés des enjeux principaux liés au produit. Nous n’avons pas pu maîtriser entièrement les
                    nouvelles technologies, menant à des implémentations insuffisantes et des décisions inappropriées,
                    et finalement à la création de nouvelle dette technique.
                </p>
                <p>
                    Cette expérience soulève une question fondamentale : la nouvelle dette technique créée lors d’une
                    refonte est-elle réellement préférable à l’ancienne ? Les ressources et les efforts investis dans la
                    refonte valaient-ils la peine, étant donné les problèmes supplémentaires générés ? Cette
                    interrogation souligne l’importance d’une approche équilibrée et réfléchie dans la gestion des
                    projets de refonte, où les décisions sont prises en tenant compte non seulement des objectifs
                    immédiats, mais aussi des implications à long terme.
                </p>
                <p>
                    La décision d’entreprendre une refonte technique porte une responsabilité considérable, souvent
                    sous-estimée. Si la refonte est inutile ou qu’elle échoue, le temps investi représente une perte
                    conséquente qui peut avoir des répercussions majeures sur l’entreprise.
                </p>
                <p>
                    Dans les petites structures, une refonte peut mobiliser une part significative de l’équipe de
                    développement. Ce choix est compréhensible : l’objectif est de terminer le projet rapidement.
                    Cependant, continuer à développer sur une base de code qui sera bientôt obsolète n’est généralement
                    pas judicieux, sauf pour des correctifs urgents. Quant aux nouvelles fonctionnalités, il est souvent
                    préférable d’attendre la mise en place de la nouvelle version pour éviter un travail redondant.
                </p>
                <p>
                    Cette concentration des ressources sur la refonte signifie moins de nouveautés développées en
                    parallèle. Selon le secteur d’activité et la position sur le marché, cela peut entrainer des
                    conséquences notables :
                </p>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <li>
                        Incapacité pour l’équipe commerciale de proposer de nouvelles fonctionnalités, potentiellement
                        cruciales pour conclure des contrats.
                    </li>

                    <li>
                        Difficulté pour l’équipe produit d’identifier et d’exploiter de nouvelles opportunités
                        commerciales.
                    </li>
                </ul>
                <p>
                    Dans les deux cas, une telle situation peut ralentir significativement la croissance de
                    l’entreprise. Un retard dans le projet de refonte peut même menacer la survie de l’entreprise,
                    affectant la trésorerie ou permettant à la concurrence de prendre de l’avance.
                </p>
                <p>
                    Le terme “refonte” est souvent employé sans considération suffisante pour la vision initiale du
                    projet, l’historique des développements et leur impact sur les opérations commerciales. Cette
                    approche peut sembler confortable, mais les risques associés sont souvent disproportionnés par
                    rapport aux bénéfices attendus.
                </p>
                <p>
                    Et pourtant, ne pas faire évoluer une stack technique est tout aussi risqué. Les conséquences de
                    l’inaction sont multiples : difficulté à maintenir ou à améliorer une technologie obsolète,
                    augmentation du turnover dans l’équipe de développement, difficultés de recrutement… Ces facteurs
                    peuvent également entraîner un ralentissement de la croissance.
                </p>
                <p>
                    Il est donc essentiel de trouver un équilibre délicat. D’un côté, une refonte technique risquée peut
                    mobiliser des ressources précieuses et freiner l’innovation. De l’autre, ignorer la nécessité
                    d’évoluer technologiquement peut compromettre la compétitivité et l’efficacité à long terme. Les
                    entreprises doivent évaluer soigneusement le moment et l’ampleur des refontes, en les alignant
                    stratégiquement avec leurs objectifs commerciaux et technologiques.
                </p>
                <p>
                    Dans le cadre du développement logiciel, la gestion du changement est une tâche délicate. Face à la
                    nécessité d’évoluer tout en maîtrisant les risques et en optimisant le rapport coût-bénéfice, je
                    privilégie souvent les termes évolution ou migration plutôt que refonte. Ces termes sont plus
                    souples, moins restrictifs, et ouvrent la voie à une approche plus mesurée et ciblée du projet.
                </p>
                <p>
                    Le choix des mots est crucial. Évolution et migration suggèrent un processus graduel et réfléchi,
                    contrairement à refonte, qui implique souvent une transformation radicale. Cette nuance linguistique
                    n’est pas anodine ; elle favorise une démarche plus prudente, permettant de limiter le périmètre
                    d’action et de mieux préparer techniquement le projet.
                </p>
                <p>
                    Bien sûr, le terme refonte peut être pertinent, mais seulement lorsqu’il est appliqué à un périmètre
                    bien défini et maîtrisé, afin de limiter les risques en cas d’éventuels problèmes.
                </p>
                <p>
                    La réussite d’une évolution technique n’est pas le fruit du hasard. Elle nécessite une approche
                    stratégique rigoureuse, fondée sur des principes clairs.
                </p>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <li>
                        <span className="font-bold">Diagnostic Honnête</span> : La première étape consiste à identifier
                        tous les problèmes existants et à comprendre pourquoi ils sont problématiques. J’apprécie
                        l’approche de Will Larson dans{" "}
                        <Link
                            href={links.SolvingEngineeringStrategyCrisis}
                            className="font-bold underline whitespace-nowrap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solving the Engineering Strategy crisis
                        </Link>
                        , qui recommande de commencer par un diagnostic franc de la situation. Cette méthode est
                        applicable à la majorité des situations problématiques.
                    </li>
                    <li>
                        <span className="font-bold">Compréhension Historique</span> : Après le diagnostic, il est
                        crucial de se pencher sur l’historique du projet. Comprendre les décisions passées et les
                        problèmes rencontrés enrichit l’analyse de la situation actuelle et aide à éviter de répéter les
                        erreurs passées.
                    </li>
                </ul>
                <p>Le processus d’évolution implique de naviguer entre trois dimensions temporelles :</p>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <li>
                        <span className="font-bold">Le Présent</span> : Source de frustration, il crée le désir et la
                        nécessité de changer.
                    </li>
                    <li>
                        <span className="font-bold">Le Passé</span> : Fournit un contexte pour comprendre l’origine de
                        la frustration.
                    </li>
                    <li>
                        <span className="font-bold">Le Futur</span> : Offre la perspective d’une solution aux problèmes
                        actuels.
                    </li>
                </ul>
                <p>
                    Construire l’avenir implique de combiner les leçons du passé avec les besoins actuels. Comme je l’ai
                    mentionné dans d’autres écrits, adopter une vision à long terme est essentiel pour moi. Cela fournit
                    une direction claire et un objectif à atteindre. Une fois cet idéal défini, l’essentiel du travail
                    consiste à élaborer une stratégie qui permettra de le concrétiser.
                </p>
                <p>
                    L’idée d’une refonte complète, une sorte de redémarrage magique de zéro, est une vision à laquelle
                    je ne souscris pas. Cette approche ignore la réalité du business qui ne peut se permettre une
                    stagnation prolongée. Dans un environnement compétitif, ne pas progresser équivaut à régresser.
                </p>
                <p>
                    Je suis convaincu que la méthode des petites itérations successives est bien plus efficace. Pour
                    réaliser une vision cible ambitieuse, il est judicieux de la décomposer en plusieurs projets
                    distincts, chacun avec un objectif spécifique, qu’il soit algorithmique, architectural ou
                    organisationnel. Cette stratégie permet de prioriser et d’ordonnancer ces projets de manière
                    optimale.
                </p>
                <p>
                    En adoptant cette approche itérative, les risques d’échec sont considérablement réduits. En cas de
                    contretemps, l’impact se limite à un seul aspect du plan global plutôt qu’à l’ensemble du projet. De
                    plus, les durées réduites de chaque projet permettent une plus grande flexibilité pour intégrer des
                    priorités qui émergent en cours de route.
                </p>
                <p>
                    Il est vrai que cette méthode peut allonger le temps total consacré à l’évolution du projet.
                    Toutefois, j’estime qu’il vaut mieux réussir en deux ans qu’échouer en six mois. Cette approche
                    itérative souligne l’importance d’une vision à long terme. L’essentiel n’est pas de savoir si l’on
                    atteint l’objectif en avance ou en retard, mais de s’assurer que l’on travaille toujours sur
                    l’élément le plus critique à un moment donné.
                </p>
                <p>
                    Une fois la vision globale établie et les différents projets identifiés, la prochaine étape est de
                    déterminer comment les mettre en œuvre opérationnellement. Cette décision est cruciale pour
                    compléter la stratégie globale.
                </p>
                <p>
                    La gestion d’une refonte technique est complexe, nécessitant une stratégie équilibrée pour optimiser
                    l’utilisation des ressources sans entraver les opérations courantes de l’entreprise.
                </p>
                <p>
                    À ce stade, plusieurs options s’offrent à nous. Chacune présente ses avantages et ses défis, mais
                    toutes partagent un objectif commun : progresser de manière structurée et réfléchie vers la
                    réalisation de notre vision à long terme.
                </p>
                <p>
                    Une approche consiste à impliquer la majorité de l’équipe dans le projet de refonte. Bien que cette
                    méthode puisse accélérer le processus, elle présente le risque de négliger d’autres projets
                    importants. Une telle stratégie est viable si le projet est divisé en tâches distinctes et gérables.
                    Cependant, elle peut entraîner des complications commerciales si cette condition n’est pas remplie.
                </p>
                <p>
                    Une alternative efficace est de diviser un grand projet en tâches plus petites, rapides et
                    indépendantes, à répartir entre les développeurs. Par exemple, dans notre projet de rédaction de la
                    documentation technique pour nos APIs, chaque développeur s’est vu attribuer deux routes à
                    documenter par semaine. Cette approche a permis d’achever le projet sans perturber significativement
                    les activités commerciales, tout en contribuant à la réalisation d’un objectif technique majeur à
                    long terme.
                </p>
                <p>
                    La stratégie des ”20% de temps technique” est populaire mais présente des défis. Elle implique que
                    chaque membre de l’équipe consacre un jour par semaine à l’évolution technique. Cependant, cette
                    méthode peut se heurter à deux écueils majeurs :
                </p>
                <ul className="list-disc list-outside flex flex-col gap-5 px-4">
                    <li>Les urgences commerciales tendent à éroder le temps dédié à l’évolution technique.</li>
                    <li>
                        La fragmentation hebdomadaire du travail rend difficile la gestion de tâches longues ou
                        complexes.
                    </li>
                </ul>
                <p>
                    Dans notre expérience, cette stratégie n’est efficace que pour des projets clairement délimités,
                    comme notre documentation d’API.
                </p>
                <p>
                    Pour les entreprises de taille suffisante, la solution la plus efficace est de dédier 20% de
                    l’équipe de développement à l’évolution technique, formant ainsi une équipe spécifique, que nous
                    appelons platform.
                </p>
                <p>
                    Cette équipe peut travailler sur une roadmap technique distincte, traitant des tâches de fond,
                    longues ou complexes, sans entraver les priorités commerciales de l’entreprise. Elle a pour mission
                    de soutenir le reste de l’équipe en créant un produit technique robuste et facile à utiliser pour
                    les développeurs et autres membres de l’équipe produit.
                </p>
                <p>
                    Il est crucial que l’équipe platform reste en phase avec les réalités de l’entreprise. Elle ne doit
                    pas se limiter à des considérations techniques pures, mais plutôt agir en tant qu’équipe de soutien,
                    facilitant le travail des développeurs produit, designers, product managers, data analysts, etc. Une
                    communication fluide et régulière entre les différentes équipes est indispensable pour s’assurer que
                    l’équipe platform se concentre sur les problèmes pertinents.
                </p>
                <p>
                    Alors que nous contemplons l’avenir prometteur que nous construisons, il est crucial d’éviter de
                    tomber dans une vision trop idéaliste et irréaliste. Il faut se rappeler que chaque frustration
                    actuelle sera inévitablement remplacée par de nouvelles demain. Il n’y a pas de solution parfaite :
                    chaque choix comporte ses avantages et ses inconvénients. Notre défi est de sélectionner
                    consciemment les bénéfices que nous recherchons et les compromis que nous sommes prêts à accepter,
                    en tenant compte de notre équipe, de notre entreprise et de ses objectifs à chaque étape de son
                    évolution.
                </p>
                <p>
                    Le chemin vers la réalisation de votre vision est souvent plus long que prévu. Il est essentiel
                    d’être patient et persévérant. Si vous parvenez à anticiper et à éviter proactivement les problèmes
                    futurs, vous éviterez de vous retrouver acculé à des échéances techniques critiques. Cette approche
                    vous offre la flexibilité nécessaire pour progresser à votre propre rythme.
                </p>
                <p>
                    N’oubliez pas que tant que vous suivez la voie vers votre objectif final, tout se passera bien, même
                    si vous rencontrez des retards. L’important est de rester fidèle à votre trajectoire et de continuer
                    à avancer, peu importe les obstacles rencontrés en cours de route.
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
