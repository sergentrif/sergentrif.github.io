import Link from "next/link";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";
import { Cards, CardContent, CardTitle, CardDescription, LinkCards } from "../MainSection/Card";

export function DiagnosticCallout() {
    return (
        <section className="flex flex-col items-center py-16 lg:py-24 px-4 md:px-16 lg:px-32">
            <Cards className="w-full">
                <CardContent>
                    <p className="font-brico-gro text-xs uppercase tracking-widest text-brand-fine-blue">
                        Diagnostic gratuit — 3 minutes
                    </p>
                    <CardTitle>
                        Vous sentez que quelque chose cloche. Mais vous n'avez pas de preuve.
                    </CardTitle>
                    <CardDescription>
                        <p>
                            10 questions pour savoir si votre tech freine votre croissance — ou si votre intuition vous
                            joue des tours. Les mêmes questions que j'utilise en début d'audit. Sans jargon. Résultat
                            immédiat.
                        </p>
                    </CardDescription>
                    <LinkCards>
                        <div className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex">
                            <Link href="/diagnostic" className="flex items-center gap-1 group">
                                <HoverUnderlineWrapper>Faire le diagnostic gratuit</HoverUnderlineWrapper>
                                <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                            </Link>
                        </div>
                    </LinkCards>
                </CardContent>
            </Cards>
        </section>
    );
}
