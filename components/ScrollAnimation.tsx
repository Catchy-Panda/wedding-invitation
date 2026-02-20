"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollAnimationProps) {
  const initial = {
    opacity: 0,
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    y: direction === "up" ? 40 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
