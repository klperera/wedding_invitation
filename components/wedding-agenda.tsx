"use client";

import { motion } from "framer-motion";

export function WeddingAgenda() {
  const events = [
    {
      time: "15:00",
      title: "Arrivals",
      description: "Gathering of guests, introductions and entertainment!",
    },
    {
      time: "16:30",
      title: "Wedding ceremony",
      description:
        "The most important event in our lives in a beautiful setting!",
    },
    {
      time: "17:00",
      title: "Delightful Tea",
      description: "Let's capture this moment forever!",
    },
    {
      time: "17:30",
      title: "Wedding buffet",
      description: "Time for delicious food, dancing and fun!",
    },
    {
      time: "21:30",
      title: "Wedding cake",
      description: "Time for a beautiful ending to the evening!",
    },
    {
      time: "23:00",
      title: "Afterparty",
      description: "Party!",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Handwritten "Timing" Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-great-vibes text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-black"
        >
          Timing
        </motion.h2>

        <div className="flex">
          {/* Times column */}
          <div className="flex flex-col items-end pr-3 sm:pr-4 md:pr-6 lg:pr-8 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat text-gray-700 tracking-wide"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                  letterSpacing: "0.1em",
                }}
              >
                {event.time}
              </motion.div>
            ))}
          </div>
          {/* Events column */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 border-l border-gray-300 pl-3 sm:pl-4 md:pl-6 lg:pl-8 flex-1">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-great-vibes text-black mb-1">
                  {event.title}
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed">
                  {event.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
