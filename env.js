import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const env = {
  API_KEY: process.env.API_KEY || publicRuntimeConfig.API_KEY,
  HOST: process.env.HOST || publicRuntimeConfig.HOST,
  NODE_ENV: process.env.NODE_ENV || publicRuntimeConfig.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL || publicRuntimeConfig.DATABASE_URL,
  SHADOW_DATABASE_URL:
    process.env.SHADOW_DATABASE_URL || publicRuntimeConfig.SHADOW_DATABASE_URL,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || publicRuntimeConfig.NEXTAUTH_URL,
  AUTH_SECRET: process.env.AUTH_SECRET || publicRuntimeConfig.AUTH_SECRET,
  JWT_SECRET: process.env.JWT_SECRET || publicRuntimeConfig.JWT_SECRET,
  GOOGLE_CLIENT_ID:
    process.env.GOOGLE_CLIENT_ID || publicRuntimeConfig.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET:
    process.env.GOOGLE_CLIENT_SECRET ||
    publicRuntimeConfig.GOOGLE_CLIENT_SECRET,
  GITHUB_ID: process.env.GITHUB_ID || publicRuntimeConfig.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET || publicRuntimeConfig.GITHUB_SECRET
}
export default env
