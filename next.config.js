const withPWA = require('next-pwa')
const path = require('path')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST
  },
  images: {
    loader: 'imgix',
    path: 'https://noop/',
    domains: ['spoonacular.com']
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
