import { cn } from "@/libs/utils";

function Cards({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn("flex flex-col rounded-2xl card-border-linear-gradient sticky top-25 h-full", className)}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return <div data-slot="card-content" className={cn("flex flex-col lg:gap-8 gap-6 p-8", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="card-title"
            className={cn(
                "lg:text-[1.375rem] text-xl font-extrabold font-brico-gro text-brand-fine-blue border-b-brand-lavender border-b-2 pb-2 tracking-[0.03em] md:text-center lg:text-left",
                className,
            )}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-base text-brand-fine-blue flex flex-col", className)}
            {...props}
        />
    );
}

function LinkCards({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-link"
            className={cn("lg:text-lg text-sm font-normal lg:px-1 px-0", className)}
            {...props}
        />
    );
}

export { Cards, CardTitle, CardDescription, CardContent, LinkCards };
