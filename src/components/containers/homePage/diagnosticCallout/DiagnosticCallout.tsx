import Link from "next/link";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";
import { Cards, CardContent } from "../MainSection/Card";

export function DiagnosticCallout() {
    return (
        <section className="flex flex-col items-center py-16 lg:py-24 px-4 md:px-16 lg:px-32">
            <Cards className="w-full">
                <CardContent>
                    {/*
                     * Desktop : grille 2 colonnes × 4 lignes. Chaque colonne est un
                     * sous-grille (subgrid rows) qui hérite des tracks du parent.
                     * Les éléments homologues (label, titre, texte, CTA) partagent
                     * ainsi la même hauteur de ligne.
                     *
                     * Mobile : flex-col classique, séparateur <hr> visible.
                     */}
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-[auto_auto_1fr_auto] md:gap-0">
                        {/* Colonne gauche */}
                        <div className="flex flex-col gap-4 md:row-span-4 md:grid md:grid-rows-subgrid md:pr-10 lg:pr-16">
                            <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                                Diagnostic éclair - gratuit - 3 minutes
                            </p>
                            <h3 className="lg:text-[1.375rem] text-xl font-extrabold font-brico-gro text-brand-fine-blue tracking-[0.03em]">
                                Vous sentez que quelque chose cloche. Mais vous n&apos;avez pas de preuve.
                            </h3>
                            <p className="text-base text-brand-fine-blue leading-relaxed">
                                10 questions pour savoir si votre tech freine votre croissance - ou si votre intuition
                                vous joue des tours. Les mêmes questions que j&apos;utilise en début d&apos;audit. Sans
                                jargon. Résultat immédiat.
                            </p>
                            <div className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex">
                                <Link href="/diagnostic" className="flex items-center gap-1 group">
                                    <HoverUnderlineWrapper>Faire le diagnostic éclair</HoverUnderlineWrapper>
                                    <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                                </Link>
                            </div>
                        </div>

                        <hr className="md:hidden border-brand-fine-blue/20" />

                        {/* Colonne droite */}
                        <div className="flex flex-col gap-4 md:row-span-4 md:grid md:grid-rows-subgrid md:pl-10 lg:pl-16 md:border-l md:border-brand-fine-blue/20">
                            <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                                Pro bono - Gratuit - 45 minutes
                            </p>
                            <h3 className="lg:text-[1.375rem] text-xl font-extrabold font-brico-gro text-brand-fine-blue tracking-[0.03em]">
                                Pas encore le budget pour un audit. Mais un vrai problème tech.
                            </h3>
                            <p className="text-base text-brand-fine-blue leading-relaxed">
                                Deux créneaux par semaine, une session par CEO, 45 minutes en visio. Vous
                                m&apos;indiquez votre situation, on en parle sans filtre. Pas de rapport, pas
                                d&apos;engagement. Un point de vue honnête sur ce que vous vivez.
                            </p>
                            <div className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex">
                                <Link href="/diagnostic-pro-bono" className="flex items-center gap-1 group">
                                    <HoverUnderlineWrapper>En savoir plus</HoverUnderlineWrapper>
                                    <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Cards>
        </section>
    );
}
