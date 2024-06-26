/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['storage.googleapis.com' , 's3-alpha-sig.figma.com'],
    },
  };
  
  export default nextConfig;
  