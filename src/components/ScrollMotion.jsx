"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

// Geser elemen mengikuti posisi scroll (parallax) — reversible saat scroll up/down.
export function ScrollSlide({ children, className, y = [60, -60], x = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], y);
  const translateX = useTransform(scrollYProgress, [0, 1], x);

  return (
    <motion.div ref={ref} style={{ y: translateY, x: translateX }} className={className}>
      {children}
    </motion.div>
  );
}

// Opasitas + geser yang menyala/mati mengikuti scroll (bukan whileInView sekali jalan).
export function ScrollFade({ children, className, opacity = [0, 1, 1, 0], y = [28, 0, 0, -28] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.25"],
  });
  const styleOpacity = useTransform(scrollYProgress, [0, 0.18, 0.8, 1], opacity);
  const translateY = useTransform(scrollYProgress, [0, 0.18, 0.8, 1], y);

  return (
    <motion.div ref={ref} style={{ opacity: styleOpacity, y: translateY }} className={className}>
      {children}
    </motion.div>
  );
}

// Rotasi elemen mengikuti scroll (mis. ring dekoratif / pinwheel).
export function ScrollRotate({ children, className, range = [0, 45] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], range);

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}

// Teks/isi yang menyusuri layar secara horizontal saat scroll melewatinya.
export function ScrollMarquee({ children, className, x = [24, -90] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], x);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      <motion.div style={{ x: translateX }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

// Elemen "merosot" mengikuti kecepatan scroll — makin cepat scroll, makin kencang melawan.
export function ScrollVelocityDrift({ children, className, max = 20 }) {
  const { scrollY } = useScroll();
  const velocity = useMotionValue(0);

  useAnimationFrame(() => {
    velocity.set(scrollY.getVelocity());
  });

  const raw = useTransform(velocity, [-2000, 2000], [max, -max]);
  const y = useSpring(raw, { stiffness: 100, damping: 30, restDelta: 0.01 });

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Berputar secepat kecepatan scroll — scroll pelan berputar pelan, scroll cepat berputar liar.
export function VelocitySpin({ children, className, max = 45 }) {
  const { scrollY } = useScroll();
  const velocity = useMotionValue(0);

  useAnimationFrame(() => {
    velocity.set(scrollY.getVelocity());
  });

  const smooth = useSpring(velocity, { stiffness: 180, damping: 35, restDelta: 1 });
  const rotate = useTransform(smooth, [-2500, 2500], [max, -max]);

  return (
    <motion.div style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}

// 3D tilt mengikuti gerakan mouse (dikombinasikan dengan parallax scroll di parent).
export function TiltCard({ children, className, max = 9, perspective = 900 }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sRX = useSpring(rotateX, { stiffness: 200, damping: 22 });
  const sRY = useSpring(rotateY, { stiffness: 200, damping: 22 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max);
    rotateX.set(-py * max);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: sRX, rotateY: sRY, transformStyle: "preserve-3d", transformPerspective: perspective }}
      className={className}
    >
      {children}
    </motion.div>
  );
}