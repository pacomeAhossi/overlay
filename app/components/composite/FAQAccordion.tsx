"use client";
import { useState } from "react";
import { faqData } from "@/app/types/faq";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Premier item ouvert

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === faqData.length - 1;
        return (
          <div
            key={index}
            className={`  rounded-lg overflow-hidden transition-all duration-200 ${
              isOpen ? "bg-card border-secondary-card" : ""
            } `}
          >
            {/* Question */}
            <button
              onClick={() => toggleItem(index)}
              className={` w-full flex items-center justify-between p-6 text-left transition-colors duration-200 cursor-pointer ${
                isOpen ? "" : "border-b border-input"
              } `}
            >
              <span className="text-sm lg:text-base font-medium text-black pr-4">
                {item.question}
              </span>

              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary shrink-0 cursor-pointer" />
              ) : (
                <ChevronDown className="w-5 h-5 text-foreground shrink-0 cursor-pointer" />
              )}
            </button>

            {/* Réponse */}
            <div
              className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
              <div className="px-6 pb-6 pt-0">
                <p className="text-foreground leading-relaxed max-w-xl">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
