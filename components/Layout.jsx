import { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import Sidebar from './Sidebar'
import Header from './Header'
import MenuBtn from './MenuBtn'

export default function Layout({ children }) {
  const [session, loading] = useSession()

  const [isNavOpen, setIsNavOpen] = useState(false)

  const sessionProps = {
    session,
    loading
  }
  const navProps = {
    isNavOpen,
    setIsNavOpen
  }
  console.log(session)
  return (
    <>
      <Header {...sessionProps} signOut={signOut} />

      {session && <Sidebar {...navProps} />}

      <main
        data-testid="page-wrapper"
        className={
          isNavOpen ? 'relative left-60 pt-16 ' : 'relative left-0 pt-16'
        }
      >
        {children}
        {session && <MenuBtn {...navProps} />}
      </main>
    </>
  )
}
