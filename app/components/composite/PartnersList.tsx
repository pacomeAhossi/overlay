import Image from "next/image";
import React from "react";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "Lumina",
    logo: "/assets/icons/lumina.svg",
  },
  {
    name: "Vortex",
    logo: "/assets/icons/vortex.svg",
  },
  {
    name: "Velocity",
    logo: "/assets/icons/velocity.svg",
  },
  {
    name: "Synergy",
    logo: "/assets/icons/syn.svg",
  },
  {
    name: "Enigma",
    logo: "/assets/icons/enigma.svg",
  },
  {
    name: "Spectrum",
    logo: "/assets/icons/spectrum.svg",
  },
];

export default function PartnersList() {
  return (
    <div className="space-y-6 md:space-y-8">
      <p className="text-base sm:text-lg text-dark/20 font-medium">
        Trusted by 50,000+ businesses for innovative design and growth.
      </p>
      {/* Container mobile avec scroll des logos */}
      <div className="sm:hidden">
        <div className="px-4 flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="snap-center shrink-0 flex flex-col items-center gap-2 w-24 -mx-2"
            >
              <div className="relative w-7 h-7">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name} partner`}
                  width={28}
                  height={28}
                  className="w-full h-auto max-w-7"
                />
              </div>
              <span className="text-xs text-dark/20 font-bold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* container grid des logos pour desktop   */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex justify-center items-center gap-2 border-r-2 border-secondary-card last:border-none "
          >
            <div className="relative w-7 h-7">
              <Image
                src={partner.logo}
                width={28}
                height={28}
                alt={`Logo ${partner.name} partner`}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-dark/20 font-bold">
              {partner.name}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
