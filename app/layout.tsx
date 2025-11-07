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
  title: "You're Invited! Our Wedding",
  description:
    "Join us to celebrate our special day! Click for all the details.",

  // ✨ Open Graph (OG) tags are nested under 'openGraph'
  openGraph: {
    title: "You're Invited! Our Wedding",
    description:
      "Join us to celebrate our special day! Click for all the details.",
    url: "https://wedding-invitation-68o0.onrender.com",
    siteName: "Our Wedding Invitation",
    images: [
      {
        url: "https://www.your-image-host.com/wedding-photo.jpg", // Must be an absolute URL
        width: 1200, // Optional
        height: 630, // Optional
      },
    ],
    locale: "en_US", // Optional
    type: "website",
  },

  // Optional: Twitter-specific tags are nested under 'twitter'
  twitter: {
    card: "summary_large_image",
    title: "You're Invited! Our Wedding",
    description: "Join us to celebrate our special day!",
    images: ["https://www.your-image-host.com/wedding-photo.jpg"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} ${greatVibes.variable} antialiased bg-black text-white`}
    >
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
