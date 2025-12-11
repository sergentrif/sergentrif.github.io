import React from "react";
import { cn } from "@/libs/utils";

export const HoverUnderlineWrapper = ({
    children,
    className,
    isActive,
}: {
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
}) => (
    <span className={cn("relative inline-block", className)}>
        {children}
        <span
            className={cn(
                "absolute -bottom-0 -left-[3px] h-[2px] w-0 transition-all duration-700 ease-in-out group-hover:w-[calc(100%+6px)]",
                isActive && "!w-[calc(100%+10px)]",
            )}
            style={{
                backgroundImage:
                    "repeating-linear-gradient(to right, black 0px, black 6px, transparent 4px, transparent 8px)",
                backgroundSize: "10px 2px",
                backgroundRepeat: "repeat-x",
            }}
        />
    </span>
);
