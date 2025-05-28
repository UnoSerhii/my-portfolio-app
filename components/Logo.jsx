"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Logo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/">
      <h1
        className="text-2xl font-bold relative inline-block cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Serhii{" "}
        <motion.span
          className="text-accent absolute text-3xl"
          initial={{ x: 0, y: 0 }}
          animate={hovered ? { x: 10, y: 0 } : { x: -16, y: -20 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          style={{ top: 0, left: "100%" }}
        >
          .
        </motion.span>
      </h1>
    </Link>
  );
};

export default Logo;
