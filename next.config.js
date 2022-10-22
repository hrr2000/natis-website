/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "images.unsplash.com", "54.211.128.158"],
  },
  i18n: {
    // locales: ['en-US'],
    locales: ["en-US", "ar-SA", "fr-FR"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
