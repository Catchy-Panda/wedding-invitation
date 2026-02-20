"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function BoardingPass() {
  return (
    <section className="py-16 px-4">
      <ScrollAnimation direction="left">
        <div className="max-w-[380px] mx-auto">
          {/* Stub - Save the Date */}
          <div className="bg-[#6B8E7B] rounded-t-lg p-5 text-white relative">
            <div className="absolute right-4 top-4">
              <span className="text-[10px] tracking-[2px] opacity-70">SAVE THE DATE</span>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex gap-6">
                <div>
                  <p className="text-[9px] tracking-[2px] opacity-60">FLIGHT</p>
                  <p className="font-[var(--font-jetbrains)] text-[14px] font-medium">OZ731</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] opacity-60">DATE</p>
                  <p className="font-[var(--font-jetbrains)] text-[14px] font-medium">07MAR26</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] opacity-60">TIME</p>
                  <p className="font-[var(--font-jetbrains)] text-[14px] font-medium">18:30</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div>
                  <p className="text-[9px] tracking-[2px] opacity-60">FROM</p>
                  <p className="text-[12px]">SOUTH KOREA</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] opacity-60">TO</p>
                  <p className="text-[12px]">D&apos;MARIS AN PHU</p>
                </div>
              </div>

              <div>
                <p className="text-[9px] tracking-[2px] opacity-60">ADDRESS</p>
                <p className="text-[11px] leading-relaxed opacity-90">
                  Cantavil Premier, 1 Song Hanh Xa Lo Ha Noi,<br />
                  P. Thu Duc, Ho Chi Minh City 70000
                </p>
              </div>
            </div>
          </div>

          {/* Tear line */}
          <div className="relative h-0">
            <div className="absolute inset-x-0 border-t-2 border-dashed border-[#E0E0D8]" />
            {/* Left semicircle cutout */}
            <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#F5F5F0] rounded-full" />
            {/* Right semicircle cutout */}
            <div className="absolute -right-3 -top-3 w-6 h-6 bg-[#F5F5F0] rounded-full" />
          </div>

          {/* Main boarding pass */}
          <div className="bg-white rounded-b-lg shadow-md p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-[var(--font-playfair)] text-[20px] font-bold tracking-[2px] text-[#333]">
                BOARDING PASS
              </h3>
              <span className="bg-[#B5BFA1] text-white text-[9px] tracking-[2px] px-3 py-1 rounded-full">
                BUSINESS CLASS
              </span>
            </div>

            {/* Passenger */}
            <div className="mb-4">
              <p className="text-[9px] tracking-[2px] text-[#999]">PASSENGER NAME</p>
              <div className="border-b border-dotted border-[#ccc] h-[24px] mt-1" />
            </div>

            {/* Couple names */}
            <div className="flex items-center justify-center gap-4 py-4 mb-4">
              <div className="text-center">
                <p className="text-[10px] text-[#999] tracking-wider mb-1">Groom</p>
                <p className="font-[var(--font-noto-sans-kr)] text-[20px] font-black text-black">
                  임영수
                </p>
              </div>
              <span className="text-[20px] text-[#B5BFA1]">&amp;</span>
              <div className="text-center">
                <p className="text-[10px] text-[#999] tracking-wider mb-1">Bride</p>
                <p className="font-[var(--font-noto-sans-kr)] text-[20px] font-black text-black">
                  정평화
                </p>
              </div>
            </div>

            {/* Flight info row */}
            <div className="border-t border-[#E0E0D8] pt-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] tracking-[2px] text-[#999]">BOARDING TIME</p>
                <p className="font-[var(--font-jetbrains)] text-[16px] font-medium text-[#333]">18:30</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-[9px] tracking-[2px] text-[#999]">FROM</p>
                  <p className="font-[var(--font-jetbrains)] text-[22px] font-bold text-[#333]">ICN</p>
                </div>
                <div className="flex items-center">
                  <div className="w-[30px] h-[1px] bg-[#ccc]" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#B5BFA1">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  <div className="w-[30px] h-[1px] bg-[#ccc]" />
                </div>
                <div className="text-center">
                  <p className="text-[9px] tracking-[2px] text-[#999]">TO</p>
                  <p className="font-[var(--font-jetbrains)] text-[22px] font-bold text-[#333]">SGN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
