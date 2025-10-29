"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function InvitationDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 flex items-center justify-center"
      // style={{
      //   background:
      //     "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
      // }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-b from-[#faf7f0] via-[#f5f1e8] to-[#ede8dc] p-12 flex flex-col items-center justify-start relative overflow-hidden"
            style={{
              borderRadius: "90px 90px 12px 12px",
              boxShadow: `
                0 60px 120px rgba(0, 0, 0, 0.5),
                0 40px 80px rgba(0, 0, 0, 0.4),
                0 25px 50px rgba(0, 0, 0, 0.35),
                inset 0 2px 6px rgba(255, 255, 255, 0.6)
              `,
            }}
          >
            {/* Subtle paper texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
              style={{
                borderRadius: "90px 90px 12px 12px",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
                backgroundSize: "250px 250px",
              }}
            ></div>

            {/* Header - The Wedding Of */}
            <div className="mb-3 text-center relative z-10">
              <p
                className="text-[11px] tracking-[0.4em] uppercase font-serif"
                style={{
                  color: "#4a4a4a",
                  textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                  fontWeight: 500,
                }}
              >
                THE WEDDING OF
              </p>
            </div>

            {/* Monogram D&H */}
            <div className="mb-3 relative z-10">
              <div
                className="text-5xl font-serif tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#b8935a",
                  fontWeight: 600,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                D&H
              </div>
            </div>

            {/* Bible Quote */}
            <div className="mb-4 text-center max-w-md relative z-10">
              <p
                className="text-[12px] font-dancing italic leading-relaxed"
                style={{
                  color: "#3a3a3a",
                  textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                }}
              >
                &quot;Therefore what God has joined together,
              </p>
              <p
                className="text-[12px] font-dancing italic leading-relaxed"
                style={{
                  color: "#3a3a3a",
                  textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                }}
              >
                let man not separate&quot;
              </p>
              <p
                className="text-[11px] font-serif mt-1"
                style={{
                  color: "#5a5a5a",
                  textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}
              >
                Matthew 19:6
              </p>
            </div>

            {/* Couple Names - Large */}
            <div className="mb-4 relative z-10">
              <h1
                className="text-5xl font-serif tracking-wide text-center"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#a67c52",
                  fontWeight: 600,
                  textShadow: "0 3px 6px rgba(0,0,0,0.15)",
                }}
              >
                Dilum & Heshani
              </h1>
            </div>

            {/* Parents Names */}
            <div
              className="mb-3 text-center text-[11px] font-serif leading-relaxed space-y-1 relative z-10"
              style={{
                color: "#3a3a3a",
                textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                fontWeight: 500,
              }}
            >
              <p className="uppercase tracking-wide">MR. & MRS. LOWE</p>
              <p className="uppercase tracking-wide">TOGETHER WITH</p>
              <p className="uppercase tracking-wide">MR. & MRS. PERERA</p>
              <p className="uppercase tracking-wide mt-2">
                REQUEST THE PLEASURE OF THE PRESENCE & PRAYERS OF
              </p>
            </div>

            {/* Guest Name Line */}
            <div
              className="w-full my-2 relative z-10"
              style={{
                height: "1px",
                background:
                  "repeating-linear-gradient(to right, #8a8a8a 0px, #8a8a8a 4px, transparent 4px, transparent 8px)",
                opacity: 0.6,
              }}
            ></div>

            <p
              className="text-[11px] font-serif uppercase tracking-wide mb-3 relative z-10 text-center"
              style={{
                color: "#3a3a3a",
                textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                fontWeight: 500,
              }}
            >
              ON THE MARRIAGE CEREMONY OF THEIR CHILDREN
            </p>

            {/* Date and Details Section */}
            <div className="flex gap-4 items-start justify-center w-full mt-3 relative z-10">
              {/* Left - Date */}
              <div
                className="flex flex-col items-center pr-4"
                style={{
                  borderRight: "1px solid rgba(58,58,58,0.5)",
                }}
              >
                <p
                  className="text-2xl font-dancing mb-1"
                  style={{
                    color: "#3a3a3a",
                    textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                  }}
                >
                  December
                </p>
                <p
                  className="text-7xl font-serif font-bold leading-none"
                  style={{
                    color: "#2a2a2a",
                    textShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    fontWeight: 700,
                  }}
                >
                  13
                </p>
                <p
                  className="text-3xl font-serif"
                  style={{
                    color: "#2a2a2a",
                    textShadow: "0 1px 2px rgba(255,255,255,0.5)",
                    fontWeight: 600,
                  }}
                >
                  2025
                </p>
              </div>

              {/* Right - Event Details */}
              <div
                className="text-left text-[11px] font-serif space-y-1 flex-1"
                style={{
                  color: "#3a3a3a",
                  textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}
              >
                <p className="uppercase font-bold">
                  ON SATURDAY 13<sup>TH</sup> DECEMBER 2025
                </p>
                <p className="uppercase">AT ST. MARY&apos;S CHURCH, THUDELLA</p>
                <p className="uppercase">AT 3.30 PM</p>
                <p
                  className="text-lg font-dancing mt-2"
                  style={{
                    color: "#4a4a4a",
                    textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                  }}
                >
                  Reception to Follow
                </p>
                <p className="uppercase font-bold mt-1">ROYAL RAMESSES</p>
                <p className="uppercase">(ADRIANA BALLROOM)</p>
                <p className="uppercase">SEEDUWA</p>
                <p className="uppercase font-bold">FROM 7.00 PM ONWARDS</p>
                <p className="uppercase mt-2 text-[10px]">
                  RSVP (REGRETS ONLY)
                </p>
                <p className="text-[10px]">
                  HESHANI : 076-4919991 | DILUM : 077-5314997
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
