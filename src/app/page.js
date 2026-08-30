"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import SpeedStreaks from "@/components/SpeedStreaks";
import TickerRibbon from "@/components/TickerRibbon";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#2B38F6] text-white font-sans selection:bg-[#CCFF00] selection:text-[#000000] overflow-x-hidden">
      <ScrollProgress />
      <SpeedStreaks />
      <Header />
      <main>
        <Hero />
        <TickerRibbon />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
