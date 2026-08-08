"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#2B38F6] z-50 px-6 sm:px-12 pt-6 pb-2 sm:pt-6 sm:pb-3">
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
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 space-y-4 px-6 border-b border-white/20 text-center font-black tracking-wider text-sm">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#CCFF00]">ABOUT</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#CCFF00]">SERVICES</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#CCFF00]">PROJECTS</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#CCFF00]">EXPERIENCE</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#CCFF00]">CONTACT</a>
        </div>
      )}
    </header>
  );
}
