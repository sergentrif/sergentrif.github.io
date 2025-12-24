import Image from "next/image";
import profil_pic from "@/assets/images/profile_portrait_adrien.png";

export function TopTemoignageSection() {
    return (
        <div className="flex flex-col pb-16">
            <div className="flex gap-6 md:gap-12 mb-8 md:mb-0">
                <Image src={profil_pic} alt="Photo de profil de Adrien Blandin" className="sm:w-40 sm:h-48 w-32 h38" />
                <div className="flex flex-col md:justify-around justify-center">
                    <h2 className="font-bold font-brico-gro uppercase tracking-wide md:text-3xl text-xl max-w-[47rem] md:justify-center">
                        Découvrez ce qu’ils ont pensé de notre collaboration
                    </h2>
                    <p className="text-brand-fine-blue hidden md:flex max-w-4xl w-full md:text-lg text-base">
                        Ma mission est de fournir une direction technique stratégique et adaptée, en harmonie avec vos
                        objectifs d’affaires.
                    </p>
                </div>
            </div>
            <p className="text-brand-fine-blue md:hidden max-w-4xl w-full text-base">
                Ma mission est de fournir une direction technique stratégique et adaptée, en harmonie avec vos objectifs
                d’affaires.
            </p>
        </div>
    );
}
