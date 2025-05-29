"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const Paragraph = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) => {
  return (
    <motion.p
      initial={{
        y: 10,
        filter: " blur(10px)",
        opacity: 0,
      }}
      animate={{
        y: 0,
        filter: " blur(0px)",
        opacity: 1,
      }}
      transition={{
        delay: delay,
        ease: "easeInOut",
      }}
      className={cn(
        "text-paragraph max-w-lg text-xs leading-relaxed sm:text-base",
        className,
      )}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
