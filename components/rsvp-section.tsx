"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function RSVPSection() {
  const handleWhatsApp = (number: string) => {
    window.open(
      `https://wa.me/${number}?text=Hello! I would like to RSVP for Dilum and Heshani's wedding.`,
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
    //py-8 sm:py-12 md:py-16 lg:py-20
    <section>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {/* Header */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes text-center mb-3 sm:mb-4 text-black"
        >
          RSVP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 mb-8 sm:mb-10 md:mb-12 lg:mb-14 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-widest"
        >
          Please let us know before December 10th if you will be attending
        </motion.p> */}

        <Image
          src="/Rsvp.jpeg"
          alt="RSVP Decorative"
          className="mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 w-full h-full object-cover object-center"
          width={600}
          height={150}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
        >
          {/* Main message */}
          <p className="text-center text-gray-700 mb-8 sm:mb-10 md:mb-12 font-montserrat text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            We would be honored by your presence on our special day. Please let
            us know if you&apos;ll be joining us!
          </p>

          {/* Contact sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10">
            {/* Heshani Contact */}
            <div className="text-center">
              <h3 className="font-great-vibes text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-5 md:mb-6">
                Contact Heshani
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsApp("94764919991")}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black bg-white text-black hover:bg-[#00671d] rounded-lg hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-wider"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">
                    WhatsApp: 076-4919991
                  </span>
                  <span className="sm:hidden">WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open("tel:+94764919991")}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-wider"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Call: 076-4919991</span>
                  <span className="sm:hidden">Call</span>
                </button>
              </div>
            </div>

            {/* Dilum Contact */}
            <div className="text-center">
              <h3 className="font-great-vibes text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-5 md:mb-6">
                Contact Dilum
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsApp("94775314997")}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black bg-white text-black hover:bg-[#00671d] hover:text-white transition-colors rounded-lg duration-300 flex items-center justify-center gap-2 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-wider"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">
                    WhatsApp: 077-5314997
                  </span>
                  <span className="sm:hidden">WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open("tel:+94775314997")}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors rounded-lg duration-300 flex items-center justify-center gap-2 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-wider"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Call: 077-5314997</span>
                  <span className="sm:hidden">Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6 sm:my-8"></div>

          {/* Add to Calendar */}
          <div className="text-center">
            <button
              onClick={handleCalendar}
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 font-montserrat text-xs sm:text-sm md:text-base uppercase tracking-wider mx-auto"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              Add to Calendar
            </button>
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 font-montserrat italic">
              (Regrets Only)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
