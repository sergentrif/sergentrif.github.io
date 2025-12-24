"use client";

import React from "react";
import { InfiniteCarousel } from "@/components/ui/InfiniteCarousel";
import { BatchIcon } from "@/components/ui/icons/brandLogo/Batch";
import { DougsIcon } from "@/components/ui/icons/brandLogo/Dougs";
import { EdenredIcon } from "@/components/ui/icons/brandLogo/Edenred";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";
import { EmLyonSchoolIcon } from "@/components/ui/icons/brandLogo/EmLyonSchool";
import { LePermisLibre } from "@/components/ui/icons/brandLogo/LePermisLibre";
import { WeCanDo } from "@/components/ui/icons/brandLogo/WeCanDo";
import { Tag } from "@/components/ui/icons/brandLogo/Tag";

interface profile {
    pro: React.ReactNode | string;
}

const profileStatic: profile[] = [
    { pro: <BatchIcon /> },
    { pro: <Tag /> },
    { pro: <DougsIcon /> },
    { pro: <Tag /> },
    { pro: <EdenredIcon /> },
    { pro: <Tag /> },
    { pro: <ObjowIcon className="w-34 h-9" /> },
    { pro: <Tag /> },
    { pro: <EmLyonSchoolIcon className="w-18 h-14 pb-1" /> },
    { pro: <Tag /> },
    { pro: <LePermisLibre /> },
    { pro: <Tag /> },
    { pro: <WeCanDo /> },
    { pro: <Tag /> },
];

const profileCarousel: profile[] = [...profileStatic];

export function LandingBannerCarousel() {
    const renderProfileItem = (item: profile) => <span>{item.pro}</span>;
    const carouselConfigs = [
        {
            duration: profileCarousel.length * 3,
            showCondition: "break-700:hidden",
        },
        {
            duration: profileCarousel.length * 3.5,
            showCondition: "break-700:flex hidden",
        },
    ];

    return (
        <div className="w-full text-brand-fine-blue">
            {carouselConfigs.map((config, index) => (
                <InfiniteCarousel
                    key={index}
                    items={profileCarousel}
                    duration={config.duration}
                    showCondition={config.showCondition}
                    motionClassName="flex w-max py-2 text-base"
                    itemClassName="mx-4 flex shrink-0 items-center"
                    renderItem={renderProfileItem}
                />
            ))}
        </div>
    );
}
