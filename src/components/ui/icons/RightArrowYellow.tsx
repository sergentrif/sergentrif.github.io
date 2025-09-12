import React from "react";
import { IconProps } from "./types";

export const ContactModalArrowIcon: React.FC<IconProps> = ({
  width = 283,
  height = 413,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 283 413"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <g opacity="0.2" filter="url(#filter0_n_24_404)">
      <path
        d="M120.236 0.318665L282.114 174.229C282.286 174.414 282.382 174.657 282.382 174.91V197.396C282.382 197.646 282.288 197.888 282.118 198.072L85.7245 411.868C85.5351 412.074 85.268 412.192 84.988 412.192H1.28207C0.410603 412.192 -0.043852 411.155 0.546848 410.514L204.831 188.931C205.001 188.747 205.096 188.505 205.096 188.254V184.05C205.096 183.798 205.001 183.555 204.83 183.371L36.7829 1.679C36.1907 1.03867 36.6448 0 37.5171 0H119.504C119.782 0 120.047 0.115432 120.236 0.318665Z"
        fill="#EEF36B"
      />
    </g>
    <defs>
      <filter
        id="filter0_n_24_404"
        x="0.280029"
        y="0"
        width="282.102"
        height="412.192"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2 2"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="2250"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite
          operator="in"
          in2="noise1Clipped"
          in="color1Flood"
          result="color1"
        />
        <feMerge result="effect1_noise_24_404">
          <feMergeNode in="shape" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export const LandingHomePageArrowIcon: React.FC<IconProps> = ({
  width = 283,
  height = 413,
  className = "absolute -z-10 -right-34 -top-12",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 283 413"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <g opacity="0.2" filter="url(#filter0_n_24_404)">
      <path
        d="M120.236 0.318665L282.114 174.229C282.286 174.414 282.382 174.657 282.382 174.91V197.396C282.382 197.646 282.288 197.888 282.118 198.072L85.7245 411.868C85.5351 412.074 85.268 412.192 84.988 412.192H1.28207C0.410603 412.192 -0.043852 411.155 0.546848 410.514L204.831 188.931C205.001 188.747 205.096 188.505 205.096 188.254V184.05C205.096 183.798 205.001 183.555 204.83 183.371L36.7829 1.679C36.1907 1.03867 36.6448 0 37.5171 0H119.504C119.782 0 120.047 0.115432 120.236 0.318665Z"
        fill="#EEF36B"
      />
    </g>
    <defs>
      <filter
        id="filter0_n_24_404"
        x="0.280029"
        y="0"
        width="282.102"
        height="412.192"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2 2"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="2250"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite
          operator="in"
          in2="noise1Clipped"
          in="color1Flood"
          result="color1"
        />
        <feMerge result="effect1_noise_24_404">
          <feMergeNode in="shape" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
