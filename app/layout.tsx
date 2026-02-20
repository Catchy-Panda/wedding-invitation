import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Sans, Playfair_Display, Great_Vibes, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "임영수 ♥ 정평화 결혼식에 초대합니다",
  description: "2026년 3월 7일 토요일 오후 6시 30분 | D'Maris An Phu, Ho Chi Minh City",
  openGraph: {
    title: "임영수 ♥ 정평화 결혼식에 초대합니다",
    description: "2026년 3월 7일 토요일 오후 6시 30분 | D'Maris An Phu, Ho Chi Minh City",
    images: ["/og-image.svg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${notoSans.variable} ${playfairDisplay.variable} ${greatVibes.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
