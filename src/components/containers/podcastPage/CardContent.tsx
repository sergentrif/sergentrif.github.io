"use client";

import Link from "next/link";
import { useState } from "react";
import { PodcastEpisode } from "./podcastData";
import { ApplePodcastIcon } from "../../ui/icons/ApplePodcastIcon";
import { SpotifyIcon } from "../../ui/icons/SpotifyIcon";
import { YoutubeIcon } from "../../ui/icons/YoutubeIcon";
import { InfoBox } from "../homePage/MainSection/Card";
import { HoverUnderlineWrapper } from "@/components/ui/HoverUnderlineWrapper";
import { RightArrowLinearLink } from "@/components/ui/icons/RightArrowLinearLink";
import Image from "next/image";

interface CardContentProps {
    episode: PodcastEpisode;
}

export const CardContent = ({ episode }: CardContentProps) => {
    const { description, detailedDescription, moreDescription, thumbnailUrl, podcastLinks, imagePosition } = episode;
    const [isExpanded, setIsExpanded] = useState(false);

    const primaryLink = podcastLinks.youtube || podcastLinks.spotify || podcastLinks.apple;
    const hasMoreContent = moreDescription && moreDescription.length > 0;

    const contentSection = (
        <div className="flex flex-col justify-center md:px-8 h-full">
            <div className="flex flex-col gap-3 flex-1">
                <div className="text-sm md:text-base leading-relaxed text-brand-fine-blue transition-all duration-300">
                    {isExpanded ? (
                        <>
                            <p className="mb-3">{description}</p>
                            {detailedDescription && <p className="mb-3">{detailedDescription}</p>}
                            {moreDescription && <p>{moreDescription}</p>}
                        </>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <p className="line-clamp-3">{description}</p>
                            {detailedDescription && <p className="line-clamp-3">{detailedDescription}</p>}
                        </div>
                    )}
                </div>
            </div>
            {hasMoreContent && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm md:text-base font-medium self-start group cursor-pointer mb-2"
                >
                    <HoverUnderlineWrapper className="flex flex-row items-center gap-2">
                        <span>{isExpanded ? "Lire moins" : "Lire plus"}</span>
                        <RightArrowLinearLink
                            className={`md:w-3 md:h-5.5 w-2.5 h-4.5 pt-0.5 transition-transform duration-300 ${
                                isExpanded ? "-rotate-90" : "rotate-90"
                            }`}
                        />
                    </HoverUnderlineWrapper>
                </button>
            )}
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
        <div className="flex items-center justify-center rounded-xl py-8 md:py-0 h-full">
            {thumbnailUrl && primaryLink ? (
                <Link
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full cursor-pointer"
                >
                    <div className="w-full h-[300px] md:h-[300px] overflow-hidden">
                        <Image
                            width={0}
                            height={0}
                            src={thumbnailUrl}
                            alt="Podcast Episode Thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>
            ) : (
                <div className="flex items-center justify-center w-full h-64 md:h-full">
                    <span className="text-brand-fine-blue font-brico-gro text-lg md:text-xl">Image à venir</span>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full bg-brand-smoke/30">
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
