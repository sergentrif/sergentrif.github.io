import { KdesignIcon } from "@/components/ui/icons/Kdesign";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { StrikeThrewGiants } from "@/components/ui/icons/StrikeThrewGiants";
import Link from "next/link";
import { cn } from "@/libs/utils";

export const KrmaPresentation = () => {
    return (
        <section
            id="krma-presentation"
            className="flex flex-col bg-brand-midnight text-brand-powder md:p-16 py-8 gap-8"
        >
            <div className="flex flex-col justify-center text-center">
                <h2
                    className={cn(
                        "flex flex-col md:text-[2.5rem] font-brico-gro font-bold uppercase tracking-widest",
                        "text-[22px] w-full",
                    )}
                >
                    Une équipe d&apos;experts...
                    <span>sans les soucis du recrutement</span>
                </h2>
                <p className="font-medium text-brand-silver p-2">
                    Besoin de construire ou&nbsp;<span className="whitespace-nowrap">d&apos;accélérer ?</span>
                </p>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-12 md:gap-6">
                <div className="max-w-[44.9rem] px-4">
                    <p className="text-brand-silver">
                        {`Je mets à votre disposition l'équipe que j'ai constituée et dirigée: des développeurs, product managers et designers qui travaillent en parfaite synergie.`}
                    </p>
                    <p className="text-brand-silver">
                        Une squad{" "}
                        <span className="relative inline-block">
                            {`"clé en main"`}
                            <StrikeThrewGiants className="absolute top-5 left-0 w-30" />
                        </span>{" "}
                        et immédiatement opérationnelle pour transformer vos idées en produit.
                    </p>
                    <Link
                        href="https://www.krma.fr/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center gap-2 pt-4"
                    >
                        <span>Découvrir Krma</span>
                        <RightArrowLinearLink className="w-2 h-4 pt-0.5" />
                    </Link>
                </div>
                <KdesignIcon />
            </div>
        </section>
    );
};
