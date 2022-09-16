/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    // locales: ['en-US'],
    locales: ['en-US', 'ar-SA'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig
