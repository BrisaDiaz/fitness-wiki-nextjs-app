import Head from 'next/head'
import { useSession } from 'next-auth/client'
import useAuthentication from '@/hooks/useAuthentication'
import AuthProviderButtons from '@/components/auth/AuthProviderButtons'
import SigninForm from '@/components/auth/SigninForm'
import AuthSection from '@/components/auth/AuthSection'

export default function SignIn() {
  const { isLoading, LoadingComponent } = useAuthentication({
    getSession: useSession,
    redirectTo: '/',
    mustHaveSession: false
  })
  if (isLoading) return <LoadingComponent />
  if (!isLoading)
    return (
      <>
        <Head>
          <title>Sign In</title>
          <meta name="description" content="sign in page" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="flex full-screen-h  min-w-sm ">
          <AuthSection
            title="Sign In"
            Form={SigninForm}
            linkText="You have not an account yet? Sign Up"
            linkURL="/auth/signup"
            AuthProviderButtons={AuthProviderButtons}
          >
            <>
              <p className="text-center my-2 text-gray-600 ">- or -</p>
            </>
          </AuthSection>

          <section className="w-full bg-green-200 bg-healthy-burger bg-cove "></section>
        </section>
      </>
    )
  return null
}
