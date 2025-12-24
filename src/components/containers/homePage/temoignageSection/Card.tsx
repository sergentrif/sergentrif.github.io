import { cn } from "@/libs/utils";

function Cards({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "flex flex-col rounded-2xl card-border-linear-gradient sticky top-25 h-full max-w-5xl",
                className,
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("lg:gap-8 lg:p-8", "flex flex-col gap-6 p-4", className)}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("md:text-base text-sm md:text-brand-fine-blue flex flex-col", className)}
            {...props}
        />
    );
}

function LogoCards({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-link"
            className={cn("lg:text-lg text-sm font-normal lg:px-1 px-0", className)}
            {...props}
        />
    );
}

export { Cards, CardDescription, CardContent, LogoCards };
