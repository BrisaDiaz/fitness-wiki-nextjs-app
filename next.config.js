module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    API_BASE_URL: process.env.API_BASE_URL
  },
  images: {
    domains: ['spoonacular.com']
  }
}
