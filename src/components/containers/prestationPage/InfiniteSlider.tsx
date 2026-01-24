"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SliderImage {
    src: StaticImageData;
    alt: string;
}

interface InfiniteSliderProps {
    images: SliderImage[];
    className?: string;
}

export const InfiniteSlider = ({ images, className = "" }: InfiniteSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const isTabletOrAbove = useMediaQuery("(min-width: 640px)");

    const duplicatedImages = [...images, ...images, ...images];

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
        }
    }, []);

    useEffect(() => {
        if (!isAutoScrolling || isDragging) return;

        let animationFrameId: number;
        const scrollSpeed = isTabletOrAbove ? 1 / 3 : 0.2;
        let accumulatedScroll = 0;

        const autoScroll = () => {
            if (sliderRef.current) {
                accumulatedScroll += scrollSpeed;
                if (accumulatedScroll >= 1) {
                    const scrollAmount = Math.floor(accumulatedScroll);
                    sliderRef.current.scrollLeft += scrollAmount;
                    accumulatedScroll -= scrollAmount;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isAutoScrolling, isDragging, isTabletOrAbove]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setIsAutoScrolling(false);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setIsAutoScrolling(false);
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !sliderRef.current) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => {
            setIsAutoScrolling(true);
        }, 1500);
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth } = sliderRef.current;
        const sectionWidth = scrollWidth / 3;

        if (scrollLeft <= 0) {
            sliderRef.current.scrollLeft = sectionWidth;
        } else if (scrollLeft >= sectionWidth * 2) {
            sliderRef.current.scrollLeft = sectionWidth;
        }
    };

    return (
        <div
            ref={sliderRef}
            className={`flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing ${className}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onScroll={handleScroll}
            style={{ scrollBehavior: "auto" }}
        >
            {duplicatedImages.map((img, index) => (
                <div key={index} className="flex-shrink-0">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        className="h-[240px] w-[180px] sm:h-[280px] sm:w-[210px] md:h-[320px] md:w-[240px] lg:h-[400px] lg:w-[280px] object-cover select-none pointer-events-none"
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
};
