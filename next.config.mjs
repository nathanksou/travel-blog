/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.vroomvroomvroom.com",
      },
      {
        protocol: "https",
        hostname: "zxuuzgoqdptulwnylwft.supabase.co",
      },
    ],
  },
};

export default nextConfig;
