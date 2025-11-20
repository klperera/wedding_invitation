"use client";

import { motion } from "framer-motion";
import { AnimatedImageGallery } from "./ui/animated-image-gallery";
import { Button } from "./ui/button";
import { useState } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";

// const images = [
//   "/DSC_9528.jpg",
//   "/DSC_9240.jpg",
//   "/countdown.jpeg",
//   "/countdownImage.jpg",
//   "/DSC_8816.jpg",
//   "/timeline.jpg",
//   "/IMG_7866.jpg",
//   "/IMG_7876.jpg",
// ];

export function ImageGallery() {
  const [images, setImages] = useState([
    "/DSC_9528.jpg",
    "/DSC_9624.jpg",
    "/countdown.jpeg",
    "/IMG_1.jpeg",
    "/DSC_8816.jpg",
    "/DSC_9569.jpg",
    "/DSC_9240.jpg",
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Prepare images for AnimatedImageGallery
  const galleryImages = images.map((src, index) => ({
    src,
    alt: `Wedding moment ${index + 1}`,
    ratio: index % 2 === 0 ? 9 / 16 : 16 / 9, // Alternate portrait and landscape
  }));

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-great-vibes text-center text-black mb-8 sm:mb-10 md:mb-12"
        >
          Our Journey Together
        </motion.h2>

        {/* Animated Gallery */}
        <AnimatedImageGallery images={galleryImages} columns={3} />
      </div>

      {/* Upload Card with Oval Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto relative py-8 sm:py-12"
      >
        {/* Oval shape background */}
        <div className="relative w-full aspect-5/4 overflow-hidden">
          <Image
            src="/ovalshape.png"
            alt="Decorative oval"
            fill
            className="object-cover"
          />

          {/* Card content inside oval */}
          <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 md:px-20 py-6 sm:py-10">
            <div className="text-center w-full max-w-xs sm:max-w-md mx-auto">
              <h3 className="text-black font-montserrat text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 italic font-bold leading-snug">
                Share Your Memories with us
                <br />
                <span className="mt-1">on our wedding day</span>
              </h3>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button
                  asChild
                  className="bg-[#863d24] hover:bg-gray-800 text-white px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base"
                >
                  <span className="cursor-pointer inline-flex items-center">
                    <Upload className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    Upload Photos
                  </span>
                </Button>
              </label>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
