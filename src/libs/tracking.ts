export type TrackingProps =
    | { event: "cta_click"; medium: string; campaign: string }
    | { event: "appointment_booking"; medium: string }
    | { event: "file_download"; medium: string; document: "cv" | "presentation" };
