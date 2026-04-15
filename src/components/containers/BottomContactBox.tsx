import { links } from "@/libs/constants";
import { Cards, CardContent } from "./homePage/MainSection/Card";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";

export function BottomContactBox() {
    return (
        <Cards>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                        Audit tech — CTO freelance
                    </p>
                    <h3 className="lg:text-[1.375rem] text-xl font-extrabold font-brico-gro text-brand-fine-blue tracking-[0.03em]">
                        Vous avez une question sur votre organisation technique ?
                    </h3>
                    <p className="text-base text-brand-fine-blue leading-relaxed">
                        Un échange de 30 minutes suffit souvent à clarifier ce qui coince. Pas de jargon, pas
                        d&apos;engagement. Un point de vue externe, honnête, sur votre situation.
                    </p>
                    <div className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex">
                        <a
                            href={`${links.zcal}?utm_source=site&utm_medium=bottom_cta&utm_campaign=rdv`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 group"
                        >
                            <HoverUnderlineWrapper>Prendre rendez-vous</HoverUnderlineWrapper>
                            <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                        </a>
                    </div>
                </div>
            </CardContent>
        </Cards>
    );
}
