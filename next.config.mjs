/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yoom.lakshyy.com',
      },
    ],
  },
};

export default nextConfig;
