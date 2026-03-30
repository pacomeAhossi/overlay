"use client";
import { motion } from "framer-motion";

import CoursesCarousel from "../components/composite/CoursesCarousel";

interface Course {
  title: string;
  description: string;
  price: number;
  hours: number;
  level: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Mastering the Fundamentals",
    description:
      "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... ",
    price: 143,
    hours: 35,
    level: "Beginner Level",
    image: "/assets/images/courses/mastering_course.png",
  },
  {
    title: "Essentials to Expertise",
    description:
      "Build confidently from core concepts to advanced mastery with a structured, hands-on approach ... ",
    price: 193,
    hours: 35,
    level: "Beginner Level",
    image: "/assets/images/courses/essentials_course.png",
  },
  {
    title: "Step-by-Step",
    description:
      "Follow a clear, step-by-step path designed to build your skills gradually and confidently — from basics to mast... ",
    price: 243,
    hours: 35,
    level: "Beginner Level",
    image: "/assets/images/courses/step_course.png",
  },
  {
    title: "Graphic Design",
    description:
      "A complete graphic design journey — from visual basics to polished, portfolio-ready projects...",
    price: 163,
    hours: 35,
    level: "Beginner Level",
    image: "/assets/images/courses/design_course.png",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="px-4 pb-10 md:pb-20">
      <div className="container m-auto px-4 sm:px-8">
        <div className="max-w-7xl m-auto">
          {/* Entete de la section */}
          <div className="max-w-xl mx-auto text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold max-sm:text-balance">
              Top Courses Taught by Experts
            </h2>
            <p className="max-w-md mx-auto text-base sm:text-lg px-8  text-foreground font-medium text-pretty">
              Learn from top instructors with our best courses Gain expert
              skills for real-world success
            </p>
          </div>
          {/* Carousel de cards de cours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2"
          >
            <CoursesCarousel courses={courses} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
