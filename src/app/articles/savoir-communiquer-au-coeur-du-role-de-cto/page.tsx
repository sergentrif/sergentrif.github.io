"use client";

import { TopArticleSection } from "@/components/containers/articlesPage/TopArticleSection";
import Link from "next/link";
import { InfoBoxArticle } from "@/components/containers/articlesPage/InfoBoxArticle";
import { BottomContactBox } from "@/components/containers/articlesPage/BottomContactBox";
import { links } from "@/libs/constants";

export default function ArticleSixPage() {
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
                /Savoir communiquer, au cœur du rôle de CTO
            </div>
            <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase">
                Savoir communiquer, au cœur du rôle de CTO
            </h2>
            <InfoBoxArticle className="self-start -mt-8 md:text-base text-sm">
                31/01/2024, ~5 minutes de lecture
            </InfoBoxArticle>
            <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
                <p>
                    Le CTO a une position particulière au sein de l’entreprise. Au yeux des dirigeants, il représente
                    l’équipe technique. Au yeux de l’équipe technique, il représente les dirigeants.
                </p>
                <p>
                    Cet article est la troisième partie d’une série axée sur les compétences à chercher chez un CTO. Si
                    vous n’avez pas encore lu le deuxième article, je vous encourage à le faire ici :&nbsp;
                    <Link
                        href="/articles/se-remettre-en-question-le-syndrome-de-l-imposteur-est-un-cadeau"
                        className="font-bold underline"
                    >
                        se remettre en question : le syndrome de l’imposteur est un cadeau
                    </Link>
                </p>
                <p>
                    Au sens de la&nbsp;
                    <Link
                        href={links.youtube_first_team}
                        className="font-bold underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        first-team
                    </Link>
                    , il appartient à l’équipe des directeurs. Pourtant, il se trouve dans une position d’intermédiaire
                    la majeure partie du temps. Il doit représenter les intérêts des uns aux yeux des autres, et
                    vice-versa. Son objectif est d’aligner tout le monde, pour la bonne efficacité de l’entreprise. Pour
                    réussir, il faut faire se comprendre des individus qui ne parlent pas toujours le même langage. Des
                    individus qui affrontent quotidiennement des difficultés bien différentes.
                </p>
                <p>
                    Communiquer en temps qu’intermédiaire c’est jongler entre la “descente” et la “remontée”
                    d’informations. Il faut savoir parler avec pédagogie en vulgarisant le message. Les informations
                    transmises doivent être éligibles, entendues et comprises par leurs destinataires.
                </p>
                <p>
                    La communication est le système sanguin d’une entreprise. Plus l’entreprise est grande, plus le
                    nombre de veines est élevé. La circulation des informations devient complexe. Ces dernières doivent
                    traverser plusieurs couches de management et plusieurs départements. Le tout, sans être déformées et
                    perdre leur essence.
                </p>
                <p>
                    Dans une “petite” entreprise, la question de la communication se pose peu. Il n’y a pas beaucoup
                    d’employés. Tous se connaissent et travaillent probablement dans le même bureau. Les échanges sont
                    fréquents et souvent informels lors d’activités extra-professionnelles.
                </p>
                <p>
                    Lorsqu’une entreprise croit, le nombre de “groupes” d’employés augmente aussi. Il est impossible de
                    maintenir un contact régulier avec plus d’une vingtaine de personnes.
                </p>
                <p>
                    La problématique majeure de l’équipe de direction tourne désormais autour de la bonne circulation
                    des informations. Avec elle, se poseront les questions de l’organisation appropriée pour réussir,
                    donc des rôles clés nécessaires. Quels sont les outils et les rituels qui permettront de donner
                    accès à ces informations ? Sans noyer chaque individu dans un flot de messages inutiles. Ceux-là,
                    masqueront ce dont on veut qu’il se souvienne.
                </p>
                <p>
                    Souvent, les personnes issues d’un milieu technique s’expriment de manière technique. Cela donne un
                    sentiment d’expertise et de légitimité. C’est oublier le sens même de la communication : transmettre
                    une information. À quoi bon perdre du temps à partager quelque chose qui ne sera ni compris, ni
                    retenu ?
                </p>
                <p>
                    Un bon CTO doit faire comprendre les enjeux techniques de manière simple à un Comité de Direction.
                    Tout comme il doit faire comprendre les enjeux business de manière simple à une équipe de
                    développement.
                </p>
                <p>
                    S’il faut masquer 75% des problèmes mineurs pour se concentrer sur les 25% qui sont importants,
                    c’est ok. S’il faut faire comprendre les enjeux techniques en comparant ce métier à un autre plus
                    compréhensible, très bien !
                </p>
                <p>
                    Un CTO qui se cache derrière des termes techniques ne veut pas être compris. Surtout s’il s’adresse
                    à une population non technique. Pour un poste de communicant, cela me semble être une faute majeure.
                </p>
                <p>
                    Attention tout de même. Le rôle impose une communication à double sens mais le directeur doit savoir
                    quand faire de la rétention d’informations.
                </p>
                <p>
                    Certains sujets stratégiques ne devraient pas être communiqués immédiatement. Ils doivent d’abord
                    être validés dans leur ensemble, sauf décision explicite de tous les dirigeants. Communiquer trop
                    tôt revient souvent à mal-communiquer. Les réponses aux inquiétudes qui seront soulevées n’ont pas
                    encore été trouvées. Le projet global est encore propice à des changements. Cela créera donc de la
                    confusion autour du message de la version initialement partagée.
                </p>
                <p>
                    Les dirigeants de l’entreprise n’ont pas besoin de connaître les moindres détails des problèmes
                    rencontrés par l’équipe technique. Ils ont bien d’autres sujets à gérer à côté. Ce dont ils doivent
                    être surs, c’est que ces sujets sont traités correctement par le CTO, c’est sa responsabilité. Seuls
                    les problèmes de fond doivent être partagés. En mettant l’accent sur l’impact et les conséquences
                    que cela peut avoir pour l’entreprise au global.
                </p>
                <p className="italic">
                    Nota bene : en tant que CTO, il est plaisant de s’adresser à des dirigeants qui peuvent échanger
                    autour de concepts techniques. En particulier, s’ils comprennent leur impact sur le quotidien de
                    l’équipe et donc de l’entreprise.
                </p>
                <p>
                    Les métriques techniques permettent d’avoir un support commun qui facilite la communication à double
                    sens. Je recommande l’usage de métriques telles que définies par le&nbsp;
                    <Link
                        href={links.acm_queue}
                        className="font-bold underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        framework SPACE
                    </Link>
                    &nbsp;ou les&nbsp;
                    <Link
                        href={links.atlassian_site}
                        className="font-bold underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Four Keys Metrics
                    </Link>
                    . La mesure de la productivité technique est un sujet débattu et régulièrement remis en question.
                    Pour autant, ces métriques permettent de tous parler le même langage. Elles rendent visibles
                    l’impact des choix organisationnels ou techniques. Donc de leur contribution au business, et ce,
                    malgré leurs bais et défauts.
                </p>
                <p>
                    Vous découvrirez la troisième des compétences d’un bon CTO en vous rendant sur l’article suivant :
                    <Link
                        href="/articles/etre-cto-ou-l-art-de-representer-plusieurs-parties"
                        className="font-bold underline"
                    >
                        être CTO ou l’art de représenter plusieurs parties
                    </Link>
                    .
                </p>
            </div>
            <BottomContactBox />
        </section>
    );
}
