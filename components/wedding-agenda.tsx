"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const events = [
  {
    time: "3:30 PM",
    title: "Wedding Ceremony",
    header: "The “We Do” Moment",
    description: `Walking down the aisle to forever begins with God.`,
  },
  {
    time: "7:00 PM",
    title: "Reception & After Party",
    description: "Welcome, take your seats and feel the love in the air.",
  },
  {
    time: "7:30 PM",
    title: "Toast and Speeches",
    description:
      "Raising our glasses to love, laughter, and a lifetime together.",
  },
  {
    time: "7:45 PM",
    title: "Cocktail Hour",
    description: "Savor the flavors, share a dance, and enjoy the moment.",
  },
  {
    time: "8:00 PM",
    title: "Portrait Time",
    description: "Let's capture moments to cherish forever!",
  },
  {
    time: "8:30 PM",
    title: "Dinner",
    description:
      "A feast of flavors and happiness shared with our dearest ones.",
  },
  {
    time: "12:00 AM",
    title: "Fireworks",
    description: "A sparkling finale to a night filled with love and magic.",
  },
];

export function WeddingAgenda() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat text-gray-700 font-bold tracking-wide transform rotate-180 origin-center"
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
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-12 border-l border-gray-300 pl-3 sm:pl-4 md:pl-6 lg:pl-8 flex-1">
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
                {event.header && (
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed italic">
                    {event.header}
                  </div>
                )}
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-montserrat leading-relaxed">
                  {event.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 text-base sm:text-lg md:text-xl font-montserrat text-gray-800 italic font-bold">
          Come join us and happily ever after!
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 sm:mt-8"
        >
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-64 sm:h-80 md:h-96 lg:h-[36rem] xl:h-[44rem]">
            <Image
              src="/timeline.jpg"
              alt="Wedding moments montage"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
