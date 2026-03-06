"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "../brand/Logo";
import { Button } from "../ui/Button";

interface NavLink {
  href: string;
  label: string;
}

export function FloatingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State pour détecter si le user a scrollé
  const [isScrolled, setIsScrolled] = useState(false);

  // Liens de navigation
  const navLinks: NavLink[] = [
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Our Courses" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact US" },
  ];

  // On détecte le scroll pour changer le style du navbar et le coller au top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On bloque le scroll quand menu mobile ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
      fixed top-0 left-0 right-0
      z-50
      transition-all duration-300
      ${isScrolled ? "mt-0" : "mt-4 sm:mt-6 md:mt-8"}
    `}
    >
      {/* Container avec max-width et espacement */}
      <div
        className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
      "
      >
        {/* Navbar avec fond blanc et ombre */}
        <nav
          className={`
          bg-card
          rounded-xl sm:rounded-2xl
          border border-border
          transition-all duration-300
          ${isScrolled ? "shadow-lg" : "shadow-md"}
        `}
        >
          <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 py-2 sm:py-4">
            {/* LOGO */}
            <Logo />

            {/* NAVIGATION DESKTOP */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-foreground text-md font-medium
                    capitalize
                    hover:text-primary
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON - Desktop */}
            <div className="hidden md:block">
              <Button variant="primary" href="#buy">
                Buy Now
              </Button>
            </div>

            {/* BOUTON HAMBURGER - Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                md:hidden
                p-2 rounded-lg
                text-foreground
                hover:bg-neutral-light
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary
                relative z-50
              "
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`
                  h-0.5 w-full bg-current rounded-full
                  transition-all duration-300 origin-left
                  ${isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""}
                `}
                />
                <span
                  className={`
                  h-0.5 w-full bg-current rounded-full
                  transition-all duration-300
                  ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}
                `}
                />
                <span
                  className={`
                  h-0.5 w-full bg-current rounded-full
                  transition-all duration-300 origin-left
                  ${isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""}
                `}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* OVERLAY - Mobile */}
      {isMobileMenuOpen && (
        <div
          className="
            fixed inset-0 bg-darker/50 backdrop-blur-sm
            md:hidden
            z-40
            animate-in fade-in duration-200
          "
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MENU MOBILE */}
      <div
        className={`
          fixed top-0 right-0 bottom-0
          w-4/5 max-w-sm
          bg-card
          shadow-2xl
          md:hidden
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col">
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Logo />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                p-2 rounded-lg
                text-foreground
                hover:bg-neutral-light
                transition-colors
              "
              aria-label="Fermer le menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation mobile */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="
                      block px-4 py-3 rounded-lg
                      text-foreground font-medium text-lg
                      hover:bg-neutral-light
                      hover:text-primary
                      transition-colors duration-200
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button mobile */}
          <div className="mx-4 p-6 border-t border-background">
            <Button
              variant="primary"
              href="#buy"
              className="w-full"
              onClick={handleLinkClick}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
