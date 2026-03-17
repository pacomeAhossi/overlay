"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import LessonCard from "./LessonCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Lesson {
  title: string;
  page: number;
  hours: number;
  image: string;
}

interface LessonsCarouselProps {
  lessons: Lesson[];
}

const CAROUSEL_OPTIONS = {
  align: "start",
  loop: false,
  skipSnaps: false,
  containScroll: "trimSnaps",
  slidesToScroll: 1,
} as const;

export default function LessonsCarousel({ lessons }: LessonsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);

  // State pour désactiver les boutons
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    const canPrev = emblaApi.canScrollPrev();
    const canNext = emblaApi.canScrollNext();

    // On met à jour les states des boutons en fonction des anciennes valeurs de state
    setCanScrollPrev((prev) => (prev !== canPrev ? canPrev : prev));
    setCanScrollNext((prev) => (prev !== canNext ? canNext : prev));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // on attend la fin du rendu actuel pour update les boutons
    const timeout = setTimeout(onSelect, 0);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      clearTimeout(timeout);
    };
  }, [emblaApi, onSelect]);

  // Fonction pour aller à la slide précédente
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (
    <div className="relative w-full px-4 md:px-0">
      {/* CAROUSEL */}
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_48%] min-w-0 cursor-pointer "
            >
              <LessonCard lesson={lesson} />
            </div>
          ))}
        </div>
      </div>

      {/*Boutons flottants sur les côtés sur mobile et tablette */}
      <div className="lg:hidden">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute top-1/2 -left-5 sm:-left-10 -translate-y-1/2 z-10 p-2 disabled:opacity-0 transition-opacity"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute top-1/2 -right-5 sm:-right-10 -translate-y-1/2 z-10 p-2 disabled:opacity-0 transition-opacity"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
