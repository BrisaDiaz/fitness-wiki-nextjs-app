import Image from 'next/Image'
import Link from 'next/link'
import { useState } from 'react'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import FormSpinner from '../../components/FormSpinner'
import AuthProviderButtons from '../../components/AuthProviderButtons'

export default function SignIn() {
  const [isFormLoading, setIsFormLoading] = useState(false)

  const onSubmmit = (e) => {
    setIsFormLoading(true)
    e.preventDefault()
  }
  return (
    <>
      <main className="flex min-h-screen -mt-16 pt-16">
        <section className="w-full max-w-md px-2 sm:px-5 py-4 mt-10">
          <div className="w-10 h-10 rounded-full bg-green-600 mx-auto flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src="/unlock-alt-solid.svg"
              alt="session"
            />
          </div>
          <h4 className="text-center text-2xl mb-4 ">Signin</h4>
          <form className="flex flex-col gap-y-2" onSubmit={onSubmmit}>
            <FormInput type="email" placeholder="Email Address*" name="email" />
            <FormInput
              type="password"
              placeholder="Password*"
              name="password"
            />
            <FormButton text="Signin" />
          </form>
          <p className="text-center my-2 text-gray-600 ">- or -</p>
          <AuthProviderButtons />
          <Link
            className="my-2 transition ease-in-out hover:font-semibold"
            href="/auth/signup"
            passHref
          >
            <p className="text-gray-600 hover:text-green-600 cursor-pointer transition ease-in-out mt-2">
              You have not an account yet? Signup
            </p>
          </Link>
          {isFormLoading && <FormSpinner />}
        </section>
        <section className="w-full bg-green-200 bg-healthy-burger bg-cover"></section>
      </main>
    </>
  )
}
