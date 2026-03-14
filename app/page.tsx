import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
