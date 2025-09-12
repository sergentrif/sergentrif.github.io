import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";

const content = [
  {
    id: 1,
    description: [
      "J'ai eu la chance de collaborer avec beaucoup de monde dans mes différentes expériences, mais j'ai rarement vu quelqu'un s'intégrer et prendre des responsabilités aussi rapidement !",
      "Professionnel, impliqué et efficace dans chacune de ses interventions, je peux dire que collaborer avec Adrien est certainement l’une des meilleures décisions que nous avons prises.",
      "Adrien est un CTO talentueux, expérimenté et leader. Il y aura clairement dans l'histoire de notre société un avant et un après l'arrivée d'Adrien !",
    ],
    content: (
      <div className="flex flex-col self-center gap-8 px-4">
        <ObjowIcon className="max-w-49 max-h-12.25 w-full h-full" />
        <div className="w-13 border-linear-gradient" />
        <div className="uppercase text-brand-fine-blue font-medium">
          <p>Jonathan le Duc</p>
          <Link
            href="https://www.objow.com/"
            className="flex items-center gap-2"
          >
            <span className="font-brico-gro tracking-widest">CEO - Objow</span>
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    description: [
      "Adrien est un interlocuteur de grande qualité qui parvient rapidement à aligner les aspects techniques avec la vision business, une qualité rare dans l'univers du développement informatique.",
      "Il sait transmettre les informations de manière claire et concise, sans compliquer les choses, tout en préparant soigneusement l'avenir de vos évolutions produit.",
    ],
    content: (
      <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
        <Link
          href="https://www.datacomplyone.com/"
          className="flex flex-col gap-1 text-3xl"
        >
          Data Comply One
          <span className="font-brico-gro tracking-widest text-base">
            #RGPD
          </span>
        </Link>
        <div className="w-13 border-linear-gradient" />
        <div>
          <p>Bertrand Bucelle</p>
          <p>CEO - Data Comply One</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    description: [
      "Adrien dispose d'une qualité particulièrement appréciable : une vraie capacité à allier vision business et vision tech pour concevoir et développer un produit avec efficience.",
      "En collaborant avec Adrien, vous saurez très vite apprécier la pertinence de son questionnement, son honnêteté, son sens de l'efficacité et son organisation sans faille. Et votre confiance ne sera pas déçue.",
      "Sur mon projet, il a su très vite trouver la bonne approche, tenir ses engagements tout en étant clair sur sa contribution et sa valeur ajoutée.",
    ],
    content: (
      <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
        <div>
          <p className="text-3xl">CERTIXIO</p>
          <span className="font-brico-gro tracking-widest">#IA</span>
        </div>
        <div className="w-13 border-linear-gradient" />
        <div>
          <p>Marion Breuleux</p>
          <p>CEO - CERTIXIO</p>
        </div>
      </div>
    ),
  },
];

export const TemoignageSection = () => {
  return (
    <section className="flex flex-col items-center gap-2 pb-16 px-16 lg:px-32">
      <h2 className="max-w-7xl font-brico-gro text-[2.5rem] font-bold tracking-widest uppercase">
        transformer des défis techniques en succès tangibles pour votre
        entreprise
      </h2>
      <div className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex self-start pb-8">
        <Link className="flex gap-1 items-center" href="/temoignages">
          Voir tous les témoignages
          <RightArrowLinearLink className="w-2 h-4 pt-0.5" />
        </Link>
      </div>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};
