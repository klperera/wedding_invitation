import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    // add supported image quality options so using quality="100" is valid
    qualities: [100, 75],
  },
};

export default nextConfig;
