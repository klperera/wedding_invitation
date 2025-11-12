import Image from "next/image";

export function EnvelopeCard() {
  return (
    <>
      <Image
        src="/invitation.png"
        alt="Envelope"
        width={1200}
        height={300}
        className="mx-auto w-full h-auto object-contain"
      />
    </>
  );
}
