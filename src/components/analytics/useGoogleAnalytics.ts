"use client";

import { useCallback } from "react";

declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js" | "set",
            targetId: string | Date,
            config?: Record<string, unknown>,
        ) => void;
    }
}

function getDevice(): "mobile" | "desktop" {
    if (typeof window === "undefined") return "desktop";
    return window.innerWidth < 768 ? "mobile" : "desktop";
}

export const useGoogleAnalytics = () => {
    const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, {
                device: getDevice(),
                ...parameters,
            });
        }
    }, []);

    const trackCta = useCallback(
        (medium: string, campaign: string) => {
            trackEvent("cta_click", { medium, campaign });
        },
        [trackEvent],
    );

    const trackAppointmentBooking = useCallback(
        (medium: string) => {
            trackEvent("appointment_booking", { medium });
        },
        [trackEvent],
    );

    const trackDiagnosticStart = useCallback(() => {
        trackEvent("diagnostic_start");
    }, [trackEvent]);

    const trackDiagnosticComplete = useCallback(
        (score: number, zone: "vert" | "jaune" | "rouge") => {
            trackEvent("diagnostic_complete", { score, zone });
        },
        [trackEvent],
    );

    const trackDiagnosticShare = useCallback(() => {
        trackEvent("diagnostic_share");
    }, [trackEvent]);

    const trackDownload = useCallback(
        (document: "cv" | "presentation") => {
            trackEvent("file_download", { document });
        },
        [trackEvent],
    );

    const trackPageView = useCallback((url: string, title?: string) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "G-E0KJRNCFZ1", {
                page_location: url,
                page_title: title,
            });
        }
    }, []);

    const trackConversion = useCallback((conversionId: string, value?: number, currency = "EUR") => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "conversion", {
                send_to: conversionId,
                value: value,
                currency: currency,
            });
        }
    }, []);

    return {
        trackEvent,
        trackCta,
        trackAppointmentBooking,
        trackDiagnosticStart,
        trackDiagnosticComplete,
        trackDiagnosticShare,
        trackDownload,
        trackPageView,
        trackConversion,
    };
};
