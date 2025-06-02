import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push({
      jquery: 'jQuery',
    });
    return config;
  },
};

export default nextConfig;
