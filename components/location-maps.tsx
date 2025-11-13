"use client";

import { motion } from "framer-motion";

export function LocationMaps() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* ADDRESS Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-great-vibes text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-black"
          style={{
            letterSpacing: "0.1em",
          }}
        >
          Address
        </motion.h2>

        <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
          {/* Decorative Timeline Line with Diamond Markers */}
          <div className="flex flex-col items-center pt-2">
            {/* Top Diamond */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black rotate-45 mb-8 sm:mb-10 md:mb-12"></div>

            {/* Vertical Line */}
            <div className="w-0.5 sm:w-1 bg-black flex-1"></div>

            {/* Bottom Diamond */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black rotate-45 mt-8 sm:mt-10 md:mt-12"></div>
          </div>

          {/* Content Column */}
          <div className="flex-1 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
            {/* Wedding Ceremony Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2 sm:space-y-3"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-great-vibes text-black mb-1">
                Wedding Ceremony
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                St. Mary&apos;s Church, Thudella, Ja ela
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                Time : 3.30PM
              </p>
            </motion.div>

            {/* Reception Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 sm:space-y-3"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-great-vibes text-black mb-1">
                Reception
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                Hotel Royal Ramesses, Adriana Ballroom, Seeduwa
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                Time : 7.00PM
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
