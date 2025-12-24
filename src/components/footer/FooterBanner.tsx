"use client";

import { InfiniteCarousel } from "@/components/ui/InfiniteCarousel";

interface profile {
    pro: string;
}

const profileStatic: profile[] = [
    { pro: "Audit" },
    { pro: "< / >" },
    { pro: "Stratégie" },
    { pro: "< / >" },
    { pro: "Roadmap" },
    { pro: "< / >" },
    { pro: "Management" },
    { pro: "< / >" },
    { pro: "Recrutement" },
    { pro: "< / >" },
    { pro: "Cahier des charges" },
    { pro: "< / >" },
    { pro: "Conseil Technique" },
];

const profileCarousel: profile[] = [...profileStatic, { pro: "< / >" }];

export function FooterBanner() {
    return (
        <div className="font-brico-gro break-970:flex hidden text-brand-fine-blue items-center justify-between w-full border-t border-b border-brand-lavender py-2 px-2 lg:py-4 lg:px-4 break-1245:text-xl text-base">
            {profileStatic.map((profileStatic, index) => (
                <span key={index} className={index % 2 === 1 ? "text-brand-lavender text-sm pt-0.5 font-dm-mono" : ""}>
                    {profileStatic.pro}
                </span>
            ))}
        </div>
    );
}

export function FooterBannerCarousel() {
    const renderProfileItem = (item: profile, index: number) => (
        <span className={`${index % 2 === 1 ? "text-brand-lavender text-sm pt-0.5 font-dm-mono" : ""}`}>
            {item.pro}
        </span>
    );
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
        <div className="font-brico-gro break-970:hidden border-t border-b border-brand-lavender w-full text-brand-fine-blue">
            {carouselConfigs.map((config, index) => (
                <InfiniteCarousel
                    key={index}
                    items={profileCarousel}
                    duration={config.duration}
                    showCondition={config.showCondition}
                    motionClassName="flex w-max py-2 text-base"
                    itemClassName="mx-4 flex-shrink-0"
                    renderItem={renderProfileItem}
                />
            ))}
        </div>
    );
}
