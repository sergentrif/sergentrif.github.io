import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/libs/constants";
import t from "./content.json";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
    title: "Mentions légales | Adrien Blandin",
    alternates: { canonical: "/mentions-legales" },
    robots: { index: false, follow: false },
};


export default function MentionsLegales() {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">{t.pageTitle}</h1>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.editeur.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <div className="flex gap-2">
                            <p>{t.sections.editeur.content.websiteLabel}</p>
                            <Link href={t.sections.editeur.content.websiteUrl} className="font-semibold hover:underline underline-offset-4">
                                {t.sections.editeur.content.websiteDisplay}
                            </Link>
                        </div>
                        <p>{legal.raison_sociale}, {legal.adresse_siege_social}</p>
                        <p>{t.sections.editeur.content.directeurPublication}</p>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.hebergement.title}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {legal.nom_hebergeur}, {legal.adresse_hebergeur}
                    </p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.proprieteIntellectuelle.title}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">{t.sections.proprieteIntellectuelle.content}</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.responsabilite.title}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">{t.sections.responsabilite.content}</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.liensHypertextes.title}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">{t.sections.liensHypertextes.content}</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.collecteInformations.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        {t.sections.collecteInformations.content.description}
                        <a href={`mailto:${legal.email}`} className="font-semibold text-brand-midnight hover:underline underline-offset-4 w-fit">
                            {legal.email}
                        </a>
                    </div>
                    <p className="text-brand-fine-blue leading-relaxed">{t.sections.collecteInformations.content.droitsMotifs}</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.cookies.title}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">{t.sections.cookies.content}</p>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.protectionDonnees.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <p>{t.sections.protectionDonnees.content.rgpdDescription}</p>
                        <p>{t.sections.protectionDonnees.content.contactDescription}</p>
                        <a href={`mailto:${legal.email}`} className="font-semibold text-brand-midnight hover:underline underline-offset-4 w-fit">
                            {legal.email}
                        </a>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {t.sections.droitApplicable.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <p>{t.sections.droitApplicable.content.juridiction}</p>
                        <p>{t.sections.droitApplicable.content.miseAJourLabel} {legal.date_mise_a_jour}</p>
                    </div>
                </div>


                <CtaButton href="/">{"Retour à l'accueil"}</CtaButton>
            </div>
        </section>
    );
}
