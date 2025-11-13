import { HeroSection } from "@/components/hero-section";
import { WeddingAgenda } from "@/components/wedding-agenda";
import { LocationMaps } from "@/components/location-maps";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPSection } from "@/components/rsvp-section";
import { WeddingFooter } from "@/components/wedding-footer";
import { ImageGallery } from "@/components/image-gallery";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      {/* <WeddingHeader /> */}
      <HeroSection />
      <div className="relative min-h-screen py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background layer */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/fullBackground.jpeg')",
            backgroundColor: "#f5f5f5",
            zIndex: -1,
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10">
          <CountdownTimer />
          <WeddingAgenda />
          <ImageGallery />
          <LocationMaps />
          <RSVPSection />
        </div>
      </div>

      <WeddingFooter />
    </main>
  );
}
