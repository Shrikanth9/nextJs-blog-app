import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'img.daisyui.com',
         port: '',
       },
       {
         protocol: 'https',
         hostname: 'res.cloudinary.com',
         port: '',
       }
     ]
  }
};

export default nextConfig;
