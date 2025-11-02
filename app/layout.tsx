import type React from "react";
import type { Metadata } from "next";
import {
  Playfair_Display,
  Montserrat,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-great-vibes",
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
      className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} ${greatVibes.variable} antialiased bg-white text-black`}
    >
      <body className="font-montserrat bg-white text-black">{children}</body>
    </html>
  );
}
