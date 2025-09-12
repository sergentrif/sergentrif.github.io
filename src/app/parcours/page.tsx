"use client";

import { ComingSoon } from "@/components/containers/ComingSoon";
import Link from "next/link";

export default function ParcoursPage() {
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
