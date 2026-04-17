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
            <div className="flex w-full h-full gap-2 items-center justify-center md:justify-start relative md:right-19 md:-left-12 overflow-x-hidden">
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
                        <p className="md:text-lg text-base leading-relaxed text-brand-fine-blue">
                            J&apos;ai toujours aimé créer - pas pour le plaisir de faire, mais pour que ce soit utile.
                            Je suis attaché à cette exigence qui fait qu&apos;un produit est non seulement fonctionnel,
                            mais bien conçu, viable et pérenne. La technologie n&apos;est qu&apos;un moyen - le business
                            est la fin. C&apos;est avec cette conviction que j&apos;ai construit mon parcours.
                        </p>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        1. Les Fondations
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            Tout commence par un socle académique indispensable. Diplômé d&apos;un{" "}
                            <span className="font-semibold">Master en ingénierie logicielle à l&apos;EPSI Lyon</span>,
                            j&apos;y ai acquis la rigueur du métier. Mais j&apos;ai très vite compris que la théorie ne
                            suffisait pas.
                        </p>
                        <p>
                            Durant ces années, j&apos;ai multiplié les expériences terrain (Epiweb, Peexeo, Visiativ),
                            cherchant toujours à confronter le code à la réalité.
                        </p>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        2. Développeur & Entrepreneur
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>Mes premières années de carrière ont été une école de l&apos;intensité.</p>
                        <p>
                            <span className="font-semibold">Chez Batch (ex-AppGratis)</span>, j&apos;ai appris
                            l&apos;excellence technique en gérant des millions de données utilisateurs. J&apos;y ai
                            compris qu&apos;une architecture mal pensée se paie cash.
                        </p>
                        <p>
                            <span className="font-semibold">En tant qu&apos;entrepreneur (Ottercamp, CanalMatch)</span>,
                            j&apos;ai porté toutes les casquettes (produit, data, tech). J&apos;ai compris la douleur de
                            devoir livrer un produit viable avec peu de ressources.
                        </p>
                        <p>
                            C&apos;est ici que j&apos;ai forgé mon approche{" "}
                            <span className="whitespace-nowrap">actuelle :</span>{" "}
                            <span className="font-semibold">pragmatique et directe.</span> Pas de place pour le
                            superflu.
                        </p>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        3. 7 ans chez lePERMISLIBRE
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            C&apos;est l&apos;expérience qui structure mon offre aujourd&apos;hui. Arrivé dans une
                            entreprise de 5 personnes comme deuxième développeur, j&apos;ai fini CTO d&apos;une
                            structure de 30 talents tech, accompagnant l&apos;entreprise jusqu&apos;à son introduction
                            en bourse.
                        </p>
                        <p>
                            Durant ces 7 ans, j&apos;ai vu le pôle technique passer du statut de &quot;bricolage&quot; à
                            celui d&apos;une{" "}
                            <span className="font-semibold">organisation performante et structurée</span>. J&apos;ai
                            appris <span className="whitespace-nowrap">à :</span>
                        </p>
                        <ul className="list-disc list-outside space-y-2 pl-4">
                            <li>Aligner une roadmap technique sur une stratégie business mouvante.</li>
                            <li>Recruter et fidéliser une équipe pluridisciplinaire (Produit, Tech, Data, Infra).</li>
                            <li>
                                Éviter que la tech ne devienne cette &quot;boîte noire&quot; qui effraie tant les CEOs.
                            </li>
                        </ul>
                    </div>

                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        4. Depuis 2024
                    </h2>
                    <div className="flex flex-col gap-4 leading-relaxed text-brand-fine-blue">
                        <p>
                            Depuis 2024, j&apos;apporte cette expertise à un plus grand nombre d&apos;entreprises - une
                            dizaine de startups accompagnées en 2 ans, dont Objow, Edenred, Wecandoo, Glaaster. Basé à
                            Lyon, j&apos;interviens en France entière, en présentiel ou à distance.
                        </p>
                        <p>Ce que j&apos;obtiens concrètement :</p>
                        <ul className="list-disc list-outside space-y-2 pl-4">
                            <li>
                                Migrations cloud et pipelines CI/CD mis en place - jusqu&apos;à{" "}
                                <span className="font-semibold">10 mises en production par jour</span> là où il y en
                                avait une par semaine.
                            </li>
                            <li>Coûts d&apos;infrastructure divisés par 2 (FinOps).</li>
                            <li>Recrutements de lead developers et de CTOs.</li>
                            <li>
                                Négociation de partenariats stratégiques et de licences logicielles - valeur multipliée
                                par 2.
                            </li>
                        </ul>
                        <p>
                            J&apos;interviens aussi dans l&apos;écosystème lyonnais : ateliers, masterclasses et
                            accompagnements au <span className="font-semibold">H7</span>, à{" "}
                            <span className="font-semibold">l&apos;emlyon</span> et au{" "}
                            <span className="font-semibold">Wagon</span>. Jury à{" "}
                            <span className="font-semibold">Lyon Start&nbsp;Up</span>.
                        </p>
                        <p>
                            Une fois la direction fixée, je peux mobiliser{" "}
                            <Link
                                target="_blank"
                                href={`${links.krma_site}?utm_source=adrien-blandin-me&utm_medium=website&utm_campaign=portfolio`}
                                className="font-bold group"
                            >
                                <HoverUnderlineWrapper>Krma</HoverUnderlineWrapper>
                            </Link>
                            , mon équipe (PMs, Designers, Développeurs Seniors) pour exécuter la vision avec la vélocité
                            d&apos;une start-up.
                        </p>
                        <p>
                            En parallèle, j&apos;ai lancé{" "}
                            <Link
                                target="_blank"
                                href={`${links.timescanner}?utm_source=adrien-blandin-me&utm_medium=website&utm_campaign=portfolio`}
                                className="font-bold group"
                            >
                                <HoverUnderlineWrapper>Timescanner</HoverUnderlineWrapper>
                            </Link>{" "}
                            — un SaaS de facturation automatique pour freelances. Parce que je continue de construire.
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
