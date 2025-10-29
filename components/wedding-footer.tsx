"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WeddingFooter() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Dilum & Heshani Wedding Invitation",
        text: "Join us in celebrating the wedding of Dilum & Heshani on December 13th, 2025",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Wedding invitation link copied to clipboard!")
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="text-2xl font-serif">Dilum & Heshani</span>
          </div>

          <p className="text-lg mb-6 font-serif">
            "Therefore what God has joined together, let no one separate." - Matthew 19:6
          </p>

          <Button
            variant="secondary"
            onClick={handleShare}
            className="mb-8 bg-background text-foreground hover:bg-background/90 border-2 border-background"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Invitation
          </Button>

          <div className="border-t border-background/20 pt-6">
            <p className="text-sm opacity-90 font-serif">Saturday, December 13th, 2025</p>
            <p className="text-sm opacity-90 font-serif">St. Mary's Church, Thudella • Royal Ramesses, Seeduwa</p>
            <p className="text-xs opacity-70 mt-4">With love and blessings from both families</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
