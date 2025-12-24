"use client";

import { motion } from "framer-motion";
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
  const containerClasses = showCondition
    ? `${showCondition} ${containerClassName}`
    : containerClassName;

  const duplicatedItems = [...items, ...items];

  return (
    <div className={containerClasses}>
      <motion.div
        className={motionClassName}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
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
