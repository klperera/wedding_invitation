"use client";

import { motion } from "framer-motion";

const DressCode = () => {
  const colors = [
    { name: "Cream", color: "hsl(40, 30%, 96%)" },
    { name: "Beige", color: "hsl(30, 20%, 88%)" },
    { name: "Brown", color: "hsl(25, 20%, 35%)" },
    { name: "Dark", color: "hsl(20, 25%, 20%)" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-black font-great-vibes mb-6"
        >
          Dress code
        </motion.h2>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat text-sm text-gray-600 mb-6"
        >
          The wedding theme is
        </motion.p>

        {/* Animated Color Swatches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-12 h-12 md:w-14 md:h-14 shadow-md border border-gray-200"
                style={{ backgroundColor: color.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-montserrat text-sm text-gray-600 italic"
        >
          What is expected for the bride <br />
          Thank you for understanding!
        </motion.p>
      </div>
    </section>
  );
};

export default DressCode;
