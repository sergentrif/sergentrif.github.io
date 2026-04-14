"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "../ui/icons/HeaderLogo";
import { HeaderBurger } from "./HeaderBurger";
import { useState, useEffect } from "react";
import { ModalContact } from "@/components/containers/ModalContact";
import { navLinks } from "@/libs/constants";
import { CtaButton } from "@/components/ui/CtaButton";
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
                        <Link key={link.href} href={link.href} className="flex items-center gap-1.5 group">
                            <HoverUnderlineWrapper isActive={active}>{link.label}</HoverUnderlineWrapper>
                            {link.badge && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-giants/15 text-brand-giants font-brico-gro font-semibold leading-none">
                                    {link.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}

                <CtaButton onClick={handleContactClick}>Contact</CtaButton>
            </nav>
            <nav className="md:hidden flex items-center justify-between text-base bg-brand-powder/94 backdrop-blur-xl p-4 pt-4 w-full relative">
                <HeaderBurger />
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                <CtaButton onClick={handleContactClick}>Contact</CtaButton>
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
