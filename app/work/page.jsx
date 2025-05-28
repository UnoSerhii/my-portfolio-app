"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { CustomSliderBtn } from "@/components/CustomSliderBtn";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    image: "/projects/coming-soon.jpg",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    image: "/projects/coming-soon.jpg",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    image: "/projects/coming-soon.jpg",
    live: "#",
    github: "#",
  },
];

const Work = () => {
  const swiperRef = useRef();
  const [project, setProject] = useState(projects[0]);

  const handleNextProject = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeOut" } }}
      className="min-h-[80vh] flex items-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] lx:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none group">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <h2 className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</h2>
              <h3 className="text-4xl font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              <p className="text-white/60 max-w-[600px]">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-accent text-lg">
                    <span className="text-white text-xl">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="border-b border-gray-500 w-full"></div>
              <div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-accent transition-all duration-500"
                >
                  <BsArrowUpRight /> Live Preview
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-accent transition-all duration-500"
                >
                  <BsGithub /> Github
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="h-[460px] mb-4"
                onSlideChange={handleNextProject}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative flex items-center justify-center bg-pink-50/20 rounded-3xl">
                      <div className="absolute top-0 blur-0 w-full h-full bg-black/10 z-10 rounded-3xl"></div>
                      <Image src={project.image} fill alt={project.title} className="object-cover z-0 rounded-3xl" />

                      <CustomSliderBtn
                        swiper={swiperRef}
                        containerStyles="absolute inset-0 z-20 flex items-center justify-between px-4"
                        btnStyles="bg-accent w-[24px] h-[24px] xl:w-[40px] xl:h-[40px] flex items-center justify-center text-primary hover:bg-accent-hover rounded-full transition-all duration-500"
                        iconStyles="text-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
