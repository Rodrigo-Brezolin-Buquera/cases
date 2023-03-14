/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        // pathname: '/**',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/',
      },
    ],
  },
  // images: {

  //   domains: ['raw.githubusercontent.com'],
  // },
}

module.exports = nextConfig
