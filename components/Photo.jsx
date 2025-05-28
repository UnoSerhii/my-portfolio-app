"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeInOut" } }}
        className="w-full h-full relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="w-[298px] h-[298px] xl:w-[506px] xl:h-[506px] mix-blend-lighten absolute"
        >
          <Image
            src="/avatar.jpg"
            priority
            quality={100}
            fill
            alt="Serhii Kokorskyi"
            className="object-cover object-top rounded-full"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ strokeDasharray: ["14 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            cx="253"
            cy="253"
            r="250"
            stroke="#60a5fa"
            strokeWidth="4"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
