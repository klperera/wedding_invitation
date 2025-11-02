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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-xl">
        {/* Handwritten "Timing" Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-great-vibes text-center mb-12 text-black"
        >
          Timing
        </motion.h2>

        <div className="flex">
          {/* Times column */}
          <div className="flex flex-col items-end pr-6 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-lg md:text-xl font-montserrat text-gray-700 tracking-wide"
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
          <div className="flex flex-col gap-8 border-l border-gray-300 pl-6 flex-1">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-great-vibes text-black mb-1">
                  {event.title}
                </div>
                <div className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
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
