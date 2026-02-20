"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  return (
    <footer className="py-16 px-4">
      <ScrollAnimation>
        <div className="text-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#B5BFA1"
            className="mx-auto mb-4"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
          <p className="font-[var(--font-great-vibes)] text-[24px] text-[#6B8E7B] mb-3">
            Thank you for joining our journey
          </p>
          <p className="font-[var(--font-noto-sans-kr)] text-[15px] font-bold text-[#333] mb-1">
            임영수 &amp; 정평화
          </p>
          <p className="font-[var(--font-jetbrains)] text-[12px] text-[#999] tracking-[2px]">
            2026. 03. 07
          </p>
        </div>
      </ScrollAnimation>
    </footer>
  );
}
