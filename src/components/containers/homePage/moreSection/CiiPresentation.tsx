import { AgrementBadge } from "@/components/ui/icons/AgrementBadge";

export const CiiPresentation = () => {
    return (
        <section id="krma-presentation" className="flex flex-col text-brand-midnight lg:py-24 py-16 lg:px-24 gap-8">
            <AgrementBadge className="shrink-0 w-45 h-44 md:hidden self-center" />
            <h2 className="md:flex hidden flex-col justify-center text-center md:text-[2.5rem] text-[22px] font-brico-gro font-bold uppercase tracking-wide px-4">
                Récupérez 20%
                <span>de votre investissement grâce au CII</span>
            </h2>
            <h2 className="md:hidden flex text-center items-center justify-center text-[22px] px-4 font-brico-gro font-bold uppercase tracking-wide">
                Récupérez 20% de votre investissement grâce au CII
            </h2>
            <div className="flex items-center gap-8 lg:px-16 md:px-4 px-2">
                <AgrementBadge className="shrink-0 w-45 h-44 md:inline hidden" />
                <p className="text-brand-fine-blue flex flex-col gap-0.5 max-w-4xl md:px-4 px-0">
                    Mon agrément Crédit Impôt Innovation (CII) est un avantage financier direct pour vous.
                    <span>
                        {`Il permet à votre entreprise de récupérer 20% du montant de mes prestations sous forme de crédit d'impôt`}
                    </span>
                </p>
            </div>
        </section>
    );
};
