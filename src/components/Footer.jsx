"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#2B38F6] border-t-2 border-white/20 text-white py-12 px-6 sm:px-12 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#CCFF00] flex items-center justify-center text-[#000000] font-black text-sm shadow-md">
            NG
          </div>
          <span className="font-display font-black text-xl tracking-tighter">NAUFAL GHANI</span>
        </div>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-extrabold tracking-wider uppercase text-white/80">
          <a href="#about" className="hover:text-[#CCFF00] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#CCFF00] transition-colors">SERVICES</a>
          <a href="#projects" className="hover:text-[#CCFF00] transition-colors">PROJECTS</a>
          <a href="#experience" className="hover:text-[#CCFF00] transition-colors">EXPERIENCE</a>
          <a href="#contact" className="hover:text-[#CCFF00] transition-colors">CONTACT</a>
        </nav>

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-full bg-[#CCFF00] text-black flex items-center justify-center font-black hover:scale-110 transition-transform shadow-md"
          >
            <ArrowUp size={18} />
          </button>
          <span className="text-[11px] font-bold text-white/60 uppercase text-center md:text-right">
            © 2026 NAUFAL GHANI. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[10px] font-bold text-white/40 uppercase text-center md:text-right">
            Sidoarjo, Jawa Timur, Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
