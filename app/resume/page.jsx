"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const about = [
  {
    title: "About Me",
    description:
      "I am a passionate Frontend Developer with over 2 years of experience specializing in building responsive, user-friendly websites and web applications. I love turning complex problems into simple, beautiful solutions.",
    info: [
      { fieldName: "Name", fieldValue: "Serhii Kokorskyi" },
      { fieldName: "Email", fieldValue: "serhii.kokorskyi@gmail.com" },
      { fieldName: "Phone", fieldValue: "+380 99 47 59 953" },
      { fieldName: "Experience", fieldValue: "2+ years" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Languages", fieldValue: "Ukrainian, English, Polish" },
    ],
  },
];

const experience = [
  {
    title: "Experience",
    description:
      "Practical experience in modern web development and real-world project delivery.",
    items: [
      {
        company: "Craftera Digital",
        position: "Frontend Developer",
        period: "Jun 2024 – Feb 2025",
        description:
          "Worked on projects for multiple clinics, responsible for frontend development: Developed responsive layouts and interactive elements, used Nunjucks and JavaScript to build websites, and collaborated with the team to integrate all functionalities and enhance the user experience.",
      },
      {
        company: "Upwork",
        position: "Freelancer",
        period: "Jan 2024 – May 2024",
        description:
          "Developed and maintained e-commerce websites using React and Next.js, focused on building responsive layouts with SCSS to improve UX/UI, optimized storefront performance and checkout flows for better conversions, and collaborated with clients to develop custom e-commerce solutions.",
      },
      {
        company: "FusionUp",
        position: "Frontend Developer",
        period: "May 2023 - December 2023",
        description:
          "Developed responsive layouts using HTML, CSS, and SCSS, collaborated with designers to create interactive UI elements, and helped troubleshoot and maintain web application functionality.",
      },
    ],
  },
];

const education = [
  {
    title: "Education",
    description:
      "Formal education and courses focused on Frontend Development.",
    items: [
      {
        institution: " SoftServe Academy",
        degree: "Practical React",
        period: "2023",
        description:
          "Successfully completed the Practical React course at SoftServe Academy, gaining hands-on experience in building interactive web applications using React.js, enhancing frontend development skills with modern tools and best practices.",
      },
      {
        institution: "IT Academy Online",
        degree: "Frontend Development Bootcamp",
        period: "2022",
        description:
          "Completed an intensive program covering JavaScript, and modern UI/UX practices.",
      },
    ],
  },
];

const skills = [
  {
    title: "Skills",
    description: "Technologies and tools I use regularly.",
    items: [
      { icon: <FaHtml5 />, skill: "HTML5" },
      { icon: <FaCss3 />, skill: "CSS3" },
      { icon: <FaJs />, skill: "JavaScript" },
      { icon: <FaReact />, skill: "React.js" },
      { icon: <SiTypescript />, skill: "TypeScript" },
      { icon: <SiNextdotjs />, skill: "Next.js" },
      { icon: <SiTailwindcss />, skill: "Tailwind CSS" },
      { icon: <FaGithub />, skill: "GitHub" },
      { icon: <FaNodeJs />, skill: "Node.js (basic)" },
      { icon: <FaFigma />, skill: "Figma" },
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-10"
        >
          <TabsList className="flex flex-col w-full h-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-4xl font-bold text-accent">
                  {experience[0].title}
                </h3>
                <p className="text-white/60 max-w-[600px]">
                  {experience[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="space-y-8">
                    {experience[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <p className="flex items-center gap-2 text-white/60">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent inline-block"></span>{" "}
                          {item.company}
                        </p>
                        <h4 className="text-2xl font-semibold text-accent">
                          {item.position}
                        </h4>
                        <span className="text-sm text-gray-400">
                          {item.period}
                        </span>
                        <p className="mt-2 text-gray-300">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-3xl font-semibold text-accent text-center md:text-left tracking-wide mb-4">
                  {about[0].title}
                </h3>

                <p className="text-white/70 max-w-[600px] mx-auto md:mx-0 text-center md:text-left mb-6">
                  {about[0].description}
                </p>

                <ul className="space-y-4">
                  {about[0].info.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] rounded-lg py-4 px-6 flex flex-col items-center lg:items-start gap-2 transition-all duration-500 hover:bg-[#161616] hover:shadow-2xl hover:shadow-accent/20 border border-transparent hover:border-accent/30 cursor-pointer"
                    >
                      <p className="text-white/80 text-sm font-medium">
                        {item.fieldName}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.fieldName === "Phone" ? (
                          <a
                            href={`tel:${item.fieldValue}`}
                            className="text-accent hover:underline"
                          >
                            {item.fieldValue}
                          </a>
                        ) : item.fieldName === "Email" ? (
                          <a
                            href={`mailto:${item.fieldValue}`}
                            className="text-accent hover:underline"
                          >
                            {item.fieldValue}
                          </a>
                        ) : (
                          item.fieldValue
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-4xl font-bold text-accent">
                  {education[0].title}
                </h3>
                <p className="text-white/60 max-w-[600px]">
                  {education[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="space-y-8">
                    {education[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto rounded-xl py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <p className="flex items-center gap-2 text-white/60">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent inline-block"></span>{" "}
                          {item.institution}
                        </p>
                        <h4 className="text-2xl font-semibold text-accent">
                          {item.degree}
                        </h4>
                        <span className="text-sm text-gray-400">
                          {item.period}
                        </span>
                        <p className="mt-2 text-gray-300">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-4xl font-bold text-accent">
                  {skills[0].title}
                </h3>
                <p className="text-white/60 max-w-[600px]">
                  {skills[0].description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills[0].items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#232329] rounded-xl py-6 flex flex-col justify-center items-center gap-4 transition-all duration-500 hover:scale-105 hover:bg-[#161616] hover:shadow-2xl hover:shadow-accent/20 border border-transparent hover:border-accent/30 cursor-pointer"
                    >
                      <div className="text-5xl text-accent shadow-lg p-4 rounded-full bg-[#333]">
                        {item.icon}
                      </div>
                      <p className="text-white text-center font-semibold">
                        {item.skill}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
