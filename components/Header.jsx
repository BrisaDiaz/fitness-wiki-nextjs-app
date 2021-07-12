import Link from 'next/link'
import Image from 'next/Image'
import { useSession, signOut } from 'next-auth/client'

export default function Header() {
  const [session, loading] = useSession()

  return (
    <header className=" bg-green-600  px-2 py-4  sm:px-4 shadow-lg flex justify-between">
      <div className="flex flex-row gap-1 items-center pl-1">
        <Image
          width={35}
          height={35}
          src="/heartbeat-solid.svg"
          alt="calories"
        />
        <Link href="/" passHref>
          <a href="!#" className="text-2xl font-semibold text-green-400">
            WikiFit
          </a>
        </Link>
      </div>
      <div className="flex items-center br-1">
        {!loading && !session ? (
          <Link href="/auth/signin" passHref>
            <a href="!#" className="text-xl font-semibold text-green-400">
              Singin
            </a>
          </Link>
        ) : (
          <a
            href="!#"
            onClick={() =>
              signOut({
                callbackUrl: `${
                  process.env.HOST || 'http://localhost:3000'
                }/auth/signin`
              })
            }
            className="text-xl font-semibold text-green-400"
          >
            Logout
          </a>
        )}
      </div>
    </header>
  )
}
