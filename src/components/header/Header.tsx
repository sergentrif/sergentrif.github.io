"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "../ui/icons/HeaderLogo";
import { HeaderBurger } from "./HeaderBurger";

import { useState, useEffect } from "react";
import { ModalContact } from "@/components/containers/ModalContact";
import { TopRightSquare } from "../ui/icons/TopRightSquare";
import { navLinks } from "@/libs/constants";
import { HoverUnderlineWrapper } from "../ui/HoverUnderlineWrapper";

export function Header() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        if (!pathname) return false;
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsContactModalOpen(false);
    };

    useEffect(() => {
        if (isContactModalOpen) {
            const scrollY = window.scrollY;

            const htmlElement = document.documentElement;
            const bodyElement = document.body;

            htmlElement.style.overflow = "hidden";
            bodyElement.style.overflow = "hidden";
            bodyElement.style.position = "fixed";
            bodyElement.style.width = "100%";
            bodyElement.style.top = `-${scrollY}px`;

            const preventTouchMove = (e: TouchEvent) => {
                const target = e.target as HTMLElement;
                const modalContent = target.closest("[data-modal-content]");

                if (!modalContent) {
                    e.preventDefault();
                }
            };

            const preventWheel = (e: WheelEvent) => {
                const target = e.target as HTMLElement;
                const modalContent = target.closest("[data-modal-content]");

                if (!modalContent) {
                    e.preventDefault();
                }
            };

            document.addEventListener("touchmove", preventTouchMove, { passive: false });
            document.addEventListener("wheel", preventWheel, { passive: false });

            return () => {
                htmlElement.style.overflow = "";
                bodyElement.style.overflow = "";
                bodyElement.style.position = "";
                bodyElement.style.width = "";
                bodyElement.style.top = "";

                document.removeEventListener("touchmove", preventTouchMove);
                document.removeEventListener("wheel", preventWheel);

                window.scrollTo(0, scrollY);
            };
        }
    }, [isContactModalOpen]);

    return (
        <header className="flex top-0 left-0 fixed w-full z-50">
            <nav className="md:flex hidden items-center justify-evenly text-base bg-brand-powder/94 backdrop-blur-xl py-4 font-medium max-w-[1920px] w-full mx-auto">
                <Link href="/" className="hover:scale-105">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                {navLinks.map((link) => {
                    const active = isLinkActive(link.href);

                    return (
                        <Link key={link.href} href={link.href} className="flex group">
                            <HoverUnderlineWrapper isActive={active}>{link.label}</HoverUnderlineWrapper>
                        </Link>
                    );
                })}

                <div className="flex relative hover:scale-105">
                    <div className="hover:scale-105 border-t-2 w-5.5 h-5.5 flex absolute z-10 bottom-6 right-0 border-r-2 border-brand-giants">
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
            <nav className="md:hidden flex items-center justify-between text-base bg-brand-powder/94 backdrop-blur-xl p-4 pt-4 w-full relative">
                <HeaderBurger />
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                <div className="flex relative hover:scale-105">
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
                <div
                    className="fixed inset-0 w-full h-full top-0 left-0 z-50 flex items-start justify-center overflow-hidden"
                    onClick={handleCloseModal}
                >
                    <div
                        data-modal-content
                        className="w-full h-full md:p-18 p-4 border-bottom-linear-gradient bg-brand-light-beige/64 backdrop-blur-lg overflow-y-auto overflow-x-hidden overscroll-contain"
                        style={{ WebkitOverflowScrolling: "touch" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ModalContact onClose={handleCloseModal} />
                    </div>
                </div>
            )}
        </header>
    );
}
