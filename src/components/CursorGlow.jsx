"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

// Cahaya yang mengekor pointer — memberikan nuansa "studio" di atas section gelap.
export default function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 110, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 110, damping: 18, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none -left-[190px] -top-[190px] w-[380px] h-[380px] rounded-full"
      style={{ x: sx, y: sy }}
    >
      <div
        className="w-full h-full rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(204,255,0,0.16) 0%, rgba(0,229,255,0.09) 42%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}