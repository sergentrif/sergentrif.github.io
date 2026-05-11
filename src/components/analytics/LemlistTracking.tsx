"use client";

import Script from "next/script";
import { lemlistTrackingData } from "@/libs/constants";

export const LemlistTracking = () => {
    if (!lemlistTrackingData.TRACKER_ID) return null;

    const src = `https://app.lemlist.com/api/visitors/tracking?k=${encodeURIComponent(lemlistTrackingData.KEY)}&t=${lemlistTrackingData.TRACKER_ID}`;

    return <Script strategy="lazyOnload" src={src} />;
};
