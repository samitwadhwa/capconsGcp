/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage.googleapis.com", "s3-alpha-sig.figma.com","images.unsplash.com"],
  },
};

export default nextConfig;
