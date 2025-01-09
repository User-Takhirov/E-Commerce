/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "8000",
        hostname: "localhost",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
