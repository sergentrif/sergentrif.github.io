export function EditorialSection() {
    return (
        <section className="lg:px-32 md:px-16 px-4 py-16 flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-3xl">
                <p className="font-brico-gro font-bold text-2xl md:text-3xl text-brand-midnight">
                    {"Tout part d'un audit."}
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "Ça peut faire penser au consultant McKinsey qui n'a jamais mis les mains dans le cambouis. Sauf que j'ai passé 7 ans à construire une équipe tech de 0 à 30 personnes. Je ne théorise pas, je compare ce que je vois chez vous avec ce que j'ai vécu de l'intérieur."
                    }
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "On ne peut pas changer ce qu'on ne comprend pas. Ce serait dangereux. Il faut trouver les vrais blocages avant de toucher à quoi que ce soit. La mauvaise solution au mauvais problème, c'est pire que de ne rien faire."
                    }
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "Si vous pensez que je peux arriver en vous disant déjà ce que vous devez faire, passez votre chemin. Les solutions universelles n'existent pas. Il n'y a que des combinaisons d'outils adaptées à un contexte qui lui, est toujours unique."
                    }
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "J'ai besoin de comprendre. J'ai besoin de matière : architecture, organigramme, rituels, échanges avec l'équipe - technique, produit, CODIR. Je synthétise, je traduis en langage business, et je propose un plan d'action priorisé qui peut démarrer immédiatement."
                    }
                </p>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
                <p className="font-brico-gro font-bold text-2xl md:text-3xl text-brand-midnight">
                    {"On pourrait penser que je ne m'adresse qu'aux entreprises sans CTO. C'est faux."}
                </p>
                <p className="text-brand-fine-blue">{"À l'issue d'un audit, il n'y a que 4 situations possibles :"}</p>
                <ol className="list-decimal pl-5 flex flex-col gap-2 text-brand-fine-blue">
                    <li>{"Pas de CTO. Le CEO porte la tech seul et l'équipe a atteint un plafond."}</li>
                    <li>{"Le CTO fait mal son travail. Le CEO le sentait, maintenant il le sait."}</li>
                    <li>{"Le CTO fait bien son travail. Le CEO ne le voyait pas."}</li>
                    <li>{"Le CTO fait bien son travail. Le CEO le savait déjà."}</li>
                </ol>
                <p className="text-brand-fine-blue">
                    {
                        "Les situations 1 et 2 sont celles où j'ai le plus d'impact. L'audit donne au CEO les faits qui lui manquaient pour agir."
                    }
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "Si vous êtes dans la situation 3, j'apporte ce que j'ai observé dans une dizaine de startups pour rétablir la lecture entre CEO et CTO."
                    }
                </p>
                <p className="text-brand-fine-blue">
                    {"Si vous êtes dans la situation 4, a priori vous n'avez pas besoin de moi."}
                </p>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
                <p className="font-brico-gro font-bold text-2xl md:text-3xl text-brand-midnight">Et après ?</p>
                <p className="text-brand-fine-blue">
                    {"Si l'audit suffit, je m'en vais. On se recroisera quand ce sera le moment."}
                </p>
                <p className="text-brand-fine-blue">
                    {
                        "Sinon, on continue. Je reste en accompagnement pour suivre l'exécution du plan : sparring-partner pour le CEO, regard extérieur pour le CTO, aide au recrutement, préparation d'une levée. Et si le diagnostic révèle un besoin d'exécution - du dev, du design, du produit - j'ai krma. Ce n'est pas un collectif de freelances trouvés sur une plateforme en ligne. C'est une partie de mon ancienne équipe qui a choisi de me suivre à nouveau quand je suis parti. Des gens avec qui je travaille depuis des années."
                    }
                </p>
            </div>
        </section>
    );
}
