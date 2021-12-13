import Link from 'next/link'

export default function Header({ session, loading, signOut }) {
  const handleLogout = async () => {
    try {
      signOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header className=" bg-green-700  px-2 sm:px-4 py-3 sm:py-4 shadow-lg fixed  z-50 w-full">
      <nav className="flex justify-between   ">
        <div className="flex flex-row gap-1 items-center pl-1 max-w-10/12 sm:max-w-full ">
          <Link href="/" passHref>
            <a
              href=""
              className="text-xl sm:text-2xl font-semibold text-white sm:ml-1"
            >
              WikiFit
            </a>
          </Link>
        </div>
        <div className="flex items-center br-1 gap-0">
          {!loading && !session ? (
            <>
              <Link href="/auth/signup" passHref>
                <a
                  href="#"
                  className="text-md sm:text-lg font-semibold text-white transform scale-90  hover:animate-pulse "
                >
                  Sign Up
                </a>
              </Link>
              <Link href="/auth/signin" passHref>
                <a
                  href="#"
                  className="text-md sm:text-lg  font-semibold text-white px-2 py-1 transform scale-90  bg-green-500 hover:bg-green-600 transition ease-in-out g-green-400 rounded-md  leading-8 border-b-2 border-green-500  hover:border-green-600 hover:animate-pulse "
                >
                  Sign In
                </a>
              </Link>
            </>
          ) : !loading ? (
            <a
              href="#"
              onClick={() => handleLogout()}
              data-testid="logoutBtn"
              className="text-md sm:text-lg  font-semibold text-white   hover:animate-pulse "
            >
              Logout
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
