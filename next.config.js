/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig
