import { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import Sidebar from './Sidebar'
import Header from './Header'
import MenuBtn from './MenuBtn'
import ProgressBar from './ProgressBar'
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
  return (
    <>
      <Header {...sessionProps} signOut={signOut} />
      <ProgressBar externalLoading={loading} />
      {session && <Sidebar {...navProps} />}

      <main
        data-testid="page-wrapper"
        className={`relative pt-16 transition easy-in-out  duration-500 left-0 ${
          isNavOpen ? 'translate-x-60' : 'translate-x-0'
        }	`}
      >
        {children}
        {session && <MenuBtn {...navProps} />}
      </main>
    </>
  )
}
