import AuthProviderButtons from '../../components/AuthProviderButtons'
import SigninForm from '../../components/SigninForm'
import AuthSection from '../../components/AuthSection'
export default function SignIn() {
  return (
    <>
      <main className="flex min-h-screen -mt-16 pt-16">
        <AuthSection
          title="Sign In"
          Form={SigninForm}
          linkText="You have not an account yet? Sign Up"
          linkURL="/auth/signUp"
        >
          <>
            <p className="text-center my-2 text-gray-600 ">- or -</p>
            <AuthProviderButtons />
          </>
        </AuthSection>

        <section className="w-full bg-green-200 bg-healthy-burger bg-cover"></section>
      </main>
    </>
  )
}
