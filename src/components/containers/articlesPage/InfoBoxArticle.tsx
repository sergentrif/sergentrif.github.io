"use client";

import { cn } from "@/libs/utils";

export function InfoBoxArticle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-info"
            className={cn("flex rounded-lg infobox-border-linear-gradient p-2 text-brand-fine-blue mr-8", className)}
            {...props}
        />
    );
}
