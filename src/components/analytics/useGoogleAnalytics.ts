"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback(
    (
      eventName: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        custom_parameters?: Record<string, any>;
      }
    ) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, {
          event_category: parameters?.event_category,
          event_label: parameters?.event_label,
          value: parameters?.value,
          ...parameters?.custom_parameters,
        });
      }
    },
    []
  );

  const trackPageView = useCallback((url: string, title?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-R9777CS13Z", {
        page_location: url,
        page_title: title,
      });
    }
  }, []);

  const trackConversion = useCallback(
    (conversionId: string, value?: number, currency = "EUR") => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: conversionId,
          value: value,
          currency: currency,
        });
      }
    },
    []
  );

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
};
