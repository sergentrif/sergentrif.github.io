import Image from "next/image";
import { ContactModalArrowIcon } from "../../ui/icons/RightArrowYellow";
import { InfoBox } from "../homePage/MainSection/Card";
import { CircleArrowUpAndDown } from "@/components/ui/icons/CircleArrowUpAndDown";
import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { DesignC } from "@/components/ui/icons/cardsDesign/DesignC";
import { InfiniteSlider } from "./InfiniteSlider";

import img1 from "@/assets/images/krma_prestation_1.png";
import img2 from "@/assets/images/krma_prestation_2.png";
import img3 from "@/assets/images/krma_prestation_3.png";
import img4 from "@/assets/images/krma_prestation_4.png";
import img5 from "@/assets/images/krma_prestation_5.png";
import img6 from "@/assets/images/krma_prestation_6.png";
import img7 from "@/assets/images/krma_prestation_7.png";
import img8 from "@/assets/images/krma_prestation_8.png";

export const LandingSection = () => {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h2 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Prestations</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col gap-22">
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Sparing partner
                            </h2>
                            <InfoBox className="flex mx-auto">Conseil-mentorat</InfoBox>
                        </div>
                        <p>
                            J’accompagne les CTO et futurs CTO qui veulent gagner en hauteur de vue, structurer leur
                            organisation et affirmer leur leadership technique. Je suis passé par là : de développeur à
                            CTO. J’ai fait les erreurs, j’ai appris, et aujourd’hui je partage cette expérience pour
                            vous faire gagner plusieurs années d’apprentissage.
                        </p>
                        <p>
                            Nous travaillons directement sur vos enjeux{" "}
                            <span className="whitespace-nowrap">concrets :</span>
                        </p>
                        <ul className="list-disc list-outside -mt-4 pl-4">
                            <li>priorisation stratégique</li>
                            <li>structuration de la roadmap</li>
                            <li>mise en place de process d’ingénierie</li>
                            <li>recrutement et management d’équipe</li>
                            <li>choix d’architecture</li>
                            <li>relation avec les fondateurs ou les équipes produit. </li>
                        </ul>
                        <p>
                            Je vous offre un espace neutre pour challenger vos décisions, débloquer des situations
                            complexes et consolider votre posture de leader technique.
                        </p>
                        <p>
                            J’interviens également auprès des CEO : pour leur apporter un regard objectif sur leur CTO
                            ou leur équipe technique, ou simplement les conseiller lorsqu’ils n’ont pas encore de
                            leadership tech en place.
                        </p>
                        <p>
                            <span className="font-bold">L’objectif</span> : vous aider à monter en puissance plus
                            rapidement, plus sereinement… et éviter les erreurs que j’ai déjà commises pour vous.
                        </p>
                        <DesignA className="max-w-153 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 mix-blend-plus-lighter md:hidden" />
                    </div>
                    <DesignA className="hidden md:block lg:max-w-153 md:max-w-120 lg:top-0 lg:right-100 md:right-48 md:-top-68 w-full h-full absolute opacity-50 mix-blend-plus-lighter" />
                    <Image
                        src={img1}
                        alt="Krma team working together"
                        className="hidden md:block lg:max-h-[600px] lg:max-w-[400px] md:max-h-[500px] md:max-w-[350px] h-full w-full"
                        priority
                    />
                </div>
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                CTO Part-time
                            </h2>
                            <InfoBox className="flex mx-auto">Intégration à vos équipes tech</InfoBox>
                        </div>
                        <p>
                            En tant que CTO part-time, j’accompagne les startups et PME qui ont besoin d’une direction
                            technique expérimentée sans recruter un profil full-time en interne.
                        </p>
                        <p>
                            J’interviens quelques jours par semaine pour structurer la roadmap produit, sécuriser les
                            choix technologiques, mettre en place les bonnes pratiques d’ingénierie, encadrer les
                            équipes et fluidifier la collaboration entre métier et technique.
                        </p>
                        <p>
                            Mon approche combine vision stratégique et action opérationnelle, afin d’aider l’entreprise
                            à avancer vite, réduire les risques et atteindre ses objectifs avec une tech maîtrisée et
                            scalable.
                        </p>
                        <DesignB className="max-w-153 w-full h-full absolute top-12 opacity-50 mix-blend-plus-lighter md:hidden" />
                    </div>
                    <CircleArrowUpAndDown className="w-16 absolute right-30 -top-37 hidden md:block" />
                    <DesignB className="hidden md:block lg:max-w-153 md:max-w-120 w-full h-full absolute lg:top-13 md:top-4 lg:left-82 md:left-50 opacity-50 mix-blend-plus-lighter" />
                    <Image
                        src={img2}
                        alt="Krma team working together"
                        className="hidden md:block lg:max-h-[600px] lg:max-w-[400px] md:max-h-[500px] md:max-w-[350px] h-full w-full"
                    />
                </div>
            </div>
            <div className="md:hidden py-16">
                <InfiniteSlider
                    images={[
                        { src: img1, alt: "Krma team working together" },
                        { src: img3, alt: "Krma team working together" },
                        { src: img4, alt: "Adrien conference speech" },
                        { src: img5, alt: "Adrien work advising" },
                        { src: img6, alt: "Public listening Adrien's conference" },
                        { src: img8, alt: "Adrien conference speech" },
                    ]}
                />
            </div>
            <div className="hidden md:flex overflow-x-hidden py-16 justify-center">
                <Image
                    src={img3}
                    alt="Krma team working together"
                    className="lg:max-h-[600px] lg:max-w-[400px] md:max-h-[450px] md:max-w-[300px] h-full w-full"
                />
                <Image
                    src={img4}
                    alt="Adrien conference speech"
                    className="lg:max-h-[600px] lg:max-w-[400px] md:max-h-[450px] md:max-w-[300px] h-full w-full"
                />
                <Image
                    src={img5}
                    alt="Adrien work advising"
                    className="lg:max-h-[600px] lg:max-w-[400px] md:max-h-[450px] md:max-w-[300px] h-full w-full"
                />
                <Image
                    src={img6}
                    alt="Public listening Adrien's conference"
                    className="lg:max-h-[600px] lg:max-w-[400px] md:max-h-[450px] md:max-w-[300px] h-full w-full"
                />
            </div>
            <div className="flex flex-col gap-22">
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Définition du MVP
                            </h2>
                            <InfoBox className="flex mx-auto">Prestation au livrable</InfoBox>
                        </div>

                        <p>
                            Je vous accompagne dans la définition d’un MVP clair, priorisé et techniquement réaliste,
                            sous forme d’un livrable complet.
                        </p>
                        <p>
                            À partir de votre idée, nous identifions ensemble la proposition de valeur, les parcours
                            utilisateurs essentiels et les fonctionnalités réellement nécessaires pour tester votre
                            marché.
                        </p>
                        <p>J’analyse également les implications techniques :</p>
                        <ul className="list-disc list-outside -mt-4 pl-4">
                            <li>choix d’architecture</li>
                            <li>contraintes de scalabilité</li>
                            <li>dette acceptable</li>
                        </ul>
                        <p>
                            À l’issue de la mission, vous repartez avec un document structuré, conçu pour être
                            directement utilisé par une équipe technique ou pour réaliser vos demandes de subvention.
                        </p>
                        <DesignC className="max-w-134 w-full h-full absolute top-13 opacity-50 mix-blend-plus-lighter md:hidden" />
                    </div>
                    <DesignC className="hidden md:block lg:max-w-134 md:max-w-120 w-full h-full absolute lg:top-0 lg:right-57 md:-top-5 md:right-27 opacity-50 mix-blend-plus-lighter" />
                    <Image
                        src={img7}
                        alt="Adrien wearing Krma's clothes"
                        className="hidden md:block lg:max-h-[600px] lg:max-w-[400px] md:max-h-[500px] md:max-w-[350px] h-full w-full"
                    />
                </div>
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Conférencier
                            </h2>
                            <InfoBox className="flex mx-auto">Écoles et accélérateurs</InfoBox>
                        </div>
                        <p>
                            En tant que CTO freelance, j’interviens régulièrement auprès d’écoles et d’accélérateurs
                            pour partager une vision concrète, décomplexée et opérationnelle de la tech.
                        </p>
                        <p>
                            Mes conférences couvrent des sujets clés pour les futurs entrepreneurs et professionnels :
                            passer du rôle de développeur à celui de CTO, construire un MVP rapidement et efficacement,
                            rédiger un cahier des charges solide, réussir une due diligence technique ou encore recruter
                            et structurer une équipe.
                        </p>
                        <p>
                            Mon approche est pragmatique, orientée terrain, et pensée pour offrir des clés immédiatement
                            actionnables.
                        </p>
                        <DesignA className="max-w-153 w-full h-full absolute top-12 opacity-50 mix-blend-plus-lighter md:hidden" />
                    </div>
                    <DesignA className="hidden md:block lg:max-w-153 md:max-w-120 w-full h-full absolute lg:top-0 lg:left-60 md:-top-15 md:left-38 opacity-50 mix-blend-plus-lighter" />
                    <Image
                        src={img8}
                        alt="Adrien conference speech"
                        className="hidden md:block lg:max-h-[600px] lg:max-w-[400px] md:max-h-[500px] md:max-w-[350px] h-full w-full"
                    />
                </div>
            </div>
        </section>
    );
};
