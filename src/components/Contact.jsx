"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full bg-[#2B38F6] text-white py-20 px-6 sm:px-12 relative z-30 border-t-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-block lime-badge px-4 py-1.5 rounded-full text-xs tracking-wider shadow-lg">
            GET IN TOUCH
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase leading-[0.95]">
            LET'S WORK <br /> TOGETHER
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-medium">
            Memiliki proyek baru, ide inovatif, atau sekadar ingin berdiskusi seputar UI/UX Design & Frontend Development? Hubungi saya kapan saja!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Direct Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a 
              href="mailto:naufalghani@example.com"
              className="p-6 rounded-3xl bg-white text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] flex items-center justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2B38F6] text-[#CCFF00] flex items-center justify-center font-black">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-black/60 uppercase">DIRECT EMAIL</div>
                  <div className="font-display font-black text-lg uppercase group-hover:text-[#2B38F6] transition-colors">
                    NAUFAL GHANI EMAIL
                  </div>
                </div>
              </div>
              <ArrowUpRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#CCFF00] text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black text-[#CCFF00] flex items-center justify-center font-black">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-black/70 uppercase">FAST CHAT</div>
                  <div className="font-display font-black text-lg uppercase">
                    WHATSAPP DIRECT
                  </div>
                </div>
              </div>
              <ArrowUpRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Social Links Badge Row */}
            <div className="p-6 rounded-3xl bg-black/40 border border-white/20 space-y-3">
              <div className="text-xs font-black uppercase text-[#CCFF00]">CONNECT ON SOCIAL</div>
              <div className="flex flex-wrap gap-2">
                {["LinkedIn", "GitHub", "Behance", "Instagram"].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase hover:bg-[#CCFF00] hover:text-black transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white text-black p-8 rounded-3xl border-3 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
            
            <h3 className="font-display font-black text-2xl uppercase text-black border-b-2 border-black pb-3">
              SEND A DIRECT MESSAGE
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#CCFF00] border-2 border-black text-black font-black text-center text-sm uppercase space-y-2">
                <div>🎉 PESAN BERHASIL TERKIRIM!</div>
                <div className="text-xs font-bold text-black/80">Terima kasih, Naufal Ghani akan segera merespons pesan Anda.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase text-black">NAMA LENGKAP</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase text-black">ALAMAT EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black">SUBJEK PROYEK</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Contoh: Desain UI/UX App Mobile"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black">DETAIL PESAN</label>
                  <textarea 
                    rows={4}
                    required 
                    placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#2B38F6] text-white font-black text-xs uppercase tracking-wider hover:bg-[#CCFF00] hover:text-black border-2 border-black transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  SEND MESSAGE <Send size={16} />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
