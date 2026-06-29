/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'h8z6stjynz.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'cdn.phototourl.com',
      },
    ],
  },
};

export default nextConfig;
