import { BookOpen, Clock5 } from "lucide-react";
import Image from "next/image";

interface Lesson {
  title: string;
  page: number;
  hours: number;
  image: string;
}

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="relative w-full aspect-[376/415] rounded-2xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 z-0">
        <Image
          src={lesson.image}
          alt={`${lesson.title} image`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 376px"
        />
      </div>

      {/* Content */}
      <div className="absolute z-10 left-0 bottom-5 sm:bottom-0 px-4 sm:pb-8 space-y-4">
        <p className="text-lg sm:text-xl md:text-2xl text-darker font-semibold capitalize px-1 max-sm:text-balance ">
          {lesson.title}
        </p>
        <div className="flex gap-3 sm:gap-6 items-center">
          <div className="flex gap-2 items-center justify-center">
            <div className="flex justify-center items-center w-9 h-9 bg-card border border-foreground/10 rounded-full">
              <BookOpen className="text-primary" size={18} />
            </div>
            <span className="text-xs sm:text-base text-primary font-medium">
              {lesson.page} Lecture{lesson.page > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div className="flex items-center justify-center w-9 h-9 bg-card border border-foreground/10 rounded-full">
              <Clock5 className="text-secondary" size={18} />
            </div>
            <span className="text-xs sm:text-base text-secondary font-medium">
              {lesson.hours} hr{lesson.hours > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
