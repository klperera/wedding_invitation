import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
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

// Symphony Letter (local) - place the font files under /public/fonts/
// Example filenames (you must add these files to the repo):
// public/fonts/SymphonyLetter-Regular.woff2
// public/fonts/SymphonyLetter-Bold.woff2
// Then Next will load them via next/font/local.
const symphony = localFont({
  src: [
    {
      path: "../public/fonts/symphony-pro-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-symphony",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dilum & Heshani - Wedding Invitation",
  description:
    "Join us to celebrate our special day! Click for all the details.",

  // Resolve relative OG image paths to an absolute URL for social platforms.
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://wedding-invitation-68o0.onrender.com"
  ),

  // ✨ Open Graph (OG) tags are nested under 'openGraph'
  openGraph: {
    title: "Dilum & Heshani - Wedding Invitation",
    description:
      "Join us to celebrate our special day! Click for all the details.",
    url: "https://wedding-invitation-68o0.onrender.com",
    siteName: "Our Wedding Invitation",
    images: [
      {
        url: "/Hero%20image.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US", // Optional
    type: "website",
  },

  // Optional: Twitter-specific tags are nested under 'twitter'
  twitter: {
    card: "summary_large_image",
    title: "Dilum & Heshani - Wedding Invitation",
    description: "Join us to celebrate our special day!",
    images: ["/Hero%20image.jpeg"],
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
      className={`${playfair.variable} ${montserrat.variable} ${dancingScript.variable} ${greatVibes.variable} ${symphony.variable} antialiased bg-black text-white`}
    >
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
