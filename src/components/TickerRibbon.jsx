"use client";

import React from "react";

export default function TickerRibbon() {
  const tickerItems = [
    "CREATIVE DESIGN",
    "SOLVER DESIGN",
    "PERFECT COMMUNICATION"
  ];

  return (
    <div className="relative w-full pt-12 pb-16 sm:pt-14 sm:pb-20 bg-[#FAFAFA] overflow-hidden select-none z-30">

      {/* Ribbon 1 (Lower Layer: Rotated +2deg, Extended 150% Width) */}
      <div className="w-[150%] -ml-[25%] bg-[#CCFF00] text-black py-4 sm:py-5 border-y-4 border-black font-black text-lg sm:text-xl tracking-wider uppercase transform rotate-[2deg] shadow-xl relative z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="text-black font-black text-lg">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2 (Upper Layer: Rotated -2.5deg, Overlapping with Negative Margin, Extended 150% Width) */}
      <div className="w-[150%] -ml-[25%] bg-[#CCFF00] text-black py-4 sm:py-5 border-y-4 border-black font-black text-lg sm:text-xl tracking-wider uppercase transform -rotate-[2.5deg] -mt-14 shadow-2xl z-20 relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12" style={{ animationDirection: "reverse" }}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="text-black font-black text-lg">|</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
