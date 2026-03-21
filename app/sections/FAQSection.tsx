"use client";

import React from "react";
import FAQHeader from "../components/composite/FAQHeader";
import FAQAccordion from "../components/composite/FAQAccordion";

export default function FAQSection() {
  return (
    <section id="faq" className="px-4 pt-5 pb-10 mb:pb-20">
      <div className="container px-6 sm:px-8 m-auto">
        <div className="max-w-7xl mx-auto">
          {/* Titre d'entete */}
          <FAQHeader
            title="Frenquently asked questions"
            description={
              <>
                {" "}
                Answers to your common questions. Quick, clear, and helpful
                information.
              </>
            }
          />
          {/* Accordéon */}
          <div className="mt-6 max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
