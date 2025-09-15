import Image from "next/image";
import portrait from "@/assets/images/profile_portrait_adrien.png";
import { LandingName } from "@/components/ui/icons/LandingName";
import { AgrementBadge } from "@/components/ui/icons/AgrementBadge";
import { CircleArrowUpAndDown } from "@/components/ui/icons/CircleArrowUpAndDown";
import { LandingHomePageArrowIcon } from "@/components/ui/icons/RightArrowYellow";
import { LandingBannerCarousel } from "./LandingCarousel";

export function Landing() {
    return (
        <section className="flex flex-col gap-16 pt-32 lg:px-32 px-16">
            <div className="flex relative">
                <div className="flex flex-col items-end font-brico-gro tracking-widest relative top-18 left-20">
                    <p>CTO &</p>
                    <p>architecte</p>
                    <p>technique</p>
                </div>
                <LandingName />
                <div className="flex flex-col justify-end items-start font-brico-gro tracking-widest relative -bottom-1 right-5">
                    <p>Startups early stage</p>
                    <p>SaaS</p>
                    <p>Web & apps</p>
                </div>
            </div>
            <div className="flex pt-16 relative -translate-x-1/20 items-center justify-center px-16">
                <div className="flex relative shrink-0 gap-5">
                    <CircleArrowUpAndDown />
                    <AgrementBadge className="absolute -top-17 -right-13" />
                    <Image src={portrait} alt="Portrait of Adrien Blandin" className="w-58 h-77" />
                </div>
                <div className="flex flex-col flex-1 pl-14 relative">
                    <h2 className="font-bold font-brico-gro uppercase tracking-widest text-[2.5rem] max-w-[47rem]">
                        {" J'aide les CEOs à transformer leur tech en accélérateur de croissance "}
                    </h2>
                    <ul className="list-disc list-inside text-brand-fine-blue pt-4">
                        J’interviens comme CTO à temps partagé pour :
                        <li className="pl-2">aider votre startup à scaler efficacement</li>
                        <li className="pl-2">structurer vos projets</li>
                        <li className="pl-2">accompagner votre équipe technique</li>
                    </ul>
                    <LandingHomePageArrowIcon />
                </div>
            </div>
            <div className="flex items-center justify-center gap-8 px-16 py-0 w-screen">
                <div className="flex flex-col shrink-0 font-brico-gro font-normal">
                    <p>Ils me font confiance</p>
                    <p>et c’est réciproque</p>
                </div>
                <LandingBannerCarousel />
            </div>
        </section>
    );
}
