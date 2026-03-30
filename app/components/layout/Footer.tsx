"use client";

import Image from "next/image";
import Link from "next/link";
import FooterUsefulLinks from "../composite/FooterUsefulLinks";
import LogoImage from "../../../public/assets/logo_overlay.svg";
import Linkedin from "../../../public/assets/icons/social/linkedin.png";
import Twitter from "../../../public/assets/icons/social/twitter.png";
import Whatsapp from "../../../public/assets/icons/social/whatsapp.png";
import Subscribe from "../composite/Subscribe";
import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

interface FooterLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const usefulLinks: FooterSection[] = [
  {
    title: "Links",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "Our Team" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "#", label: "+229 01 62 36 75 54", icon: Phone },
      { href: "#", label: "pacomeahossi175@gmail.com", icon: Mail },
      {
        href: "#",
        label: "1014 N Main St, Miami, Oklahoma, 74354, United States",
        icon: MapPin,
      },
    ],
  },
  {
    title: "Our courses",
    links: [
      { href: "#", label: "Education and Mastery" },
      { href: "#", label: "Graphic Design" },
      { href: "#", label: "Machine Learning" },
    ],
  },
  {
    title: "Download",
    links: [
      { href: "#", label: "Google Play" },
      { href: "#", label: "Apple Store" },
      { href: "#", label: "Desktop" },
    ],
  },
];

interface Network {
  title: string;
  href: string;
  image: string;
}

const networks: Network[] = [
  {
    title: "Telegram",
    href: "#",
    image: "/assets/icons/social/telegram.png",
  },
  {
    title: "Twitter",
    href: "https://x.com",
    image: "/assets/icons/social/twitter.png",
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/pacôme-ahossi",
    image: "/assets/icons/social/linkedin.png",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/0162367554",
    image: "/assets/icons/social/whatsapp.png",
  },
  {
    title: "Net",
    href: "https://github.com/pacomeAhossi",
    image: "/assets/icons/social/net.png",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-8 lg:pt-16 text-foreground bg-secondary-card ">
      <div className="absolute bottom-0  z-0 ">
        <Image
          src="/assets/footer_filigrane.png"
          width={1474}
          height={387}
          className="object-cover w-auto"
          alt="Filigrane image"
        />
      </div>
      <div className="container m-auto px-6 md:px-8 z-20">
        <div className="max-w-7xl m-auto">
          {/* grid pour les useful links */}
          <div className="py-8 lg:py-16 border-b-2 border-background ">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 relative">
              {/* section brand */}
              <div className="lg:col-span-2 space-y-12">
                <Link href="/">
                  <Image
                    src={LogoImage}
                    alt="Logo Overlay"
                    width={144}
                    height={645}
                    className="object-cover"
                  />
                </Link>
                <div className="space-y-6 max-w-sm ">
                  {/* Subscribe */}
                  <Subscribe />
                </div>
              </div>
              {/* liens utiles du footer */}
              {usefulLinks.map((usefulLink) => (
                <FooterUsefulLinks
                  key={usefulLink.title}
                  usefulLink={usefulLink}
                />
              ))}
              {/* Liens réseaux sociaux pour desktop */}
              <div className="hidden lg:absolute lg:block bottom-0 right-0 ">
                <div className="flex gap-6 items-center justify-center">
                  {networks.map((network) => (
                    <div
                      key={network.title}
                      className="w-12.5 h-12.5  bg-primary/80 rounded-xl flex items-center justify-center"
                    >
                      <Link href={network.href}>
                        <Image
                          src={network.image}
                          alt={`${network.title}-logo`}
                          width={24}
                          height={24}
                          className="object-cover h-auto"
                        />
                      </Link>
                    </div>
                  ))}
                  {/* <div className="w-12.5 h-12.5  bg-primary/80 rounded-xl flex items-center justify-center">
                    <Image
                      src={Twitter}
                      alt="twitter logo"
                      width={24}
                      height={24}
                      className="object-cover h-auto"
                    />
                  </div>
                  <div className="w-12.5 h-12.5 bg-primary/80 rounded-xl flex items-center justify-center">
                    <Image
                      src={Linkedin}
                      alt="Linkedin logo"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Liens réseaux sociaux pour mobile */}
            <div className="lg:hidden flex gap-6 items-center justify-center mt-8">
              {networks.map((network) => (
                <Link
                  key={network.title}
                  href={network.href}
                  rel="noopener noreferrer"
                >
                  <div className="w-12.5 h-12.5  bg-primary/80 rounded-xl flex items-center justify-center">
                    <Image
                      src={network.image}
                      alt={`${network.title}-logo`}
                      width={24}
                      height={24}
                      className="object-cover h-auto"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* all right reserved */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#808080]">
              &copy; 2024 - {currentYear} Pacôme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
