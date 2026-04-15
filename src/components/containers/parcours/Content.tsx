import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { DesignC } from "@/components/ui/icons/cardsDesign/DesignC";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";
import { links } from "@/libs/constants";
import Link from "next/link";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";

export default function ParcoursContent() {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h2 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Mon Parcours</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>
            <div className="relative flex flex-col justify-center mx-auto lg:px-36 md:px-16 sm:px-12 px-4 md:gap-16 gap-10 max-w-6xl w-full">
                <div className="absolute top-20 sm:right-6 right-8 opacity-10 pointer-events-none">
                    <DesignA aria-hidden="true" className="w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="absolute sm:top-[40%] top-[38.8%] sm:left-6 left-10 opacity-10 pointer-events-none">
                    <DesignB aria-hidden="true" className="w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="absolute sm:bottom-50 bottom-113 sm:right-4 right-6 opacity-10 pointer-events-none">
                    <DesignC aria-hidden="true" className="w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="pb-12 flex flex-col md:gap-8 gap-6 self-start relative z-10">
                    <div className="flex flex-col gap-4">
                        <p className="md:text-xl text-lg font-semibold text-brand-fine-blue">
                            J’ai toujours aimé créer.
                        </p>
                        <p className="md:text-lg text-base leading-relaxed text-brand-fine-blue">
                            Mais je ne construis pas pour le simple plaisir de{" "}
                            <span className="whitespace-nowrap">faire :</span> je construis pour que ce soit utile. Je
                            suis profondément attaché au processus de création, à cette exigence qui fait qu’un produit
                            est non seulement fonctionnel, mais bien conçu, viable et pérenne.
                        </p>
                        <p className="md:text-lg text-base leading-relaxed text-brand-fine-blue">
                            Je ne vise jamais le court terme. Je travaille toujours avec une vision d’excellence, guidé
                            par cette philosophie de Steve Jobs qui résonne en{" "}
                            <span className="whitespace-nowrap">moi :</span>
                        </p>
                    </div>

                    <blockquote className="border-l-4 border-brand-giants sm:pl-6 pl-2 py-4 my-4 italic md:text-lg text-base text-brand-fine-blue rounded-r-lg">
                        « Si vous êtes charpentier et que vous fabriquez une magnifique commode, vous n’allez pas
                        utiliser un morceau de contre-plaqué pour l’arrière du meuble, même s’il est contre le mur et
                        que personne ne le verra. Vous saurez qu’il est là. Donc, vous allez utiliser une magnifique
                        pièce de bois. Pour que vous dormiez bien la nuit, l’esthétique et la qualité doivent être des
                        impératifs de bout en bout. »
                    </blockquote>

                    <p className="md:text-lg text-base leading-relaxed text-brand-fine-blue">
                        C’est avec cette conviction que la technologie n’est qu’un moyen — et que le business est la fin
                        — que j’ai construit mon parcours.
                    </p>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">1. Les Fondations</h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            Tout commence par un socle académique indispensable. Diplômé d’un{" "}
                            <span className="font-semibold">Master à l’EPSI Lyon</span>, j’y ai acquis la rigueur de
                            l’ingénierie logicielle. Mais j’ai très vite compris que la théorie ne suffisait pas.
                        </p>
                        <p>
                            Durant ces années, j’ai multiplié les expériences terrain (Epiweb, Peexeo, Visiativ),
                            cherchant toujours à confronter le code à la réalité.
                        </p>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        2. L’Exigence & L’Entrepreneuriat
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>Mes premières années de carrière ont été une école de l’intensité.</p>
                        <p>
                            <span className="font-semibold">Chez Batch (ex-AppGratis)</span>, j’ai appris l’excellence
                            technique en gérant des millions de données utilisateurs. J’y ai compris qu’une architecture
                            mal pensée se paie cash.
                        </p>
                        <p>
                            <span className="font-semibold">En tant qu’entrepreneur (Ottercamp, CanalMatch)</span>, j’ai
                            porté toutes les casquettes (produit, data, tech). J’ai compris la douleur de devoir livrer
                            un produit viable avec peu de ressources.
                        </p>
                        <p>
                            C’est ici que j’ai forgé mon approche <span className="whitespace-nowrap">actuelle :</span>{" "}
                            <span className="font-semibold">pragmatique et directe.</span> Pas de place pour le
                            superflu.
                        </p>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        3. La Preuve par l’Hypercroissance
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            C’est l’expérience qui structure mon offre aujourd’hui. Arrivé dans une entreprise de 5
                            personnes comme deuxième développeur, j’ai fini CTO d’une structure de 30 talents tech,
                            accompagnant l’entreprise jusqu’à son introduction en bourse.
                        </p>
                        <p>
                            Durant ces 7 ans, j’ai vu le pôle technique passer du statut de ”bricolage” à celui d’une{" "}
                            <span className="font-semibold">organisation performante et structurée</span>. J’ai appris{" "}
                            <span className="whitespace-nowrap">à :</span>
                        </p>
                        <ul className="list-disc list-outside space-y-2 pl-4">
                            <li>Aligner une roadmap technique sur une stratégie business mouvante.</li>
                            <li>Recruter et fidéliser une équipe pluridisciplinaire (Produit, Tech, Data, Infra).</li>
                            <li>Éviter que la tech ne devienne cette ”boîte noire” qui effraie tant les CEOs.</li>
                        </ul>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">4. La Mission Actuelle</h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            Depuis 2024, j’apporte cette expertise à un plus grand nombre d’entreprises (une dizaine de
                            startups accompagnées en 2 ans). Basé à Lyon, j’interviens en France entière, en présentiel
                            ou à distance. Je suis l’un des rares partenaires capables de proposer la vision d’un ex-CTO
                            de scale-up, couplée à une capacité de production immédiate.
                        </p>
                        <p className="font-semibold">
                            <span className="font-bold">Objow</span> — 2 ans de mission CTO à mi-temps
                        </p>
                        <p>
                            Arrivé pour réduire la dette technique, j’ai rapidement pris en charge l’ensemble de la
                            direction technique. En deux ans, nous avons notamment :
                        </p>
                        <ul className="list-disc list-outside space-y-2 pl-4">
                            <li>
                                Migré l’infrastructure d’un serveur dédié vers le cloud Microsoft Azure, avec mise en
                                place du monitoring, de l’alerting et d’un pipeline CI/CD — passant de{" "}
                                <span className="font-semibold">1 mise en production par semaine à 10 par jour</span>.
                            </li>
                            <li>Divisé par 2 les coûts d’infrastructure (FinOps).</li>
                            <li>Recruté deux lead developers et un CTO pour me succéder.</li>
                            <li>
                                Supervisé le développement complet de{" "}
                                <span className="font-semibold">Kadeos Incentive</span>, l’application issue du
                                partenariat stratégique avec <span className="font-semibold">Edenred</span> — deux ans
                                de projet, avec validation de l’architecture et de la sécurité par le groupe.
                            </li>
                        </ul>
                        <p className="font-semibold pt-2">
                            <span className="font-bold">Certixio</span> — Définition de MVP & automatisation
                        </p>
                        <p>
                            Accompagnement dans la rédaction du cahier des charges, refonte du process de travail avec
                            l’IA, puis développement d’un POC pour automatiser le traitement des demandes entrantes.
                        </p>
                        <p>
                            Une fois la direction fixée, je peux mobiliser{" "}
                            <Link target="_blank" href={links.krma_site} className="font-bold group">
                                <HoverUnderlineWrapper>Krma</HoverUnderlineWrapper>
                            </Link>
                            , mon équipe (PMs, Designers, Développeurs Seniors) pour exécuter la vision avec la vélocité
                            d’une start-up.
                        </p>
                    </div>
                    <div className="md:text-xl text-lg font-semibold mt-8 p-6 border-l-4 sm:pl-6 pl-2 border-brand-giants text-brand-fine-blue">
                        Mon but est <span className="whitespace-nowrap">simple :</span> faire en sorte que votre tech ne
                        soit plus un centre de coûts opaque, mais le moteur de votre réussite business.
                    </div>
                </div>
            </div>
        </section>
    );
}
