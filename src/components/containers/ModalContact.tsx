"use client";

import Image from "next/image";
import bg from "@/assets/images/card_bg.webp";
import { links } from "@/libs/constants";
import { TopRightSquare } from "../ui/icons/TopRightSquare";
import { ContactModalArrowIcon } from "../ui/icons/RightArrowYellow";
import Link from "next/link";
import { cn } from "@/libs/utils";

interface ModalContactProps {
    onClose: () => void;
}

export function ModalContact({ onClose }: ModalContactProps) {
    return (
        <div>
            <div className={cn("max-w-[1520px] mx-auto flex flex-col gap-3 mt-6", "md:-mt-8 md:px-8 md:gap-6")}>
                <div className="flex self-end -mt-4">
                    <button
                        onClick={onClose}
                        className="flex relative border-brand-giants border-2 rounded-[18px] text-brand-midnight cursor-pointer p-2.5 px-5 font-medium"
                    >
                        <div className="border-t-2 w-5 h-5 flex absolute -z-10 bottom-6.5 left-[31.5px] border-r-2 border-brand-giants mt-6">
                            <TopRightSquare
                                stroke="hsl(13 90% 58%)"
                                className="bg-brand-giants absolute bottom-3.75 left-3.75 w-2.25 h-2.25 z-10"
                            />
                        </div>
                        X
                    </button>
                </div>
                <h1 className={cn("text-[22px] uppercase font-brico-gro font-bold max-w-4xl", "md:text-[2.5rem]")}>
                    {"Contactez-moi pour discuter de l'impact que je pourrais avoir sur votre projet"}
                </h1>
                <div className="flex md:hidden relative self-center pt-8">
                    <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
                        <TopRightSquare
                            stroke="hsl(13 90% 58%)"
                            className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10"
                        />
                    </div>
                    <Link
                        href={links.calendly_adrien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-brand-midnight border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 -mt-8 relative overflow-hidden"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>
                <div className="flex justify-between">
                    <div
                        className={cn(
                            "flex flex-1 flex-col gap-4 max-w-3xl font-medium text-brand-fine-blue text-sm",
                            "md:gap-6 md:text-base",
                        )}
                    >
                        <p>
                            Mon approche est pragmatique, commencer petit pour prouver ma valeur. Entant que CTO à temps
                            partagé, j&apos;interviens sur des missions courtes à fort impact pour vous redonner de la
                            visibilité et de la
                            <span className="whitespace-nowrap">&nbsp;traction :</span>
                        </p>
                        <ul className="list-disc list-outside pl-5">
                            <li>
                                Audit express (technique & orga) pour identifier les vrais points de friction en
                                quelques jours
                            </li>
                            <li>
                                {"Définition d'une roadmap Produit/Tech claire, réaliste et alignée sur vos objectifs"}
                            </li>
                            <li>Management de transition pour stabiliser une équipe dans une phase de changement</li>
                            <li>Aide au recrutement de vos futurs leaders techniques</li>
                        </ul>
                        <p>
                            Si ces défis résonnent, le plus simple est d&apos;en discuter.
                            <span className="whitespace-nowrap">&nbsp;Objectif :</span> vous donner de la clarté, pas
                            vous vendre un projet.
                        </p>
                    </div>

                    <ContactModalArrowIcon className="shrink-0 flex absolute right-20 opacity-60 md:opacity-100" />
                </div>
                <div className="md:flex hidden relative self-center pt-16 bottom-5">
                    <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
                        <TopRightSquare
                            stroke="hsl(13 90% 58%)"
                            className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10"
                        />
                    </div>
                    <Link
                        href={links.calendly_adrien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-brand-midnight border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 -mt-8 relative overflow-hidden"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>
            </div>
            <Image src={bg} alt="Background" className="-z-10 opacity-20 absolute top-0 left-0 h-screen" />
        </div>
    );
}
