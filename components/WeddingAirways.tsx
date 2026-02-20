"use client";

import ScrollAnimation from "./ScrollAnimation";
import WorldMapSvg from "./WorldMapSvg";

export default function WeddingAirways() {
  return (
    <section className="py-16 px-4">
      <ScrollAnimation>
        <div className="max-w-[380px] mx-auto overflow-hidden rounded-lg shadow-md">
          {/* Top banner */}
          <div className="bg-[#B5BFA1] px-5 py-4 flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <h2 className="font-[var(--font-playfair)] text-[18px] font-bold text-white tracking-[3px]">
              WEDDING AIRWAYS
            </h2>
          </div>

          {/* Body */}
          <div className="bg-white relative px-6 py-10 text-center">
            {/* Watermark map */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <WorldMapSvg className="w-[300px] h-[200px] text-[#333]" />
            </div>

            <p className="text-[12px] tracking-[2px] text-[#999] uppercase mb-4 relative z-10">
              Please join us for the wedding reception of
            </p>
            <h3 className="font-[var(--font-noto-sans-kr)] text-[28px] font-black text-black mb-4 relative z-10">
              임영수 &amp; 정평화
            </h3>
            <div className="flex items-center justify-center gap-3 relative z-10">
              <div className="w-[40px] h-[1px] bg-[#E0E0D8]" />
              <p className="font-[var(--font-jetbrains)] text-[10px] tracking-[1px] text-[#6B8E7B]">
                FLIGHT DATE | MARCH 7th, 2026
              </p>
              <div className="w-[40px] h-[1px] bg-[#E0E0D8]" />
            </div>
          </div>

          {/* Bottom banner */}
          <div className="bg-[#B5BFA1] px-5 py-4" />
        </div>
      </ScrollAnimation>
    </section>
  );
}
