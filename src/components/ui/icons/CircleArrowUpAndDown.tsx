import React from "react";
import { IconProps } from "./types";

export const CircleArrowUpAndDown: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 61 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
            d="M13.0001 79.9489L18.7736 69.9489L7.22662 69.9489L13.0001 79.9489ZM13.0001 0L12.0001 4.37114e-08L12.0001 70.9489L13.0001 70.9489L14.0001 70.9489L14.0001 -4.37114e-08L13.0001 0Z"
            fill="#000F1A"
        />
        <path
            d="M55.0651 49.9999L49.2916 59.9999L60.8386 59.9999L55.0651 49.9999ZM55.0651 58.9999L54.0651 58.9999L54.0651 129.949L55.0651 129.949L56.0651 129.949L56.0651 58.9999L55.0651 58.9999Z"
            fill="#000F1A"
        />
        <circle cx="13.0001" cy="104.949" r="12.5" transform="rotate(90 13.0001 104.949)" fill="#000F1A" />
    </svg>
);
