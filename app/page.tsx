import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import LessonsSection from "./sections/LessonsSection";
import BlogSection from "./sections/BlogSection";
import CoursesSection from "./sections/CoursesSection";
import FAQSection from "./sections/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <LessonsSection />
      <BlogSection />
      <CoursesSection />
      <FAQSection />
    </main>
  );
}
