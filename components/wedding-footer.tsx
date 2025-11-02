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
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Thank You Section */}
          <div className="mb-12">
            <h2 className="font-great-vibes text-5xl md:text-6xl text-white mb-6">
              Thank
              <br />
              You
            </h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="font-great-vibes text-3xl md:text-4xl text-white">
              Dilum & Heshani
            </p>
          </div>

          <p className="text-base md:text-lg mb-8 font-montserrat text-gray-300 italic">
            &quot;Therefore what God has joined together, let no one
            separate.&quot; - Matthew 19:6
          </p>

          <Button
            variant="secondary"
            onClick={handleShare}
            className="mb-8 bg-white text-black hover:bg-gray-200 border-2 border-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Invitation
          </Button>

          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-gray-300 font-montserrat">
              Saturday, December 13th, 2025
            </p>
            <p className="text-sm text-gray-300 font-montserrat">
              St. Mary&apos;s Church, Thudella • Royal Ramesses, Seeduwa
            </p>
            <p className="text-xs text-gray-400 mt-4">
              With love and blessings from both families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
