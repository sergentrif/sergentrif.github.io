import Link from "next/link";
import { links } from "@/libs/constants";
import { FooterLogo } from "@/components/ui/icons/FooterLogo";
import { FooterBanner, FooterBannerCarousel } from "./FooterBanner";
import { HoverUnderlineWrapper } from "../ui/HoverUnderlineWrapper";

export function Footer() {
    return (
        <footer>
            <FooterBanner />
            <FooterBannerCarousel />
            <div className="flex lg:px-24 md:px-8 py-16 max-w-[1920px] w-full mx-auto font-brico-gro">
                <div className="flex md:flex-row flex-col justify-between w-full gap-6">
                    <div className="flex flex-col items-center self-start font-extrabold tracking-[0.03] px-2 text-lg md:text-[22px]">
                        <div className="flex flex-col md:gap-1">
                            <Link href={links.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>LINKEDIN
                                </HoverUnderlineWrapper>
                            </Link>
                            <Link href={links.github} target="_blank" rel="noopener noreferrer" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>GITHUB
                                </HoverUnderlineWrapper>
                            </Link>
                            <Link href={links.presentation} target="_blank" rel="noopener noreferrer" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>PRÉSENTATION
                                </HoverUnderlineWrapper>
                            </Link>
                            <Link href={links.adrien_cv} target="_blank" rel="noopener noreferrer" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>CV
                                </HoverUnderlineWrapper>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-end px-2">
                        <div className="text-brand-giants text-base">{`</>`}</div>
                        <FooterLogo />
                        <Link
                            href="/mentions-legales"
                            className="group text-brand-giants md:text-[22px] text-lg font-medium"
                        >
                            <HoverUnderlineWrapper>Mentions Légales</HoverUnderlineWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
