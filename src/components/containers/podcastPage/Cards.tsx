import { PodcastEpisode } from "./podcastData";
import { CardContent } from "./CardContent";

interface CardsProps {
    episodes: PodcastEpisode[];
}

export const Cards = ({ episodes }: CardsProps) => {
    return (
        <div className="flex flex-col gap-16 md:gap-24 w-full -mt-0.25">
            {episodes.map((episode) => (
                <article key={episode.id} className="w-full">
                    <div className="flex flex-col md:gap-8 gap-2">
                        <h2 className="text-2xl md:text-[26px] font-bold font-brico-gro p-4 flex justify-center bg-brand-surface w-full rounded-2xl">
                            {episode.title}
                        </h2>
                        <CardContent episode={episode} />
                    </div>
                </article>
            ))}
        </div>
    );
};
