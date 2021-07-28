const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST
  },
  images: {
    loader: 'imgix',
    path: 'https://noop/',
    domains: ['spoonacular.com']
  }
}
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
})
