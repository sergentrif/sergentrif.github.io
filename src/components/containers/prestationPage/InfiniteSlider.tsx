"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState, useEffect } from "react";

interface InfiniteSliderProps {
    images: StaticImageData[];
    className?: string;
}

export const InfiniteSlider = ({ images, className = "" }: InfiniteSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const duplicatedImages = [...images, ...images, ...images];

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
        }
    }, []);

    useEffect(() => {
        if (!isAutoScrolling || isDragging) return;

        let animationFrameId: number;
        const scrollSpeed = 0.2;
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
    }, [isAutoScrolling, isDragging]);

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
                        src={img}
                        alt=""
                        className="max-h-[400px] max-w-[280px] h-full w-full select-none pointer-events-none"
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
};
