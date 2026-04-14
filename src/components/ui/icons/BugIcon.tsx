import { SVGProps } from "react";

export const BugIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="m8 2 1.88 1.88" />
            <path d="M14.12 3.88 16 2" />
            <rect width="8" height="14" x="8" y="6" rx="5" />
            <path d="M19 7 22 4" />
            <path d="m5 7-3-3" />
            <path d="M19 19c-2 0-3-1-3-3v-4" />
            <path d="M5 19c2 0 3-1 3-3v-4" />
            <path d="M8 13H5" />
            <path d="M19 13h-3" />
            <path d="M8 19H4" />
            <path d="M20 19h-4" />
            <line x1="12" y1="20" x2="12" y2="22" />
        </svg>
    );
};
