const faqs = [
    {
        question: "Est-ce que ça va braquer mon CTO ?",
        answer: "Non. L'audit n'est pas une inspection externe qui arrive en juge. Je travaille avec votre CTO, pas contre lui. La plupart du temps, il est soulagé qu'un regard extérieur pose les mots sur ce qu'il vit déjà. Ce que vous obtenez, c'est un diagnostic partagé - pas un rapport à charge.",
    },
    {
        question: "Combien ça coûte ?",
        answer: "En moyenne entre 4 000 et 8 000 € selon la taille de l'équipe. Moins pour une très petite équipe, plus au-delà de 5 à 6 développeurs. 2 à 3 semaines, livrable en langage business. Les détails sont sur la page Prestations.",
    },
    {
        question: "Qu'est-ce que j'obtiens à la fin ?",
        answer: "Un état des lieux complet et un plan d'action priorisé court, moyen et long terme - pensé pour être actionnable immédiatement par le CEO ou le CTO, sans traduction ni intermédiaire. Organisation, architecture, vélocité, management, adéquation produit/business : pas un rapport à lire, une liste de choses à faire dans l'ordre.",
    },
    {
        question: "Est-ce qu'on peut continuer ensemble après ?",
        answer: "Oui, de deux façons. Un accompagnement mensuel (4 à 8h/mois) pour rester en regard extérieur sur l'exécution. Ou une équipe d'exécution si l'audit révèle un besoin concret en dev, design ou produit.",
    },
    {
        question: "En quoi c'est différent d'un cabinet de conseil ?",
        answer: "Vous parlez directement à quelqu'un qui a fait : 7 ans CTO chez lePERMISLIBRE (3 à 30 personnes, IPO), 2 ans aux côtés d'Objow face à un grand compte Edenred, et une quinzaine de startups auditées depuis. J'ai aussi été CEO. Mon audit couvre la tech, le produit, l'organisation et le business - pas uniquement la stack.",
    },
];

export const FaqSection = () => {
    return (
        <section className="flex flex-col items-center py-16 lg:py-24 px-4 md:px-16 lg:px-32 gap-8">
            <h2 className="w-full max-w-7xl font-brico-gro lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-wide uppercase">
                Questions fréquentes
            </h2>
            <div className="w-full max-w-7xl flex flex-col divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <details key={index} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                            <span className="font-brico-gro font-semibold md:text-lg text-base text-brand-midnight">
                                {faq.question}
                            </span>
                            <span className="shrink-0 pt-0.5 text-brand-midnight transition-transform duration-200 group-open:rotate-45">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 text-brand-fine-blue md:text-base text-sm leading-relaxed max-w-3xl">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};
