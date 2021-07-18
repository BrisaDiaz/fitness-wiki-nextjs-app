import SignupForm from '../../components/SignupForm'
import AuthSection from '../../components/AuthSection'
import { useSession } from 'next-auth/client'

export default function SingUp() {
  const [session] = useSession()
  if (!session)
    return (
      <div>
        <main className="w-full flex min-h-screen -mt-16 pt-16">
          <AuthSection
            title="Sign Up"
            Form={SignupForm}
            linkText="Did you already have an account? Sign In"
            linkURL="/auth/signIn"
          />
          <section className="w-full bg-green-200  bg-healthy-food bg-cover" />
        </main>
      </div>
    )
  return null
}
