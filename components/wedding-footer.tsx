"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeddingFooter() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Dilum & Heshani Wedding Invitation",
        text: "Join us in celebrating the wedding of Dilum & Heshani on December 13th, 2025",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Wedding invitation link copied to clipboard!");
    }
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          {/* Thank You Section */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-great-vibes text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-5 md:mb-6">
              Thank
              <br />
              You
            </h2>
            <div className="w-12 sm:w-14 md:w-16 h-0.5 bg-white mx-auto mb-4 sm:mb-5 md:mb-6"></div>
            <p className="font-great-vibes text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Dilum & Heshani
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 font-montserrat text-gray-300 italic px-4">
            &quot;Therefore what God has joined together, let no one
            separate.&quot; - Matthew 19:6
          </p>

          <Button
            variant="secondary"
            onClick={handleShare}
            className="mb-6 sm:mb-7 md:mb-8 bg-white text-black hover:bg-gray-200 border-2 border-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base"
          >
            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Share Invitation
          </Button>

          <div className="border-t border-white/20 pt-4 sm:pt-5 md:pt-6">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-montserrat mb-1 sm:mb-2">
              Saturday, December 13th, 2025
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-montserrat mb-2 sm:mb-3 md:mb-4">
              St. Mary&apos;s Church, Thudella • Royal Ramesses, Seeduwa
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              With love and blessings from both families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
