"use client";

import Link from "next/link";
import { links } from "@/libs/constants";
import { TopRightSquare } from "@/components/ui/icons/TopRightSquare";

export function BottomContactBox() {
    return (
        <div className="flex flex-col self-center gap-10 px-8 py-8 rounded-2xl infobox-border-linear-gradient shadow-lg max-w-3xl">
            <p>
                Transformons ensemble votre entreprise : contactez-moi pour découvrir comment mon expertise technique
                peut propulser vos objectifs business vers de nouveaux sommets de réussite.
            </p>
            <div className="flex relative self-center hover:scale-105">
                <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
                    <TopRightSquare stroke="hsl(13 90% 58%)" className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10" />
                </div>
                <Link
                    href={links.calendly_adrien}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 relative overflow-hidden"
                >
                    Contactez-moi
                </Link>
            </div>
        </div>
    );
}
