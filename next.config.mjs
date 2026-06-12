/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.roland.com",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["three"],
  async rewrites() {
    return [
      {
        source: "/roland-static/:path*",
        destination: "https://static.roland.com/:path*",
      },
    ];
  },
};

export default nextConfig;
