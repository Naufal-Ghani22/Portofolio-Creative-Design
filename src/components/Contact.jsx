"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { ScrollFade, ScrollSlide } from "@/components/ScrollMotion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!firebaseConfigured || !db) {
      setFormState({ type: "error", message: "Konfigurasi Firebase belum lengkap. Hubungi lewat email/WhatsApp ya." });
      return;
    }

    setIsSubmitting(true);
    setFormState(null);

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        createdAt: serverTimestamp(),
      });
      form.reset();
      setFormState({ type: "success", message: "Pesan berhasil terkirim. Terima kasih, Naufal Ghani akan segera merespons pesan Anda." });
    } catch (err) {
      console.error("[firestore] Gagal menyimpan pesan:", err);
      setFormState({ type: "error", message: "Pesan gagal terkirim. Coba lagi atau hubungi lewat email/WhatsApp." });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-full bg-[#2B38F6] text-white py-20 px-6 sm:px-12 relative z-30 border-t-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <ScrollFade className="space-y-4 max-w-2xl">
          <div className="inline-block lime-badge px-4 py-1.5 rounded-full text-xs tracking-wider shadow-lg">
            GET IN TOUCH
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase leading-[0.95]">
            LET&apos;S WORK <br /> TOGETHER
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-medium">
            Memiliki proyek baru, ide inovatif, atau sekadar ingin berdiskusi seputar UI/UX Design & Frontend Development? Hubungi saya kapan saja!
          </p>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Direct Cards */}
          <ScrollSlide x={[-40, 30]} y={[50, -40]} className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a 
              href="mailto:naufalgb22@gmail.com"
              className="p-6 rounded-3xl bg-white text-black border-3 border-black shadow-[6px_6px_0px_0px_rgba(204,255,0,1)] flex items-center justify-between group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2B38F6] text-[#CCFF00] flex items-center justify-center font-black">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-black/60 uppercase">DIRECT EMAIL</div>
                  <div className="font-display font-black text-lg uppercase group-hover:text-[#2B38F6] transition-colors">
                    NAUFALGB22@GMAIL.COM
                  </div>
                </div>
              </div>
              <ArrowUpRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/62822455762651"
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
                <a 
                  href="https://www.linkedin.com/in/naufalgb22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase hover:bg-[#CCFF00] hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Naufal-Ghani22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase hover:bg-[#CCFF00] hover:text-black transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.behance.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase hover:bg-[#CCFF00] hover:text-black transition-colors"
                >
                  Behance
                </a>
                <a 
                  href="https://instagram.com/naufaaalghn_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-black uppercase hover:bg-[#CCFF00] hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </ScrollSlide>

          {/* Contact Form */}
          <ScrollSlide y={[80, -20]} x={[40, -30]} className="lg:col-span-7 bg-white text-black p-8 rounded-3xl border-3 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
            
            <h3 className="font-display font-black text-2xl uppercase text-black border-b-2 border-black pb-3">
              SEND A DIRECT MESSAGE
            </h3>

            {formState && formState.type === "success" && (
              <div className="p-6 rounded-2xl bg-[#CCFF00] border-2 border-black text-black font-black text-center text-sm uppercase space-y-2">
                <div>🎉 PESAN BERHASIL TERKIRIM!</div>
                <div className="text-xs font-bold text-black/80">{formState.message}</div>
              </div>
            )}

            {formState && formState.type === "error" && (
              <div className="p-6 rounded-2xl bg-red-100 border-2 border-red-600 text-red-800 font-black text-center text-sm uppercase space-y-2">
                <div>⚠️ PESAN GAGAL TERKIRIM</div>
                <div className="text-xs font-bold text-red-700/80">{formState.message}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black">NAMA LENGKAP</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black">ALAMAT EMAIL</label>
                  <input 
                    type="email" 
                    name="email"
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
                  name="subject"
                  required 
                  placeholder="Contoh: Desain UI/UX App Mobile"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-black">DETAIL PESAN</label>
                <textarea 
                  name="message"
                  rows={4}
                  required 
                  placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border-2 border-black text-xs font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B38F6]"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#2B38F6] text-white font-black text-xs uppercase tracking-wider hover:bg-[#CCFF00] hover:text-black border-2 border-black transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "MENGIRIM..." : "SEND MESSAGE"} <Send size={16} />
              </button>
            </form>

          </ScrollSlide>

        </div>

      </div>
    </section>
  );
}