"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function WeddingReception() {
  return (
    <section className="py-16 px-4">
      <ScrollAnimation>
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-[380px] mx-auto">
          <div className="flex min-h-[480px]">
            {/* Left - cursive title */}
            <div className="w-[100px] bg-[#F5F5F0] border-r border-dashed border-[#E0E0D8] flex items-center justify-center flex-shrink-0">
              <p
                className="font-[var(--font-great-vibes)] text-[24px] text-[#6B8E7B] -rotate-90 whitespace-nowrap"
              >
                Wedding Reception
              </p>
            </div>

            {/* Right - details */}
            <div className="flex-1 flex flex-col justify-center px-5 py-8">
              {/* Groom side */}
              <div className="mb-6">
                <p className="text-[12px] text-[#999] mb-1">
                  임상돈 · 이필선
                  <span className="text-[11px] text-[#bbb]">의 장남</span>
                </p>
                <p className="font-[var(--font-noto-sans-kr)] text-[22px] font-black text-black">
                  임영수
                  <span className="text-[12px] font-normal text-[#999] ml-2">신랑</span>
                </p>
              </div>

              {/* Bride side */}
              <div className="mb-8">
                <p className="text-[12px] text-[#999] mb-1">
                  정권삼 · 오정자
                  <span className="text-[11px] text-[#bbb]">의 장녀</span>
                </p>
                <p className="font-[var(--font-noto-sans-kr)] text-[22px] font-black text-black">
                  정평화
                  <span className="text-[12px] font-normal text-[#999] ml-2">신부</span>
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E0E0D8] mb-6" />

              {/* Message */}
              <p className="text-[14px] text-[#666] leading-relaxed mb-8 font-[var(--font-noto-sans-kr)]">
                서로 다른 두 사람이 만나<br />
                사랑으로 하나가 되려 합니다.<br />
                두 사람의 앞날을 축복해 주세요.
              </p>

              {/* Venue info */}
              <div className="bg-[#F5F5F0] rounded-md p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] tracking-[2px] text-[#999] uppercase">Venue</span>
                  <span className="text-[10px] text-[#ccc]">|</span>
                  <span className="text-[10px] tracking-[2px] text-[#999] uppercase">Time</span>
                </div>
                <p className="font-[var(--font-noto-sans)] text-[14px] font-medium text-[#333]">
                  D&apos;Maris An Phu
                </p>
                <p className="font-[var(--font-jetbrains)] text-[13px] text-[#6B8E7B] mt-1">
                  26.03.07 18:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
