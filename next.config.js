/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
}

module.exports = nextConfig
