import Link from "next/link";
import { site } from "@/libs/constants";

export function ArticleByline() {
    return (
        <div className="flex flex-col gap-2 -mt-4">
            <p className="text-sm text-brand-fine-blue">
                Par{" "}
                <Link href="/parcours" className="underline font-bold">
                    {site.name}
                </Link>
            </p>
            <p className="text-sm text-brand-fine-blue">
                Ex-CTO lePERMISLIBRE (3 → 30 personnes, IPO). Depuis 2024, j&apos;audite la tech et l&apos;organisation
                de startups 10-80 personnes.{" "}
                <Link href="/parcours" className="underline">
                    Voir le parcours
                </Link>
                .
            </p>
        </div>
    );
}
