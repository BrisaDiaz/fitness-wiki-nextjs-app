import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
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
  title,
  AuthProviderButtons
}) {
  const { publicRuntimeConfig } = getConfig()
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  useEffect(() => {
    if (router.query.error) {
      setServerMessage(router.query.error)
    }
  }, [router])

  const onSubmit = async (data, e) => {
    e.stopPropagation()
    e.preventDefault()
    setServerMessage(null)
    router.replace('/auth/signIn')
    setIsFormLoading(true)

    if (title === 'Sign In') {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })
      setIsFormLoading(false)
      if (response.error)
        return setServerMessage(response.error || 'Server side error')
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
      if (!response.ok)
        return setServerMessage(json.message || 'Server side error')
      router.push('/auth/signIn')
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
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
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
      {AuthProviderButtons && (
        <AuthProviderButtons
          signIn={signIn}
          setServerMessage={setServerMessage}
        />
      )}
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
