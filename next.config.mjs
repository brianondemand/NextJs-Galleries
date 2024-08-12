/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "flowbite.s3.amazonaws.com",
          pathname: "**",
          port: "",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "**",
          port: "",
        },
      ],
    },
  };

export default nextConfig;
