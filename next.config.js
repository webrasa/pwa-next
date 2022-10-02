/** @type {import('next').NextConfig} */

const PWA = require('next-pwa')

module.exports = PWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig