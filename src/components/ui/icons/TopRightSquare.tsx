import { IconProps } from "./types";

export const TopRightSquare: React.FC<IconProps> = ({ stroke = "#AAEAFE", strokeWidth = 2, className, ...props }) => {
    return (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <rect
                x="1.44336"
                y="1"
                width="9.55703"
                height="9.55703"
                fill="#F7F7F2"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};
