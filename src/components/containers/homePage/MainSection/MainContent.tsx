import {
  Cards,
  CardRowAlign,
  CardContent,
  CardTitle,
  InfoBox,
  CardDescription,
  LinkCards,
  Design,
} from "./Card";
import Link from "next/link";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import { cardsData } from "./CardContent";

export const MainCardSection = () => {
  return (
    <section className="flex flex-col items-center gap-12 lg:px-32 px-16 py-16 sticky h-full">
      {cardsData.map((card) => (
        <Cards key={card.title}>
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardRowAlign
              className={card.layout === "reverse" ? "flex-row-reverse" : ""}
            >
              <Design>{card.design}</Design>
              <div className="flex-1 flex flex-col gap-6">
                <InfoBox>{card.infoBox}</InfoBox>
                <CardDescription>
                  <p>{card.description}</p>
                  {card.secondaryDescription && (
                    <p className="pt-6">{card.secondaryDescription}</p>
                  )}
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
                    <div
                      key={index}
                      className="lg:text-lg text-sm font-normal lg:px-1 px-0 flex"
                    >
                      <Link
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center gap-1"
                      >
                        {link.label}
                        <RightArrowLinearLink className="w-2 h-4 pt-0.5" />
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
