"use client";

import { useCallback } from "react";
import { useGoogleAnalytics } from "@/components/analytics/useGoogleAnalytics";
import type { TrackingProps } from "@/libs/tracking";

export function useTrackingHandler(tracking?: TrackingProps) {
    const { trackCta, trackAppointmentBooking, trackDownload } = useGoogleAnalytics();

    return useCallback(() => {
        if (!tracking) return;
        if (tracking.event === "cta_click") trackCta(tracking.medium, tracking.campaign);
        if (tracking.event === "appointment_booking") trackAppointmentBooking(tracking.medium);
        if (tracking.event === "file_download") trackDownload(tracking.document);
    }, [tracking, trackCta, trackAppointmentBooking, trackDownload]);
}
