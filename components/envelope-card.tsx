import Image from "next/image";

export function EnvelopeCard() {
  return (
    <>
      <Image
        src="/invitation.jpeg"
        alt="Envelope"
        width={500}
        height={300}
        className="mx-auto "
      />
    </>
  );
}
