"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

// Garis kecepatan global: muncul & menyerang saat user scroll cepat (ke atas/bawah).
const STREAKS = [
  { color: "#CCFF00", top: "10%", size: 3 },
  { color: "#00E5FF", top: "26%", size: 2 },
  { color: "#FF4D8D", top: "42%", size: 4 },
  { color: "#FFB300", top: "58%", size: 2 },
  { color: "#FFFFFF", top: "74%", size: 1.5 },
  { color: "#CCFF00", top: "88%", size: 2.5 },
];

export default function SpeedStreaks() {
  const { scrollY } = useScroll();
  const velocity = useMotionValue(0);

  useAnimationFrame(() => {
    velocity.set(scrollY.getVelocity());
  });

  const smooth = useSpring(velocity, { stiffness: 220, damping: 35, restDelta: 1 });

  const centerOpacity = useTransform(smooth, [-3000, -90, 0, 90, 3000], [0, 0.5, 0, 0.5, 0]);
  const drift = useTransform(smooth, [-3000, 3000], [120, -120]);

  return (
    <motion.div
      style={{ opacity: centerOpacity }}
      className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {STREAKS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            top: s.top,
            x: "-50%",
            y: drift,
            backgroundColor: s.color,
            boxShadow: `0 0 18px 4px ${s.color}55`,
            opacity: 0.55,
          }}
          className="absolute h-[3px] w-[60%] left-1/2 rounded-full"
        />
      ))}
    </motion.div>
  );
}