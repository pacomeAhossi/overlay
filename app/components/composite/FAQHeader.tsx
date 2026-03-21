import { ReactNode } from "react";

type FAQHeaderProps = {
  title: string;
  description: ReactNode;
};

export default function FAQHeader({ title, description }: FAQHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-4">
      {/* Titre */}
      <h2
        className={`
          text-2xl md:text-3xl lg:text-4xl text-black font-semibold capitalize
        `}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className={`
          max-w-md text-balance mx-auto text-base md:text-lg text-foreground font-medium leading-relaxed
          }
        `}
      >
        {description}
      </p>
    </div>
  );
}
