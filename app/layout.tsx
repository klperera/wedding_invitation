import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Dilum & Heshani - Wedding Invitation",
  description:
    "Join us in celebrating the wedding of Dilum & Heshani on December 13th, 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${dancingScript.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
