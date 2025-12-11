import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { DesignC } from "@/components/ui/icons/cardsDesign/DesignC";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";

export default function ParcoursContent() {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h2 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Mon Parcours</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>
            <div className="relative flex flex-col justify-center mx-auto w-full lg:px-36 md:px-16 sm:px-12 md:gap-12 gap-6 max-w-6xl ">
                <div className="absolute top-20 -right-32 opacity-20 pointer-events-none">
                    <DesignA aria-hidden="true" className="w-80 h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="absolute top-[40%] -left-32 opacity-20 pointer-events-none">
                    <DesignB aria-hidden="true" className="w-80 h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="absolute bottom-32 -right-32 opacity-20 pointer-events-none">
                    <DesignC aria-hidden="true" className="w-80 h-80 md:w-[500px] md:h-[500px]" />
                </div>

                <div className="pb-12 flex flex-col md:gap-8 gap-6 self-start md:px-16 px-4 relative z-10">
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

                    <blockquote className="border-l-4 border-brand-giants pl-6 py-4 my-4 italic md:text-lg text-base text-brand-fine-blue bg-gray-50/50 rounded-r-lg">
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

                    <h2 className="md:text-2xl md:pt-12 text-xl pt-8 font-semibold">1. Les Fondations</h2>
                    <div className="md:text-lg text-base flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
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

                    <h2 className="md:text-2xl md:pt-12 text-xl pt-8 font-semibold">
                        2. L’Exigence & L’Entrepreneuriat
                    </h2>
                    <div className="md:text-lg text-base flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
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

                    <h2 className="md:text-2xl md:pt-12 text-xl pt-8 font-semibold">
                        3. La Preuve par l’Hypercroissance
                    </h2>
                    <div className="md:text-lg text-base flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
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

                    <h2 className="md:text-2xl md:pt-12 text-xl pt-8 font-semibold">4. La Mission Actuelle</h2>
                    <div className="md:text-lg text-base flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            Depuis 2024, j’apporte cette expertise à un plus grand nombre d’entreprises (une dizaine de
                            startups accompagnées en 2 ans). Je suis l’un des rares partenaires capables de proposer la
                            vision d’un ex-CTO de scale-up, couplée à une capacité de production immédiate.
                        </p>
                        <p>
                            J’interviens personnellement pour auditer, structurer et piloter. C’est ce que je réalise
                            par exemple avec Objow depuis près de <span className="whitespace-nowrap">2 ans :</span>
                        </p>
                        <ul className="list-disc list-outside space-y-2 pl-4">
                            <li>Structuration de l’équipe et recrutement des talents clés.</li>
                            <li>Pilotage de la refonte architecturale pour réduire la dette technique.</li>
                            <li>
                                Direction technique du partenariat stratégique avec{" "}
                                <span className="font-semibold">Edenred</span>, de la conception à la mise en prod de
                                leur application.
                            </li>
                        </ul>
                        <p>
                            Une fois la direction fixée, je peux mobiliser Krma, mon équipe (PMs, Designers,
                            Développeurs Seniors) pour exécuter la vision avec la vélocité d’une start-up.
                        </p>
                    </div>
                    <div className="md:text-xl text-lg font-semibold mt-8 p-6 border-l-4 border-brand-giants text-brand-fine-blue">
                        Mon but est <span className="whitespace-nowrap">simple :</span> faire en sorte que votre tech ne
                        soit plus un centre de coûts opaque, mais le moteur de votre réussite business.
                    </div>
                </div>
            </div>
        </section>
    );
}
