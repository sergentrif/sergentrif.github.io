import Image from "next/image";
import { ContactModalArrowIcon } from "../../ui/icons/RightArrowYellow";
import { InfoBox } from "../homePage/MainSection/Card";
import { CircleArrowUpAndDown } from "@/components/ui/icons/CircleArrowUpAndDown";
import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { DesignC } from "@/components/ui/icons/cardsDesign/DesignC";

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
            <div className="flex w-full h-full gap-2 items-center justify-start relative right-19 overflow-x-hidden">
                <ContactModalArrowIcon className="max-w-46 max-h-66 pt-6" />
                <h2 className="uppercase text-[40px] font-brico-gro font-bold">Prestations</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] max-w-46 max-h-66 pt-6" />
            </div>
            <div className="flex flex-col gap-22">
                <div className="lg:px-56 md:px-16 sm:px-12 px-4 w-full mx-auto flex justify-between relative">
                    <div className="flex flex-col gap-6 items-start max-w-[500px] text-brand-fine-blue">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Sparring partner
                            </h2>
                            <InfoBox className="flex mx-auto">Conseil-mentorat</InfoBox>
                        </div>
                        <p>
                            En tant que sparing partner, je mentor les CTO et futurs CTO qui souhaitent gagner en
                            hauteur de vue, structurer leur organisation et affirmer leur leadership.
                        </p>
                        <p>Nous travaillons ensemble sur vos enjeux concrets :</p>
                        <ul className="list-disc list-outside -mt-4 pl-4">
                            <li>priorisation stratégique</li>
                            <li>structuration de la roadmap</li>
                            <li>mise en place de process d’ingénierie</li>
                            <li>recrutement et management d’équipe</li>
                            <li>choix d’architecture</li>
                            <li>relation avec les fondateurs ou les équipes produit. </li>
                        </ul>
                        <p>
                            Mon accompagnement vous offre un espace neutre pour challenger vos décisions, débloquer des
                            situations complexes et consolider votre posture de leader technique. L’objectif : vous
                            aider à monter en puissance plus rapidement et plus sereinement.
                        </p>
                    </div>
                    <DesignA className="max-w-153 w-full h-full absolute top-0 left-125 opacity-50 mix-blend-plus-lighter" />
                    <Image src={img1} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                </div>

                <div className="lg:px-56 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-between relative">
                    <div className="flex flex-col gap-6 self-center max-w-[500px] text-brand-fine-blue">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                CTO Part-time
                            </h2>
                            <InfoBox className="flex mx-auto">Régie</InfoBox>
                        </div>
                        <p>
                            En tant que CTO part-time, j’accompagne les startups et PME qui ont besoin d’une direction
                            technique expérimentée sans recruter en interne.{" "}
                        </p>
                        <p>
                            J’interviens quelques jours par semaine pour structurer la roadmap produit, sécuriser les
                            choix technologiques, mettre en place les bonnes pratiques d’ingénierie, encadrer les
                            équipes et fluidifier la collaboration entre métier et technique.{" "}
                        </p>
                        <p>
                            Mon approche combine vision stratégique et action opérationnelle, afin d’aider l’entreprise
                            à avancer vite, réduire les risques et atteindre ses objectifs avec une tech maîtrisée et
                            scalable.
                        </p>
                    </div>

                    <CircleArrowUpAndDown className="w-16 absolute left-30 -top-37" />
                    <DesignB className="max-w-153 w-full h-full absolute top-13 left-82 opacity-50 mix-blend-plus-lighter" />
                    <Image src={img2} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                </div>
            </div>
            <div className="flex overflow-x-hidden py-16">
                <Image src={img3} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                <Image src={img4} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                <Image src={img5} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                <Image src={img6} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
            </div>
            <div className="flex flex-col gap-22">
                <div className="lg:px-56 md:px-16 sm:px-12 px-4 w-full mx-auto flex justify-between relative">
                    <div className="flex flex-col gap-6 items-start max-w-[500px] text-brand-fine-blue">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Définition du MVP
                            </h2>
                            <InfoBox className="flex mx-auto">Prestation au livrable</InfoBox>
                        </div>

                        <p>
                            Je vous accompagne dans la définition d’un MVP clair, priorisé et techniquement réaliste,
                            sous forme d’un livrable complet.{" "}
                        </p>
                        <p>
                            À partir de votre idée, nous identifions ensemble la proposition de valeur, les parcours
                            utilisateurs essentiels et les fonctionnalités réellement nécessaires pour tester votre
                            marché.
                        </p>
                        <p>J’analyse également les implications techniques : </p>
                        <ul className="list-disc list-outside -mt-4 pl-4">
                            <li>choix d’architecture</li>
                            <li>contraintes de scalabilité</li>
                            <li>dette acceptable. </li>
                        </ul>
                        <p>
                            À l’issue de la mission, vous repartez avec un document structuré, conçu pour être
                            directement utilisé par une équipe technique et pour lancer le développement en toute
                            sérénité.{" "}
                        </p>
                    </div>
                    <DesignC className="max-w-134 w-full h-full absolute top-0 right-56 opacity-50 mix-blend-plus-lighter" />
                    <Image src={img7} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                </div>
                <div className="lg:px-56 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-between relative">
                    <div className="flex flex-col gap-6 self-center max-w-[500px] text-brand-fine-blue">
                        <div className="flex flex-col justify-center gap-4 w-full ">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Conférencier
                            </h2>
                            <InfoBox className="flex mx-auto">Écoles et accélérateurs</InfoBox>
                        </div>
                        <p>
                            En tant que CTO part-time, j’accompagne les startups et PME qui ont besoin d’une direction
                            technique expérimentée sans recruter en interne.
                        </p>
                        <p>
                            J’interviens quelques jours par semaine pour structurer la roadmap produit, sécuriser les
                            choix technologiques, mettre en place les bonnes pratiques d’ingénierie, encadrer les
                            équipes et fluidifier la collaboration entre métier et technique.{" "}
                        </p>
                        <p>
                            Mon approche combine vision stratégique et action opérationnelle, afin d’aider l’entreprise
                            à avancer vite, réduire les risques et atteindre ses objectifs avec une tech maîtrisée et
                            scalable.
                        </p>
                    </div>
                    <DesignA className="max-w-153 w-full h-full absolute top-20 left-44 opacity-50 mix-blend-plus-lighter" />
                    <Image src={img8} alt="" className="max-h-[600px] max-w-[400px] h-full w-full" />
                </div>
            </div>
        </section>
    );
};
