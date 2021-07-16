import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import getConfig from 'next/config'
import { signIn } from 'next-auth/client'
import FormSpinner from './FormSpinner'
import FormErrors from './FormErrors'

export default function AuthSection({
  children,
  Form,
  linkText,
  linkURL,
  title
}) {
  const { publicRuntimeConfig } = getConfig()
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()
    setServerMessage(null)
    setIsFormLoading(true)

    if (title === 'Sign In') {
      signIn('credentials', {
        useremail: data.email,
        password: data.password
      })
      setIsFormLoading(false)
    } else {
      const response = await fetch(
        `${publicRuntimeConfig.HOST}/api/auth/signup`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Acept: 'application/json'
          }
        }
      )
      const json = await response.json()

      setIsFormLoading(false)
      if (json.user) return console.log(json.user)
      setServerMessage(json.message)
    }
  }
  return (
    <section className="w-full max-w-md  flex-none px-2 sm:px-5 py-4 mt-10">
      <div className="w-10 h-10 rounded-full bg-green-600 mx-auto flex items-center justify-center">
        <Image
          width={20}
          height={20}
          src="/unlock-alt-solid.svg"
          alt="session"
        />
      </div>
      <h4 className="text-center text-2xl mb-4 ">{title}</h4>
      <Form
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      {children}
      <Link href={linkURL} passHref>
        <p className="text-gray-600 hover:text-green-600 cursor-pointer transition ease-in-out my-3 ">
          {linkText}
        </p>
      </Link>
      <FormErrors errors={errors} />

      {isFormLoading && <FormSpinner />}

      {serverMessage && (
        <h3 className="text-lg text-center mt-3 font-semibold text-green-700 ">
          {serverMessage}
        </h3>
      )}
    </section>
  )
}