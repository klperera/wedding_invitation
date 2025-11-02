"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function RSVPSection() {
  const handleWhatsApp = (number: string) => {
    window.open(
      `https://wa.me/${number}?text=Hello! I would like to RSVP for Dilum & Heshani's wedding.`,
      "_blank"
    );
  };

  const handleCalendar = () => {
    const event = {
      title: "Dilum & Heshani Wedding",
      start: "20251213T153000Z",
      end: "20251213T220000Z",
      description:
        "Wedding ceremony at St. Mary's Church, Thudella followed by reception at Royal Ramesses, Seeduwa",
      location: "St. Mary's Church, Thudella",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.start}/${event.end}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-great-vibes text-center mb-4 text-black"
        >
          RSVP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 mb-12 font-montserrat text-sm uppercase tracking-widest"
        >
          Please let us know before December 10th if you will be attending
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-black bg-white p-8 md:p-12"
        >
          {/* Main message */}
          <p className="text-center text-gray-700 mb-12 font-montserrat text-base md:text-lg leading-relaxed">
            We would be honored by your presence on our special day. Please let
            us know if you&apos;ll be joining us!
          </p>

          {/* Contact sections */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Heshani Contact */}
            <div className="text-center">
              <h3 className="font-great-vibes text-3xl md:text-4xl text-black mb-6">
                Contact Heshani
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsApp("94764919991")}
                  className="w-full px-6 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: 076-4919991
                </button>
                <button
                  onClick={() => window.open("tel:+94764919991")}
                  className="w-full px-6 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  Call: 076-4919991
                </button>
              </div>
            </div>

            {/* Dilum Contact */}
            <div className="text-center">
              <h3 className="font-great-vibes text-3xl md:text-4xl text-black mb-6">
                Contact Dilum
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsApp("94775314997")}
                  className="w-full px-6 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: 077-5314997
                </button>
                <button
                  onClick={() => window.open("tel:+94775314997")}
                  className="w-full px-6 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  Call: 077-5314997
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-8"></div>

          {/* Add to Calendar */}
          <div className="text-center">
            <button
              onClick={handleCalendar}
              className="px-8 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-sm uppercase tracking-wider mx-auto"
            >
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </button>
            <p className="text-center text-sm text-gray-500 mt-6 font-montserrat italic">
              (Regrets Only)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
