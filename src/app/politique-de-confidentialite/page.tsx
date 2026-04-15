import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/libs/constants";
import { ContactModalArrowIcon } from "@/components/ui/icons/RightArrowYellow";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
    title: "Politique de confidentialité | Adrien Blandin",
    alternates: { canonical: "/politique-de-confidentialite" },
    robots: { index: false, follow: false },
};

export default function PolitiqueDeConfidentialite() {
    return (
        <section className="flex flex-col pt-12 pb-16">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h1 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">{"Confidentialité"}</h1>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>

            <div className="flex flex-col md:gap-16 gap-10 mx-auto lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        Introduction
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "La protection de vos données personnelles est une priorité pour ce site, édité par la société "
                        }
                        <span className="font-semibold text-brand-midnight">{legal.raison_sociale}</span>
                        {
                            ". Cette politique de confidentialité décrit comment vos données sont collectées et utilisées lors de votre navigation sur "
                        }
                        <Link href="/" className="font-semibold text-brand-midnight hover:underline underline-offset-4">
                            adrien.blandin.me
                        </Link>
                        .
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {"Données collectées"}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {"Ce site collecte uniquement des données de navigation anonymes via Google Analytics :"}
                    </p>
                    <ul className="list-disc list-outside pl-4 flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <li>{"Adresse IP (anonymisée)"}</li>
                        <li>{"Type de navigateur et appareil"}</li>
                        <li>{"Pages visitées et durée de visite"}</li>
                        <li>{"Provenance du trafic (source/medium)"}</li>
                    </ul>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "Aucune donnée d\u2019identité (nom, prénom, email) n\u2019est collectée automatiquement. Les seules données personnelles traitées sont celles que vous transmettez volontairement en prenant contact par email."
                        }
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {"Finalités du traitement"}
                    </h2>
                    <ul className="list-disc list-outside pl-4 flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <li>{"Mesure d\u2019audience et amélioration du contenu (Google Analytics)"}</li>
                        <li>{"Réponse aux demandes de contact envoyées par email"}</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {"Partage des données"}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "Vos données ne sont jamais revendues. Les seules données partagées avec des tiers concernent la mesure d\u2019audience transmise à Google Analytics (Google LLC). Google agit en tant que sous-traitant et traite ces données conformément à sa propre politique de confidentialité."
                        }
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        Cookies
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "Ce site utilise des cookies analytiques déposés par Google Analytics afin de mesurer l\u2019audience et améliorer le contenu. Vous pouvez refuser ces cookies via les paramètres de votre navigateur ou en utilisant une extension de blocage (uBlock Origin, etc.)."
                        }
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {"Conservation des données"}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "Les données de navigation collectées via Google Analytics sont conservées pendant 14 mois, conformément à la configuration par défaut recommandée par la CNIL. Les données de contact par email sont conservées le temps nécessaire au traitement de la demande."
                        }
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        {"Vos droits (RGPD)"}
                    </h2>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {
                            "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :"
                        }
                    </p>
                    <ul className="list-disc list-outside pl-4 flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <li>{"Droit d\u2019accès à vos données"}</li>
                        <li>{"Droit de rectification"}</li>
                        <li>{"Droit à l\u2019effacement (droit à l\u2019oubli)"}</li>
                        <li>{"Droit d\u2019opposition au traitement"}</li>
                        <li>{"Droit à la portabilité"}</li>
                    </ul>
                    <p className="text-brand-fine-blue leading-relaxed">
                        {"Pour exercer ces droits, contactez-nous à l\u2019adresse : "}
                        <a
                            href={`mailto:${legal.email}`}
                            className="font-semibold text-brand-midnight hover:underline underline-offset-4"
                        >
                            {legal.email}
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-brico-gro font-bold lg:text-2xl text-xl uppercase tracking-wide text-brand-midnight">
                        Modifications
                    </h2>
                    <div className="flex flex-col gap-2 text-brand-fine-blue leading-relaxed">
                        <p>
                            {legal.raison_sociale}
                            {
                                " se réserve le droit de modifier cette politique à tout moment. La date de mise à jour est indiquée ci-dessous."
                            }
                        </p>
                        <p className="text-sm">
                            {"Dernière mise à jour : "}
                            {legal.date_mise_a_jour}
                        </p>
                    </div>
                </div>

                <CtaButton href="/">{"Retour à l\u2019accueil"}</CtaButton>
            </div>
        </section>
    );
}
