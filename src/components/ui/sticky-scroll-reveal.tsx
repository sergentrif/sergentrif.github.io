"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/libs/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        id: number;
        description: string[];
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        target: ref,
        // container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div className="flex justify-center gap-4" ref={ref}>
            <div className="div relative flex items-start">
                <div className="max-w-5xl flex flex-col gap-16">
                    {content.map((item, index) => (
                        <div
                            key={item.id}
                            className={cn(
                                "md:p-10",
                                "overflow-y-hidden flex self-center bg-brand-surface rounded-2xl p-4 min-h-90",
                            )}
                        >
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.1,
                                }}
                                className="text-base text-brand-fine-blue flex flex-col md:gap-8 self-center"
                            >
                                {item.description.map((el, index) => (
                                    <span key={index}>{el}</span>
                                ))}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={cn(
                    "lg:w-80 lg:h-90",
                    "sticky shrink-0 top-50 h-60 w-60 flex overflow-hidden rounded-2xl bg-brand-surface",
                    contentClassName,
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
