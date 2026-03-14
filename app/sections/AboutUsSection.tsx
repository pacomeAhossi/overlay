"use client";

import AboutCard from "../components/composite/AboutCard";

interface About {
  icon: string;
  title: string;
  description: string;
}

const abouts: About[] = [
  {
    icon: "/assets/icons/checkmark.svg",
    title: "Trusted Mentors",
    description:
      "Unlock your potential with expert tutors who personalize learning to fit your style. Flexible schedules and tailored guidance make your growth easy and effective.",
  },
  {
    icon: "/assets/icons/attachment.svg",
    title: "Learn on your term",
    description:
      "Find a tutor who adapts to your learning pace and fits your schedule. Learn anytime, anywhere — completely on your terms.",
  },
  {
    icon: "/assets/icons/easy_access.svg",
    title: "Easy access",
    description:
      "Choose convenience with tutors who are available anytime, anywhere. Learn seamlessly on your schedule, from any device.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="relative mt-5 pb-10 md:mt-10 lg:pb-20">
      <div className="container m-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl m-auto ">
          {/* title */}
          <div className="max-w-lg mx-auto text-center space-y-3 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold capitalize">
              About us
            </h2>
            <p className="md:px-8 text-base lg:text-lg text-foreground font-medium">
              Empowering learners through accessible, interactive, and
              future-ready education
            </p>
          </div>
          {/* Grid pour les trois cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {abouts.map((about) => (
              <AboutCard key={about.title} about={about} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
