/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/asdiop159752/BlogPost/master/images/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  