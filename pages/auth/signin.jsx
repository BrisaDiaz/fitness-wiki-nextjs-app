import AuthProviderButtons from '../../components/AuthProviderButtons'
import SigninForm from '../../components/SigninForm'
import AuthSection from '../../components/AuthSection'
import { useSession } from 'next-auth/client'

export default function SignIn() {
  const [session] = useSession()
  if (!session)
    return (
      <>
        <main className="flex min-h-screen -mt-16 pt-16">
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
        </main>
      </>
    )
  return null
}
