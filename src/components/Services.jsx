"use client";

import React from "react";

export default function Services() {
  const servicesList = [
    {
      id: "graphic-design",
      title: "GRAPHIC DESIGN",
      description: "Tingkatkan identitas visual Anda melalui desain grafis kustom, aset cetak, ilustrasi digital, dan komunikasi visual yang tajam.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: "brand-strategy",
      title: "BRAND STRATEGY",
      description: "Bangun identitas brand yang tak terlupakan, pedoman panduan visual (brand guidelines), dan positioning pasar yang berdampak.",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=800&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: "advertising-design",
      title: "ADVERTISING DESIGN",
      description: "Desain materi iklan dan kampanye pemasaran berkonversi tinggi yang memikat audiens sasaran Anda secara instan.",
      image: "https://images.unsplash.com/photo-1542744094-3a3172720177?q=80&w=800&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: "social-media",
      title: "SOCIAL MEDIA SPECIALIST",
      description: "Strategi konten media sosial yang menarik, pembuatan mikro-slide komedi/edukasi, dan tata visual feed yang konsisten.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      isFeatured: false,
    },
    {
      id: "pitch-deck",
      title: "PITCH DECK PRESENTATION",
      description: "Desain slide presentasi bisnis dan pitch deck investor yang persuasif, profesional, dan siap memikat pendanaan.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
      isFeatured: true, // Special lime card styling
    },
  ];

  return (
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
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className={`rounded-3xl p-8 border-2 shadow-xl flex flex-col justify-between space-y-8 transition-all duration-300 group ${
                service.isFeatured 
                  ? "bg-[#CCFF00] border-black md:col-span-2 lg:col-span-1 hover:scale-[1.02]" 
                  : "bg-white border-black/10 hover:border-[#2B38F6]"
              }`}
            >
              <div className="space-y-3">
                <h3 className={`font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-black ${!service.isFeatured && "group-hover:text-[#2B38F6] transition-colors"}`}>
                  {service.title}
                </h3>
                <p className={`text-xs font-semibold leading-relaxed ${service.isFeatured ? "text-black/80 font-bold" : "text-black/70"}`}>
                  {service.description}
                </p>
              </div>

              {/* Inner Preview Box */}
              <div className={`w-full h-44 rounded-2xl border-2 border-black p-4 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow ${
                service.isFeatured ? "bg-[#000000]" : "bg-[#2B38F6]"
              }`}>
                <div className={`w-full h-full rounded-xl overflow-hidden flex items-center justify-center ${
                  service.isFeatured ? "bg-white/10" : "bg-black/20"
                }`}>
                  <img 
                    src={service.image} 
                    alt={`${service.title} Preview`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    service.isFeatured 
                      ? "bg-[#CCFF00] text-black border border-black" 
                      : "bg-black text-[#CCFF00] border border-white/20"
                  }`}>
                    VIEWS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
