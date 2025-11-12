import { HeroSection } from "@/components/hero-section";
import { WeddingAgenda } from "@/components/wedding-agenda";
import { LocationMaps } from "@/components/location-maps";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPSection } from "@/components/rsvp-section";
import { WeddingFooter } from "@/components/wedding-footer";
import { ImageGallery } from "@/components/image-gallery";
import { EnvelopeCard } from "@/components/envelope-card";
import { url } from "inspector";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen bg-sidebar-accent-foreground">
      {/* <WeddingHeader /> */}
      <HeroSection />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/full Background.jpg')",
        }}
      >
        <EnvelopeCard />
        {/* <InvitationEnvelope /> */}
        {/* <InvitationDetails /> */}
        <CountdownTimer />
        {/* <DressCode /> */}
        <WeddingAgenda />
        <ImageGallery />
        <LocationMaps />
        <RSVPSection />
      </div>

      <WeddingFooter />
    </main>
  );
}
