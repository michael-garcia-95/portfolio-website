
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Garcia | Full-Stack Software Developer",
  description:
    "Independent full-stack developer building modern applications and tools for the web with React, TypeScript, Next.js, PHP, and Laravel.",
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-3 focus:text-background focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Skip to content
      </a>
      
      <Navbar />
      
      <div
        id="main-content"
        tabIndex={-1}
        className="page-enter focus:outline-none"
      >
        {children}
      </div>
      
      <Footer />
      
      </body>
    </html>
  );
}
