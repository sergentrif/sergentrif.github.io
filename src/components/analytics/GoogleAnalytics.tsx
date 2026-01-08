"use client";

import Script from "next/script";
import { googleAnalyticsData } from "@/libs/constants";

export const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsData.GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsData.GA_TRACKING_ID}');
            gtag('config', '${googleAnalyticsData.GOOGLE_ADS_ID}');
          `,
                }}
            />
        </>
    );
};
