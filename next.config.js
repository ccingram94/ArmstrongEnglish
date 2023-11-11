/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd20etpig7obrzj.cloudfront.net',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
