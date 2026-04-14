"use client";

import { links } from "@/libs/constants";
import { CtaButton } from "@/components/ui/CtaButton";

export function BottomContactBox() {
    return (
        <div className="flex flex-col self-center md:gap-10 gap-4 md:p-8 p-4 rounded-2xl infobox-border-linear-gradient shadow-lg max-w-3xl">
            <p className="md:text-base text-sm">
                Transformons ensemble votre entreprise : contactez-moi pour découvrir comment mon expertise technique
                peut propulser vos objectifs business vers de nouveaux sommets de réussite.
            </p>
            <CtaButton href={links.zcal} rel="noopener noreferrer" target="_blank" className="self-center">
                Contactez-moi
            </CtaButton>
        </div>
    );
}
