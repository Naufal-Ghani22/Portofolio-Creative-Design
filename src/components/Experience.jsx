"use client";

import React from "react";
import { Palette, Trophy, CheckCircle2, Layers, Code2, Megaphone } from "lucide-react";
import { ScrollFade, ScrollSlide } from "@/components/ScrollMotion";

export default function Experience() {
  const experiences = [
    {
      year: "2023 - PRESENT",
      role: "Founder & Creative Director",
      company: "Firsttime Design",
      description: "Mendirikan dan mengelola layanan desain kreatif — graphic design, ilustrasi, branding, dan print design — dari konsep hingga hasil akhir untuk berbagai kebutuhan klien.",
    },
    {
      year: "2026 - PRESENT",
      role: "Airport Technology Intern",
      company: "PT Angkasa Pura Indonesia",
      description: "Riset & benchmarking teknologi smart airport internasional untuk transformasi digital Juanda, termasuk konsep Interactive Indoor Mapping, Digital Lost & Found, dan QR Asset Management.",
    },
    {
      year: "2025 - 2026",
      role: "Head of Publication, Design & Documentation",
      company: "Dies Natalis FIK · Pekan Serasi · ISC 2026",
      description: "Memimpin tim kreatif untuk branding, strategi publikasi, kampanye media sosial, dan komunikasi visual pada tiga event tingkat fakultas.",
    },
    {
      year: "2024 - 2025",
      role: "Chief Marketing Officer",
      company: "Rama Tour & Travel",
      description: "Mengembangkan strategi pemasaran digital, perencanaan konten media sosial, branding, dan kampanye keterlibatan pelanggan berbasis analisis tren pasar.",
    },
  ];

  const skills = [
    { name: "Figma (UI & Graphic)", category: "Layout", icon: <Layers size={16} /> },
    { name: "Adobe Illustrator", category: "Vector Art", icon: <Palette size={16} /> },
    { name: "Adobe Photoshop", category: "Raster & Editing", icon: <Palette size={16} /> },
    { name: "Affinity Designer", category: "Vector Art", icon: <Palette size={16} /> },
    { name: "Canva", category: "Quick Visuals", icon: <Megaphone size={16} /> },
    { name: "CapCut", category: "Motion & Video", icon: <Code2 size={16} /> },
  ];

  const awards = [
    { title: "1st Place Best Solver UI/UX Design", detail: "PLAY IT 2026" },
    { title: "3rd Place International UI/UX Design", detail: "HACKFEST 2026" },
    { title: "Top 4 Best UI/UX Design", detail: "SWITCHFEST 2026" },
    { title: "Top 6 National UI/UX Design", detail: "TECHSPRINT 2026" },
    { title: "5th Place Business Plan", detail: "AECHIVEST 2026" },
    { title: "PMW Awardee & Poster Awardee", detail: "PMW 2025 · Artibility Exhibition 2025" },
  ];

  return (
    <section id="experience" className="w-full bg-[#FAFAFA] text-black py-20 px-6 sm:px-12 relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <ScrollFade className="space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-[#2B38F6] text-white text-xs font-black uppercase tracking-wider border border-black">
            EXPERIENCE & TOOLS
          </span>
          <h2 className="text-glint font-display font-black text-4xl sm:text-6xl tracking-tight uppercase text-black">
            CRAFT & JOURNEY
          </h2>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollFade className="font-display font-black text-2xl uppercase tracking-tight text-black border-b-2 border-black pb-3">
              CAREER TIMELINE
            </ScrollFade>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <ScrollSlide
                  key={idx}
                  y={[50, -40]}
                  x={idx % 2 === 0 ? [-40, 20] : [40, -20]}
                >
                  <div
                    className="p-6 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-[#2B38F6] transition-all space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#CCFF00] text-black text-[10px] font-black uppercase border border-black">
                        {exp.year}
                      </span>
                      <span className="text-xs font-bold text-black/60 uppercase">
                        {exp.company}
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl text-black uppercase">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-black/75 font-semibold leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </ScrollSlide>
              ))}
            </div>
          </div>

          {/* Skills & Awards Column */}
          <div className="lg:col-span-5 space-y-10">

            {/* Tech & Design Skills */}
            <div className="space-y-4">
              <ScrollFade className="font-display font-black text-2xl uppercase tracking-tight text-black border-b-2 border-black pb-3">
                DESIGN TOOLS & SKILLS
              </ScrollFade>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((s, idx) => (
                  <ScrollSlide
                    key={idx}
                    y={idx % 2 === 0 ? [40, -30] : [60, -50]}
                    x={[24, -16]}
                  >
                    <div className="p-3.5 rounded-xl bg-white border-2 border-black flex items-center gap-3 font-extrabold text-xs uppercase shadow-sm h-full">
                      <div className="p-2 rounded-lg bg-[#2B38F6] text-[#CCFF00]">
                        {s.icon}
                      </div>
                      <div>
                        <div>{s.name}</div>
                        <div className="text-[9px] font-bold text-black/50">{s.category}</div>
                      </div>
                    </div>
                  </ScrollSlide>
                ))}
              </div>
            </div>

            {/* Awards & Recognition Card */}
            <ScrollSlide y={[60, -30]} x={[60, -20]} className="p-6 rounded-3xl bg-[#CCFF00] border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="flex items-center gap-3">
                <Trophy size={28} className="text-black" />
                <h3 className="font-display font-black text-xl uppercase text-black">
                  HONORS & AWARDS
                </h3>
              </div>

              <ul className="space-y-3 text-xs font-black text-black">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-2 border-b border-black/20 pb-2 last:border-0 last:pb-0">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <div>
                      <div>{award.title}</div>
                      <div className="text-[10px] font-bold text-black/70">{award.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollSlide>

          </div>

        </div>

      </div>
    </section>
  );
}