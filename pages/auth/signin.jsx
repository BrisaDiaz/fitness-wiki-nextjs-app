import { signIn } from 'next-auth/client'
import Image from 'next/Image'
export default function SignIn() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-healthy-food backdrop-brightness-50 bg-cover	 dark-filter relative">
      <h1 className="text-center font-bold text-white text-2xl sm:text-3xl xl:text-5xl mb-10 mx-2  top-20 absolute drop-shadow-lg	">
        Start adding new healthy habits to your routine
      </h1>

      <article className="max-w-sm mx-auto relative transform -translate-y-1/2  top-1/2 flex flex-col gap-y-1  align-top mt-10">
        <div className="relative">
          <button
            className="py-1.5 px-4 border-2 pr-10  border-gray-800  shadow hover:shadow-lg  bg-gray-800 font-semibold text-white rounded"
            onClick={() =>
              signIn('github', {
                callbackUrl: `${process.env.HOST || 'http://localhost:3000/'}`
              })
            }
          >
            Sign in with GitHub
          </button>
          <div className="absolute right-1.5    top-1.5 ">
            <Image
              className="rounded"
              alt="singin with google"
              width={28}
              height={28}
              src="/github-brands.svg"
            />
          </div>
        </div>

        <div className="relative">
          <button
            className="py-1.5 px-4 pr-10  border-2 border-blue-500 shadow hover:shadow-lg bg-blue-500 font-semibold text-white rounded"
            onClick={() =>
              signIn('google', {
                callbackUrl: `${process.env.HOST || 'http://localhost:3000/'}`
              })
            }
          >
            Sign in with Google
          </button>
          <div className="absolute right-1.5    top-1.5 ">
            <Image
              className="rounded"
              alt="singin with google"
              width={26}
              height={26}
              src="/google-logo.png"
            />
          </div>
        </div>
      </article>
    </main>
  )
}
