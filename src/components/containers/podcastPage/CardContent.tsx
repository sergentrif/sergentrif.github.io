import Link from "next/link";
import { PodcastEpisode } from "./podcastData";
import { ApplePodcastIcon } from "../../ui/icons/ApplePodcastIcon";
import { SpotifyIcon } from "../../ui/icons/SpotifyIcon";
import { YoutubeIcon } from "../../ui/icons/YoutubeIcon";
import { InfoBox } from "../homePage/MainSection/Card";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";

interface CardContentProps {
    episode: PodcastEpisode;
}

export const CardContent = ({ episode }: CardContentProps) => {
    const { description, detailedDescription, embedUrl, podcastLinks, imagePosition } = episode;

    const contentSection = (
        <div className="flex flex-col gap-4 md:gap-6 justify-center px-4 md:px-8">
            <div className="flex flex-col gap-3">
                <p className="text-sm md:text-base leading-relaxed text-brand-fine-blue">{description}</p>
                {detailedDescription && (
                    <p className="text-sm md:text-base leading-relaxed text-brand-fine-blue">{detailedDescription}</p>
                )}
            </div>
            <Link href="#" className="text-sm md:text-base font-medium self-start group">
                <HoverUnderlineWrapper className="flex flex-row items-center gap-2">
                    <span>Lire plus</span>
                    <RightArrowLinearLink className="rotate-90 md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5" />
                </HoverUnderlineWrapper>
            </Link>
            <InfoBox className="flex flex-col gap-4 text-black w-full py-4">
                <p className="text-sm italic text-brand-fine-blue">{`// Écouter l'épisode ?`}</p>
                <div className="flex gap-4 items-center">
                    {podcastLinks.apple && (
                        <Link
                            href={podcastLinks.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Apple Podcasts"
                        >
                            <ApplePodcastIcon className="w-6 h-6" />
                        </Link>
                    )}
                    {podcastLinks.spotify && (
                        <Link
                            href={podcastLinks.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Spotify"
                        >
                            <SpotifyIcon className="w-6 h-6" />
                        </Link>
                    )}
                    {podcastLinks.youtube && (
                        <Link
                            href={podcastLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="YouTube"
                        >
                            <YoutubeIcon className="w-6 h-6" />
                        </Link>
                    )}
                </div>
            </InfoBox>
        </div>
    );

    const embedSection = (
        <div className="flex items-center justify-center bg-brand-lavender px-4 md:px-8 py-8 md:py-0 h-full">
            {embedUrl.startsWith("http") ? (
                <div className="relative w-full pt-[56.25%] md:h-full md:pt-0">
                    <iframe
                        src={embedUrl}
                        title="Podcast Episode"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full md:relative rounded-lg"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-64 md:h-full rounded-lg">
                    <span className="text-brand-fine-blue font-brico-gro text-lg md:text-xl">{embedUrl}</span>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full bg-brand-smoke/30 rounded-lg overflow-hidden">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-0 gap-6 py-6 md:py-0">
                {imagePosition === "left" ? (
                    <>
                        <div className="order-2 md:order-1">{contentSection}</div>
                        <div className="order-1 md:order-2">{embedSection}</div>
                    </>
                ) : (
                    <>
                        <div className="order-1">{embedSection}</div>
                        <div className="order-2">{contentSection}</div>
                    </>
                )}
            </div>
        </div>
    );
};
