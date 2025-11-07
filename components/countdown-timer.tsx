"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-12-13T15:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      className="h-fit py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-100 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-great-vibes text-center text-black mb-8 sm:mb-10 md:mb-12"
        >
          D Day is coming!
        </motion.h2>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-black mb-3 sm:mb-4 font-montserrat tracking-tight gap-2 sm:gap-3 flex justify-center"
            key={`${timeLeft.days}-${timeLeft.hours}-${timeLeft.minutes}-${timeLeft.seconds}`}
          >
            <span>{String(timeLeft.days).padStart(2, "0")}</span>:
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-montserrat tracking-widest"
          >
            Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seconds
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
