/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rowzanehnashr.com',
          },
        ],
      },
}

module.exports = nextConfig
