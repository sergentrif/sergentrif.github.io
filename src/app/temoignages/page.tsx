"use client";

import { BottomContactBox } from "@/components/containers/BottomContactBox";
import { TopTemoignageSection } from "@/components/containers/temoignagePage/TopTemoignageSection";
import { LandingTemoignage } from "@/components/containers/temoignagePage/LandingTemoignage";

export default function TemoignagesPage() {
    return (
        <section className="flex flex-col justify-center mx-auto md:gap-12 gap-6 pt-32 pb-16 lg:px-36 md:px-16 sm:px-12 px-4 w-full max-w-6xl">
            <TopTemoignageSection />
            <LandingTemoignage />
            <BottomContactBox />
        </section>
    );
}
