"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterUsefulLinksProps {
  usefulLink: FooterSection;
}

export default function FooterUsefulLinks({
  usefulLink,
}: FooterUsefulLinksProps) {
  // Booléen pour savoir si l'entete du lien est contact
  const isContact = usefulLink.title === "Contact";

  return (
    <div className="space-y-6">
      <h4 className="text-base md:text-lg text-black font-semibold">
        {usefulLink.title}
      </h4>
      <ul className="flex flex-col gap-4">
        {usefulLink.links.map((link) => {
          // On récupère l'icon s'il est défini
          const Icon = link.icon;

          return (
            <li
              key={link.label}
              className={
                isContact ? "flex gap-2 items-start wrap-anywhere" : ""
              }
            >
              {/* si entete et si Icon défini, on affiche l'icone */}
              {isContact && Icon && (
                <Icon size={18} className="shrink-0 text-primary" />
              )}
              <Link
                href={link.href}
                className="text-sm lg:text-base text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
