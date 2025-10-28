"use client";
import { cn } from "@/libs/utils";

export default function ArticlesPageSecondArticle() {
    function InfoBox({ className, ...props }: React.ComponentProps<"div">) {
        return (
            <div
                data-slot="card-info"
                className={cn(
                    "flex self-start rounded-lg infobox-border-linear-gradient p-2 text-brand-fine-blue mr-8",
                    className,
                )}
                {...props}
            />
        );
    }
    return (
        <section className="flex flex-col justify-center items-center mx-auto gap-12 pt-32 pb-16 md:px-16 px-4 w-full max-w-6xl">
            <InfoBox>GGGGG</InfoBox>
        </section>
    );
}
