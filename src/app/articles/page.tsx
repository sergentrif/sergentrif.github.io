"use client";

import Link from "next/link";
import { ComingSoon } from "@/components/containers/ComingSoon";

export default function ArticlesPage() {
  return (
    <section className="w-full flex flex-col">
      <ComingSoon />
      <div className="pb-16 self-center flex">
        <Link
          href="/"
          className="flex border-brand-giants border-2 rounded-3xl md:px-6 md:py-2 px-4 py-1.5 self-center md:text-xl text-base"
        >
          {"Retour à l'accueil"}
        </Link>
      </div>
    </section>
  );
}
