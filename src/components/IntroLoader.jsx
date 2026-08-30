"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pembuka: overlay singkat dengan nama besar + garis lime yang menyusut.
export default function IntroLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro-loader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] bg-[#2B38F6] flex flex-col items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="uppercase text-[10px] font-black tracking-[0.55em] text-white/60 pl-2"
          >
            PORTFOLIO CREATIVE
          </motion.span>

          <h1
            className="font-display font-black uppercase tracking-tight leading-none text-6xl sm:text-8xl text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(100deg,#FFFFFF 0%,#CCFF00 40%,#00E5FF 65%,#FF4D8D 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            NAUFAL
          </h1>

          <div className="mt-6 w-48 sm:w-64 h-2 rounded-full bg-white/15 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full rounded-full"
              style={{ background: "linear-gradient(90deg,#CCFF00,#00E5FF,#FF4D8D)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}