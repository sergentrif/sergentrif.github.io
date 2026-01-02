"use client";

import Script from "next/script";

const GA_TRACKING_ID = "";

export const GoogleAnalytics = () => {
    return (
        <>
            <Script strategy="afterInteractive" src={``} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
                }}
            />
        </>
    );
};
