"use client";
import PartnersList from "../components/composite/PartnersList";
import { Button } from "../components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pb-10 min-h-200 lg:min-h-175 overflow-visible pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Background image pour desktop*/}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: "url('/assets/bento_hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      {/* Background image pour mobile */}
      <div className="relative lg:hidden mt-5 h-100 sm:h-125  ">
        <div
          className="relative w-full h-full bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/bento_hero_mobile.png')",
            backgroundSize: "contain",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl lg:max-w-2xl md:mt-5">
            {/* badge trusted by */}
            <div className=" inline-flex items-center gap-2 rounded-full px-3 sm:px-4 text-sm text-dark/10 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pin opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pin" />
              </span>
              <span className="whitespace-nowrap">
                Trusted by 20,000+ Happy Learners
              </span>
            </div>

            {/* Titre + description */}
            <div className="relative mt-3 mb-6 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-darker font-semibold capitalize text-balance leading-tight">
                Empower your future through education
              </h1>
              <p className="mt-6 text-base lg:text-lg text-foreground font-medium max-w-lg">
                Access high-quality courses, expert instructors, and flexible
                learning—anytime, anywhere.
              </p>
            </div>

            {/* Button */}
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:items-center">
              <Button
                variant="primary"
                href="#start"
                className="px-2 py-3 gap-2 bg-primary group"
              >
                Start learning
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <Image
                    src="/assets/icons/arrow-left-double.png"
                    width={20}
                    height={20}
                    className="h-auto"
                    alt="double arrow left"
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                href="#courses"
                className="p-2 shadow-xl"
              >
                Explore courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PartnersList */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-8 md:mt-16 lg:mt-20">
        <div className="max-w-4xl mx-auto text-center ">
          <PartnersList />
        </div>
      </div>
    </section>
  );
}
