"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [side, setSide] = useState<"신랑측" | "신부측" | "">("");
  const [attendance, setAttendance] = useState<"참석할게요" | "마음으로 함께할게요" | "">("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !side || !attendance) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, side, attendance, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "제출 실패");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "제출 중 오류가 발생했습니다.");
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-4">
      <ScrollAnimation>
        <div className="max-w-[380px] mx-auto">
          <h2 className="font-[var(--font-noto-sans-kr)] text-[22px] font-bold text-center text-[#333] mb-2">
            참석여부
          </h2>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="w-12 h-12 bg-[#B5BFA1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-[var(--font-noto-sans-kr)] text-[18px] font-bold text-[#333] mb-2">
                  감사합니다!
                </p>
                <p className="text-[13px] text-[#999]">
                  소중한 응답이 전달되었습니다.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-6 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-[12px] text-[#999] tracking-wider mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="성함을 입력해주세요"
                    required
                    className="w-full px-4 py-3 text-[14px] text-[#333] bg-[#F5F5F0] border border-[#E0E0D8] rounded-lg outline-none focus:border-[#B5BFA1] transition-colors placeholder:text-[#ccc]"
                  />
                </div>

                {/* Side */}
                <div>
                  <label className="block text-[12px] text-[#999] tracking-wider mb-2">
                    소속
                  </label>
                  <div className="flex gap-3">
                    {(["신랑측", "신부측"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSide(option)}
                        className={`flex-1 py-3 text-[14px] rounded-lg border transition-colors ${
                          side === option
                            ? "bg-[#6B8E7B] text-white border-[#6B8E7B]"
                            : "bg-white text-[#999] border-[#E0E0D8] hover:bg-[#F5F5F0]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-[12px] text-[#999] tracking-wider mb-2">
                    참석여부
                  </label>
                  <div className="flex gap-3">
                    {(["참석할게요", "마음으로 함께할게요"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAttendance(option)}
                        className={`flex-1 py-3 text-[14px] rounded-lg border transition-colors ${
                          attendance === option
                            ? "bg-[#6B8E7B] text-white border-[#6B8E7B]"
                            : "bg-white text-[#999] border-[#E0E0D8] hover:bg-[#F5F5F0]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12px] text-[#999] tracking-wider mb-2">
                    신랑신부에게 전할 메시지 <span className="text-[#ccc]">(선택)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="축하 메시지를 남겨주세요"
                    rows={3}
                    className="w-full px-4 py-3 text-[14px] text-[#333] bg-[#F5F5F0] border border-[#E0E0D8] rounded-lg outline-none focus:border-[#B5BFA1] transition-colors placeholder:text-[#ccc] resize-none"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-[13px] text-red-500 text-center">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!name || !side || !attendance || status === "loading"}
                  className="w-full py-3.5 bg-[#B5BFA1] text-white text-[15px] font-medium rounded-lg hover:bg-[#a5af91] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "전송 중..." : "제출하기"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </ScrollAnimation>
    </section>
  );
}
