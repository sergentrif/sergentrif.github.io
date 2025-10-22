import React from "react";

export const Burger: React.FC<React.SVGProps<SVGSVGElement>> = () => (
    <svg width="36" height="14" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0V2H0V0H24Z" fill="url(#paint0_linear_316_74)" />
        <path d="M18 6V8H0V6H18Z" fill="url(#paint1_linear_316_74)" />
        <defs>
            <linearGradient
                id="paint0_linear_316_74"
                x1="-0.500001"
                y1="-0.5"
                x2="13.3329"
                y2="16.633"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#C8C6FA" />
                <stop offset="0.25" stopColor="#F46036" />
                <stop offset="0.616685" stopColor="#AAEAFE" />
                <stop offset="0.836947" stopColor="#EEF36B" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_316_74"
                x1="-0.500001"
                y1="-0.5"
                x2="13.3329"
                y2="16.633"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#C8C6FA" />
                <stop offset="0.25" stopColor="#F46036" />
                <stop offset="0.616685" stopColor="#AAEAFE" />
                <stop offset="0.836947" stopColor="#EEF36B" />
            </linearGradient>
        </defs>
    </svg>
);
