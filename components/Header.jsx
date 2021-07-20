import Link from 'next/link'
import Image from 'next/image'

export default function Header({ session, loading, signOut }) {
  return (
    <header className=" bg-green-600  px-2 py-4  sm:px-4 shadow-lg fixed  z-50 w-full">
      <nav className="flex justify-between   ">
        <div className="flex flex-row gap-1 items-center pl-1">
          <Image
            width={30}
            height={30}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            src="/heartbeat-solid.svg"
            alt="calories"
          />
          <Link href="/" passHref>
            <a href="!#" className="text-2xl font-semibold text-white">
              WikiFit
            </a>
          </Link>
        </div>
        <div className="flex items-center br-1 gap-0">
          {!loading && !session ? (
            <>
              <Link href="/auth/signup" passHref>
                <a
                  href="!#"
                  className="text-lg font-semibold text-white transform scale-90  "
                >
                  Sign Up
                </a>
              </Link>
              <Link href="/auth/signin" passHref>
                <a
                  href="!#"
                  className="text-lg font-semibold text-white px-2 transform scale-90  bg-green-400 hover:bg-green-500 transition ease-in-out g-green-400 rounded-md  leading-8 border-b-4 border-green-400  hover:border-green-500"
                >
                  Sign In
                </a>
              </Link>
            </>
          ) : !loading ? (
            <a
              href="!#"
              onClick={() => signOut()}
              className="text-lg font-semibold text-white  transform scale-90 "
            >
              Logout
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
