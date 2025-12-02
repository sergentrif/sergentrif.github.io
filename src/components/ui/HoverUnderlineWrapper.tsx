import React from "react";
import { cn } from "@/libs/utils";

export const HoverUnderlineWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("relative flex items-center", className)}>
        {children}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-giants transition-all duration-800 group-hover:w-full" />
    </div>
);
