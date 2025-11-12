import Image from "next/image";

export function EnvelopeCard() {
  return (
    <>
      <Image
        src="/invitation.jpg"
        alt="Envelope"
        width={500}
        height={300}
        className="mx-auto "
      />
    </>
  );
}
