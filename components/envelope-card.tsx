import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function EnvelopeCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardOffset, setCardOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const windowHeight = window.innerHeight;

      const triggerPoint = windowHeight * 0.7;
      const distanceFromTrigger = triggerPoint - containerTop;

      const offset = Math.max(0, Math.min(300, distanceFromTrigger * 0.5));
      setCardOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-8 left-8 z-40 pointer-events-none"
      // style={{ perspective: "1500px" }}
    >
      {/* Envelope Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-200 h-56"
      >
        {/* Envelope Body - White with elegant border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-sm shadow-2xl overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gray-300"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gray-300"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gray-300"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gray-300"></div>
        </div>

        {/* Envelope Flap Top Triangle */}
        <div
          className="absolute top-0 left-0 right-0 h-0"
          style={{
            borderLeft: "160px solid transparent",
            borderRight: "160px solid transparent",
            borderTop: "100px solid #f5f5f5",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        ></div>

        {/* Card pulling out with scroll animation */}
        <motion.div
          className="absolute inset-x-4 top-4 bg-white border border-gray-200 rounded-sm shadow-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out"
          style={{
            transform: `translateY(-${cardOffset}px) rotateX(${
              cardOffset * 0.2
            }deg)`,
            opacity: Math.min(1, 0.4 + cardOffset / 250),
            height: "calc(100% - 32px)",
          }}
        >
          {/* Top decorative flourish */}
          <div className="mb-3 flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <div className="text-gray-400 text-xs">✦</div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>

          {/* Main heading */}
          <p className="text-xs tracking-[0.3em] text-gray-700 mb-3 font-serif uppercase">
            We are glad to invite you to our
          </p>

          {/* Wedding text in elegant script */}
          <h3 className="text-3xl font-dancing text-gray-800 mb-3 tracking-wide">
            wedding on
          </h3>

          {/* Date */}
          <p className="text-2xl font-serif font-bold text-gray-900 mb-4">
            august 28<sup className="text-sm">th</sup>, 2026
          </p>

          {/* Decorative divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3"></div>

          {/* Names */}
          <p className="text-lg font-dancing text-gray-700 tracking-wide">
            Diana & David
          </p>

          {/* Bottom decorative element */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-6 h-px bg-gray-300"></div>
            <div className="text-gray-400 text-sm">♥</div>
            <div className="w-6 h-px bg-gray-300"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
