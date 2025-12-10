import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure server-side only packages are handled correctly
  serverExternalPackages: ["pdfjs-dist"],
  // Note: Turbopack is being used, webpack config may not apply
  // But keeping it for compatibility
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
