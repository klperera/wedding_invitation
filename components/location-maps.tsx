"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LocationMaps() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src="/Elegant Event.png"
          alt="Wedding Venue Background"
          fill
          className="object-cover object-center opacity-20"
          quality={100}
          priority
        />
        {/* Overlay for text readability */}
        {/* <div className="absolute inset-0"></div> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10">
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
          {/* Content Column */}
          <div className="flex-1 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
            {/* Wedding Ceremony Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2 sm:space-y-3 flex items-start gap-4"
            >
              {/* Diamond Marker for Ceremony */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black rotate-45 mt-2"></div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-great-vibes text-black mb-1">
                  Wedding Ceremony
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                  St. Mary&apos;s Church, Thudella, Ja ela
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                  Time : 3.30PM
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=St.+Mary's+Church+Thudella+Ja+Ela",
                      "_blank"
                    )
                  }
                  className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-black bg-black text-white font-montserrat uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Get Directions
                </button>
              </div>
            </motion.div>

            {/* Reception Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 sm:space-y-3 flex items-start gap-4"
            >
              {/* Diamond Marker for Reception */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black rotate-45 mt-2"></div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-great-vibes text-black mb-1">
                  Reception
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                  Hotel Royal Ramesses, Adriana Ballroom, Seeduwa
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-gray-700 leading-relaxed">
                  Time : 7.00PM
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=Hotel+Royal+Ramesses+Seeduwa",
                      "_blank"
                    )
                  }
                  className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-black bg-black text-white font-montserrat uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
