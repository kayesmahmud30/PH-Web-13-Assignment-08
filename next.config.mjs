/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pup-assets.imgix.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.idyllic.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "compressed.photo.goodreads.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.manning.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rigipublication.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
