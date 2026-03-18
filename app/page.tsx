import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import LessonsSection from "./sections/LessonsSection";
import BlogSection from "./sections/BlogSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <LessonsSection />
      <BlogSection />
    </main>
  );
}
