import Image from "next/image";
import profil_pic from "@/assets/images/profile_portrait_adrien.png";

export function TopArticleSection() {
    return (
        <div className="flex gap-12 pb-6">
            <Image src={profil_pic} alt="Photo de profil de Adrien Blandin" className="w-40 h-48" />
            <p className="text-brand-fine-blue flex max-w-4xl md:px-4 px-0 items-end w-full">
                Découvrez des conseils et des perspectives uniques sur le rôle de CTO, directement issus de mon parcours
                professionnel.
            </p>
        </div>
    );
}
