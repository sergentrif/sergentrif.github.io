import Image from "next/image";
import portrait from "@/assets/images/profile_portrait_adrien.png";
import { LandingName } from "@/components/ui/icons/LandingName";
import { AgrementBadge } from "@/components/ui/icons/AgrementBadge";
import { CircleArrowUpAndDown } from "@/components/ui/icons/CircleArrowUpAndDown";
import { LandingHomePageArrowIconDesk, LandingHomePageArrowIconMobile } from "@/components/ui/icons/RightArrowYellow";
import { LandingBannerCarousel } from "./LandingCarousel";

export function Landing() {
    return (
        <section className="flex flex-col gap-16 pt-32 md:px-16 px-4 w-full">
            <div className="flex md:flex-row flex-col justify-center gap-4 relative">
                <div className="flex flex-col md:items-end font-brico-gro tracking-wide text-xs sm:text-sm md:text-base relative lg:left-12 md:left-9 lg:top-22 md:top-12">
                    <p>CTO &</p>
                    <p>architecte</p>
                    <p>technique</p>
                </div>
                <LandingName />
                <div className="flex flex-col md:justify-end md:items-start items-end font-brico-gro tracking-wide text-xs sm:text-sm md:text-base relative -bottom-1.5">
                    <p>Startups early stage</p>
                    <p>SaaS</p>
                    <p>Web & apps</p>
                </div>
            </div>

            <div className="md:flex hidden md:pt-32 pt-8 pb-8 relative -translate-x-1/20 items-center justify-center lg:px-16 md:px-8">
                <div className="flex relative shrink-0 gap-5">
                    <CircleArrowUpAndDown className="w-16 pt-15" />
                    <AgrementBadge className="absolute lg:-top-17 md:-top-14 -top-10 lg:-right-13 md:-right-11 -right-9 lg:w-32 lg:h-32 md:w-26 md:h-26 w-24 h-24" />
                    <Image
                        src={portrait}
                        alt="Portrait of Adrien Blandin"
                        className="lg:w-58 lg:h-77 md:w-50 md:h-68 w-42 h-52"
                    />
                </div>
                <div className="flex flex-col pl-14 relative">
                    <h2 className="font-bold font-brico-gro uppercase tracking-wide lg:text-[2.5rem] md:text-2xl max-w-[47rem]">
                        {" J'aide les CEOs à transformer leur tech en accélérateur de croissance "}
                    </h2>
                    <div className="text-brand-fine-blue pt-4">
                        <p className="mb-2">{"J'interviens comme CTO à temps partagé pour :"}</p>
                        <ul className="list-disc list-outside pl-6 space-y-1">
                            <li>structurer vos projets</li>
                            <li>aider votre startup à scaler efficacement</li>
                            <li>accompagner votre équipe technique</li>
                        </ul>
                        <LandingHomePageArrowIconDesk />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:hidden pt-8 pb-8 relative items-center justify-center">
                <div className="flex relative justify-between sm:justify-around shrink-0 pb-8 w-full">
                    <div className="relative">
                        <AgrementBadge className="absolute -top-10 -right-10 w-26 h-26" />
                        <Image src={portrait} alt="Portrait of Adrien Blandin" className="w-42 h-56 " />
                    </div>
                    <LandingHomePageArrowIconMobile />
                    <CircleArrowUpAndDown className="w-16 pt-15" />
                </div>
                <div className="flex flex-col flex-1 relative">
                    <h2 className="font-bold font-brico-gro uppercase tracking-wide text-[22px]">
                        {"J'aide les CEOs à transformer leur tech en accélérateur de croissance"}
                    </h2>
                    <div className="text-brand-fine-blue pt-4">
                        <p className="mb-2">{"J'interviens comme CTO à temps partagé pour :"}</p>
                        <ul className="list-disc list-outside pl-6 space-y-1">
                            <li>structurer vos projets</li>
                            <li>aider votre startup à scaler efficacement</li>
                            <li>accompagner votre équipe technique</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-8 lg:px-32 px-16 py-0 ml-8 w-screen">
                <div className="flex flex-col shrink-0 font-brico-gro font-normal">
                    <p>Ils me font confiance</p>
                    <p>et c’est réciproque</p>
                </div>
                <LandingBannerCarousel />
            </div>
        </section>
    );
}
