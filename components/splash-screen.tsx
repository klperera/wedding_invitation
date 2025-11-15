"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 3000); // 3 seconds total display time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="flex flex-col items-center gap-6"
          >
            {/* Elegant DH Monogram Logo */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative"
            >
              <div className="text-8xl sm:text-9xl md:text-[10rem] font-great-vibes text-black">
                DH
              </div>

              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.2,
                }}
                className="h-0.5 bg-black mt-2 origin-center"
              />
            </motion.div>

            {/* Optional tagline or date */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.5,
              }}
              className="text-xl sm:text-2xl md:text-3xl font-montserrat tracking-[0.3em] text-gray-700 uppercase"
            >
              13.12.2025
            </motion.p>

            {/* Decorative elements - small diamonds */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.8,
              }}
              className="flex gap-3 mt-2"
            >
              <div className="w-2 h-2 bg-black rotate-45" />
              <div className="w-2 h-2 bg-black rotate-45" />
              <div className="w-2 h-2 bg-black rotate-45" />
            </motion.div>
          </motion.div>

          {/* Subtle loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 2,
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
