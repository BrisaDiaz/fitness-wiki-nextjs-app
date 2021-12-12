import Image from 'next/image'
import Link from 'next/link'
import useSessionHandler from '../../hooks/useSessionHandler'
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
  const {
    onSubmit,
    register,
    handleSubmit,
    setServerMessage,
    errors,
    isFormLoading,
    serverMessage
  } = useSessionHandler({ title, signIn })
  return (
    <section className="w-full max-w-md  flex-none px-2 sm:px-5 p-4 mt-5">
      <div className="w-10 h-10 rounded-full bg-green-700 mx-auto flex items-center justify-center">
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
        <p className="text-gray-600 hover:text-green-700 cursor-pointer transition ease-in-out my-3 ">
          {linkText}
        </p>
      </Link>
      <FormErrors errors={errors} />

      {isFormLoading && <FormSpinner />}

      {serverMessage && (
        <h3
          data-testid="serverResponse"
          className="text-lg text-center mt-3 font-semibold text-green-700 "
        >
          {serverMessage}
        </h3>
      )}
    </section>
  )
}
