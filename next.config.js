module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    HOST: process.env.HOST
  },
  images: {
    loader: 'imgix',
    path: 'https://noop/',
    domains: ['spoonacular.com']
  }
}
