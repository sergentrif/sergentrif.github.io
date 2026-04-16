import React from "react";
import Link from "next/link";
import { Burger } from "../ui/icons/Burger";
import { Popover, PopoverContent, PopoverTrigger } from "./BurgerPop";
import { useState } from "react";
import { navLinks } from "@/libs/constants";

export function HeaderBurger() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="md:hidden">
            <Popover open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <PopoverTrigger className="hover:scale-105 transition-transform cursor-pointer">
                    <Burger />
                </PopoverTrigger>
                {isMobileMenuOpen && <div className="w-full flex inset-0" onClick={handleMobileLinkClick} />}
                <PopoverContent className="rounded-lg border-brand-beige/25 border-b-1 border-r-1">
                    <nav className="flex items-start tracking-[0.32px] flex-col w-full gap-4 p-4 text-base font-medium rounded-b-lg uppercase bg-brand-powder/94 backdrop-blur-xl">
                        <Link href="/" onClick={handleMobileLinkClick}>
                            Accueil
                        </Link>
                        {navLinks.map((link) => {
                            if (link.children) {
                                return (
                                    <React.Fragment key={link.label}>
                                        <hr className="w-full border-brand-beige/40" />
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={handleMobileLinkClick}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </React.Fragment>
                                );
                            }

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleMobileLinkClick}
                                    className="flex items-center gap-2"
                                >
                                    {link.label}
                                    {link.badge && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-giants/15 text-brand-giants font-brico-gro font-semibold leading-none normal-case">
                                            {link.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </PopoverContent>
            </Popover>
        </div>
    );
}
