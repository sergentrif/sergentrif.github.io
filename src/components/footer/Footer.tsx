import Link from "next/link";
import { links } from "@/libs/constants";
import { FooterLogo } from "@/components/ui/icons/FooterLogo";
import { FooterBanner, FooterBannerCarousel } from "./FooterBanner";

export function Footer() {
  return (
    <footer>
      <FooterBanner />
      <FooterBannerCarousel />
      <div className="flex justify-between lg:px-24 md:px-8 py-16 max-w-[1920px] w-full mx-auto font-brico-gro">
        <div className="md:flex hidden text-[22px] font-extrabold tracking-[0.03]">
          <div className="flex flex-col gap-2 justify-center">
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-brand-glacier">##</span>LINKEDIN
            </Link>
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <span className="text-brand-glacier">##</span>GITHUB
            </Link>
          </div>
        </div>

        <div className="flex md:hidden flex-col gap-8 items-center justify-center text-[22px] font-extrabold tracking-[0.03]">
          <div className="flex flex-col text-2xl gap-4">
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-brand-glacier">##</span>LINKEDIN
            </Link>
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <span className="text-brand-glacier">##</span>GITHUB
            </Link>
          </div>
        </div>

        <div className="md:flex hidden flex-col gap-2 items-end">
          <div className="text-brand-giants text-base">{`</>`}</div>
          <FooterLogo />
          <Link
            href="/mentions-legales"
            className="text-brand-giants text-[22px] font-medium"
          >
            Mentions Légales
          </Link>
        </div>

        <div className="flex md:hidden flex-col gap-3 justify-center text-2xl px-8 pt-16">
          <div className="text-brand-giants text-sm">{`</>`}</div>
        </div>
      </div>
    </footer>
  );
}
