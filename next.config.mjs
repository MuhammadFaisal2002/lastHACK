/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds : true,
    },
    images: {
        domains: ["cdn.sanity.io"], // Allow Sanity images
      },
};

export default nextConfig;
