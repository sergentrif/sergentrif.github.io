import Image from "next/image";
import Link from "next/link";
import { site, links } from "@/libs/constants";
import portrait from "@/assets/images/adrien-blandin.webp";
import { LandingName } from "@/components/ui/icons/LandingName";
import { AgrementBadge } from "@/components/ui/icons/AgrementBadge";
import { CircleArrowUpAndDown } from "@/components/ui/icons/CircleArrowUpAndDown";
import { LandingHomePageArrow } from "@/components/ui/icons/RightArrowYellow";
import { LandingBannerCarousel } from "./LandingCarousel";
import { CtaButton } from "@/components/ui/CtaButton";

export function Landing() {
    return (
        <section className="flex flex-col gap-16 pt-32 md:px-16 px-4 w-full">
            <div className="flex md:flex-row flex-col justify-center md:gap-12 gap-4 relative">
                <div className="flex flex-col md:items-end font-brico-gro tracking-wide text-xs sm:text-sm md:text-base relative lg:left-12 md:left-9 lg:top-14 md:top-12">
                    <p>CTO freelance</p>
                    <p>Machine à auditer la tech</p>
                </div>
                <LandingName />
                <div className="flex flex-col md:justify-end md:items-start items-end font-brico-gro tracking-wide text-xs sm:text-sm md:text-base relative -bottom-1.5">
                    <p>Startups</p>
                    <p>10 à 80 personnes</p>
                </div>
            </div>

            <div className="md:flex hidden md:pt-32 pt-8 pb-8 relative -translate-x-1/20 items-center justify-center lg:px-16 md:px-8">
                <div className="flex relative shrink-0 gap-5">
                    <CircleArrowUpAndDown className="w-16 pt-15" />
                    <AgrementBadge className="absolute lg:-top-17 md:-top-14 -top-10 lg:-right-13 md:-right-11 -right-9 lg:w-32 lg:h-32 md:w-26 md:h-26 w-24 h-24" />
                    <Image
                        src={portrait}
                        alt={`Portrait de ${site.name}`}
                        className="lg:w-58 lg:h-77 md:w-50 md:h-68 w-42 h-52"
                        priority
                    />
                </div>
                <div className="flex flex-col pl-14 relative">
                    <h2 className="font-bold font-brico-gro uppercase tracking-wide lg:text-[2.5rem] md:text-2xl max-w-[47rem]">
                        {"Votre tech avance bien. Vraiment ?"}
                    </h2>
                    <div className="text-brand-fine-blue pt-4">
                        <p>
                            {
                                "Ex-CTO lePERMISLIBRE (3 → 30 personnes, IPO). J'ouvre le capot, je traduis ce que je vois en langage business, et je propose un plan d'action priorisé. Avant de toucher à quoi que ce soit."
                            }
                        </p>
                        <LandingHomePageArrow className="absolute -z-10 lg:-right-34 lg:-top-14 md:-right-24 md:-top-20 lg:w-71 lg:h-103 md:w-67 md:h-98 opacity-20" />
                    </div>
                    <div className="flex flex-row items-center gap-6 pt-8">
                        <CtaButton
                            href={`${links.zcal}?utm_source=site&utm_medium=hero&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prendre rendez-vous
                        </CtaButton>
                        <Link
                            href="/diagnostic"
                            className="text-sm text-brand-fine-blue underline underline-offset-4 hover:text-brand-midnight transition-colors"
                        >
                            Pas encore sûr ? Diagnostic gratuit (3 min)
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:hidden pt-8 pb-8 relative items-center justify-center">
                <div className="flex relative justify-between sm:justify-around shrink-0 pb-8 w-full">
                    <div className="relative">
                        <AgrementBadge className="absolute -top-10 -right-10 w-26 h-26" />
                        <Image src={portrait} alt={`Portrait de ${site.name}`} className="w-42 h-56 " />
                    </div>
                    <LandingHomePageArrow className="absolute -z-10 -top-22 right-8 w-75 h-102 opacity-20" />
                    <CircleArrowUpAndDown className="w-16 pt-15" />
                </div>
                <div className="flex flex-col flex-1 relative">
                    <h2 className="font-bold font-brico-gro uppercase tracking-wide text-[22px]">
                        {"Votre tech avance bien. Vraiment ?"}
                    </h2>
                    <div className="text-brand-fine-blue pt-4">
                        <p>
                            {
                                "Ex-CTO lePERMISLIBRE (3 → 30 personnes, IPO). J'ouvre le capot, je traduis ce que je vois en langage business, et je propose un plan d'action priorisé. Avant de toucher à quoi que ce soit."
                            }
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 pt-8">
                        <CtaButton
                            href={`${links.zcal}?utm_source=site&utm_medium=hero&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prendre rendez-vous
                        </CtaButton>
                        <Link
                            href="/diagnostic"
                            className="text-sm text-brand-fine-blue underline underline-offset-4 hover:text-brand-midnight transition-colors"
                        >
                            Pas encore sûr ? Diagnostic gratuit (3 min)
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center sm:gap-8 gap-2 lg:px-32 py-0 sm:ml-8 pl-16 sm:w-screen overflow-x-hidden">
                <div className="flex flex-col shrink-0 font-brico-gro font-normal">
                    <p>Ils me font</p>
                    <p>confiance et </p>
                    <p>c’est réciproque</p>
                </div>
                <LandingBannerCarousel />
            </div>
        </section>
    );
}
