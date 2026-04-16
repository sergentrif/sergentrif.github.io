"use client";

import Link from "next/link";
import { useTrackingHandler } from "@/hooks/useTrackingHandler";
import type { TrackingProps } from "@/libs/tracking";

type TrackedLinkProps = {
    href: string;
    tracking: TrackingProps;
    target?: string;
    rel?: string;
    className?: string;
    children: React.ReactNode;
};

export function TrackedLink({ href, tracking, target, rel, className, children }: TrackedLinkProps) {
    const handleTracking = useTrackingHandler(tracking);

    return (
        <Link href={href} target={target} rel={rel} className={className} onClick={handleTracking}>
            {children}
        </Link>
    );
}
