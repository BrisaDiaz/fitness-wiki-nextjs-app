import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import env from '@/env'
import { POST } from '@/utils/http'
export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',

      async authorize(credentials) {
        const [json, response] = await POST(`/auth/signin/credentials`, {
          email: credentials.email,
          password: credentials.password
        })

        if (response.ok && !json.error) {
          const { user, token } = json

          return {
            name: user.first_name + ' ' + user.last_name,
            email: user.email,
            token: token
          }
        }

        throw new Error(json.message || 'Server side error')
      }
    }),
    Providers.GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],

  secret: env.NEXTAUTH_SECRET,
  session: {
    jwt: true
  },
  jwt: {
    secret: env.JWT_SECRET
  },

  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/signin'
  },
  callbacks: {
    async signIn(user, account) {
      if (account.id === 'credentials') return true

      const [json, response] = await POST(`/auth/signin`, {
        email: user.email
      })

      if (response.ok && json.user) {
        user.token = json.token
        return true
      }
      throw new Error(json.message || 'Server side error')
    },
    async session(session, token) {
      if (token.user) {
        ;(session.user = {
          name: token.user.name,
          email: token.user.email
        }),
          (session.accessToken = token.accessToken)
      }
      return session
    },
    async jwt(token, user) {
      if (user) {
        token.user = { name: user.name, email: user.email }
        token.accessToken = user.token
      }
      return token
    }
  }
})
