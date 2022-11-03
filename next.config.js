/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "images.unsplash.com", "44.204.64.77", "nati-esl-usa.org"],
  },
  i18n: {
    // locales: ['en-US'],
    locales: ["en-US", "ar-SA", "fr-FR", "es-ES"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
