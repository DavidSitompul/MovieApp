/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "images.https://id.pinterest.com/", "images.https://www.google.com/", "images.https://pixabay.com/"],
    unoptimized: true,
  },
}

module.exports = nextConfig
