"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Plus, Download, ChevronDown, Sparkles, Star, Circle, Sun, Zap } from "lucide-react";
import { Float } from "@/components/Decor";
import { ScrollRotate, VelocitySpin, TiltCard, ScrollVelocityDrift } from "@/components/ScrollMotion";

const GRADIENT = "linear-gradient(100deg,#FFFFFF 0%,#CCFF00 22%,#00E5FF 48%,#FF4D8D 72%,#FFFFFF 100%)";

// Chip warna yang bisa diubah isi/warnanya di sini.
const HERO_CHIPS = [
  { label: "GRAPHIC DESIGN", color: "#CCFF00" },
  { label: "UI/UX", color: "#00E5FF" },
  { label: "BRANDING", color: "#FF4D8D" },
  { label: "MOTION", color: "#FFB300" },
];

// Layout dekor bisa diubah di sini — posisi, warna, ukuran, dan "kedalaman" parallax.
// offset[0..1] mengontrol jarak gerak saat scroll (nilai besar = elemen "jauh", gerak lambat).
const HERO_DECOR = [
  { Icon: Star, color: "#CCFF00", size: 26, pos: "top-[22%] left-[2%]", offset: [0, 250], depth: 0 },
  { Icon: Plus, color: "#FF4D8D", size: 30, pos: "top-[7%] right-[4%]", offset: [0, 80], depth: 1 },
  { Icon: Circle, color: "#00E5FF", size: 20, pos: "top-[46%] right-[2%]", offset: [0, 280], depth: 0 },
  { Icon: Sparkles, color: "#FFB300", size: 28, pos: "top-[62%] left-[8%]", offset: [0, 90], depth: 1 },
  { Icon: Zap, color: "#CCFF00", size: 24, pos: "bottom-[14%] left-[32%]", offset: [0, 320], depth: 0 },
];

// Tangga transisi menuju CREATIVE SOLUTIONS — warna & jarak anak tangga bisa diubah di sini.
const TIP_STEPS = [
  { color: "#CCFF00", drop: 0, size: 30 },
  { color: "#00E5FF", drop: 10, size: 27 },
  { color: "#FF4D8D", drop: 20, size: 24 },
  { color: "#FFB300", drop: 30, size: 21 },
];

// Kata raksasa yang melintas pelan di background Hero — ganti isinya sesukamu.
const GIANT_WORDS = ["CHEERFUL", "WITH", "CREATIVE", "GRAPHIC", "DESIGN", "UI/UX", "BRANDING", "MOTION"];

// Lapisan dekor "jauh" vs "dekat" biar lebih terasa kedalamannya.
function DecorLayer({ scrollYProgress, decor }) {
  const y = useTransform(scrollYProgress, [0, 1], decor.offset);
  return (
    <motion.div
      className={`absolute ${decor.pos} ${decor.depth === 1 ? "z-10" : "z-0"}`}
      style={{ y }}
      aria-hidden="true"
    >
      <Float duration={5 + decor.depth * 2} delay={decor.depth * 0.5}>
        <decor.Icon
          style={{ width: decor.size, height: decor.size }}
          strokeWidth={2.5}
          color={decor.color}
        />
      </Float>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const glowRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  // Gradien headline bergeser setiap kali halaman di-scroll → warna teks "mengalir".
  const bgPos = useTransform(scrollYProgress, (v) => `${v * 46}% 50%`);

  // Tangga transisi "kabur" naik saat kita scroll menuju Creative Solutions.
  const tipY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  // Spotlight "membuka fokus": lingkaran tajam mengikuti pointer (spring lembut).
  const spotXT = useMotionValue(-30);
  const spotYT = useMotionValue(-30);
  const spotX = useSpring(spotXT, { stiffness: 260, damping: 30, mass: 0.6 });
  const spotY = useSpring(spotYT, { stiffness: 260, damping: 30, mass: 0.6 });
  const sxStr = useTransform(spotX, (v) => `${Math.round(v)}%`);
  const syStr = useTransform(spotY, (v) => `${Math.round(v)}%`);
  const [touched, setTouched] = useState(false);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotXT.set(((e.clientX - rect.left) / rect.width) * 100);
    spotYT.set(((e.clientY - rect.top) / rect.height) * 100);
    if (!touched) setTouched(true);
  };

  const handlePointerLeave = () => {
    spotXT.set(-30);
    spotYT.set(-30);
  };

  return (
    <section ref={sectionRef} id="about" className="relative pt-2 sm:pt-4 pb-0 px-6 sm:px-12 max-w-7xl mx-auto">

      {/* Floating decorative shapes — two parallax depths */}
      <div className="absolute inset-0 pointer-events-none overflow-visible z-0" aria-hidden="true">
        {HERO_DECOR.map((decor, idx) => (
          <DecorLayer key={idx} scrollYProgress={scrollYProgress} decor={decor} />
        ))}
      </div>

      {/* Spinning dashed disc — rotates with scroll + velocity twist */}
      <ScrollRotate
        range={[0, 180]}
        className="hidden lg:block absolute top-[5%] left-[30%] z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-dashed border-[#CCFF00]/50 flex items-center justify-center">
            <Sun size={26} className="text-[#CCFF00]/70" />
          </div>
          {/* Rotasi ekstra yang dipicu kecepatan scroll */}
          <VelocitySpin max={70} className="absolute -top-4 -right-4">
            <Sparkles size={22} color="#FF4D8D" strokeWidth={2.5} />
          </VelocitySpin>
        </div>
      </ScrollRotate>

      {/* Teks raksasa background — melintas horizontal tanpa henti, opasitas sangat rendah */}
      <div
        className="absolute inset-0 z-[1] -rotate-2 pointer-events-none overflow-hidden flex items-center opacity-[0.06]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center gap-10 pr-10">
              {GIANT_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="font-display font-black uppercase leading-none text-[clamp(6.5rem,16vw,15rem)] tracking-tight text-white"
                  style={i % 2 ? { WebkitTextStroke: "2px #fff" } : {}}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

        {/* Left Content Area */}
        <motion.div style={{ y: textY }} className="lg:col-span-7 space-y-6 z-10 pb-6 sm:pb-10">

          {/* Main Typography */}
          <div className="relative space-y-3">

            {/* Floating Stitched Lime Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block lime-badge px-4 py-1.5 rounded-full text-xs tracking-wider mb-2 shadow-lg"
            >
              BEAST DESIGN
            </motion.div>

            {/* Headline berat dengan gradien warna yang "mengalir" mengikuti scroll */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                backgroundImage: GRADIENT,
                backgroundSize: "250% 100%",
                backgroundPosition: bgPos,
              }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase text-transparent bg-clip-text will-change-[background-position]"
            >
              CHEERFUL <br />
              WITH CREATIVE
            </motion.h1>
          </div>

          {/* Sub-headline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base max-w-lg leading-relaxed font-sans font-medium"
          >
            Selamat datang di studio kreatif Naufal Ghani. Spesialis Graphic Design, UI/UX, dan Frontend — tempat warna dan kebebasan visual bertemu ketajaman logika untuk menghasilkan karya yang solutif.
          </motion.p>

          {/* Chip warna-warni */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="pt-1 flex flex-wrap gap-2"
          >
            {HERO_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                style={{ background: chip.color, color: "#0a0a0a" }}
              >
                {chip.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="pulse-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider bg-[#CCFF00] text-[#000000] hover:scale-105 transition-all duration-300"
            >
              GET STARTED
              <Plus size={16} className="bg-black text-[#CCFF00] rounded-full p-0.5" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider bg-transparent border-2 border-white hover:bg-white hover:text-[#2B38F6] transition-all duration-300"
            >
              DOWNLOAD CV
              <Download size={16} />
            </a>
          </motion.div>

        </motion.div>

        {/* Right Area: Naufal Photo Poster — siluet blur lime + figur tajam + spotlight pointer */}
        <div className="lg:col-span-5 relative z-20 mt-4 lg:mt-0 self-end">
          <TiltCard max={7} className="relative flex">
            <div
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative w-full overflow-hidden rounded-[2rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] h-[420px] sm:h-[540px] lg:h-[560px] xl:h-[620px] bg-[#2B38F6]"
            >
              {/* Aurora conic ring — rotasi ikut scroll + spin otomatis */}
              <motion.div
                style={{ rotate: glowRotate }}
                className="absolute -inset-10 rounded-full pointer-events-none"
                aria-hidden="true"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full opacity-30"
                  style={{ background: "conic-gradient(#CCFF00,#00E5FF,#FF4D8D,#FFB300,#CCFF00)" }}
                />
              </motion.div>

              {/* Glow lime — menyerang saat scroll cepat */}
              <ScrollVelocityDrift max={26} className="absolute inset-0 bg-[#CCFF00]/20 blur-3xl pointer-events-none" />

              {/* LAPIS SILUET — foto besar di-blur dengan tone hijau seperti teks */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.img
                  style={{ y: photoY, rotate: photoRotate }}
                  src="/naufal-hero.png"
                  alt=""
                  role="presentation"
                  className="absolute inset-0 w-full h-full object-cover object-top scale-110 blur-[14px]"
                />
                <div className="absolute inset-0 bg-[#CCFF00]/25 mix-blend-screen" />
                <div className="absolute inset-0 [filter:hue-rotate(-12deg)_saturate(1.25)] bg-[#CCFF00]/15 mix-blend-overlay" />
              </div>

              {/* LAPIS FIGUR TAJAM — hanya area spotlight yang terbuka */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <motion.img
                  style={{ y: photoY, rotate: photoRotate, "--sx": sxStr, "--sy": syStr }}
                  src="/naufal-hero.png"
                  alt="Naufal Ghani"
                  className="absolute inset-0 w-full h-full object-cover object-top scale-[1.08] [-webkit-mask-image:radial-gradient(circle_140px_at_var(--sx,50%)_var(--sy,50%),#000_60%,transparent_100%)] [mask-image:radial-gradient(circle_140px_at_var(--sx,50%)_var(--sy,50%),#000_60%,transparent_100%)]"
                />
                {/* Tone hijau mengikuti spotlight */}
                <div
                  className="absolute inset-0 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle 190px at var(--sx,50%) var(--sy,50%), rgba(204,255,0,0.32), rgba(204,255,0,0) 100%)",
                  }}
                />
              </div>

              {/* Petunjuk singkat — hilang setelah kursor digerakkan */}
              <span
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-4 py-1.5 rounded-full bg-black/70 border-2 border-[#CCFF00]/60 text-[10px] font-black uppercase tracking-widest text-white transition-opacity duration-500 pointer-events-none select-none ${
                  touched ? "opacity-0" : "opacity-100"
                }`}
              >
                ✋ Gerakkan kursor untuk membuka fokus
              </span>
            </div>
          </TiltCard>
        </div>

      </div>

      {/* Transisi ke Creative Solutions: rel + tangga chevron warna-warni */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ y: tipY }}
        className="relative flex flex-col items-center pt-8 pb-6 select-none"
        aria-hidden="true"
      >
        {/* Label + rel dengan titik cahaya yang meluncur turun */}
        <div className="flex flex-col items-center gap-3">
          <ScrollVelocityDrift max={10}>
            <span className="uppercase text-[10px] font-black tracking-[0.4em] text-white/60">
              SCROLL
            </span>
          </ScrollVelocityDrift>
          <div className="relative h-14 w-[3px] rounded-full bg-white/20 overflow-hidden">
            <motion.span
              animate={{ y: [0, 56, 56], opacity: [0, 1, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-4 rounded-full"
              style={{ background: "linear-gradient(#CCFF00,#00E5FF,#FF4D8D)" }}
            />
          </div>
        </div>

        {/* Tangga chevron — melangkah turun ke arah ribbon Creative Solutions */}
        <div className="mt-4 flex items-end gap-2">
          {TIP_STEPS.map((step, i) => (
            <ScrollVelocityDrift key={i} max={16 - i * 3}>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                style={{
                  color: step.color,
                  marginTop: step.drop,
                  width: step.size,
                  height: step.size,
                }}
                className="flex items-center justify-center"
              >
                <ChevronDown size={step.size} strokeWidth={3.5} />
              </motion.div>
            </ScrollVelocityDrift>
          ))}
        </div>

        <p className="mt-5 uppercase text-[9px] font-black tracking-[0.45em] text-white/40">
          KREATIVITAS • SOLUSI • WARNA
        </p>
      </motion.div>

    </section>
  );
}