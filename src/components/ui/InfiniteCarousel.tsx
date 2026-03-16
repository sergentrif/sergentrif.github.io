"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteCarouselProps<T> {
    items: T[];
    duration: number;
    containerClassName?: string;
    motionClassName?: string;
    renderItem: (item: T, index: number) => ReactNode;
    itemClassName?: string;
    showCondition?: string;
}

export function InfiniteCarousel<T>({
    items,
    duration,
    containerClassName = "overflow-hidden w-full",
    motionClassName = "flex w-max",
    renderItem,
    itemClassName = "mx-2 flex-shrink-0",
    showCondition,
}: InfiniteCarouselProps<T>) {
    const shouldReduceMotion = useReducedMotion();
    const containerClasses = showCondition ? `${showCondition} ${containerClassName}` : containerClassName;

    const duplicatedItems = [...items, ...items];

    return (
        <div className={containerClasses}>
            <motion.div
                className={motionClassName}
                style={{ willChange: "transform" }}
                animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
                transition={
                    shouldReduceMotion
                        ? {}
                        : {
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "linear",
                              duration,
                          }
                }
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className={itemClassName}>
                        {renderItem(item, index)}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
