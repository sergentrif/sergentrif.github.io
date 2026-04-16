export type FaqItem = { question: string; answer: string };

export const faqsToSchema = (faqs: FaqItem[]) => ({
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
    })),
});

export const FaqSection = ({ faqs }: { faqs: FaqItem[] }) => {
    return (
        <section className="flex flex-col items-center py-16 lg:py-24 px-4 md:px-16 lg:px-32 gap-8">
            <h2 className="w-full max-w-7xl font-brico-gro lg:text-[2.5rem] md:text-3xl text-[22px] font-bold tracking-wide uppercase">
                Questions fréquentes
            </h2>
            <div className="w-full max-w-7xl flex flex-col divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <details key={index} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                            <span className="font-brico-gro font-semibold md:text-lg text-base text-brand-midnight">
                                {faq.question}
                            </span>
                            <span className="shrink-0 pt-0.5 text-brand-midnight transition-transform duration-200 group-open:rotate-45">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </span>
                        </summary>
                        <p className="mt-4 text-brand-fine-blue md:text-base text-sm leading-relaxed max-w-3xl">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};
