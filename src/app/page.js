"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, Sparkles, Plus, Download, MessageCircle, Mail, ExternalLink, Menu, X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tickerItems = [
    "CREATIVE DESIGN",
    "SOLVER DESIGN",
    "PERFECT COMMUNICATION"
  ];

  return (
    <div className="relative min-h-screen bg-[#2B38F6] text-white font-sans selection:bg-[#CCFF00] selection:text-[#000000] overflow-x-hidden">
      
      {/* HEADER NAVBAR */}
      <header className="w-full bg-[#2B38F6] z-50 px-6 sm:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-white hover:text-[#CCFF00] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#CCFF00] flex items-center justify-center text-[#000000] font-black text-sm shadow-md">
              NG
            </div>
            <span className="font-display font-black text-xl tracking-tighter">NAUFAL GHANI</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-wider uppercase text-white/90">
            <a href="#about" className="hover:text-[#CCFF00] transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-[#CCFF00] transition-colors">SERVICES</a>
            <a href="#projects" className="hover:text-[#CCFF00] transition-colors">PROJECTS</a>
            <a href="#experience" className="hover:text-[#CCFF00] transition-colors">EXPERIENCE</a>
            <a href="#contact" className="hover:text-[#CCFF00] transition-colors">CONTACT</a>
          </nav>

          {/* Start Project / Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-transparent border-2 border-white hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-[#000000] transition-all duration-300 shadow-md"
            >
              START A PROJECT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#CCFF00]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 px-6 border-b border-white/20 text-center font-black tracking-wider text-sm">
            <a href="#about" className="block py-2 hover:text-[#CCFF00]">ABOUT</a>
            <a href="#services" className="block py-2 hover:text-[#CCFF00]">SERVICES</a>
            <a href="#projects" className="block py-2 hover:text-[#CCFF00]">PROJECTS</a>
            <a href="#experience" className="block py-2 hover:text-[#CCFF00]">EXPERIENCE</a>
            <a href="#contact" className="block py-2 hover:text-[#CCFF00]">CONTACT</a>
          </div>
        )}
      </header>

      {/* HERO MAIN SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-0 px-6 sm:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-8 z-10 pb-12 sm:pb-16">
            
            {/* Main Punchy Extra-Bold Typography */}
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
              Selamat datang di studio portofolio Naufal Ghani. Tempat warna dan kebebasan visual bertemu dengan ketajaman logika koding React, Kotlin, dan Laravel untuk menghasilkan antarmuka solutif dan tak terlupakan.
            </motion.p>

            {/* CTA Button */}
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

          {/* Right Area: Naufal Photo (Positioned exactly like reference Image 2) */}
          <div className="lg:col-span-5 relative flex justify-center items-end self-end mt-4 lg:mt-0 z-20">
            
            {/* Radial Lime Glow Behind Photo */}
            <div className="absolute bottom-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#CCFF00]/30 rounded-full blur-3xl pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-20 flex justify-center items-end"
            >
              <img 
                src="/naufal-hero.png" 
                alt="Naufal Ghani" 
                className="h-[400px] sm:h-[500px] lg:h-[560px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] filter brightness-[1.02] contrast-[1.02]"
              />
            </motion.div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION: CREATIVE SOLUTIONS JUST FOR YOU (MATCHING REFERENCE SCREENSHOT) */}
      <section id="services" className="w-full bg-[#FAFAFA] text-black py-20 px-6 sm:px-12 relative z-30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-black">
                  CREATIVE
                </h2>
                <span className="inline-block px-5 py-1.5 rounded-full bg-[#2B38F6] text-white border-2 border-dashed border-black text-xl sm:text-2xl font-black tracking-wider uppercase shadow-md">
                  SOLUTIONS
                </span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-black">
                JUST FOR YOU
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:max-w-md">
              <p className="text-black/80 text-xs sm:text-sm font-semibold leading-relaxed">
                Di studio Naufal Ghani, kami menyediakan rangkaian layanan kreatif komprehensif yang dirancang untuk memanifestasikan visi bisnis Anda secara memukau.
              </p>
              
              <a 
                href="#projects" 
                className="shrink-0 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#CCFF00] text-black border-2 border-black hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                VIEW ALL
              </a>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            
            {/* Service 1: Graphic Design */}
            <div className="rounded-3xl bg-white p-8 border-2 border-black/10 shadow-xl flex flex-col justify-between space-y-8 hover:border-[#2B38F6] transition-all duration-300 group">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black group-hover:text-[#2B38F6] transition-colors">
                  GRAPHIC DESIGN
                </h3>
                <p className="text-xs text-black/70 font-semibold leading-relaxed">
                  Tingkatkan identitas visual Anda melalui desain grafis kustom, aset cetak, ilustrasi digital, dan komunikasi visual yang tajam.
                </p>
              </div>

              {/* Inner Preview Box */}
              <div className="w-full h-44 rounded-2xl bg-[#2B38F6] border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" 
                    alt="Graphic Design Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-wider border border-white/20">
                    VIEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Service 2: Brand Strategy */}
            <div className="rounded-3xl bg-white p-8 border-2 border-black/10 shadow-xl flex flex-col justify-between space-y-8 hover:border-[#2B38F6] transition-all duration-300 group">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black group-hover:text-[#2B38F6] transition-colors">
                  BRAND STRATEGY
                </h3>
                <p className="text-xs text-black/70 font-semibold leading-relaxed">
                  Bangun identitas brand yang tak terlupakan, pedoman panduan visual (brand guidelines), dan positioning pasar yang berdampak.
                </p>
              </div>

              {/* Inner Preview Box */}
              <div className="w-full h-44 rounded-2xl bg-[#2B38F6] border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=800&auto=format&fit=crop" 
                    alt="Brand Strategy Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-wider border border-white/20">
                    VIEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Service 3: Advertising Design */}
            <div className="rounded-3xl bg-white p-8 border-2 border-black/10 shadow-xl flex flex-col justify-between space-y-8 hover:border-[#2B38F6] transition-all duration-300 group">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black group-hover:text-[#2B38F6] transition-colors">
                  ADVERTISING DESIGN
                </h3>
                <p className="text-xs text-black/70 font-semibold leading-relaxed">
                  Desain materi iklan dan kampanye pemasaran berkonversi tinggi yang memikat audiens sasaran Anda secara instan.
                </p>
              </div>

              {/* Inner Preview Box */}
              <div className="w-full h-44 rounded-2xl bg-[#2B38F6] border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a3172720177?q=80&w=800&auto=format&fit=crop" 
                    alt="Advertising Design Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-wider border border-white/20">
                    VIEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Service 4: Social Media Specialist */}
            <div className="rounded-3xl bg-white p-8 border-2 border-black/10 shadow-xl flex flex-col justify-between space-y-8 hover:border-[#2B38F6] transition-all duration-300 group">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black group-hover:text-[#2B38F6] transition-colors">
                  SOCIAL MEDIA SPECIALIST
                </h3>
                <p className="text-xs text-black/70 font-semibold leading-relaxed">
                  Strategi konten media sosial yang menarik, pembuatan mikro-slide komedi/edukasi, dan tata visual feed yang konsisten.
                </p>
              </div>

              {/* Inner Preview Box */}
              <div className="w-full h-44 rounded-2xl bg-[#2B38F6] border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
                    alt="Social Media Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-black text-[#CCFF00] text-[10px] font-black uppercase tracking-wider border border-white/20">
                    VIEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Service 5: Pitch Deck Presentation (Lime Green Highlight Card matching Reference Screenshot!) */}
            <div className="rounded-3xl bg-[#CCFF00] p-8 border-2 border-black shadow-xl flex flex-col justify-between space-y-8 md:col-span-2 lg:col-span-1 group hover:scale-[1.02] transition-all duration-300">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black">
                  PITCH DECK PRESENTATION
                </h3>
                <p className="text-xs text-black/80 font-bold leading-relaxed">
                  Desain slide presentasi bisnis dan pitch deck investor yang persuasif, profesional, dan siap memikat pendanaan.
                </p>
              </div>

              {/* Inner Preview Box (Black Contrast) */}
              <div className="w-full h-44 rounded-2xl bg-[#000000] border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" 
                    alt="Pitch Deck Preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider border border-black">
                    VIEWS
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
