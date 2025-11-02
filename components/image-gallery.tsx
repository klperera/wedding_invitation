"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ImageGallery() {
  const [images, setImages] = useState([
    "/couple-engagement.png",
    "/romantic-couple.png",
    "/casual-couple.png",
    "/formal-couple.png",
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

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-great-vibes text-center text-black mb-8 sm:mb-10 md:mb-12">
          Our Journey Together
        </h2>

        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <Card className="mb-6 sm:mb-7 md:mb-8 border-2 border-black">
            <CardHeader>
              <CardTitle className="text-center text-black font-great-vibes text-2xl sm:text-3xl md:text-4xl">
                Share Your Memories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
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
                    className="bg-black hover:bg-gray-800 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base"
                  >
                    <span className="cursor-pointer">
                      <Upload className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Upload Photos
                    </span>
                  </Button>
                </label>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 font-montserrat">
                  Share your favorite moments with us!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-black/20">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
