import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import Sidebar from './Sidebar'
import Header from './Header'
import MenuBtn from './MenuBtn'
import ProgressBar from './ProgressBar'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import useModalFocus from '@/hooks/useModalFocus'

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
  const handleCloseNav = () => {
    setIsNavOpen(false)
  }
  const handleOpenNav = () => {
    setIsNavOpen(true)
  }
  const modalRef = React.useRef(null)
  useOnClickOutside(modalRef, handleCloseNav)
  const { tabIndex } = useModalFocus({
    isOpen: isNavOpen,
    modalSelector: `[aria-label="navigation bar"]`,
    onEscape: handleCloseNav
  })
  const handleKeyDown = (event) => {
    if (event.key === 'm' && session?.user) {
      handleOpenNav()
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [])

  return (
    <>
      <Header
        {...sessionProps}
        signOut={signOut}
        MenuButton={() => <MenuBtn {...navProps} tabIndex={session ? 0 : -1} />}
      />
      <ProgressBar externalLoading={loading} />
      {session && <Sidebar {...navProps} tabIndex={tabIndex} />}

      <div
        data-testid="page-wrapper"
        className={` transition easy-in-out  duration-500 left-0 pt-12  ${
          isNavOpen ? 'translate-x-60' : 'translate-x-0'
        }	`}
      >
        {children}
      </div>
    </>
  )
}
