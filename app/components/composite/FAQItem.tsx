"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isDefaultOpen?: boolean;
};

export default function FAQItem({
  question,
  answer,
  isDefaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md">
      {/* Question (bouton cliquable) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
      >
        <span className="text-base lg:text-lg font-semibold text-budgeta-dark pr-4">
          {question}
        </span>

        {/* Icône chevron avec couleur conditionnelle */}
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-secondary-card shrink-0" />
        )}
      </button>

      {/* Réponse (expandable) */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-xs text-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
