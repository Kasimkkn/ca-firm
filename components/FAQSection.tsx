"use client";
import React, { useState } from "react";

interface FAQItem {
    id: number;
    question: string;
    description: string;
    items: string[];
}

const AnimatedFAQItem: React.FC<FAQItem & { isOpen: boolean; onClick: () => void }> = ({
    id,
    question,
    description,
    items,
    isOpen,
    onClick,
}) => {
    return (
        <div className="w-full border-t font-secondaryFont border-gray-300 cursor-pointer overflow-hidden">
            <div onClick={onClick} className="grid grid-cols-12 pt-6 items-center">
                <span className="col-span-1 text-orange-500 text-[25px] md:text-[40px] lg:text-[80px]">(0{id})</span>
                <div className="col-span-10 flex justify-center md:justify-end items-center">
                    <div className="md:w-1/2">
                        <h2 className="uppercase text-[15px] md:text-[24px] lg:text-[30px] md:leading-8">{question}</h2>
                    </div>
                </div>
                <svg
                    className={`lucide col-span-1 h-8 w-8 md:h-12 md:w-12 lg:h-20 lg:w-20 lucide-plus transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45" : ""
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </div>
            <div className="grid grid-cols-12 items-center relative">
                <span className="col-span-1"></span>
                <div className="col-span-10 flex justify-center md:justify-end items-center">
                    <div className="md:w-1/2">
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 mt-0"
                                }`}
                        >
                            <span className="text-orange-600 text-sm md:text-[15px] uppercase">{description}</span>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="mt-5 text-black text-sm md:text-xl mb-2 p-2 relative transition-all duration-500"
                                >
                                    <div className="absolute -top-1 -left-5 w-10 h-[2px] bg-gray-300"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <span className="col-span-1"></span>
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "Financial Statements",
            description: "We prepare financial statements on the following basis",
            items: [
                "Notice to Reader Report – New or small companies without lenders who require tax filing and management reporting",
                "Review Engagement Report – Growing companies with lenders or investors requiring more assurance than a Notice to Reader Report",
            ],
        },
        {
            id: 2,
            question: "Tax",
            description: "CORPORATE AND PERSONAL TAX RETURN PREPARATION",
            items: [
                "Proprietorships, Partnerships, Farm businesses (including AgriStability and AgriInvest)",
                "Terminal and Estate returns",
                "Scientific Research and Experimental Development claims",
                "Goods and Services Tax returns",
                "Not-For-Profit Organization returns",
                "Owner-manager remuneration planning",
                "Payroll assistance",
                "Comprehensive Planning and Optimization",
                "Government assistance programs, including CEWS"
            ],
        },
        {
            id: 3,
            question: "ACCOUNTING + CONSULTING",
            description: "BOOKKEEPING, SOFTWARE ASSISTANCE, AND ADVICE",
            items: [
                "Monthly, quarterly and annual bookkeeping services",
                "Support for most popular desktop and cloud accounting packages",
                "Setup and software training for QuickBooks Desktop, QuickBooks Online and Sage",
                "Business plans",
                "Cash flow forecasts and projections",
                "Budgeting",
                "Aboriginal client services",
                "Management assistance and consulting",
            ],
        },
    ];

    return (
        <div className="md:min-h-screen flex flex-col items-center justify-center md:px-4">
            <div className="max-w-7xl w-full space-y-4">
                {faqs.map((faq) => (
                    <AnimatedFAQItem
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        description={faq.description}
                        items={faq.items}
                        isOpen={openFAQ === faq.id}
                        onClick={() => toggleFAQ(faq.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
