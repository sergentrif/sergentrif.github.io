import Link from "next/link";
import { ObjowIcon } from "@/components/ui/icons/brandLogo/Objow";
import { EmLyonSchoolIcon } from "@/components/ui/icons/brandLogo/EmLyonSchool";
import { MNPIcon } from "@/components/ui/icons/brandLogo/MNP";
import Image from "next/image";
import DCOIcon from "@/components/ui/icons/brandLogo/DCOIcon.webp";
import certixioIcon from "@/components/ui/icons/brandLogo/certixioLogo.png";
import { cn } from "@/libs/utils";
import { testimonials } from "@/libs/testimonials";

function quoted(paragraphs: string[]): string[] {
    const result = [...paragraphs];
    result[0] = `\u201c${result[0]}`;
    result[result.length - 1] = `${result[result.length - 1]}\u201d`;
    return result;
}

const [t1, t2, t3, t4, t5, t6, t7, t8] = testimonials;

const content = [
    {
        id: 1,
        description: quoted(t1.paragraphs),
        content: (
            <div className="flex flex-col self-center gap-8 px-4">
                <Link href={t1.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <ObjowIcon
                        className={cn(
                            "max-w-49 max-h-12.25 w-full h-full relative bottom-2 left-2",
                            "lg:bottom-2 lg:left-10 md:bottom-0",
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
        description: quoted(t2.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={DCOIcon}
                        alt="Data Comply One Logo"
                        className="lg:max-w-32 lg:max-h-22 max-w-28 max-h-18 w-full h-full relative lg:left-18 lg:bottom-2 left-11"
                    />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t2.author}</p>
                    <div className="flex gap-2 ">
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
        description: quoted(t3.paragraphs),
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
    {
        id: 4,
        description: quoted(t4.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <p className="text-3xl relative lg:left-13 lg:bottom-4 md:left-4">{t4.company}</p>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t4.author}</p>
                    <p>
                        {t4.jobTitle} - {t4.company}
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 5,
        description: quoted(t5.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t5.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <p className="text-3xl relative lg:left-22 lg:bottom-4 md:left-13">{t5.company}</p>
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t5.author}</p>

                    <div className="flex items-center gap-2">
                        {t5.jobTitle} -{" "}
                        <Link href={t5.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                            {" "}
                            {t5.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 6,
        description: quoted(t6.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t6.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <MNPIcon />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div className="flex flex-col gap-2">
                    <p>{t6.author}</p>

                    <div className="flex flex-col">
                        {t6.jobTitle}
                        <Link href={t6.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                            {t6.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 7,
        description: quoted(t7.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <Link href={t7.companyUrl!} target="_blank" rel="noopener noreferrer">
                    <EmLyonSchoolIcon
                        className={cn(
                            "max-w-18 max-h-16 relative top-2 left-14 flex self-center w-full h-full text-[#ed1c24]",
                            "lg:max-h-24 lg:max-w-22 lg:-top-2 lg:left-23",
                        )}
                    />
                </Link>
                <div className="w-13 border-linear-gradient" />
                <div className="flex flex-col gap-2">
                    <p>{t7.author}</p>

                    <div className="flex flex-col">
                        {t7.jobTitle}
                        <Link href={t7.companyUrl!} target="_blank" rel="noopener noreferrer" className=" underline">
                            {t7.company}
                        </Link>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 8,
        description: quoted(t8.paragraphs),
        content: (
            <div className="flex flex-col self-center px-4 gap-8 uppercase text-brand-fine-blue font-medium">
                <p className="text-3xl relative lg:left-13 lg:bottom-4 md:left-4">{t8.company}</p>
                <div className="w-13 border-linear-gradient" />
                <div>
                    <p>{t8.author}</p>
                    <p>
                        {t8.jobTitle} - {t8.company}
                    </p>
                </div>
            </div>
        ),
    },
];

const content_mobile = [
    {
        id: 8,
        logo: (
            <Link href={t2.companyUrl!} target="_blank" rel="noopener noreferrer">
                <Image
                    src={DCOIcon}
                    alt="Data Comply One Logo"
                    className="md:max-w-28 md:max-h-18 max-w-20 max-h-18 w-full h-full relative top-1 md:top-0"
                />
            </Link>
        ),
        description: quoted(t2.paragraphs),
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t2.author}</p>

                <div className="flex gap-2">
                    {t2.jobTitle} -{" "}
                    <Link
                        href={t2.companyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        {t2.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 9,
        logo: (
            <Link href={t1.companyUrl!} target="_blank" rel="noopener noreferrer">
                <ObjowIcon className="md:max-w-45 md:max-h-11 max-w-30 max-h-8 w-full h-full self-start relative top-1 md:top-0" />
            </Link>
        ),
        description: quoted(t1.paragraphs),
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
    {
        id: 10,
        logo: (
            <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer">
                <Image
                    src={certixioIcon}
                    alt="Certixio Logo"
                    className="md:max-h-28 md:max-w-40 max-h-20 max-w-30 w-full h-full"
                />
            </Link>
        ),
        description: quoted(t3.paragraphs),
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t3.author}</p>
                <div className="flex gap-2">
                    {t3.jobTitle} -
                    <Link href={t3.companyUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                        {t3.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 11,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl top-1 relative">{t4.company}</p>
            </div>
        ),
        description: quoted(t4.paragraphs),
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t4.author}</p>
                <p>
                    {t4.jobTitle} - {t4.company}
                </p>
            </div>
        ),
    },
    {
        id: 12,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl top-1 relative">{t5.company}</p>
            </div>
        ),
        description: quoted(t5.paragraphs),
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p>{t5.author}</p>

                <div className="flex gap-2">
                    {t5.jobTitle} -{" "}
                    <Link
                        href={t5.companyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        {t5.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 13,
        logo: <MNPIcon />,
        description: quoted(t6.paragraphs),
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p className="pb-1">{t6.author}</p>

                <div className="flex flex-col">
                    {t6.jobTitle}
                    <Link
                        href={t6.companyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        {" "}
                        {t6.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 14,
        logo: <EmLyonSchoolIcon className={cn("max-w-14 max-h-12  flex self-center w-full h-full text-[#ed1c24]")} />,
        description: quoted(t7.paragraphs),
        author: (
            <div className="font-medium text-brand-fine-blue uppercase">
                <p className="pb-1">{t7.author}</p>

                <div className="flex flex-col">
                    {t7.jobTitle}
                    <Link
                        href={t7.companyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 underline"
                    >
                        {t7.company}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        id: 15,
        logo: (
            <div className="flex justify-between w-full uppercase text-brand-fine-blue font-medium">
                <p className="text-2xl top-1 relative">{t8.company}</p>
            </div>
        ),
        description: quoted(t8.paragraphs),
        author: (
            <div className="uppercase text-brand-fine-blue font-medium">
                <p>{t8.author}</p>
                <p>
                    {t8.jobTitle} - {t8.company}
                </p>
            </div>
        ),
    },
];

export { content, content_mobile };
