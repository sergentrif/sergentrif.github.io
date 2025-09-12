import React from "react";
import { IconProps } from "./types";

export const RightArrowLinearLink: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1L6.58579 6.58579C7.36684 7.36684 7.36683 8.63317 6.58579 9.41421L1 15"
        stroke="url(#paint0_linear_174_77)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_174_77"
          x1="4.5"
          y1="1"
          x2="4.5"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8C6FA" />
          <stop offset="0.5" stopColor="#F46036" />
          <stop offset="0.975" stopColor="#EEF36B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
