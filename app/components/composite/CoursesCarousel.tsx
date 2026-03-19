"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import LessonCard from "./LessonCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import CourseCard from "./CourseCard";

interface Course {
  title: string;
  description: string;
  price: number;
  hours: number;
  level: string;
  image: string;
}

interface LessonsCarouselProps {
  courses: Course[];
}

const CAROUSEL_OPTIONS = {
  align: "start",
  loop: false,
  skipSnaps: false,
  containScroll: "trimSnaps",
  slidesToScroll: 1,
} as const;

export default function CoursesCarousel({ courses }: LessonsCarouselProps) {
  const [courseEmblaRef, courseEmblaApi] = useEmblaCarousel(CAROUSEL_OPTIONS);

  // State pour désactiver les boutons
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!courseEmblaApi) return;

    const canPrev = courseEmblaApi.canScrollPrev();
    const canNext = courseEmblaApi.canScrollNext();

    // On met à jour les states des boutons en fonction des anciennes valeurs de state
    setCanScrollPrev((prev) => (prev !== canPrev ? canPrev : prev));
    setCanScrollNext((prev) => (prev !== canNext ? canNext : prev));
  }, [courseEmblaApi]);

  useEffect(() => {
    if (!courseEmblaApi) return;

    courseEmblaApi.on("select", onSelect);
    courseEmblaApi.on("reInit", onSelect);

    // on attend la fin du rendu actuel pour update les boutons
    const timeout = setTimeout(onSelect, 0);

    return () => {
      courseEmblaApi.off("select", onSelect);
      courseEmblaApi.off("reInit", onSelect);
      clearTimeout(timeout);
    };
  }, [courseEmblaApi, onSelect]);

  // Fonction pour aller à la slide précédente
  const scrollPrev = useCallback(
    () => courseEmblaApi?.scrollPrev(),
    [courseEmblaApi]
  );
  const scrollNext = useCallback(
    () => courseEmblaApi?.scrollNext(),
    [courseEmblaApi]
  );
  return (
    <div className="relative w-full px-4 md:px-0">
      {/* CAROUSEL */}
      <div className="overflow-hidden w-full" ref={courseEmblaRef}>
        <div className="flex gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_calc(100%-15rem)] lg:flex-[0_0_380px]  min-w-0 cursor-pointer"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      {/*Boutons flottants sur les côtés */}
      <div className="">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute top-1/2 left-1 sm:-left-3 -translate-y-1/2 z-20 p-2 bg-card rounded-full cursor-pointer disabled:opacity-0 transition-opacity"
        >
          <ChevronLeftIcon className="text-primary" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute top-1/2 right-1 sm:-right-3 -translate-y-1/2 z-20 p-2 bg-card rounded-full cursor-pointer disabled:opacity-0 transition-opacity"
        >
          <ChevronRightIcon className="text-primary" />
        </button>
      </div>
    </div>
  );
}
