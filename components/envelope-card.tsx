import Image from "next/image";

export function EnvelopeCard() {
  return (
    <div className="relative w-full">
      {/* Invitation text overlay */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center px-4 sm:px-6 md:px-8 max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
          <p className="font-great-vibes text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed mb-4">
            With hearts full of love, we joyfully invite you to share in the
            celebration of our forever.
          </p>
          <p className="font-montserrat text-sm sm:text-base md:text-lg text-gray-700 font-medium italic">
            Your presence will add joy and meaning to our special day.
          </p>
        </div>
      </div>

      {/* Envelope image */}
      <Image
        src="/invitation.jpg"
        alt="Envelope"
        width={800}
        height={300}
        className="mx-auto w-full h-auto lg:h-screen object-contain"
      />
    </div>
  );
}
