import Head from 'next/head'
import { useSession } from 'next-auth/client'
import useRouter from 'next/router'
import AuthProviderButtons from '../../components/AuthProviderButtons'
import SigninForm from '../../components/SigninForm'
import AuthSection from '../../components/AuthSection'

export default function SignIn() {
  const router = useRouter()
  const [session, loading] = useSession()
  if (!loading) return null
  if (session && !loading) return router.push('/search')
  if (!session && !loading)
    return (
      <>
        <Head>
          <title>Sign In</title>
          <meta name="description" content="sign in page" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="flex min-h-screen -mt-16 pt-16">
          <AuthSection
            title="Sign In"
            Form={SigninForm}
            linkText="You have not an account yet? Sign Up"
            linkURL="/auth/signUp"
            AuthProviderButtons={AuthProviderButtons}
          >
            <>
              <p className="text-center my-2 text-gray-600 ">- or -</p>
            </>
          </AuthSection>

          <section className="w-full bg-green-200 bg-healthy-burger bg-cover"></section>
        </section>
      </>
    )
  return null
}
