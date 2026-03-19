import { Clock5, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  title: string;
  description: string;
  price: number;
  hours: number;
  level: string;
  image: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="relative w-full  aspect-376/550 sm:h-[550px] p-4 rounded-3xl overflow-visible sm:overflow-hidden cursor-pointer bg-card border border-secondary-card ">
      <div className="relative h-[253px] w-full ">
        <Image
          src={course.image}
          alt={`${course.title} image`}
          fill
          className="object-cover rounded-2xl "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 376px"
          loading="lazy"
        />
        {/* Hours */}
        <div className="absolute top-3 right-2">
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center justify-center  w-6 h-6 bg-secondary-card/30 border border-foreground/10 rounded-full">
              <Clock5 className="text-card" size={12} />
            </div>
            <p className="text-xs sm:text-base text-white">
              {course.hours} hr{course.hours > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 space-y-3">
        <div className="space-y-4">
          <div className="flex gap-4 justify-between items-center ">
            {/* Level */}
            <div className=" p-2 rounded-md bg-primary/30 text-center">
              <span className="text-xs text-primary font-medium">
                {course.level}
              </span>
            </div>
            {/* price */}
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-primary font-semibold">
              ${course.price}
            </p>
          </div>
          <h5 className="text-sm sm:text-base md:text-xl lg:text-2xl text-black font-semibold whitespace-nowrap truncate overflow-hidden">
            {course.title}
          </h5>
        </div>
        {/* descrition du cours */}

        <p className="text-xs sm:text-base text-neutral-dark ">
          {course.description}
        </p>
        {/* Bouton */}
        <div className="flex gap-4 items-center ">
          <Link
            href="#"
            className="flex flex-1 items-center justify-center py-4 text-primary-foreground text-base bg-primary rounded-[99px] capitalize hover:bg-primary/90 transition-all duration-300"
          >
            View course
          </Link>
          <div className="flex justify-center items-center w-14 h-14 bg-primary/30 border border-primary rounded-full">
            <ShoppingCart className="text-primary" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
