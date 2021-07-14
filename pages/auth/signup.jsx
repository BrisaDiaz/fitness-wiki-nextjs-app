import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import FormSpinner from '../../components/FormSpinner'
export default function SingUp() {
  const [isFormLoading, setIsFormLoading] = useState(false)
  const onSubmmit = (e) => {
    setIsFormLoading(true)
    e.preventDefault()
  }
  return (
    <>
      <main className="w-full flex min-h-screen -mt-16 pt-16">
        <section className="w-full max-w-md px-2 sm:px-5 py-4 mt-10">
          <div className="w-10 h-10 rounded-full bg-green-600 mx-auto flex items-center justify-center">
            <Image
              width={20}
              height={20}
              src="/unlock-alt-solid.svg"
              alt="create account"
            />
          </div>
          <h4 className="text-center text-2xl mb-4 ">Signup</h4>
          <form className="flex flex-col gap-y-2 mb-3" onSubmit={onSubmmit}>
            <div className="flex gap-2">
              <FormInput type="text" placeholder="First Name*" name="name" />
              <FormInput type="text" placeholder="Last Name*" name="lastname" />
            </div>
            <FormInput type="email" placeholder="Email Address*" name="email" />
            <FormInput
              type="password"
              placeholder="Password*"
              name="password"
            />
            <FormButton text="Signup" />
          </form>
          <Link href="/auth/signin" passHref>
            <p className="text-gray-600 hover:text-green-600 cursor-pointer transition ease-in-out">
              Did you already have an account? Signin
            </p>
          </Link>
          {isFormLoading && <FormSpinner />}
        </section>
        <section className="w-full bg-green-200  bg-healthy-food bg-cover"></section>
      </main>
    </>
  )
}
