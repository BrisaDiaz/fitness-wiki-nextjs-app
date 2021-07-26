import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',

      async authorize(credentials) {
        const respponse = await fetch(
          `${process.env.HOST}/api/auth/signin/credentials`,
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const json = await respponse.json()

        if (respponse.ok && !json.error) {
          const { user } = json

          return {
            name: user.first_name + ' ' + user.last_name,
            email: user.email
          }
        }

        throw new Error(json.message || 'Server side error')
      }
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  debug: process.env.ENVIRIONMENT === 'DEVELOPMENT',
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin'
  },
  callbacks: {
    async signIn(user, account) {
      if (account.id === 'credentials') return true
      const respponse = await fetch(`${process.env.HOST}/api/auth/signin`, {
        method: 'POST',
        body: JSON.stringify({
          email: user.email
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      const json = await respponse.json()

      if (respponse.ok && json.user) {
        return true
      }
      throw new Error(json.message || 'Server side error')
    },
    async session(session, token) {
      if (token.user) {
        session.user = {
          name: token.user.name,
          email: token.user.email
        }
      }
      return session
    },
    async jwt(token, user) {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email
        }
      }
      return token
    }
  }
})
