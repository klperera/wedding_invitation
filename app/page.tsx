import { HeroSection } from "@/components/hero-section";
import { WeddingAgenda } from "@/components/wedding-agenda";
import { LocationMaps } from "@/components/location-maps";
import { CountdownTimer } from "@/components/countdown-timer";
import { RSVPSection } from "@/components/rsvp-section";
import { WeddingFooter } from "@/components/wedding-footer";
import DressCode from "@/components/dress-code";
import { ImageGallery } from "@/components/image-gallery";
import { InvitationDetails } from "@/components/invitation-details";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen bg-sidebar-accent-foreground">
      {/* <WeddingHeader /> */}
      <HeroSection />
      {/* <EnvelopeCard /> */}
      {/* <InvitationEnvelope /> */}
      <CountdownTimer />
      {/* <InvitationDetails /> */}
      <DressCode />
      <WeddingAgenda />
      <ImageGallery />
      <LocationMaps />
      <RSVPSection />
      <WeddingFooter />
    </main>
  );
}
