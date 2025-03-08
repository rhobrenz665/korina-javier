"use client";
import React from "react";
import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";
import { useTheme } from "next-themes";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const completion = useScrollProgress() ?? 0;
  const { theme } = useTheme();

  return (
    <>
      <motion.main
        key={theme}
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{
          transform: `translateY(${completion > 0 ? completion - 100 : -100}%)`,
        }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      />
    </>
  );
};

export default Template;