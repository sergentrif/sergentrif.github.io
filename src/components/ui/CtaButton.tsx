import Link from "next/link";
import { TopRightSquare } from "@/components/ui/icons/TopRightSquare";

type BaseProps = {
    children: React.ReactNode;
    className?: string;
};

type LinkProps = BaseProps & {
    href: string;
    target?: string;
    rel?: string;
    onClick?: never;
    disabled?: never;
};

type ButtonProps = BaseProps & {
    onClick: () => void;
    disabled?: boolean;
    href?: never;
    target?: never;
    rel?: never;
};

type CtaButtonProps = LinkProps | ButtonProps;

export function CtaButton({ children, className = "", ...props }: CtaButtonProps) {
    const disabled = "disabled" in props && props.disabled;

    return (
        <div
            className={`flex w-fit relative transition-transform ${disabled ? "" : "hover:scale-105"} ${className}`}
        >
            {!disabled && (
                <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 md:bottom-6 bottom-5 right-0 border-r-2 border-brand-giants">
                    <TopRightSquare stroke="hsl(13 90% 58%)" className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10" />
                </div>
            )}
            {"href" in props && props.href ? (
                <Link
                    href={props.href}
                    target={props.target}
                    rel={props.rel}
                    className="flex border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 relative overflow-hidden"
                >
                    {children}
                </Link>
            ) : (
                <button
                    onClick={"onClick" in props ? props.onClick : undefined}
                    disabled={disabled || undefined}
                    className={`flex border-2 z-20 rounded-full px-4 py-2.25 relative overflow-hidden ${
                        disabled
                            ? "border-brand-silver/30 text-brand-silver cursor-not-allowed"
                            : "border-brand-giants cursor-pointer"
                    }`}
                >
                    {children}
                </button>
            )}
        </div>
    );
}
