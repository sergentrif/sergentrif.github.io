import Image from "next/image";
import profil_pic from "@/assets/images/profile_portrait_adrien.png";

export function TopArticleSection() {
    return (
        <div className="flex flex-col pb-16">
            <div className="flex gap-6 md:gap-12 mb-4 md:mb-0">
                <Image src={profil_pic} alt="Photo de profil de Adrien Blandin" className="sm:w-40 sm:h-48 w-32 h38" />
                <div className="flex flex-col justify-center md:justify-between md:mt-8">
                    <h2 className="flex self-center md:self-start font-bold font-brico-gro uppercase tracking-wide md:text-[2.5rem] text-3xl max-w-[47rem]">
                        Mes articles
                    </h2>
                    <p className="text-brand-fine-blue hidden md:flex max-w-4xl items-end w-full">
                        Découvrez des conseils et des perspectives uniques sur le rôle de CTO, directement issus de mon
                        parcours professionnel.
                    </p>
                </div>
            </div>
            <p className="text-brand-fine-blue md:hidden max-w-4xl px-0 w-full">
                Découvrez des conseils et des perspectives uniques sur le rôle de CTO, directement issus de mon parcours
                professionnel.
            </p>
        </div>
    );
}
