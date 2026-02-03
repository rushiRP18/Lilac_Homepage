"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
    {
        question: "Do you take insurance?",
        answer: "Yes, I accept select insurance plans.",
    },
    {
        question: "What are your rates?",
        answer: "Rates vary depending on the service offered.",
    },
    {
        question: "Do you have any openings?",
        answer: "Availability changes—please reach out.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full h-screen bg-[#f6f1ea] flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-20">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <div className="relative w-[360px] h-[560px] overflow-hidden rounded-t-full">
                        <Image
                            src="/faq.jpg"
                            alt="Decorative flowers"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT FAQ CONTENT */}
                <div className="text-[#273919] pt-16">

                    {/* Heading */}
                    <h2 className="mb-12 font-semibold text-[49.784px]">
                        FAQs
                    </h2>

                    {/* FAQ List */}
                    <div className="space-y-6">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-b border-[#273919]/40 pb-6"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-start gap-6 text-left cursor-pointer"
                                    >
                                        <span className="text-[28px] leading-none mt-2 shrink-0">
                                            {isOpen ? "−" : "+"}
                                        </span>

                                        <span className="text-[40.588px] font-medium leading-tight whitespace-nowrap">
                                            {faq.question}
                                        </span>
                                    </button>


                                    {/* Smooth Answer */}
                                    <div
                                        className={`ml-[52px] overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"}
                    `}
                                    >
                                        <p className="text-[18px] font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
