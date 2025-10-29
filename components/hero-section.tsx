"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section className="relative w-full h-screen flex items-start justify-center overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/countdown.jpeg"
            alt="Hero Background"
            fill
            className="w-full h-full object-cover object-center"
            priority
            quality={100}
            unoptimized
          />
          {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[#f4f4f4]/80"></div> */}
        </div>

        {/* Text overlay content */}
        <div className="relative z-10 text-center text-white mt-18 px-4">
          {/* Couple names in elegant script */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-dancing mb-4 text-white"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Dilum and Heshani
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-[0.3em] text-white"
            style={{
              textShadow:
                "1px 1px 3px rgba(0,0,0,0.6), 2px 2px 6px rgba(0,0,0,0.4)",
              fontWeight: 300,
            }}
          >
            Save the Day
          </motion.p>
        </div>
      </section>

      {/* <section className="w-full bg-gradient-to-b from-black/40 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-lg md:text-xl text-foreground mb-2 font-serif tracking-wide animate-fade-in-up animation-delay-300">
            ESTÁS INVITADO A
          </p>
          <h2 className="text-4xl md:text-5xl font-dancing text-accent mb-6 animate-fade-in-up animation-delay-400">
            nuestra boda
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed animate-fade-in-up animation-delay-500">
            Nos encantaría que seas parte de este momento tan especial
          </p>
        </div>
      </section> */}
    </>
  );
}
