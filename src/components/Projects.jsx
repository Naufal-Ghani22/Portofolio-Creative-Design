"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import projectsData from "../../public/data/projects.json";
import { ScrollFade, ScrollSlide, ScrollMarquee, TiltCard } from "@/components/ScrollMotion";

const CARD_ACCENTS = ["#CCFF00", "#00E5FF", "#FF4D8D", "#FFB300"];

// Parallax tiap "kolom" (pola berulang setiap 3 kartu).
const SLIDE_Y = [
  [80, -40],
  [40, -80],
  [90, -30],
];

// Kartu dalam: konten putih khas saya dengan garis aksen warna & bayangan tajam.
function ProjectCardInner({ project, accent, featured, onOpen }) {
  return (
    <div
      style={{ "--accent": accent, borderTopColor: accent }}
      className={`bg-white text-black rounded-3xl overflow-hidden border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_var(--accent)] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group h-full border-t-[6px] ${
        featured ? "p-0" : ""
      }`}
    >
      {/* Image Header */}
      <div className={`relative w-full overflow-hidden bg-black/10 border-b-2 border-black ${featured ? "h-72 sm:h-80" : "h-56"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          style={{ background: accent, color: "#0a0a0a" }}
        >
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className={`flex-1 flex flex-col justify-between ${featured ? "p-6 sm:p-8 space-y-5" : "p-6 space-y-4"}`}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-black/60 uppercase tracking-wide">
              {project.role} • {project.duration}
            </span>
          </div>
          <h3 className={`font-display font-black tracking-tight uppercase group-hover:text-[#2B38F6] transition-colors ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className={`text-xs text-black/75 font-semibold leading-relaxed ${featured ? "line-clamp-4 max-w-2xl" : "line-clamp-3"}`}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-[#2B38F6]/10 text-[#2B38F6] text-[10px] font-black tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Card Action */}
        <div className="pt-4 border-t border-black/10 flex items-center justify-between">
          <button
            onClick={() => onOpen(project)}
            className="text-xs font-black uppercase tracking-wider text-[#2B38F6] hover:underline flex items-center gap-1"
          >
            DETAIL CASE STUDY
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-black flex items-center justify-center transition-colors"
            style={{ color: accent }}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Border konik gradien yang berputar terus-menerus (kartu unggulan).
function GradientBorderCard({ accent, children }) {
  return (
    <div className="relative h-full rounded-3xl p-[3px] overflow-hidden">
      <div
        className="absolute inset-[-200%] animate-border-spin"
        style={{ background: `conic-gradient(${accent},#FFFFFF,#00E5FF,#FF4D8D,#FFB300,${accent})` }}
      />
      <div className="relative h-full bg-white rounded-[calc(1.5rem-3px)] overflow-hidden flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    if (!activeModalProject) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveModalProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeModalProject]);

  const categories = ["ALL", "UI/UX Design", "Brand & Web Design", "Brand Identity"];

  const filteredProjects = selectedCategory === "ALL"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full bg-[#2B38F6] text-white py-20 px-6 sm:px-12 relative z-30 border-t-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Title */}
        <ScrollFade className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-block lime-badge px-4 py-1.5 rounded-full text-xs tracking-wider shadow-lg">
              FEATURED PORTFOLIO
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase">
              SELECTED WORKS
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <ScrollSlide x={[30, -30]} className="flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mr-1">
              Filter
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider border-2 transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#CCFF00] text-black border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-transparent text-white/70 border-white/25 hover:text-[#CCFF00] hover:border-[#CCFF00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollSlide>
        </ScrollFade>

        {/* Projects Grid — kartu pertama unggulan (span 2 kolom + border konik animasi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && filteredProjects.length > 1;
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
            const slide = SLIDE_Y[idx % SLIDE_Y.length];

            return (
              <ScrollSlide
                key={project.id}
                y={slide}
                className={`${isFeatured ? "md:col-span-2 lg:col-span-2 " : ""}h-full`}
              >
                {isFeatured ? (
                  <GradientBorderCard accent={accent}>
                    <ProjectCardInner project={project} accent={accent} featured onOpen={setActiveModalProject} />
                  </GradientBorderCard>
                ) : (
                  <TiltCard max={8} className="h-full">
                    <ProjectCardInner project={project} accent={accent} onOpen={setActiveModalProject} />
                  </TiltCard>
                )}
              </ScrollSlide>
            );
          })}
        </div>

        {/* Giant rainbow word — travels horizontally with scroll */}
        <ScrollMarquee className="pt-14 select-none">
          <div
            className="whitespace-nowrap font-display font-black text-7xl sm:text-8xl lg:text-9xl uppercase tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg,#CCFF00,#00E5FF,#FF4D8D,#FFB300,#CCFF00)",
              WebkitBackgroundClip: "text",
            }}
          >
            CREATIVE SOLUTIONS — GRAPHIC DESIGN — UI/UX & FRONTEND —&nbsp;
          </div>
        </ScrollMarquee>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto" onClick={() => setActiveModalProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white text-black max-w-2xl w-full rounded-3xl border-4 border-black p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black text-white font-black flex items-center justify-center hover:bg-[#CCFF00] hover:text-black transition-colors"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#CCFF00] text-black text-xs font-black uppercase border border-black">
                {activeModalProject.category}
              </span>
              <h3 className="font-display font-black text-3xl uppercase text-black">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-bold text-black/60 uppercase">
                {activeModalProject.role} • {activeModalProject.duration}
              </p>
            </div>

            <img
              src={activeModalProject.image}
              alt={activeModalProject.title}
              className="w-full h-56 object-cover rounded-2xl border-2 border-black"
            />

            <div className="space-y-4 text-xs font-semibold leading-relaxed">
              <div>
                <h4 className="font-black text-sm uppercase text-[#2B38F6] mb-1">Masalah (Problem):</h4>
                <p className="text-black/80">{activeModalProject.problem}</p>
              </div>
              <div>
                <h4 className="font-black text-sm uppercase text-[#2B38F6] mb-1">Solusi (Solution):</h4>
                <p className="text-black/80">{activeModalProject.solution}</p>
              </div>
              <div>
                <h4 className="font-black text-sm uppercase text-[#2B38F6] mb-1">Dampak (Impact):</h4>
                <p className="text-black/80">{activeModalProject.impact}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 flex justify-between items-center">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-black text-[#CCFF00] text-[10px] font-black uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={activeModalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B38F6] text-white font-black text-xs uppercase hover:bg-black transition-colors"
              >
                OPEN PROJECT <ExternalLink size={14} />
              </a>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}