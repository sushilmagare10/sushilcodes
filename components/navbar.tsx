"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { useTheme } from "next-themes";
// import { useTransitionRouter } from "next-view-transitions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  //  const router = useTransitionRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getBackgroundColor = () => {
    if (!mounted) return "transparent";

    if (isScrolled) {
      return theme === "dark"
        ? "rgba(23, 23, 23, 0.65)"
        : "rgba(255, 255, 255, 0.65)";
    } else {
      return theme === "dark"
        ? "rgba(23, 23, 23, 0)"
        : "rgba(255, 255, 255, 1)";
    }
  };

  const getMobileBackgroundColor = () => {
    if (!mounted) return "transparent";

    if (isScrolled) {
      return theme === "dark"
        ? "rgba(23, 23, 23, 0.8)"
        : "rgba(255, 255, 255, 0.8)";
    } else {
      return theme === "dark" ? "rgb(23, 23, 23)" : "rgb(255, 255, 255)";
    }
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <>
        {/* Desktop Navbar Skeleton */}
        <div className="sticky inset-x-0 top-0 z-50 mx-auto hidden w-full max-w-4xl items-center justify-between bg-transparent px-2 py-2 md:flex">
          <div className="text-3xl font-bold opacity-0">logo</div>
          <div className="flex items-center opacity-0">
            {navLinks.map((_, idx) => (
              <div key={idx} className="px-3 py-1.5 text-[14px]">
                <span>Loading...</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navbar Skeleton */}
        <div className="fixed top-0 right-0 left-0 z-50 bg-transparent px-4 py-3 md:hidden">
          <div className="flex items-center justify-between opacity-0">
            <div className="text-2xl font-bold">logo</div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full p-2"></div>
              <div className="h-10 w-10 rounded-xl p-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          y: isScrolled ? 10 : 0,
          width: isScrolled ? "80%" : "92.6%",
          borderRadius: isScrolled ? "8rem" : "0",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          backgroundColor: getBackgroundColor(),
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="sticky inset-x-0 top-0 z-50 mx-auto hidden w-full max-w-4xl items-center justify-between px-2 py-2 text-neutral-900 md:flex dark:text-neutral-100"
      >
        <Link href="/" className="text-3xl font-bold">
          logo
        </Link>
        <div className="flex items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative flex gap-1 px-3 py-1.5 text-[14px]"
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-lg bg-neutral-200/60 backdrop-blur-sm dark:bg-neutral-800"
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 cursor-pointer rounded-full border border-neutral-200/50 bg-neutral-100/60 p-2 text-neutral-900 backdrop-blur-sm transition-all duration-200 dark:border-neutral-700/50 dark:bg-neutral-800/60 dark:text-neutral-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex h-4 w-4 items-center justify-center"
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{
          backgroundColor: getMobileBackgroundColor(),
          backdropFilter: isScrolled
            ? "blur(20px) saturate(180%)"
            : "blur(0px)",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(180%)"
            : "blur(0px)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed top-0 right-0 left-0 z-50 px-4 py-3 md:hidden"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
          >
            logo
          </Link>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-neutral-200/50 bg-neutral-100/60 p-2 text-neutral-900 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/60 dark:text-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex h-4 w-4 items-center justify-center"
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </motion.span>
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="rounded-xl border border-neutral-200/50 bg-neutral-100/60 p-2 text-neutral-900 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/60 dark:text-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mt-4 overflow-hidden rounded-2xl border border-neutral-200/50 bg-neutral-50/80 backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-900/80"
            >
              <div className="space-y-1 p-4">
                {navLinks.map((link, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-4 py-3 font-medium text-neutral-900 transition-all duration-200 hover:bg-neutral-200/50 dark:text-neutral-100 dark:hover:bg-neutral-800/50"
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="block"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};

export default Navbar;
