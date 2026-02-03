"use client";

import { useState } from "react";

const items = [
  {
    title: "Education",
    content: "Details about education will appear here.",
  },
  {
    title: "Licensure",
    content: "Licensure information will appear here.",
  },
  {
    title: "Certifications",
    content: "Certification details will appear here.",
  },
];

const ProfessionalBackground = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-[65vh] bg-[#efeae2]">
      <div className="max-w-5xl mx-auto w-full px-20 pt-24 pb-16 text-[#273919]">
        
        {/* TITLE */}
        <h2 className="text-center font-semibold text-[40.88px] mb-12">
          My Professional Background
        </h2>

        {/* ACCORDION */}
        <div>
          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#273919]/50"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-4 cursor-pointer"
                >
                  <span className="text-[24.19px] font-medium whitespace-nowrap">
                    {item.title}
                  </span>

                  <span className="text-[24px] leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-[18px] font-medium leading-relaxed max-w-3xl">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalBackground;
