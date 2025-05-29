"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 3000,
  motionProps,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        // After first transition, mark as no longer first render
        if (isFirstRender && newIndex !== 0) {
          setIsFirstRender(false);
        }
        return newIndex;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration, isFirstRender]);

  // Default motion props for first render (bottom to top)
  const firstRenderMotion = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(15px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      x: [0, -2, 2, -1, 1, 0], // Subtle shake after blur clears
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      filter: {
        duration: 0.5,
        ease: "easeOut"
      },
      x: {
        duration: 0.4,
        delay: 0.4, // Start shake after blur is mostly cleared
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    },
  };

  // Motion props for subsequent renders (top to down)
  const subsequentMotion = {
    initial: {
      opacity: 0,
      y: -25,
      filter: "blur(12px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      x: [0, -1.5, 1.5, -1, 1, 0], // Subtle shake
    },
    exit: {
      opacity: 0,
      y: 25,
      filter: "blur(8px)",
    },
    transition: {
      duration: 0.7,
      ease: "easeOut",
      filter: {
        duration: 0.4,
        ease: "easeOut"
      },
      x: {
        duration: 0.35,
        delay: 0.3,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    },
  };

  // Use custom motionProps if provided, otherwise use the conditional defaults
  const activeMotionProps = motionProps || (isFirstRender && index === 0 ? firstRenderMotion : subsequentMotion);

  return (
    <div className="overflow-hidden px-2 py-1 shadow-background rounded-lg">
      <AnimatePresence mode="wait">
        <motion.h1
          key={`${words[index]}-${isFirstRender ? 'first' : 'subsequent'}`}
          className={cn(className)}
          {...activeMotionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}