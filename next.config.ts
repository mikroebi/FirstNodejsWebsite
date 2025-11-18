import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
  basePath: '/FirstNodejsWebsite', 
};

export default nextConfig;