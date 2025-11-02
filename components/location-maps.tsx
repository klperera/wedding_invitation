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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-dancing text-center mb-16 text-black"
        >
          Locations
        </motion.h2>

        {/* Location Cards */}
        <div className="space-y-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-2 border-black bg-white p-6 md:p-8 shadow-none"
            >
              {/* Location Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-black flex items-center justify-center mt-1 bg-white">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-dancing text-black mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-serif">
                    {location.type}
                  </p>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4 mb-6">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-serif mb-2">
                    Address
                  </p>
                  <p className="text-base md:text-lg text-black font-serif leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-serif mb-2">
                    Time
                  </p>
                  <p className="text-base md:text-lg text-black font-serif">
                    {location.time}
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={() => window.open(location.mapUrl, "_blank")}
                className="w-full md:w-auto px-8 py-3 border-2 border-black bg-black text-white font-serif uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
