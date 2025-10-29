import { HeroSection } from "@/components/hero-section";
import { WeddingAgenda } from "@/components/wedding-agenda";
import { LocationMaps } from "@/components/location-maps";
import { ImageGallery } from "@/components/image-gallery";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPSection } from "@/components/rsvp-section";
import { WeddingFooter } from "@/components/wedding-footer";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      {/* <WeddingHeader /> */}
      <HeroSection />
      {/* <EnvelopeCard /> */}
      {/* <InvitationEnvelope /> */}
      {/* <InvitationDetails /> */}
      <CountdownTimer />
      <WeddingAgenda />
      <LocationMaps />
      {/* <ImageGallery /> */}
      <RSVPSection />
      <WeddingFooter />
    </main>
  );
}
