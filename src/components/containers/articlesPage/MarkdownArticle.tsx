import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { Components } from "react-markdown";

const components: Components = {
    p: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
        <h2 className="font-brico-gro lg:text-[2.5rem] md:text-3xl text-xl font-bold tracking-wide uppercase text-brand-midnight">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="font-brico-gro lg:text-3xl md:text-2xl text-base font-bold tracking-wide uppercase text-brand-midnight">
            {children}
        </h3>
    ),
    ul: ({ children }) => <ul className="list-disc list-outside flex flex-col gap-5 px-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside flex flex-col gap-1">{children}</ol>,
    li: ({ children }) => <li className="pl-1 ml-4">{children}</li>,
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <em>{children}</em>,
    hr: () => <hr className="border-brand-fine-blue opacity-20" />,
    blockquote: ({ children }) => <div className="italic">{children}</div>,
    a: ({ href, children }) => {
        if (!href) return <>{children}</>;
        const isExternal = href.startsWith("http");
        if (isExternal) {
            return (
                <a href={href} className="font-bold underline" target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className="font-bold underline">
                {children}
            </Link>
        );
    },
};

interface MarkdownArticleProps {
    content: string;
}

export function MarkdownArticle({ content }: MarkdownArticleProps) {
    return (
        <div className="flex flex-col md:text-base text-sm gap-10 sm:px-4 px-0 text-brand-fine-blue">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {content}
            </ReactMarkdown>
        </div>
    );
}
