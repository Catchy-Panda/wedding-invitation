"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

// Wedding: 2026-03-07 18:30 UTC+7 = 2026-03-07 11:30 UTC
const WEDDING_DATE = new Date("2026-03-07T11:30:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft & { status: "before" | "today" | "after" } {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();

  // Check if today is the wedding day (in UTC+7)
  const utc7Now = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const weddingDay = new Date("2026-03-07T00:00:00Z");
  const weddingDayEnd = new Date("2026-03-08T00:00:00Z");
  const utc7NowUTC = new Date(
    Date.UTC(utc7Now.getUTCFullYear(), utc7Now.getUTCMonth(), utc7Now.getUTCDate())
  );

  if (utc7NowUTC >= weddingDay && utc7NowUTC < weddingDayEnd) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, status: "today" };
  }

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, status: "after" };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    status: "before",
  };
}

function FlipNumber({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md w-[68px] h-[68px] flex items-center justify-center border border-[#E0E0D8] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-[var(--font-jetbrains)] text-[28px] font-medium text-[#333]"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[11px] text-[#999] mt-2 tracking-wider">{label}</span>
    </div>
  );
}

export default function DdayCounter() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft & { status: string }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "before",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 px-4">
        <div className="text-center">
          <p className="text-[14px] text-[#999]">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <ScrollAnimation>
        <div className="text-center">
          <p className="font-[var(--font-noto-sans-kr)] text-[15px] text-[#666] mb-8">
            임영수 ♥ 정평화의 피로연까지
          </p>

          {timeLeft.status === "today" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-[24px] font-bold text-[#6B8E7B]"
            >
              오늘이 디데이입니다!🎉
            </motion.div>
          ) : timeLeft.status === "after" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-[24px] font-bold text-[#6B8E7B]"
            >
              We&apos;re Married! 🎉
            </motion.div>
          ) : (
            <div className="flex justify-center gap-3">
              <FlipNumber value={timeLeft.days} label="DAYS" />
              <FlipNumber value={timeLeft.hours} label="HRS" />
              <FlipNumber value={timeLeft.minutes} label="MIN" />
              <FlipNumber value={timeLeft.seconds} label="SEC" />
            </div>
          )}

          <p className="mt-8 text-[13px] text-[#999] tracking-wider">
            2026. 03. 07. SAT PM 6:30
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
