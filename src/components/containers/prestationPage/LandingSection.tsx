import Image from "next/image";
import { ContactModalArrowIcon } from "../../ui/icons/RightArrowYellow";
import { InfoBox } from "../homePage/MainSection/Card";
import { DesignA } from "@/components/ui/icons/cardsDesign/DesignA";
import { DesignB } from "@/components/ui/icons/cardsDesign/DesignB";
import { InfiniteSlider } from "./InfiniteSlider";

import img1 from "@/assets/images/krma_prestation_1.png";
import img2 from "@/assets/images/krma_prestation_2.png";
import img3 from "@/assets/images/krma_prestation_3.jpg";
import img4 from "@/assets/images/krma_prestation_9.jpg";
import img9 from "@/assets/images/krma_prestation_10.jpg";
import img5 from "@/assets/images/krma_prestation_5.png";
import img6 from "@/assets/images/krma_prestation_6.jpg";
import img8 from "@/assets/images/krma_prestation_8.png";

export const LandingSection = () => {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-center md:justify-start relative md:right-19 md:-left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h2 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Prestations</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col gap-22">
                {/* Accompagnement */}
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Accompagnement
                            </h2>
                            <InfoBox className="flex mx-auto">Mensuel · engagement trimestriel</InfoBox>
                        </div>
                        <p>
                            L&apos;audit pose le diagnostic. L&apos;accompagnement s&apos;assure qu&apos;il se traduit
                            en décisions.
                        </p>
                        <p>
                            J&apos;interviens auprès du CEO comme regard extérieur sur la tech : tenir l&apos;exécution
                            du plan d&apos;action, challenger les arbitrages en cours de route, préparer une levée, ou
                            avoir quelqu&apos;un à qui soumettre les vraies questions.
                        </p>
                        <p>
                            Si l&apos;audit a révélé un besoin de montée en puissance chez votre CTO, je peux
                            l&apos;accompagner également.
                        </p>
                        <p>
                            <span className="font-bold">Format :</span> quelques heures par mois, cadence à définir
                            selon vos besoins.
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

                {/* Due diligence */}
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Due diligence
                            </h2>
                            <InfoBox className="flex mx-auto">Pré-acquisition · levée de fonds</InfoBox>
                        </div>
                        <p>
                            Même approche que l&apos;audit. Objectif différent : vous donner une lecture fiable de
                            l&apos;actif tech avant de vous engager.
                        </p>
                        <p>
                            Je commence par toute la documentation disponible - architecture, infrastructure, bases de
                            données, SaaS en production. J&apos;interview ensuite l&apos;équipe : les profils à
                            responsabilité, les juniors, les personnes au contact de la tech. Le CEO et le CTO.
                        </p>
                        <p>
                            Le livrable couvre l&apos;état des lieux complet avec un niveau de risque par point. Si la
                            mission porte sur une acquisition, j&apos;inclus une stratégie technique pour l&apos;actif
                            racheté : maintien, migration ou intégration.
                        </p>
                        <p>
                            Je ne biaiserai pas le livrable pour sécuriser une levée. Si la tech repose sur trois bouts
                            de ficelle, je le dirai.
                        </p>
                        <DesignB className="max-w-153 w-full h-full absolute top-12 opacity-50 mix-blend-plus-lighter md:hidden" />
                    </div>
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
                        { src: img9, alt: "Krma at Pepouze" },
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
                {/* Conférencier */}
                <div className="lg:px-22 md:px-16 sm:px-12 px-4 w-full mx-auto flex flex-row-reverse justify-center gap-28 relative">
                    <div className="flex flex-col gap-6 self-center lg:max-w-[550px] md:max-w-[350px] text-brand-fine-blue relative">
                        <div className="flex flex-col justify-center gap-4 w-full">
                            <h2 className="text-black font-brico-gro font-extrabold text-[22px] tracking-wider flex justify-center w-full border-b-2 border-brand-lavender py-2">
                                Conférencier
                            </h2>
                            <InfoBox className="flex mx-auto">Écoles et accélérateurs</InfoBox>
                        </div>
                        <p>
                            En tant que CTO freelance, j&apos;interviens régulièrement auprès d&apos;écoles et
                            d&apos;accélérateurs pour partager une vision concrète, décomplexée et opérationnelle de la
                            tech.
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
