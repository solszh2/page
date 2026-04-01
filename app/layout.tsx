import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 确保引入了组件
import CozeChat from "@/components/CozeChat"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "高教社汽车书目", // 顺便帮你把网页标题优化了一下
  description: "查书 · 看书 · 用书",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* 放在这里：脱离所有页面流，绝对不会挤压你的 Explore 图标 */}
        <CozeChat />
      </body>
    </html>
  );
}