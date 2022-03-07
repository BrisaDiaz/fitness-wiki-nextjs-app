import { useState, useEffect } from 'react'

function useScreen() {
  const getScreen = () => {
    if (typeof window !== 'undefined' && window.screen) {
      return window.screen
    }
    return undefined
  }

  const [screen, setScreen] = useState(undefined > getScreen())

  function handleSize() {
    setScreen(getScreen())
  }

  useEffect(() => {
    document.addEventListener('resize', handleSize)
    return () => document.removeEventListener('resize', handleSize)
  }, [])

  return screen
}

export default useScreen
