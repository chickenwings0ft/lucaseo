import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      // 301 redirects for old /en/ routes to new root routes
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // 301 redirects for old Spanish routes (if indexed)
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
