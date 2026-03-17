import Link from "next/link";
import Image from "next/image";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";
import { DataComplyOneIcon } from "@/components/ui/icons/brandLogo/DataComplyOne";

import certixioIcon from "@/assets/images/certixio-logo.png";
import { cn } from "@/libs/utils";
import { testimonials } from "@/libs/testimonials";

const [t1, t2, t3] = testimonials;

const content = [
    {
        id: 1,
        description: t1.paragraphs,
        content: (
            <div className="flex flex-col self-center gap-8 px-4">
                <Link href={t1.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <ObjowIcon
                        className={cn(
                            "max-w-49 max-h-12.25 w-full h-full relative bottom-2 left-2",
                            "lg:bottom-2 lg:left-10",
                        )}
                    />
                </Link>

                <div className="w-13 border-linear-gradient" />
                <div className="uppercase text-brand-fine-blue font-medium">
                    <p>{t1.author}</p>

                    <div className="flex gap-2.5">
                        {t1.jobTitle} -{" "}
                        <Link
                            href={t1.companyUrl!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 underline"
                        >
                            {t1.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        description: t2.paragraphs,
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <DataComplyOneIcon className="lg:max-w-32 lg:max-h-22 max-w-28 max-h-18 w-full h-full relative lg:left-18 lg:bottom-2 left-11" />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t2.author}</p>
                    <div className="flex gap-2.5">
                        {t2.jobTitle} -{" "}
                        <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                            {t2.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        description: t3.paragraphs,
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={certixioIcon}
                        alt="Certixio Logo"
                        className="lg:max-w-48 max-h-28 max-w-40 w-full h-full relative lg:bottom-5 lg:left-10 left-4"
                    />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t3.author}</p>
                    <div className="flex gap-2.5">
                        {t3.jobTitle} -{" "}
                        <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                            {t3.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
];

const content_mobile = [
    {
        id: 1,
        logo: (
            <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer">
                <DataComplyOneIcon className="max-w-24 max-h-16 w-full h-full" />
            </Link>
        ),
        description: t2.paragraphs,
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t2.author}</p>
                <div className="flex gap-2.5">
                    {t2.jobTitle} -{" "}
                    <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                        {t2.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        logo: (
            <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer">
                <Image src={certixioIcon} alt="Certixio Logo" className="max-h-28 max-w-40 w-full h-full" />
            </Link>
        ),
        description: t3.paragraphs,
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t3.author}</p>

                <div className="flex gap-2.5">
                    {t3.jobTitle} -{" "}
                    <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                        {t3.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        logo: (
            <Link href={t1.companyUrl!} target="_blank" rel="noopener noreferrer">
                <ObjowIcon className="max-w-45 max-h-11 w-full h-full self-start" />
            </Link>
        ),
        description: t1.paragraphs,
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t1.author}</p>

                <div className="flex gap-2.5">
                    {t1.jobTitle} -{" "}
                    <Link
                        href={t1.companyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        {t1.company}
                    </Link>
                </div>
            </div>
        ),
    },
];

export { content, content_mobile };
