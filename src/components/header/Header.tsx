"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "../ui/icons/HeaderLogo";
import { HeaderBurger } from "./HeaderBurger";
import { navLinks, links } from "@/libs/constants";
import { CtaButton } from "@/components/ui/CtaButton";
import { HoverUnderlineWrapper } from "../ui/HoverUnderlineWrapper";

export function Header() {
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        if (!pathname) return false;
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <header className="flex top-0 left-0 fixed w-full z-50">
            <nav className="md:flex hidden items-center justify-evenly text-base bg-brand-powder/94 backdrop-blur-xl py-4 font-medium max-w-[1920px] w-full mx-auto">
                <Link href="/" className="hover:scale-105">
                    <HeaderLogo className="w-10 h-8" />
                </Link>
                {navLinks.map((link) => {
                    if (link.children) {
                        const isDropdownActive = link.children.some((child) => isLinkActive(child.href));
                        return (
                            <div key={link.label} className="relative group">
                                <span className="flex items-center gap-1 cursor-default select-none">
                                    <HoverUnderlineWrapper isActive={isDropdownActive}>
                                        {link.label}
                                    </HoverUnderlineWrapper>
                                    <span className="text-[10px] transition-transform group-hover:rotate-180 inline-block">
                                        ▾
                                    </span>
                                </span>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-brand-powder shadow-sm border border-brand-beige/25 rounded-lg overflow-hidden min-w-[160px] z-50">
                                    {link.children.map((child) => {
                                        const childActive = isLinkActive(child.href);
                                        return (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className={`px-5 py-3 hover:bg-brand-beige/20 flex items-center text-sm${childActive ? " font-semibold" : ""}`}
                                            >
                                                {child.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }

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

                <CtaButton
                    href={`${links.zcal}?utm_source=site&utm_medium=header&utm_campaign=rdv`}
                    target="_blank"
                    rel="noopener noreferrer"
                    tracking={{ medium: "header", campaign: "rdv" }}
                >
                    Prendre rendez-vous
                </CtaButton>
            </nav>
            <nav className="md:hidden flex items-center justify-between text-base bg-brand-powder/94 backdrop-blur-xl p-4 pt-4 w-full relative">
                <HeaderBurger />
                <CtaButton
                    href={`${links.zcal}?utm_source=site&utm_medium=header&utm_campaign=rdv`}
                    target="_blank"
                    rel="noopener noreferrer"
                    tracking={{ medium: "header", campaign: "rdv" }}
                >
                    Prendre rendez-vous
                </CtaButton>
            </nav>
        </header>
    );
}
