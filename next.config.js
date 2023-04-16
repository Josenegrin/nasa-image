/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: 'https://api.nasa.gov/planetary/apod',
    KEY: 'eNaR8ascUuUfSb8YHkd8aJh8OuwU9UAr3y2TCsAv'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
    ],
  },
}

module.exports = nextConfig
