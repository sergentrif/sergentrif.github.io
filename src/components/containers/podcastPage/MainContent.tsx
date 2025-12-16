import { podcastEpisodes } from "./podcastData";
import { Cards } from "./Cards";
import { ContactModalArrowIcon } from "../../ui/icons/RightArrowYellow";

export const LandingSection = () => {
    return (
        <section className="flex flex-col py-12">
            <div className="flex w-full h-full gap-2 items-center justify-start relative md:right-19 -left-12 overflow-x-hidden">
                <ContactModalArrowIcon className="md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
                <h2 className="uppercase md:text-[40px] text-3xl font-brico-gro font-bold">Podcasts</h2>
                <ContactModalArrowIcon className="rotate-180 scale-y-[-1] md:max-w-46 md:max-h-66 max-w-32 max-h-52 pt-6" />
            </div>
            <div className="flex flex-col justify-center mx-auto lg:px-16 md:px-12 sm:px-8 px-2 w-full max-w-6xl">
                <Cards episodes={podcastEpisodes} />
            </div>
        </section>
    );
};
