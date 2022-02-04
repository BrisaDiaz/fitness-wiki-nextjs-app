const withPWA = require('next-pwa')
const path = require('path')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET
  },
  images: {
    loader: 'imgix',
    path: 'https://noop/',
    domains: ['spoonacular.com']
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'PRODUCTION',
    runtimeCaching
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
