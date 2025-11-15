"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function EnvelopeCard() {
  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Invitation text overlay */}
      {/* <div className="absolute top-56 left-1/2 transform -translate-x-1/2 z-10 text-center px-4 sm:px-6 md:px-8 max-w-2xl">
        <div className="p-6 sm:p-8 md:p-10">
          <p className="font-great-vibes text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed mb-4">
            With hearts full of love, we joyfully invite you to share in the
            celebration of our forever.
          </p>
          <p className="font-montserrat text-sm sm:text-base md:text-lg text-gray-700 font-medium italic">
            Your presence will add joy and meaning to our special day.
          </p>
        </div>
      </div> */}

      {/* Envelope image */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
        whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
          opacity: { duration: 0.6 },
        }}
        className="perspective-1000"
      >
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <Image
            src="/fullinvitation.png"
            alt="Envelope"
            width={800}
            height={300}
            className="mx-auto w-full h-auto lg:h-screen object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
