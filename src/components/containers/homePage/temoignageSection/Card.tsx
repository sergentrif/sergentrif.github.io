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
      className={cn("flex flex-col lg:gap-8 gap-6 p-8", className)}
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
