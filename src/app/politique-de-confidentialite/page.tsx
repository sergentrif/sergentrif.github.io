import type { Metadata } from "next";
import Link from "next/link";
import { legal } from "@/libs/constants";

export const metadata: Metadata = {
    title: "Politique de confidentialité | Adrien Blandin",
    alternates: { canonical: "/politique-de-confidentialite" },
    robots: { index: false, follow: false },
};

export default function PolitiqueDeConfidentialite() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-8 gap-6 pt-36 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <h1 className="md:text-4xl text-3xl flex self-center">{"Politique de confidentialité"}</h1>
            <div className="pb-12 flex flex-col md:gap-8 gap-6 self-start md:px-16 px-6 md:text-lg text-base text-brand-fine-blue">
                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">Introduction</h2>
                <p>
                    {"La protection de vos données personnelles est une priorité pour ce site, édité par la société "}
                    <span className="font-semibold">{legal.raison_sociale}</span>
                    {
                        ". Cette politique de confidentialité décrit comment vos données sont collectées et utilisées lors de votre navigation sur "
                    }
                    <Link href="/" className="hover:underline font-bold">
                        adrien.blandin.me
                    </Link>
                    .
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">{"Données collectées"}</h2>
                <p>{"Ce site collecte uniquement des données de navigation anonymes via Google Analytics :"}</p>
                <ul className="list-disc list-outside pl-4 flex flex-col gap-2">
                    <li>{"Adresse IP (anonymisée)"}</li>
                    <li>{"Type de navigateur et appareil"}</li>
                    <li>{"Pages visitées et durée de visite"}</li>
                    <li>{"Provenance du trafic (source/medium)"}</li>
                </ul>
                <p>
                    {
                        "Aucune donnée d\u2019identité (nom, prénom, email) n\u2019est collectée automatiquement. Les seules données personnelles traitées sont celles que vous transmettez volontairement en prenant contact par email."
                    }
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">{"Finalités du traitement"}</h2>
                <ul className="list-disc list-outside pl-4 flex flex-col gap-2">
                    <li>{"Mesure d\u2019audience et amélioration du contenu (Google Analytics)"}</li>
                    <li>{"Réponse aux demandes de contact envoyées par email"}</li>
                </ul>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">{"Partage des données"}</h2>
                <p>
                    {
                        "Vos données ne sont jamais revendues. Les seules données partagées avec des tiers concernent la mesure d\u2019audience transmise à Google Analytics (Google LLC). Google agit en tant que sous-traitant et traite ces données conformément à sa propre politique de confidentialité."
                    }
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">Cookies</h2>
                <p>
                    {
                        "Ce site utilise des cookies analytiques déposés par Google Analytics afin de mesurer l\u2019audience et améliorer le contenu. Vous pouvez refuser ces cookies via les paramètres de votre navigateur ou en utilisant une extension de blocage (uBlock Origin, etc.)."
                    }
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">{"Conservation des données"}</h2>
                <p>
                    {
                        "Les données de navigation collectées via Google Analytics sont conservées pendant 14 mois, conformément à la configuration par défaut recommandée par la CNIL. Les données de contact par email sont conservées le temps nécessaire au traitement de la demande."
                    }
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">{"Vos droits (RGPD)"}</h2>
                <p>
                    {
                        "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :"
                    }
                </p>
                <ul className="list-disc list-outside pl-4 flex flex-col gap-2">
                    <li>{"Droit d\u2019accès à vos données"}</li>
                    <li>{"Droit de rectification"}</li>
                    <li>{"Droit à l\u2019effacement (droit à l\u2019oubli)"}</li>
                    <li>{"Droit d\u2019opposition au traitement"}</li>
                    <li>{"Droit à la portabilité"}</li>
                </ul>
                <p>
                    {"Pour exercer ces droits, contactez-nous à l\u2019adresse : "}
                    <a href={`mailto:${legal.email}`} className="hover:underline font-bold">
                        {legal.email}
                    </a>
                </p>

                <h2 className="md:text-2xl md:pt-12 text-xl pt-8 text-black">Modifications</h2>
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

            <div className="pb-16 self-center flex">
                <Link
                    href="/"
                    className="flex border-brand-giants border-2 rounded-3xl md:px-6 md:py-2 px-4 py-1.5 self-center md:text-xl text-base"
                >
                    {"Retour à l\u2019accueil"}
                </Link>
            </div>
        </section>
    );
}
