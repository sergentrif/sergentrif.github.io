"use client";

import { useCallback } from "react";
import { useGoogleAnalytics } from "@/components/analytics/useGoogleAnalytics";
import type { TrackingProps } from "@/libs/tracking";

export function useTrackingHandler(tracking?: TrackingProps) {
    const { trackCta } = useGoogleAnalytics();

    return useCallback(() => {
        if (tracking) trackCta(tracking.medium, tracking.campaign);
    }, [tracking, trackCta]);
}
