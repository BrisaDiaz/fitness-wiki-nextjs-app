import Link from 'next/link'

export default function Header({ session, loading, signOut, MenuButton }) {
  const handleLogout = async () => {
    try {
      signOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header className=" bg-green-700  px-2 sm:px-4 py-2  shadow-lg fixed  z-40 w-full">
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
        <div className="flex items-center br-1 gap-3">
          {!loading && !session ? (
            <>
              <Link href="/auth/signup" passHref>
                <a href="#" className="text-md text-white transform leading-6 ">
                  Sign Up
                </a>
              </Link>
              <Link href="/auth/signin" passHref>
                <a
                  href="#"
                  className="text-md   text-white px-1.5 py-0 transform  bg-green-500 hover:bg-green-600 transition ease-in-out g-green-400 rounded-md  leading-6 border-b-2 border-green-500  hover:border-green-600  "
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
          {session && <MenuButton />}
        </div>
      </nav>
    </header>
  )
}
