import Link from "next/link";
import { links } from "@/libs/constants";
import { FooterLogo } from "@/components/ui/icons/FooterLogo";
import { FooterBanner, FooterBannerCarousel } from "./FooterBanner";

export function Footer() {
    return (
        <footer>
            <FooterBanner />
            <FooterBannerCarousel />
            <div className="flex lg:px-24 md:px-8 py-16 max-w-[1920px] w-full mx-auto font-brico-gro">
                <div className="flex md:flex-row flex-col justify-between w-full gap-6">
                    <div className="flex flex-col items-center self-start font-extrabold tracking-[0.03] px-2 text-lg md:text-[22px]">
                        <div className="flex flex-col md:gap-2">
                            <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                <span className="text-brand-glacier">##</span>LINKEDIN
                            </Link>
                            <Link href={links.github} target="_blank" rel="noopener noreferrer">
                                <span className="text-brand-glacier">##</span>GITHUB
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-end px-2">
                        <div className="text-brand-giants text-base">{`</>`}</div>
                        <FooterLogo />
                        <Link href="/mentions-legales" className="text-brand-giants md:text-[22px] text-lg font-medium">
                            Mentions Légales
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
