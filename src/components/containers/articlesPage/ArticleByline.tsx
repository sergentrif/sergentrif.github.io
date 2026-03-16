import Link from "next/link";
import { site } from "@/libs/constants";

export function ArticleByline() {
    return (
        <p className="text-sm text-brand-fine-blue -mt-4">
            Par{" "}
            <Link href="/parcours" className="underline font-bold">
                {site.name}
            </Link>
        </p>
    );
}
