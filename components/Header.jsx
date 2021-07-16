import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/client'

export default function Header() {
  const [session, loading] = useSession()

  return (
    <header className=" bg-green-600  px-2 py-4  sm:px-4 shadow-lg flex justify-between position relative z-50">
      <div className="flex flex-row gap-1 items-center pl-1">
        <Image
          width={30}
          height={30}
          src="/heartbeat-solid.svg"
          alt="calories"
        />
        <Link href="/" passHref>
          <a href="!#" className="text-2xl font-semibold text-white">
            WikiFit
          </a>
        </Link>
      </div>
      <div className="flex items-center br-1 gap-2">
        {!loading && !session ? (
          <>
            <Link href="/auth/signUp" passHref>
              <a href="!#" className="text-lg font-semibold text-white  pb-1 ">
                Sign Up
              </a>
            </Link>
            <Link href="/auth/signIn" passHref>
              <a
                href="!#"
                className="text-lg font-semibold text-white px-2 pb-1 bg-green-400 hover:bg-green-500 transition ease-in-out g-green-400 rounded-md  leading-8"
              >
                Sign In
              </a>
            </Link>
          </>
        ) : !loading ? (
          <a
            href="!#"
            onClick={() => signOut()}
            className="text-lg font-semibold text-white  pb-1 "
          >
            Logout
          </a>
        ) : null}
      </div>
    </header>
  )
}
