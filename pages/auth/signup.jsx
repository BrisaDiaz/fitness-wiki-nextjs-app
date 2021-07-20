import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import SignupForm from '@/components/SignupForm'
import AuthSection from '@/components/AuthSection'
import LoadingHeart from '@/components/LoadingHeart'
export default function SingUp() {
  const router = useRouter()
  const [session, loading] = useSession()
  if (loading) return <LoadingHeart />
  if (session && !loading) return router.push('/search')
  if (!session && !loading)
    return (
      <>
        <Head>
          <title>Sign Up</title>
          <meta name="description" content="sign up page" />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="w-full flex min-h-screen -mt-16 pt-16">
          <AuthSection
            title="Sign Up"
            Form={SignupForm}
            linkText="Did you already have an account? Sign In"
            linkURL="/auth/signin"
          />
          <section className="w-full bg-green-200  bg-healthy-food bg-cover" />
        </section>
      </>
    )
}
