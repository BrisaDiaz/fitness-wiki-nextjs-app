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
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const { user } = await respponse.json()

        if (respponse.ok && user) {
          return user
        }

        return null
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
    signIn: '/auth/signIn'
  },
  callbacks: {
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
