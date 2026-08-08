"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-2 sm:pt-4 pb-0 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

        {/* Left Content Area */}
        <div className="lg:col-span-7 space-y-6 z-10 pb-6 sm:pb-10">

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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase text-white"
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
            Selamat datang di studio portofolio Naufal Ghani. Tempat warna dan kebebasan visual bertemu dengan ketajaman logika untuk menghasilkan produk yang solutif.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider bg-[#CCFF00] text-[#000000] hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300"
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

        </div>

        {/* Right Area: Naufal Photo Spotlight (Clean & Perfectly Proportional) */}
        <div className="lg:col-span-5 relative flex justify-center items-end self-end mt-4 lg:mt-0 z-20 -mb-10 sm:-mb-14 lg:-mb-16">
          
          {/* Radial Lime Glow Behind Photo */}
          <div className="absolute bottom-0 w-80 h-80 sm:w-[460px] sm:h-[460px] bg-[#CCFF00]/30 rounded-full blur-3xl pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 flex justify-center items-end"
          >
            <img 
              src="/naufal-hero.png" 
              alt="Naufal Ghani" 
              className="h-[480px] sm:h-[600px] lg:h-[660px] xl:h-[700px] w-auto object-contain object-bottom filter brightness-[1.03] contrast-[1.02]"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
