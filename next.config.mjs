/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zxuuzgoqdptulwnylwft.supabase.co", // my supabase storage bucket
      },
      {
        protocol: "https",
        hostname: "files.vroomvroomvroom.com",
      },
      {
        protocol: "https",
        hostname: "www.visitnsw.com",
      },
    ],
  },
};

export default nextConfig;
