"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
  },
  {
    num: "02",
    title: "Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
  },
  {
    num: "03",
    title: "Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
  },
  {
    num: "04",
    title: "Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 600, damping: 20 }}
              className="flex-1 flex flex-col justify-center gap-6 group p-6 rounded-2xl transition-all duration-500 hover:bg-[#161616] hover:shadow-2xl hover:shadow-accent/20 border border-transparent hover:border-accent/30 cursor-pointer"
            >
              <Link href={service.link} className="flex flex-col items-start justify-between gap-2 mb-4 w-full h-full">
                <div className="flex items-center gap-2">
                  <h2 className="h2 font-extrabold text-white transition-all duration-500 ease-in-out group-hover:text-accent">
                    {service.num}
                  </h2>
                  <BsArrowDownRight className="text-2xl text-white transition-all duration-500 ease-in-out group-hover:-rotate-45 group-hover:text-accent" />
                </div>
                <h3 className="h3 font-extrabold group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h3>
                <p className="max-w-[500px] text-white/60">{service.description}</p>
                <div className="border-b border-accent w-full"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
