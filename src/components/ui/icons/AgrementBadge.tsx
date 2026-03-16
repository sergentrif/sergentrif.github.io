import Image from "next/image";
import { IconProps } from "./types";

export const AgrementBadge: React.FC<IconProps> = ({ className }) => (
    <Image
        src="/agrement-badge.svg"
        alt=""
        width={129}
        height={129}
        className={className}
        aria-hidden="true"
        unoptimized
    />
);
