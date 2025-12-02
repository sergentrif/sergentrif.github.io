import { Cards, CardRowAlign, CardContent, CardTitle, InfoBox, CardDescription, LinkCards, Design } from "./Card";
import Link from "next/link";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { cardsData } from "./CardContent";
import { cn } from "@/libs/utils";

export const MainCardSection = () => {
    return (
        <section
            className={cn("lg:px-32 lg:py-16 md:px-16", "px-4 py-16 flex flex-col items-center gap-12 sticky h-full")}
        >
            {cardsData.map((card) => (
                <Cards key={card.title}>
                    <Design className="md:hidden flex">{card.design}</Design>
                    <CardContent>
                        <InfoBox className="md:hidden flex">{card.infoBox}</InfoBox>
                        <CardTitle>{card.title}</CardTitle>
                        <CardRowAlign className={card.layout === "reverse" ? "flex-row-reverse" : ""}>
                            <Design className="md:flex hidden">{card.design}</Design>
                            <div className="flex-1 flex flex-col gap-6 md:relative md:z-10">
                                <InfoBox className="md:flex hidden">{card.infoBox}</InfoBox>
                                <CardDescription>
                                    <p>{card.description}</p>
                                    {card.secondaryDescription && <p className="pt-6">{card.secondaryDescription}</p>}
                                    {card.bulletPoints && (
                                        <ul className="list-disc pl-5 mt-2">
                                            {card.bulletPoints.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardDescription>
                                <LinkCards>
                                    {card.link.map((link, index) => (
                                        <div key={index} className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex">
                                            <Link
                                                href={link.href}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="flex items-center gap-1"
                                            >
                                                {link.label}
                                                <RightArrowLinearLink className="md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                                            </Link>
                                        </div>
                                    ))}
                                </LinkCards>
                            </div>
                        </CardRowAlign>
                    </CardContent>
                </Cards>
            ))}
        </section>
    );
};
