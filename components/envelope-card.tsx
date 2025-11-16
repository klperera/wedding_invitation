"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function EnvelopeCard() {
  return (
    <div className="relative w-full overflow-visible py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative w-full h-[550px] sm:h-[650px] md:h-[750px]">
          {/* Envelope - positioned in center/bottom area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute top-[35%] left-1/2 -translate-x-1/2 w-full max-w-[450px] sm:max-w-[550px] z-10"
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/invitation.jpeg"
                alt="Wedding envelope"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Card - positioned to overlap the top of envelope */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[45%] max-w-[220px] sm:max-w-[280px] z-30"
          >
            <div className="relative w-full aspect-[5/6]">
              <Image
                src="/card.png"
                alt="Wedding invitation card"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Ribbon - positioned on the left, on the envelope flap area */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="absolute top-[50%] left-[8%] sm:left-[12%] md:left-[15%] w-[70px] sm:w-[90px] md:w-[110px] z-20"
          >
            <div className="relative w-full aspect-[2/3]">
              <Image
                src="/ribbon.png"
                alt="Ribbon decoration"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
