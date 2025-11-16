"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
  ratio?: number;
  placeholder?: string;
}

interface AnimatedImageGalleryProps {
  images: ImageItem[];
  columns?: number;
  className?: string;
}

export function AnimatedImageGallery({
  images,
  columns = 3,
  className,
}: AnimatedImageGalleryProps) {
  // Distribute images across columns
  const distributeImages = () => {
    const cols: ImageItem[][] = Array.from({ length: columns }, () => []);
    images.forEach((img, index) => {
      cols[index % columns].push(img);
    });
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center py-10",
        className
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {imageColumns.map((columnImages, col) => (
          <div key={col} className="grid gap-6">
            {columnImages.map((image, index) => (
              <AnimatedImage
                key={`${col}-${index}`}
                alt={image.alt}
                src={image.src}
                ratio={image.ratio || 16 / 9}
                placeholder={image.placeholder}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-accent relative size-full rounded-lg border border-gray-200"
    >
      <Image
        alt={alt}
        src={imgSrc}
        fill
        className={cn(
          "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          }
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}
