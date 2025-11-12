"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section className="relative w-full h-screen flex items-start justify-center overflow-hidden">
        {/* Hero background image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/Hero image.jpeg"
            alt="Hero Background"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: "55% 50%" }}
            priority
            quality={100}
            unoptimized
          />
          {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[#f4f4f4]/80"></div> */}
        </motion.div>

        {/* Text overlay content */}
        <div className="relative z-10 text-center text-white mt-4 sm:mt-6 md:mt-10 lg:mt-16 px-3 sm:px-4 md:px-6">
          {/* Couple names in elegant script */}
          <motion.h1
            initial={{
              opacity: 0,
              x: -90,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              filter: { duration: 2 },
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6rem] font-great-vibes mb-2 sm:mb-3 md:mb-4 text-white"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)",
              fontWeight: 400,
              letterSpacing: "0.01rem",
            }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/DH.png"
                alt="Dilum and Heshani"
                width={150}
                height={50}
              />
            </div>
            <span>Dilum & Heshani</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat text-white"
            style={{
              textShadow:
                "1px 1px 3px rgba(0,0,0,0.6), 2px 2px 6px rgba(0,0,0,0.4)",
              fontWeight: 400,
            }}
          >
            Save the Date
          </motion.p>
        </div>
        {/* Date badge (bottom-right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-10 md:right-12 z-20 text-white px-3 py-2 sm:px-4 sm:py-3 flex flex-col items-center"
          aria-label="Wedding date"
          style={{
            textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 1px 0 rgba(0,0,0,0.45)",
          }}
        >
          <span className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase mt-1">
            13 December 2025
          </span>
        </motion.div>
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
