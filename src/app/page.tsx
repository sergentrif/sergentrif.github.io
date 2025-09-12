import { ReactLenis } from "lenis/react";
import { Landing } from "@/components/containers/homePage/landingSection/Landing";
import { MainCardSection } from "@/components/containers/homePage/MainSection/MainContent";
import { TemoignageSection } from "@/components/containers/homePage/temoignageSection/Temoignage";
import { KrmaPresentation } from "@/components/containers/homePage/moreSection/KrmaPresentation";
import { CiiPresentation } from "@/components/containers/homePage/moreSection/CiiPresentation";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="max-w-[1920px] w-full mx-auto">
        <Landing />
        <MainCardSection />
        <TemoignageSection />
        <KrmaPresentation />
        <CiiPresentation />
      </main>
    </ReactLenis>
  );
}
