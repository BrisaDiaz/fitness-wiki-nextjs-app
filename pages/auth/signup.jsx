import Head from 'next/head'
import { useSession } from 'next-auth/client'
import useAuthentication from '@/hooks/useAuthentication'
import SignupForm from '@/components/auth/SignupForm'
import AuthSection from '@/components/auth/AuthSection'

export default function SingUp() {
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
          <title>Sign Up</title>
          <meta name="description" content="sign up page" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="w-full flex full-screen-h ">
          <AuthSection
            title="Sign Up"
            Form={SignupForm}
            linkText="Did you already have an account? Sign In"
            linkURL="/auth/signin"
          />
          <section className="w-full bg-green-200  bg-healthy-food bg-cover bg-no-repeat" />
        </section>
      </>
    )
}
