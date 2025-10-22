import Link from "next/link";
import { Burger } from "../ui/icons/Burger";
import { Popover, PopoverContent, PopoverTrigger } from "./BurgerPop";
import { useState } from "react";
import { Route } from "next";

export function HeaderBurger() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks: { href: Route; label: string }[] = [
        { href: "/articles", label: "Articles" },
        { href: "/parcours", label: "Parcours" },
        { href: "/podcasts", label: "Podcasts" },
        { href: "/prestations", label: "Prestations" },
        { href: "/temoignages", label: "Témoignages" },
    ];

    return (
        <div className="md:hidden">
            <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <PopoverTrigger>
                    <Burger />
                </PopoverTrigger>
                {isMobileMenuOpen && <div className="w-full flex inset-0" onClick={handleMobileLinkClick} />}
                <PopoverContent className="rounded-lg border-brand-beige/25 border-b-1 border-r-1 ">
                    <nav className="flex items-start tracking-[0.32px] flex-col w-full gap-4 p-4 text-base font-medium rounded-b-lg uppercase bg-brand-powder/80 backdrop-blur-lg">
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} onClick={handleMobileLinkClick}>
                                {label}
                            </Link>
                        ))}
                    </nav>
                </PopoverContent>
            </Popover>
        </div>
    );
}
