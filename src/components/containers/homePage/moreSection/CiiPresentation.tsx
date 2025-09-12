import { AgrementBadge } from "@/components/ui/icons/AgrementBadge";

export const CiiPresentation = () => {
  return (
    <section
      id="krma-presentation"
      className="flex flex-col text-brand-midnight py-24 pb-32 px-24 gap-8"
    >
      <h2 className="flex flex-col justify-center text-center text-[2.5rem] font-brico-gro font-bold uppercase tracking-widest">
        Récupérez 20%
        <span>de votre investissement grâce au CII</span>
      </h2>
      <div className="flex items-center gap-8 px-16">
        <AgrementBadge className="shrink-0 w-45 h-44" />
        <p className="text-brand-fine-blue flex flex-col gap-0.5 max-w-4xl">
          Mon agrément Crédit Impôt Innovation (CII) est un avantage financier
          direct pour vous.
          <span>
            {`Il permet à votre entreprise de récupérer 20% du montant de mes prestations sous forme de crédit d'impôt`}
          </span>
        </p>
      </div>
    </section>
  );
};
