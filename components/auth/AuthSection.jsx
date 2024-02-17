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
    <section className="w-full max-w-md  flex-none p-4 mt-5">
      <div className="w-10 h-10 rounded-full bg-green-700 mx-auto flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#fff"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
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
      <button
        className="w-full bg-green-700 hover:bg-green-700 sm: py-2  rounded font-semibold text-white shadow hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-2"
        onClick={(e) =>
          onSubmit({ email: 'guestUser@email.com', password: 'guest' }, e)
        }
      >
        Sign in as Guest
      </button>
      <Link href={linkURL} passHref>
        <p className="text-gray-600 hover:text-green-700 cursor-pointer transition ease-in-out my-3 ">
          {linkText}
        </p>
      </Link>
      <FormErrors errors={errors} />

      {isFormLoading && <FormSpinner />}

      {serverMessage && (
        <div role="alert" data-testid="auth-server-resonce">
          <div
            className="flex items-center bg-blue-200 border-l-4 border-blue-700 text-blue-500 text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>{serverMessage}</p>
          </div>
        </div>
      )}
    </section>
  )
}
