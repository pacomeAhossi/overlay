"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogSection() {
  return (
    <section id="blog" className="pt-6 pb-10 md:pb-20">
      <div className="container m-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-7xl m-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Grid pour image et capabilities */}
          <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-2">
            <div className="relative lg:px-10">
              <div className="w-full lg:w-118.5 h-118.5 relative flex justify-center items-center shadow-2xl shadow-white border-5 border-primary/10 rounded-3xl">
                <Image
                  src="/assets/logo_capability.svg"
                  width={256}
                  height={79}
                  alt="Logo Overlay"
                  className="object-cover"
                  sizes="(max-width: 640px) 10vw, (max-width: 1024px) 256px, 70px"
                />
                <div className="hidden lg:block absolute -top-10 -right-10">
                  <Image
                    src="/assets/images/blog_image_top.png"
                    width={300}
                    height={80}
                    alt="image blog top"
                    className="object-cover"
                  />
                </div>
                <div className="hidden lg:block absolute -left-10 -bottom-10">
                  <Image
                    src="/assets/images/blog_image_bottom.png"
                    width={300}
                    height={196}
                    alt="image blog bottom"
                    className="object-cover"
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 100px, 60px"
                  />
                </div>
              </div>
            </div>
            {/* texte empowering side */}
            <div className="relative">
              <div className="space-y-6 mb-6 md:mb-10 px-4 md:px-0">
                <h4 className="lg:max-w-lg text-center text-pretty md:text-left text-xl sm:text-2xl md:text-[2rem] text-[#242F31] font-semibold leading-tight px-3 md:px-0">
                  Empower your career growth with industry-leading design
                  capabilities
                </h4>
                <p className="lg:max-w-lg text-base md:text-lg text-foreground font-medium">
                  Optimize complex, resource-intensive collaborations by
                  aligning efforts with strategic niche markets. Enhance
                  efficiency, reduce operational strain, and drive focused
                  growth through specialization.
                </p>
                <motion.ul
                  className="lg:max-w-md space-y-4 list-disc list-outside pl-5 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <li className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                    Effectively distribute content across platforms to maximize
                    impact
                  </li>
                  <li className=" text-sm sm:text-base md:text-lg text-foreground font-medium">
                    Optimize operational workflows through effective change
                    management in podcasting
                  </li>
                </motion.ul>
              </div>
              {/* Bouton */}
              <div className="flex px-4 md:px-0 items-center whitespace-nowrap">
                <Button
                  variant="primary"
                  href="#"
                  className="flex gap-2 md:gap-3 text-white  bg-primary hover:bg-primary/90 group"
                >
                  Join us
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
