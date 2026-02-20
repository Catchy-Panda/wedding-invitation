"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const ADDRESS = "Tòa nhà Cantavil Premier, 1 Song Hành Xa Lộ Hà Nội, P. Thủ Đức, Thành phố Hồ Chí Minh 70000";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=D'Maris+An+Phu+Cantavil+Premier+Ho+Chi+Minh";
const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d106.7471!3d10.8031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzExLjIiTiAxMDbCsDQ0JzQ5LjYiRQ!5e0!3m2!1sen!2s!4v1";

export default function LocationMap() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textArea = document.createElement("textarea");
      textArea.value = ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-16 px-4">
      <ScrollAnimation>
        <div className="max-w-[380px] mx-auto">
          <h2 className="font-[var(--font-noto-sans-kr)] text-[22px] font-bold text-center text-[#333] mb-2">
            오시는 길
          </h2>
          <p className="text-center text-[12px] tracking-[2px] text-[#999] uppercase mb-8">
            Location
          </p>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden shadow-md mb-5">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
            />
          </div>

          {/* Venue details */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <h3 className="font-[var(--font-noto-sans)] text-[16px] font-bold text-[#333] mb-2">
              D&apos;Maris An Phu
            </h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-3">
              {ADDRESS}
            </p>
            <p className="text-[13px] text-[#6B8E7B] font-medium">
              2026년 3월 7일 토요일 오후 6시 30분
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#6B8E7B] text-white text-[13px] font-medium py-3 rounded-lg text-center hover:bg-[#5a7d6a] transition-colors"
            >
              구글맵에서 열기
            </a>
            <button
              onClick={copyAddress}
              className="flex-1 bg-white border border-[#E0E0D8] text-[#333] text-[13px] font-medium py-3 rounded-lg hover:bg-[#F5F5F0] transition-colors"
            >
              {copied ? "복사완료!" : "주소 복사"}
            </button>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
