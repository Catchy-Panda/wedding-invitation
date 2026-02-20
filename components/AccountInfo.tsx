"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

interface Account {
  label: string;
  flag: string;
  bank: string;
  number: string;
  holder: string;
}

const groomAccounts: Account[] = [
  { label: "신랑", flag: "🇰🇷", bank: "우리은행", number: "1002-9316-59968", holder: "임영수" },
  { label: "신랑", flag: "🇻🇳", bank: "WOORI VN", number: "100-250-043807", holder: "임영수" },
  { label: "신랑 아버지", flag: "🇰🇷", bank: "우리은행", number: "1002-358-589813", holder: "임상돈" },
  { label: "신랑 어머니", flag: "🇰🇷", bank: "농협", number: "924-12-259314", holder: "이필선" },
];

const brideAccounts: Account[] = [
  { label: "신부", flag: "🇰🇷", bank: "국민은행", number: "392801-04-152184", holder: "정평화" },
  { label: "신부", flag: "🇻🇳", bank: "WOORI VN", number: "100-700-214182", holder: "정평화" },
  { label: "신부 아버지", flag: "🇰🇷", bank: "국민은행", number: "362702-04-007640", holder: "정권삼" },
  { label: "신부 어머니", flag: "🇰🇷", bank: "국민은행", number: "362701-04-084264", holder: "오정자" },
];

function AccountCard({ account }: { account: Account }) {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(account.number);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = account.number;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-[#E0E0D8]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[14px]">{account.flag}</span>
          <span className="text-[12px] text-[#999]">{account.label}</span>
        </div>
        <span className="text-[12px] font-medium text-[#333]">{account.holder}</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#999]">{account.bank}</p>
          <p className="font-[var(--font-jetbrains)] text-[14px] text-[#333]">{account.number}</p>
        </div>
        <button
          onClick={copyNumber}
          className="px-3 py-1.5 text-[11px] rounded-md border border-[#E0E0D8] text-[#666] hover:bg-[#F5F5F0] transition-all min-w-[56px]"
        >
          {copied ? (
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-[#6B8E7B] flex items-center gap-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
              완료
            </motion.span>
          ) : (
            "복사"
          )}
        </button>
      </div>
    </div>
  );
}

export default function AccountInfo() {
  const [tab, setTab] = useState<"groom" | "bride">("groom");

  return (
    <section className="py-16 px-4">
      <ScrollAnimation>
        <div className="max-w-[380px] mx-auto">
          <h2 className="font-[var(--font-noto-sans-kr)] text-[22px] font-bold text-center text-[#333] mb-8">
            마음 전하실 곳
          </h2>

          {/* Tabs */}
          <div className="flex rounded-lg overflow-hidden border border-[#E0E0D8] mb-5">
            <button
              onClick={() => setTab("groom")}
              className={`flex-1 py-3 text-[14px] font-medium transition-colors ${
                tab === "groom"
                  ? "bg-[#6B8E7B] text-white"
                  : "bg-white text-[#999] hover:bg-[#F5F5F0]"
              }`}
            >
              신랑 측
            </button>
            <button
              onClick={() => setTab("bride")}
              className={`flex-1 py-3 text-[14px] font-medium transition-colors ${
                tab === "bride"
                  ? "bg-[#6B8E7B] text-white"
                  : "bg-white text-[#999] hover:bg-[#F5F5F0]"
              }`}
            >
              신부 측
            </button>
          </div>

          {/* Account list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: tab === "groom" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: tab === "groom" ? 20 : -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {(tab === "groom" ? groomAccounts : brideAccounts).map((account, i) => (
                <AccountCard key={i} account={account} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollAnimation>
    </section>
  );
}
