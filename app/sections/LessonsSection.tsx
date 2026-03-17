import LessonCard from "../components/composite/LessonCard";
import LessonsCarousel from "../components/composite/LessonsCarousel";

interface Lesson {
  title: string;
  page: number;
  hours: number;
  image: string;
}

const lessons: Lesson[] = [
  {
    title: "Learn from Our Most Loved Lessons",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson1.png",
  },
  {
    title: "Top-Rated Lessons Handpicked for You",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson2.png",
  },
  {
    title: "Discover Popular & Trending Lessons",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson3.png",
  },
  {
    title: "Featured Courses to Jumpstart Your Learning",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson4.png",
  },
  {
    title: "Selected Lessons for Maximum Impact",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson5.png",
  },
  {
    title: "Learn Smarter with Featured Courses",
    page: 24,
    hours: 35,
    image: "/assets/images/lessons/lesson6.png",
  },
];

export default function LessonsSection() {
  return (
    <section id="courses" className="pt-4 pb-10 md:pb-20 overflow-hidden">
      <div className="container m-auto px-6 sm:px-8">
        <div className="max-w-7xl m-auto">
          {/* title */}
          <div className="max-w-lg mx-auto text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold capitalize">
              Featured lessons
            </h2>
            <p className="md:px-8 text-base lg:text-lg text-foreground font-medium">
              Explore our top lessons curated by experts to boost your learning
              journey
            </p>
          </div>
          {/* Grid pour les card de cours */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {lessons.map((lesson, index) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>

          {/* Essai de slide sur mobile et tablet */}
          <div className="lg:hidden">
            <LessonsCarousel lessons={lessons} />
          </div>
        </div>
      </div>
    </section>
  );
}
