"use client";

import Link from "next/link";
import { Route } from "next";
import { HeaderLogo } from "../ui/icons/HeaderLogo";
import { HeaderBurger } from "./HeaderBurger";
import { RemoveScroll } from "react-remove-scroll";
import { useState } from "react";
import { ModalContact } from "@/components/containers/ModalContact";
import ReactLenis from "lenis/react";
import { TopRightSquare } from "../ui/icons/TopRightSquare";

export function Header() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsContactModalOpen(false);
    };

    const navLinks: { href: Route; label: string }[] = [
        { href: "/articles", label: "Articles" },
        { href: "/parcours", label: "Parcours" },
        { href: "/podcasts", label: "Podcasts" },
        { href: "/prestations", label: "Prestations" },
        { href: "/temoignages", label: "Témoignages" },
    ];

    return (
        <header className="flex top-0 left-0 fixed w-full z-50">
            <nav className="md:flex hidden items-center justify-evenly text-base bg-brand-powder/94 backdrop-blur-xl py-4 font-medium max-w-[1920px] w-full mx-auto">
                <Link href="/">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.href} className="flex" href={link.href}>
                        {link.label}
                    </Link>
                ))}
                <div className="flex relative">
                    <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
                        <TopRightSquare
                            stroke="hsl(13 90% 58%)"
                            className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10"
                        />
                    </div>
                    <button
                        onClick={handleContactClick}
                        className="flex border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 relative overflow-hidden"
                    >
                        Contact
                    </button>
                </div>
            </nav>
            <nav className="md:hidden flex items-center justify-between text-base bg-brand-powder/94 backdrop-blur-xl p-4 pt-4 w-full">
                <HeaderBurger />
                <Link href="/">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                <div className="flex relative">
                    <div className="border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
                        <TopRightSquare
                            stroke="hsl(13 90% 58%)"
                            className="absolute w-2.5 h-2.5 bottom-4 left-4 z-10"
                        />
                    </div>
                    <button
                        onClick={handleContactClick}
                        className="flex border-2 border-brand-giants z-20 rounded-full cursor-pointer px-4 py-2.25 relative overflow-hidden"
                    >
                        Contact
                    </button>
                </div>
            </nav>

            {isContactModalOpen && (
                <ReactLenis root={false}>
                    <RemoveScroll>
                        <div className="fixed w-screen h-screen min-h-60 top-0 left-0 md:p-18 p-2 border-bottom-linear-gradient bg-brand-light-beige/64 backdrop-blur-lg z-50 overflow-y-auto">
                            <ModalContact onClose={handleCloseModal} />
                        </div>
                    </RemoveScroll>
                </ReactLenis>
            )}
        </header>
    );
}
