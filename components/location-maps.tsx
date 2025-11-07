"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export function LocationMaps() {
  const locations = [
    {
      name: "St. Mary's Church",
      address: "Thudella, Sri Lanka",
      time: "3:30 PM",
      type: "Ceremony",
      mapUrl: "https://maps.google.com/?q=St.+Mary's+Church+Thudella",
    },
    {
      name: "Royal Ramesses",
      address: "Adriana Ballroom, Seeduwa, Sri Lanka",
      time: "7:00 PM",
      type: "Reception",
      mapUrl: "https://maps.google.com/?q=Royal+Ramesses+Seeduwa",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-black"
        >
          Locations
        </motion.h2>

        {/* Location Cards */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-2 border-black bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-none"
            >
              {/* Location Header */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border-2 border-black flex items-center justify-center mt-1 bg-white">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-great-vibes text-black mb-1">
                    {location.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-500 font-montserrat">
                    {location.type}
                  </p>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6">
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-montserrat mb-2">
                    Address
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-montserrat leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-montserrat mb-2">
                    Time
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-montserrat">
                    {location.time}
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={() => window.open(location.mapUrl, "_blank")}
                className="w-full lg:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 border-2 border-black bg-black text-white font-montserrat uppercase tracking-wider text-xs sm:text-sm md:text-base hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
