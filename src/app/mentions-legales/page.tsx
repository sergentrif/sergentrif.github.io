import Link from "next/link";
import { legal } from "@/libs/constants";
import t from "./content.json";

export default function MentionsLegales() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-36 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <h1 className="md:text-4xl text-3xl flex self-center">{t.pageTitle}</h1>
            <div className="pb-12 flex flex-col md:gap-8 gap-6 self-start md:px-16 px-6">
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.editeur.title}</h2>
                <div className="md:text-lg text-base flex flex-col gap-2">
                    <div className="flex gap-2 cursor-pointer">
                        <p>{t.sections.editeur.content.websiteLabel}</p>
                        <Link href={t.sections.editeur.content.websiteUrl} className="hover:underline hover:scale-105">
                            {t.sections.editeur.content.websiteDisplay}
                        </Link>
                    </div>
                    <p>
                        {legal.raison_sociale}, {legal.adresse_siege_social}
                    </p>
                    <p>{t.sections.editeur.content.directeurPublication}</p>
                </div>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.hebergement.title}</h2>
                <div className="md:text-lg text-base flex flex-col gap-2">
                    <p>
                        {legal.nom_hebergeur}, {legal.adresse_hebergeur}
                    </p>
                </div>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.proprieteIntellectuelle.title}</h2>
                <p className="md:text-lg text-base">{t.sections.proprieteIntellectuelle.content}</p>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.responsabilite.title}</h2>
                <p className="md:text-lg text-base">{t.sections.responsabilite.content}</p>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.liensHypertextes.title}</h2>
                <p className="md:text-lg text-base">{t.sections.liensHypertextes.content}</p>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.collecteInformations.title}</h2>
                <div className="md:text-lg text-base flex flex-col gap-2">
                    {t.sections.collecteInformations.content.description}
                    <a href={`mailto:${legal.email_krma}`} className="hover:underline hover:scale-105 w-24">
                        {legal.email_krma}
                    </a>
                </div>
                <p className="md:text-lg text-base">{t.sections.collecteInformations.content.droitsMotifs}</p>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.cookies.title}</h2>
                <p className="md:text-lg text-base">{t.sections.cookies.content}</p>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.protectionDonnees.title}</h2>
                <div className="flex flex-col gap-2 md:text-lg text-base">
                    <p>{t.sections.protectionDonnees.content.rgpdDescription}</p>
                    <p>{t.sections.protectionDonnees.content.contactDescription}</p>
                    <a href={`mailto:${legal.email_krma}`} className="hover:underline hover:scale-105 w-24">
                        {legal.email_krma}
                    </a>
                </div>
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8">{t.sections.droitApplicable.title}</h2>
                <div className="flex flex-col gap-2 pb-12">
                    <p className="md:text-lg text-base">{t.sections.droitApplicable.content.juridiction}</p>
                    <p>
                        {t.sections.droitApplicable.content.miseAJourLabel} {legal.date_mise_a_jour}
                    </p>
                </div>
            </div>

            <div className="pb-16 self-center flex">
                <Link
                    href="/"
                    className="flex border-brand-giants border-2 rounded-3xl md:px-6 md:py-2 px-4 py-1.5 self-center md:text-xl text-base"
                >
                    {"Retour à l'accueil"}
                </Link>
            </div>
        </section>
    );
}
