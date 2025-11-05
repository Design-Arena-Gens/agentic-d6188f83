/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.promechi.com',
      },
    ],
  },
};

export default nextConfig;
