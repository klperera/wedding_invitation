import { HeroSection } from "@/components/hero-section";
import { WeddingAgenda } from "@/components/wedding-agenda";
import { LocationMaps } from "@/components/location-maps";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPSection } from "@/components/rsvp-section";
import { WeddingFooter } from "@/components/wedding-footer";
import DressCode from "@/components/dress-code";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      {/* <WeddingHeader /> */}
      <HeroSection />
      {/* <EnvelopeCard /> */}
      {/* <InvitationEnvelope /> */}
      {/* <InvitationDetails /> */}
      <CountdownTimer />
      <DressCode />
      <WeddingAgenda />
      <LocationMaps />
      {/* <ImageGallery /> */}
      <RSVPSection />
      <WeddingFooter />
    </main>
  );
}
