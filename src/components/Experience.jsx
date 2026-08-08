"use client";

import React from "react";
import { Palette, Trophy, CheckCircle2, Layers } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2024 - PRESENT",
      role: "Lead Graphic Designer & Visual Strategist",
      company: "Freelance & Creative Studio",
      description: "Merancang identitas merek, kampanye media sosial, pitch deck investor, dan desain kemasan produk berkelas internasional untuk klien global.",
    },
    {
      year: "2023 - 2024",
      role: "Senior Visual Designer",
      company: "BrandCraft Agency",
      description: "Bertanggung jawab atas panduan visual (brand book), ilustrasi digital, dan aset iklan cetak/OOH untuk festival & korporat.",
    },
    {
      year: "2022 - 2023",
      role: "Creative Graphic Specialist",
      company: "AgriLogistics Media",
      description: "Merancang desain stasioneri korporat, profil perusahaan, laporan tahunan cetak, dan materi promosi Pemasaran.",
    },
  ];

  const skills = [
    { name: "Adobe Photoshop", category: "Raster Art", icon: <Palette size={16} /> },
    { name: "Adobe Illustrator", category: "Vector Art", icon: <Palette size={16} /> },
    { name: "Figma (UI & Graphic)", category: "Layout", icon: <Layers size={16} /> },
    { name: "Adobe InDesign", category: "Editorial", icon: <Palette size={16} /> },
    { name: "Brand Guidelines", category: "Branding", icon: <Palette size={16} /> },
    { name: "Print Production", category: "Pre-press", icon: <Layers size={16} /> },
  ];

  const awards = [
    { title: "Juara 1 Desain Kemasan Produk UMKM", detail: "Proyek TaniLink Eco Packaging" },
    { title: "Best Visual Identity Implementation", detail: "Green Tech Innovation Competition" },
    { title: "Juara 2 National Graphic Design Hackathon", detail: "Proyek EcoTrade Brand System" },
  ];

  return (
    <section id="experience" className="w-full bg-[#FAFAFA] text-black py-20 px-6 sm:px-12 relative z-30">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-[#2B38F6] text-white text-xs font-black uppercase tracking-wider border border-black">
            EXPERIENCE & TOOLS
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase text-black">
            CRAFT & JOURNEY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black border-b-2 border-black pb-3">
              CAREER TIMELINE
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx}
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
              ))}
            </div>
          </div>

          {/* Skills & Awards Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Tech & Design Skills */}
            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black border-b-2 border-black pb-3">
                DESIGN TOOLS & SKILLS
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((s, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border-2 border-black flex items-center gap-3 font-extrabold text-xs uppercase shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-[#2B38F6] text-[#CCFF00]">
                      {s.icon}
                    </div>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition Card */}
            <div className="p-6 rounded-3xl bg-[#CCFF00] border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
