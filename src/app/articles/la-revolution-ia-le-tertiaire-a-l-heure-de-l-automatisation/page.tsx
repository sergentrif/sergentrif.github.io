import Link from "next/link";
import { BottomContactBox } from "@/components/containers/BottomContactBox";

import { buildArticleMetadata, buildArticleSchema } from "@/libs/articleSchema";
import { getArticle } from "@/libs/articles";
import { ArticleLayout } from "@/components/containers/articlesPage/ArticleLayout";

const { slug, title, date, description, displayDate, readTime } = getArticle(
    "la-revolution-ia-le-tertiaire-a-l-heure-de-l-automatisation",
);

export const metadata = buildArticleMetadata(slug, title, date, description);

const articleSchema = buildArticleSchema(slug, title, date, description);

export default function ArticleRevolutionIAPage() {
    return (
        <ArticleLayout schema={articleSchema} title={title} date={date} displayDate={displayDate} readTime={readTime}>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    En 3 ans, on est passé de &ldquo;l&apos;IA est un gadget pour les développeurs&rdquo; à des PDG
                    qui déclarent que 25 à 50% du code produit chez eux est généré par IA. Que les chiffres soient
                    exacts ou gonflés pour rassurer les investisseurs, la direction est claire.
                </p>
                <p>
                    En tant que freelance, je suis aux premières loges pour sentir le marché se contracter. Double
                    vague : la baisse des financements tech depuis 2022, puis la généralisation de l&apos;IA dans les
                    équipes depuis 2025. Les entreprises externalisent moins. Les équipes internes se resserrent autour
                    de développeurs augmentés. Et les profils juniors, aux États-Unis d&apos;abord, galèrent déjà à
                    trouver un poste.
                </p>
            </div>
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Le tertiaire vit sa révolution industrielle
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Ce ne sont pas que les métiers du numérique qui vont traverser cette vague. Ce sont tous les
                    métiers liés à la production de contenus immatériels. Le secteur tertiaire. Environ 77% des emplois
                    en France.
                </p>
                <p>
                    Le support client, les agences de voyage, le conseil juridique — les exemples sont déjà partout.
                    J&apos;ai aujourd&apos;hui un litige immobilier. J&apos;ai un avocat, mais je prépare une grande
                    partie de ma défense seul : je fais analyser les pièces et mes arguments par une IA. Ça me permet
                    de prémâcher le travail de l&apos;avocat et donc de payer moins cher. Et lui fait probablement la
                    même chose de son côté. Je ne remplace pas l&apos;avocat. Je remplace une partie de son travail —
                    la partie exécution. L&apos;expertise qui compte au tribunal, elle, reste humaine.
                </p>
                <p>Ce mécanisme est le même partout. Mais c&apos;est dans la tech que je le vis au quotidien, et c&apos;est de là que je parle.</p>
                <p>
                    Ce secteur est en train de vivre ce que l&apos;industrie a vécu il y a des décennies :
                    l&apos;automatisation. La robotisation des chaînes de production, les caisses automatiques.
                </p>
                <p>
                    Avec une différence fondamentale : ce qui a mis 30 ans à se faire dans l&apos;industrie ne mettra
                    que quelques années dans le service.
                </p>
                <p>
                    On peut observer ce qui s&apos;est produit dans l&apos;industrie pour anticiper la suite. Le
                    mécanisme sera probablement le même : pas de licenciements massifs, mais des non-renouvellements de
                    postes au fil des départs, une sortie progressive des prestataires externes, une réduction lente du
                    nombre de recrutements. Sauf que compressé sur quelques années au lieu de trente, le volume de gens
                    qui se retrouvent sans poste au même moment est beaucoup plus grand. Le mécanisme est doux. Le
                    rythme, lui, ne l&apos;est pas.
                </p>
                <p>
                    Les premiers touchés, comme dans l&apos;industrie : les jeunes qui arrivent chaque année sur le
                    marché. Une étude de Stanford basée sur les données de paie ADP a montré que l&apos;emploi des
                    développeurs de 22-25 ans a chuté de près de 20% depuis fin 2022. Dans le même temps,
                    l&apos;emploi des développeurs de plus de 30 ans est resté stable ou a progressé.
                </p>
            </div>
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Ce que l&apos;IA supprime, ce ne sont pas des métiers
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Il commence à être accepté par tout le monde que la production de code ou de maquettes design
                    devient une commodité. C&apos;est le livrable final, mais la valeur du travail ne se trouve pas là.
                    Elle se trouve dans les connaissances, les compétences et l&apos;expertise qui ont permis
                    d&apos;y arriver.
                </p>
                <p>L&apos;IA ne supprime pas des métiers. Elle supprime des niveaux d&apos;exercice.</p>
                <p>
                    Prenons le développement. Sur des projets simples — MVPs, POCs — l&apos;IA fait illusion. Dès
                    qu&apos;on rentre dans des projets complexes, avec du contenu, de l&apos;historique, des
                    dépendances, elle n&apos;a pas la capacité à prendre en considération l&apos;ensemble des
                    paramètres. Il faut toujours quelqu&apos;un pour prioriser, spécifier, découper, planifier. La
                    moindre phrase ambiguë dans les spécifications se traduit par une fonctionnalité mal implémentée.
                </p>
                <p>
                    Prenons les expertises techniques nichées — SEO, sécurité, RGPD. Ce sont des disciplines qui
                    s&apos;adressent à des algorithmes ou à des cadres normatifs. Il y a des critères précis à
                    respecter, des règles à appliquer. C&apos;est du reverse engineering, et ça s&apos;automatise
                    bien. L&apos;IA me donne un résultat suffisant sur ces sujets — suffisant pour quelqu&apos;un
                    comme moi, qui n&apos;a ni le budget ni le besoin d&apos;un expert à temps plein. Les meilleurs
                    experts de ces domaines garderont leurs clients. Ceux qui vendaient de l&apos;expertise accessible,
                    eux, perdent leur marché.
                </p>
                <p>
                    Prenons le design. L&apos;IA génère des maquettes, mais la réflexion en amont — comprendre un
                    usage, penser une expérience, faire des arbitrages créatifs — reste humaine. Le designer qui
                    produit des maquettes est dans la même position que la caissière qui scannait les articles. On a
                    moins besoin de lui pour l&apos;exécution, mais on a toujours besoin de quelqu&apos;un pour penser
                    le produit, arbitrer les choix, résoudre les problèmes que la machine ne voit pas.
                </p>
                <p>Le pattern est le même partout : l&apos;exécution technique disparaît. La vision, l&apos;arbitrage, la créativité restent.</p>
            </div>
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Quelqu&apos;un doit superviser
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>Ce qui reste aussi, c&apos;est la responsabilité.</p>
                <p>
                    L&apos;IA produit. Mais quelqu&apos;un doit valider que ce qu&apos;elle produit est correct.
                    Quelqu&apos;un doit assumer quand ça casse. Du code généré qui fonctionne mais qui est
                    inmaintenable, un audit SEO qui passe à côté d&apos;un problème critique, une mise en conformité
                    RGPD qui a un trou — les conséquences sont réelles et elles retombent sur un humain.
                </p>
                <p>
                    On ne supprime pas le besoin de supervision. On le renforce. Parce que plus on produit vite, plus
                    il y a de choses à valider.
                </p>
                <p>
                    L&apos;open-source l&apos;a déjà démontré. Les contributions générées par IA ont explosé, avant
                    de submerger les mainteneurs. Daniel Stenberg, créateur de cURL, a fermé le programme de bug bounty
                    du projet après avoir constaté que seules 5% des soumissions étaient valides. Mitchell Hashimoto a
                    banni le code IA de Ghostty. Steve Ruiz a fermé toutes les pull requests externes de tldraw. GitHub
                    lui-même compare la situation à un déni de service sur l&apos;attention humaine. Le goulot
                    n&apos;était pas la production. C&apos;était la validation.
                </p>
                <p>Plus de production avec la même capacité de supervision, ça ne crée pas de la valeur. Ça crée de la dette.</p>
                <p>
                    Aujourd&apos;hui, cette supervision est humaine. Demain, elle sera probablement automatisée elle
                    aussi. Des agents qui reviewent le code d&apos;autres agents, qui valident des specs, qui testent
                    des outputs. La ligne se déplace.
                </p>
                <p>
                    Mais quelqu&apos;un devra toujours intervenir quand ça casse. Quelqu&apos;un devra configurer les
                    agents, rédiger les instructions, documenter les inputs attendus et les outputs acceptables.
                    S&apos;assurer que la machine a tout ce dont elle a besoin pour fonctionner correctement.
                </p>
                <p>
                    On ne va pas disparaître. On va changer de rôle. Dans l&apos;industrie, les ouvriers ne sont pas
                    tous partis. Certains sont devenus techniciens de maintenance. Ils ne fabriquent plus les pièces,
                    ils entretiennent les machines qui les fabriquent.
                </p>
                <p>
                    On se dirige vers la même chose. Des techniciens de maintenance numérique. On va configurer des
                    skills, construire de la documentation, orchestrer des agents, et intervenir quand un rouage casse.
                    On ne produira plus. On maintiendra les systèmes qui produisent.
                </p>
                <p>
                    Ce n&apos;est pas une régression. Construire des systèmes fonctionnels est aussi gratifiant que
                    coder des features. Le travail devient plus accessible — on écrit du markdown plus que du code — et
                    l&apos;impact est plus grand. Chaque révolution majeure a fait émerger des métiers qu&apos;on ne
                    connaissait pas avant. L&apos;imprimerie, l&apos;électricité, l&apos;informatique, internet. Il
                    n&apos;y a pas de raison que celle-ci fasse exception.
                </p>
            </div>
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Le vrai problème : comment former les seniors de demain ?
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>Et c&apos;est là que ça coince. Parce que pour entretenir une machine, il faut comprendre ce qu&apos;elle automatise.</p>
                <p>
                    Jusqu&apos;à aujourd&apos;hui, on apprenait en faisant. En préparant et en livrant les commodités.
                    Un chef cuisinier démarre en coupant les légumes. Un développeur senior a d&apos;abord codé des
                    CRUDs pendant des années. Un designer senior a d&apos;abord poussé des pixels. Un consultant SEO
                    senior a d&apos;abord fait des audits basiques.
                </p>
                <p>C&apos;est précisément ce niveau d&apos;exécution que l&apos;IA est en train de remplacer. Le terrain d&apos;apprentissage.</p>
                <p>
                    Si les juniors n&apos;ont plus l&apos;opportunité de produire, de se tromper, de réussir — comment
                    gagnent-ils en expérience ? Comment forme-t-on les techniciens de maintenance de demain si on leur
                    retire la compréhension de ce que la machine fait à leur place ?
                </p>
                <p>C&apos;est une question à laquelle personne ne répond encore. Et c&apos;est probablement la plus importante.</p>
            </div>
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Le paradoxe que personne n&apos;assume
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    À titre personnel, l&apos;IA m&apos;a redonné la passion du métier. Je peux avancer seul, même là
                    où il me manque des compétences — design, SEO, copywriting, marketing. Je ne suis pas au niveau
                    d&apos;un professionnel sur chacun de ces sujets, mais le résultat est suffisant. Je suis autonome.
                    Je ne suis plus limité.
                </p>
                <p>Et c&apos;est exactement le problème.</p>
                <p>
                    Je suis tombé sur une interview du philosophe Éric Sadin. Un de ses concepts est resté bloqué en
                    moi. Dit avec mes mots : une société est un ensemble de personnes qui ont besoin les unes des
                    autres.
                </p>
                <p>
                    L&apos;IA nous enlève ça. Je ne sais pas faire de design mais je n&apos;ai plus besoin de
                    designer. Je ne sais pas faire de SEO mais je n&apos;ai plus besoin d&apos;expert. Je ne sais pas
                    écrire d&apos;article mais je n&apos;ai plus besoin de ghostwriter.
                </p>
                <p>
                    Au lieu de payer un humain pour effectuer une tâche, je paye une IA. Et ce que je paye
                    aujourd&apos;hui est artificiellement bas. Les abonnements aux LLM ne sont pas rentables pour les
                    fournisseurs. La trajectoire est connue : on l&apos;a vue chez Uber, chez Airbnb, chez toutes les
                    start-up qui ont numérisé une offre existante. Créer l&apos;usage, installer la dépendance, puis
                    augmenter les prix quand le retour en arrière est devenu impossible. Ce qui coûte 200€ par mois
                    aujourd&apos;hui ne les coûtera probablement pas toujours.
                </p>
                <p>
                    Les développeurs expérimentés trouveront leur place. Les designers qui pensent le produit aussi.
                    Les experts pointus garderont leurs clients. Mais tous ceux qui étaient en dessous — ceux qui
                    exécutaient, ceux qui apprenaient, ceux qui faisaient leurs armes — eux, on les a lâchés. Pas en
                    les licenciant. En n&apos;ayant simplement plus besoin d&apos;eux.
                </p>
                <p>
                    L&apos;ironie, c&apos;est que les métiers les moins menacés sont probablement ceux qu&apos;on a
                    passé des décennies à dévaloriser. L&apos;artisanat. Un plombier, un électricien, un menuisier
                    cumulent expertise et production physique. L&apos;IA peut les aider à diagnostiquer ou à chiffrer,
                    mais elle ne peut pas poser le tuyau, tirer le câble, assembler le meuble. On a poussé des
                    générations entières vers les métiers de bureau. Ce sont peut-être eux qui s&apos;en sortiront le
                    mieux.
                </p>
                <p>
                    L&apos;avenir ne sera pas forcément pire. Il sera différent. Des métiers qu&apos;on ne connaît pas
                    encore vont apparaître, comme à chaque révolution. Le problème, ce n&apos;est pas la destination.
                    C&apos;est la vitesse de la transition. Beaucoup de gens vont perdre leur métier, leur identité,
                    sans avoir le temps de se reconvertir. C&apos;est la différence avec les révolutions précédentes.
                    L&apos;imprimerie, l&apos;électricité, l&apos;informatique ont transformé le monde sur des
                    décennies. Celle-ci se compte en années.
                </p>
                <p>
                    Et c&apos;est une fuite en avant. Comme le nucléaire militaire. Personne ne va s&apos;arrêter parce qu&apos;on le demande poliment. Peu importe ce qu&apos;on en pense, tout le monde va s'y mettre. La seule question qui reste est individuelle : est-ce qu'on s'adapte ou pas.
                </p>
                <p>Le tissu social ne se casse pas dans la tech. Il se casse autour. Silencieusement.</p>
                <p>
                    Ce n&apos;est pas anodin que Sam Altman se dise favorable à un revenu universel depuis 2016, bien
                    avant ChatGPT, et qu&apos;il ait financé la plus grande étude américaine sur le sujet. Ceux qui
                    construisent la machine anticipent depuis longtemps qu&apos;elle va casser quelque chose.
                </p>
            </div>
            <hr className="border-brand-fine-blue opacity-20" />
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue italic">
                <p>
                    Cet article en est un bon exemple. Le texte a été rédigé par une IA. Les instructions ont été
                    fine-tunées et entraînées sur mes propres rédactions pour reproduire mon style. Le contenu — les
                    idées, les positions, les exemples — vient de moi. Le raisonnement a été brainstormé avec
                    l&apos;IA pour en identifier les failles et les angles morts.
                </p>
                <p>Je n&apos;ai pas écrit cet article. Je l&apos;ai supervisé.</p>
            </div>
            <hr className="border-brand-fine-blue opacity-20" />
            <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase">
                Sources
            </h3>
            <div className="flex flex-col md:text-base text-sm gap-6 sm:px-4 px-0 text-brand-fine-blue">
                <p className="font-bold">Code généré par IA — déclarations des PDG :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        Satya Nadella (Microsoft) : 20-30% du code —{" "}
                        <Link
                            href="https://techcrunch.com/2025/04/29/microsoft-ceo-says-up-to-30-of-the-companys-code-was-written-by-ai/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TechCrunch, avril 2025
                        </Link>
                    </li>
                    <li>
                        Sundar Pichai (Google) : plus de 30% du nouveau code —{" "}
                        <Link
                            href="https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Alphabet earnings call, avril 2025
                        </Link>
                    </li>
                    <li>
                        Dario Amodei (Anthropic) : prédiction de 90% d&apos;ici 6 mois —{" "}
                        <Link
                            href="https://www.npr.org/2025/10/21/nx-s1-5506141/ai-code-software-productivity-claims"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NPR, octobre 2025
                        </Link>
                    </li>
                    <li>
                        Vlad Tenev (Robinhood) : environ 50% du nouveau code —{" "}
                        <Link
                            href="https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Slashdot, juillet 2025
                        </Link>
                    </li>
                    <li>
                        Analyse critique de ces déclarations —{" "}
                        <Link
                            href="https://fortune.com/2025/07/02/ai-work-salesforce-benioff-nadella-microsoft-pichai-google/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fortune, juillet 2025
                        </Link>
                    </li>
                </ul>
                <p className="font-bold">Emploi des juniors en baisse :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        Étude Stanford Digital Economy Lab, Erik Brynjolfsson et al. —{" "}
                        <Link
                            href="https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PDF de l&apos;étude
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.cnbc.com/2025/08/28/generative-ai-reshapes-us-job-market-stanford-study-shows-entry-level-young-workers.html"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CNBC, août 2025
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://time.com/7312205/ai-jobs-stanford/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TIME, août 2025
                        </Link>
                    </li>
                </ul>
                <p className="font-bold">Tertiaire et emploi en France :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        INSEE, Enquête Emploi 2024 : 76,6% des emplois dans le tertiaire —{" "}
                        <Link
                            href="https://www.insee.fr/fr/statistiques/8376826?sommaire=8376908"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            INSEE
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.vie-publique.fr/fiches/269995-les-grands-secteurs-de-production-primaire-secondaire-et-tertiaire"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vie-publique.fr
                        </Link>
                    </li>
                </ul>
                <p className="font-bold">Open-source submergé par les contributions IA :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        GitHub Blog, &ldquo;Welcome to the Eternal September of open source&rdquo; —{" "}
                        <Link
                            href="https://github.blog/open-source/maintainers/welcome-to-the-eternal-september-of-open-source-heres-what-we-plan-to-do-for-maintainers/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Blog, février 2026
                        </Link>
                    </li>
                    <li>
                        cURL : fermeture du bug bounty, 5% de soumissions valides —{" "}
                        <Link
                            href="https://www.infoq.com/news/2026/02/ai-floods-close-projects/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            InfoQ, février 2026
                        </Link>
                    </li>
                    <li>
                        Ghostty, tldraw et autres projets fermés aux contributions externes —{" "}
                        <Link
                            href="https://www.infoq.com/news/2026/02/ai-floods-close-projects/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            InfoQ, février 2026
                        </Link>
                    </li>
                </ul>
                <p className="font-bold">Sam Altman et le revenu universel :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        Altman favorable au UBI depuis 2016, étude OpenResearch —{" "}
                        <Link
                            href="https://www.cbsnews.com/news/sam-altman-universal-basic-income-study-open-research/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CBS News, juillet 2024
                        </Link>
                    </li>
                    <li>
                        &ldquo;Moore&apos;s Law for Everything&rdquo;, 2021 —{" "}
                        <Link
                            href="https://www.cnbc.com/2021/03/30/openai-ceo-sam-altman-says-ai-could-pay-for-ubi-experts-disagree.html"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CNBC, mars 2021
                        </Link>
                    </li>
                </ul>
                <p className="font-bold">Éric Sadin :</p>
                <ul className="flex flex-col gap-3 list-disc list-outside px-4">
                    <li>
                        <span className="italic">Le désert de nous-mêmes</span>, L&apos;Échappée, octobre 2025
                    </li>
                    <li>
                        Interview UNESCO, décembre 2025 —{" "}
                        <Link
                            href="https://nvo.fr/le-philosophe-eric-sadin-lance-un-appel-a-la-resistance/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            La Vie Ouvrière
                        </Link>
                    </li>
                </ul>
            </div>
            <BottomContactBox />
        </ArticleLayout>
    );
}
