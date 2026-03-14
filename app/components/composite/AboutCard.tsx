import Image from "next/image";

interface About {
  icon: string;
  title: string;
  description: string;
}

interface AboutCardProps {
  about: About;
}

export default function AboutCard({ about }: AboutCardProps) {
  return (
    <div className="bg-card px-7 py-6 text-center border border-card rounded-3xl shadow-sm hover:shadow-md hover:border-primary-normal transition-shadow duration-300">
      <div className="flex items-center justify-center ">
        <Image
          src={about.icon}
          width={52}
          height={52}
          alt={`${about.title} icon`}
          className="object-contain"
        />
      </div>
      <h4 className="mt-3 mb-2 md:mt-6 md:mb-4 text-xl md:text-2xl text-accent font-semibold capitalize">
        {about.title}
      </h4>
      <p className="text-base md:text-lg text-foreground font-medium max-sm:text-balance">
        {about.description}
      </p>
    </div>
  );
}
