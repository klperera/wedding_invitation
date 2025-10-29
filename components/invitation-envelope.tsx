"use client";

import { motion } from "framer-motion";

export function InvitationEnvelope() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
      }}
    >
      <div
        className="relative w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center justify-center"
        style={{ perspective: "3000px" }}
      >
        {/* Envelope - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: 25 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -8 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full md:w-[420px] aspect-[4/3]"
          style={{
            perspective: "3000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(2deg)",
            }}
          >
            {/* Envelope Back/Body - Golden/Mustard color with 3D depth */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #d4b566 0%, 
                    #c8a855 25%, 
                    #b89a4a 50%, 
                    #a88c40 75%,
                    #967d35 100%
                  )
                `,
                boxShadow: `
                  0 50px 100px rgba(0, 0, 0, 0.5),
                  0 30px 60px rgba(0, 0, 0, 0.4),
                  0 20px 40px rgba(0, 0, 0, 0.35),
                  0 10px 20px rgba(0, 0, 0, 0.3),
                  inset 0 2px 4px rgba(255, 255, 255, 0.2),
                  inset 0 -4px 12px rgba(0, 0, 0, 0.15),
                  inset -4px 0 12px rgba(0, 0, 0, 0.1),
                  inset 4px 0 12px rgba(255, 255, 255, 0.08)
                `,
                transform: "translateZ(20px)",
                filter: "brightness(1.05) contrast(1.1)",
              }}
            >
              {/* Premium paper texture */}
              <div
                className="absolute inset-0 opacity-[0.12] rounded-md mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' seed='1' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
                  backgroundSize: "200px 200px",
                }}
              ></div>

              {/* Left edge shadow - 3D depth */}
              <div
                className="absolute inset-y-0 left-0 w-8"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                }}
              ></div>

              {/* Right edge highlight */}
              <div
                className="absolute inset-y-0 right-0 w-6"
                style={{
                  background:
                    "linear-gradient(to left, rgba(255,255,255,0.1) 0%, transparent 100%)",
                }}
              ></div>

              {/* Bottom shadow - 3D depth */}
              <div
                className="absolute inset-x-0 bottom-0 h-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                }}
              ></div>

              {/* Top highlight */}
              <div
                className="absolute inset-x-0 top-0 h-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)",
                }}
              ></div>

              {/* Inner glow for depth */}
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  boxShadow: "inset 0 0 80px rgba(255, 215, 0, 0.1)",
                }}
              ></div>
            </div>

            {/* Envelope Flap - Triangle - 3D Golden flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              whileInView={{ rotateX: -160 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1.5,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(21px)",
              }}
            >
              <div
                className="relative w-full h-48"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: `
                    linear-gradient(145deg, 
                      #e8c875 0%, 
                      #d4b566 20%,
                      #c8a855 40%, 
                      #b89a4a 60%,
                      #a88c40 80%,
                      #967d35 100%
                    )
                  `,
                  boxShadow: `
                    0 30px 80px rgba(0, 0, 0, 0.6),
                    0 20px 50px rgba(0, 0, 0, 0.5),
                    0 10px 30px rgba(0, 0, 0, 0.4),
                    inset 0 -2px 8px rgba(0, 0, 0, 0.2),
                    inset 0 2px 4px rgba(255, 255, 255, 0.3),
                    inset -3px 0 8px rgba(0, 0, 0, 0.15),
                    inset 3px 0 8px rgba(255, 255, 255, 0.1)
                  `,
                  filter: "brightness(1.15) contrast(1.08)",
                }}
              >
                {/* Flap texture */}
                <div
                  className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
                    backgroundSize: "200px 200px",
                  }}
                ></div>

                {/* Center crease with 3D depth */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15) 100%)",
                    filter: "blur(0.5px)",
                  }}
                ></div>

                {/* Left edge shadow on flap */}
                <div
                  className="absolute top-0 left-0 h-full"
                  style={{
                    width: "30%",
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                ></div>

                {/* Right edge highlight on flap */}
                <div
                  className="absolute top-0 right-0 h-full"
                  style={{
                    width: "30%",
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0.12) 0%, transparent 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Invitation Card - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotateY: -25 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 8 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative w-full md:w-[420px] aspect-[2/3] p-10 flex flex-col items-center justify-start overflow-hidden"
          style={{
            background: `
              linear-gradient(160deg, 
                #faf7f0 0%,
                #f5f1e8 20%,
                #efe9dc 40%,
                #e8e3d5 60%,
                #e0d8c8 80%,
                #d8cfbc 100%
              )
            `,
            borderRadius: "90px 90px 12px 12px",
            boxShadow: `
              0 60px 120px rgba(0, 0, 0, 0.5),
              0 40px 80px rgba(0, 0, 0, 0.4),
              0 25px 50px rgba(0, 0, 0, 0.35),
              0 15px 30px rgba(0, 0, 0, 0.3),
              0 8px 16px rgba(0, 0, 0, 0.25),
              inset 0 2px 6px rgba(255, 255, 255, 0.6),
              inset 0 -4px 12px rgba(0, 0, 0, 0.08),
              inset -4px 0 12px rgba(0, 0, 0, 0.06),
              inset 4px 0 12px rgba(255, 255, 255, 0.15)
            `,
            transform: "rotateX(-2deg)",
            transformStyle: "preserve-3d",
            filter: "brightness(1.05) contrast(1.05)",
          }}
        >
          {/* Premium paper texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
            style={{
              borderRadius: "90px 90px 12px 12px",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
              backgroundSize: "250px 250px",
            }}
          ></div>

          {/* Subtle vignette effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "90px 90px 12px 12px",
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.04) 100%)",
            }}
          ></div>

          {/* Left edge shadow for 3D depth */}
          <div
            className="absolute inset-y-0 left-0 w-8 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 50%, transparent 100%)",
              borderRadius: "90px 0 0 12px",
            }}
          ></div>

          {/* Right edge highlight */}
          <div
            className="absolute inset-y-0 right-0 w-6 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.2) 0%, transparent 100%)",
              borderRadius: "0 90px 12px 0",
            }}
          ></div>

          {/* Top edge soft glow */}
          <div
            className="absolute inset-x-0 top-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 100%)",
              borderRadius: "90px 90px 0 0",
            }}
          ></div>

          {/* Bottom shadow */}
          <div
            className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.08) 0%, transparent 100%)",
              borderRadius: "0 0 12px 12px",
            }}
          ></div>

          {/* Header - The Wedding Of */}
          <div className="mb-2 text-center relative z-10">
            <p
              className="text-[11px] tracking-[0.4em] uppercase font-serif"
              style={{
                color: "#6b6b6b",
                textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                fontWeight: 500,
                letterSpacing: "0.35em",
              }}
            >
              THE WEDDING OF
            </p>
          </div>

          {/* Monogram D&H */}
          <div className="mb-2 relative z-10">
            <div
              className="text-5xl font-serif tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#b8935a",
                fontWeight: 600,
                textShadow: `
                  0 2px 4px rgba(0,0,0,0.15),
                  0 1px 2px rgba(184,147,90,0.3),
                  0 4px 8px rgba(0,0,0,0.1)
                `,
                filter: "drop-shadow(0 0 8px rgba(184,147,90,0.2))",
              }}
            >
              D&H
            </div>
          </div>

          {/* Bible Quote */}
          <div className="mb-3 text-center max-w-xs relative z-10">
            <p
              className="text-[11px] font-dancing italic leading-relaxed"
              style={{
                color: "#4a4a4a",
                textShadow: "0 1px 1px rgba(255,255,255,0.5)",
              }}
            >
              &quot;Therefore what God has joined together,
            </p>
            <p
              className="text-[11px] font-dancing italic leading-relaxed"
              style={{
                color: "#4a4a4a",
                textShadow: "0 1px 1px rgba(255,255,255,0.5)",
              }}
            >
              let man not separate&quot;
            </p>
            <p
              className="text-[10px] font-serif mt-1"
              style={{
                color: "#6a6a6a",
                textShadow: "0 1px 1px rgba(255,255,255,0.5)",
                fontWeight: 500,
              }}
            >
              Matthew 19:6
            </p>
          </div>

          {/* Couple Names - Large */}
          <div className="mb-3 relative z-10">
            <h1
              className="text-5xl font-serif tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#a67c52",
                fontWeight: 600,
                textShadow: `
                  0 3px 6px rgba(0,0,0,0.2),
                  0 1px 3px rgba(166,124,82,0.4),
                  0 6px 12px rgba(0,0,0,0.15)
                `,
                filter: "drop-shadow(0 0 10px rgba(166,124,82,0.25))",
              }}
            >
              Dilum & Heshani
            </h1>
          </div>

          {/* Parents Names */}
          <div
            className="mb-2 text-center text-[10px] font-serif leading-relaxed space-y-0.5 relative z-10"
            style={{
              color: "#4a4a4a",
              textShadow: "0 1px 1px rgba(255,255,255,0.5)",
              fontWeight: 500,
            }}
          >
            <p className="uppercase tracking-wide">MR. & MRS. LOWE</p>
            <p className="uppercase tracking-wide">TOGETHER WITH</p>
            <p className="uppercase tracking-wide">MR. & MRS. PERERA</p>
            <p className="uppercase tracking-wide mt-1">
              REQUEST THE PLEASURE OF THE PRESENCE & PRAYERS OF
            </p>
          </div>

          {/* Guest Name Line */}
          <div
            className="w-full my-1.5 relative z-10"
            style={{
              height: "1px",
              background:
                "repeating-linear-gradient(to right, #8a8a8a 0px, #8a8a8a 4px, transparent 4px, transparent 8px)",
              opacity: 0.6,
            }}
          ></div>
          <p
            className="text-[10px] font-serif uppercase tracking-wide mb-2 relative z-10"
            style={{
              color: "#4a4a4a",
              textShadow: "0 1px 1px rgba(255,255,255,0.5)",
              fontWeight: 500,
            }}
          >
            ON THE MARRIAGE CEREMONY OF THEIR CHILDREN
          </p>

          {/* Date and Details Section */}
          <div className="flex gap-3 items-start justify-center w-full mt-2 relative z-10">
            {/* Left - Date */}
            <div
              className="flex flex-col items-center pr-3"
              style={{
                borderRight: "1px solid rgba(74,74,74,0.4)",
              }}
            >
              <p
                className="text-xl font-dancing mb-0.5"
                style={{
                  color: "#4a4a4a",
                  textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                }}
              >
                December
              </p>
              <p
                className="text-5xl font-serif font-bold leading-none"
                style={{
                  color: "#2a2a2a",
                  textShadow: `
                    0 2px 4px rgba(0,0,0,0.2),
                    0 1px 2px rgba(255,255,255,0.5)
                  `,
                  fontWeight: 700,
                }}
              >
                13
              </p>
              <p
                className="text-2xl font-serif"
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
              className="text-left text-[10px] font-serif space-y-0.5 flex-1"
              style={{
                color: "#4a4a4a",
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
                className="text-base font-dancing mt-1.5"
                style={{
                  color: "#5a5a5a",
                  textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                }}
              >
                Reception to Follow
              </p>
              <p className="uppercase font-bold mt-0.5">ROYAL RAMESSES</p>
              <p className="uppercase">(ADRIANA BALLROOM)</p>
              <p className="uppercase">SEEDUWA</p>
              <p className="uppercase font-bold">FROM 7.00 PM ONWARDS</p>
              <p className="uppercase mt-1.5 text-[9px]">RSVP (REGRETS ONLY)</p>
              <p className="text-[9px]">
                HESHANI : 076-4919991 | DILUM : 077-5314997
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
