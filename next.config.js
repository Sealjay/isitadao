/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    loader: 'cloudinary',
    path: '/'
  },
  trailingSlash: true,
}

module.exports = nextConfig
