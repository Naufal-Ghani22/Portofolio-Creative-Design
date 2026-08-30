"use client";

import { motion } from "framer-motion";

export function Float({ children, duration = 6, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}