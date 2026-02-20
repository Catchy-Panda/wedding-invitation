"use client";

import { motion } from "framer-motion";
import WorldMapSvg from "./WorldMapSvg";

export default function PassportCover() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ rotateY: -15, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-[380px] bg-white rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.12)] overflow-hidden"
        style={{ perspective: 1000 }}
      >
        <div className="flex min-h-[520px]">
          {/* Left page - spine */}
          <div className="w-[45px] bg-[#F5F5F0] border-r border-dashed border-[#E0E0D8] flex-shrink-0 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[1px] h-[80%] border-l border-dashed border-[#ccc]" />
            </div>
          </div>

          {/* Right page - main content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-[var(--font-playfair)] text-[11px] tracking-[4px] text-[#999] uppercase mb-1"
            >
              Wedding Invitation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-[var(--font-playfair)] text-[32px] font-black tracking-[3px] text-[#333] mb-6"
            >
              PASSPORT
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="w-[160px] h-[100px] mb-6"
            >
              <WorldMapSvg className="w-full h-full text-[#B5BFA1]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-[10px] tracking-[3px] text-[#999] uppercase mb-3"
            >
              To the Marriage of
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="font-[var(--font-noto-sans-kr)] text-[26px] font-black text-black mb-4"
            >
              임영수 &amp; 정평화
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="font-[var(--font-playfair)] text-[18px] tracking-[4px] text-[#6B8E7B] font-bold"
            >
              2026 . 03 . 07
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] text-[#999] tracking-wider">SCROLL</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
