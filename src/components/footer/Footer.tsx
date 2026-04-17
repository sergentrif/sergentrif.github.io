import Link from "next/link";
import { links, legal } from "@/libs/constants";

import { FooterLogo } from "@/components/ui/icons/FooterLogo";
import { FooterBanner, FooterBannerCarousel } from "./FooterBanner";
import { HoverUnderlineWrapper } from "../ui/HoverUnderlineWrapper";
import { TrackedLink } from "../ui/TrackedLink";

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
                            <TrackedLink
                                href={links.presentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                tracking={{ event: "file_download", medium: "footer", document: "presentation" }}
                            >
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>PRÉSENTATION
                                </HoverUnderlineWrapper>
                            </TrackedLink>
                            <TrackedLink
                                href={links.adrien_cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                tracking={{ event: "file_download", medium: "footer", document: "cv" }}
                            >
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>CV
                                </HoverUnderlineWrapper>
                            </TrackedLink>
                            <a href={`mailto:${legal.email}`} className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>EMAIL
                                </HoverUnderlineWrapper>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col self-start font-extrabold tracking-[0.03] px-2 text-lg md:text-[22px] md:order-none -order-1">
                        <div className="flex flex-col md:gap-1">
                            <Link href="/parcours" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>PARCOURS
                                </HoverUnderlineWrapper>
                            </Link>
                            <Link href="/prestations" className="group">
                                <HoverUnderlineWrapper>
                                    <span className="text-brand-glacier">##</span>PRESTATIONS
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
                        <Link
                            href="/politique-de-confidentialite"
                            className="group text-brand-giants md:text-[22px] text-lg font-medium"
                        >
                            <HoverUnderlineWrapper>Confidentialité</HoverUnderlineWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
