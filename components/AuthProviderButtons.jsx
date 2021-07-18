import Image from 'next/image'
import { useRouter } from 'next/router'
export default function AuthProviderButtons({ signIn, setServerMessage }) {
  const router = useRouter()
  const handleSignIn = async (provider) => {
    router.replace('/auth/signIn')
    setServerMessage(null)
    await signIn(provider)
  }
  return (
    <article className=" mx-auto  flex flex-col gap-y-2 align-top mt-3">
      <div className="relative w-full">
        <button
          className="py-2 w-full border-2 border-gray-800  shadow hover:shadow-lg  bg-gray-800 font-semibold text-white rounded  focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 "
          onClick={() => handleSignIn('github')}
        >
          Sign in with GitHub
        </button>
        <div className="absolute right-2    top-2">
          <Image
            className="rounded"
            alt="singin with google"
            width={30}
            height={30}
            src="/github-brands.svg"
          />
        </div>
      </div>

      <div className="relative w-full">
        <button
          className="py-2 w-full border-2 border-blue-500 shadow hover:shadow-lg bg-blue-500 font-semibold text-white rounded focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
          onClick={() => handleSignIn('google')}
        >
          Sign in with Google
        </button>
        <div className="absolute right-2    top-2">
          <Image
            className="rounded"
            alt="singin with google"
            width={30}
            height={30}
            src="/google-logo.png"
          />
        </div>
      </div>
    </article>
  )
}
