import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Empty for custom apex domain
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
