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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Handwritten "Timing" Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-dancing text-center mb-16 text-foreground"
        >
          Timing
        </motion.h2>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-24 md:left-32 top-0 bottom-0 w-px bg-foreground/20"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8 md:gap-12"
              >
                {/* Time on the left */}
                <div className="w-16 md:w-24 text-right flex-shrink-0">
                  <div className="text-2xl md:text-3xl font-serif text-foreground/70">
                    {event.time}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-foreground mt-3"></div>
                </div>

                {/* Content on the right */}
                <div className="flex-1 pb-4">
                  {/* Handwritten Title */}
                  <h3 className="text-3xl md:text-4xl font-dancing text-foreground mb-2">
                    {event.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
