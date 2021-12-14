import * as React from 'react'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function ProgressBar({ externalLoading }) {
  const router = useRouter()
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsRouteChanging(true)
    })
    router.events.on('routeChangeComplete', () => {
      setIsRouteChanging(false)
    })
  }, [router.events])
  useEffect(() => {
    if (externalLoading) {
      return setIsRouteChanging(true)
    }
    setIsRouteChanging(false)
  }, [externalLoading])
  return (
    <div
      className={'w-full fixed h-2 bg-green-200 visible z-50 opacity-20 flex '.concat(
        isRouteChanging ? 'visible' : 'hidden'
      )}
    >
      <div className="w-1/4 bg-gray-700  h-2 transition translate-x-full relative   animate-infiniteXSlide" />
    </div>
  )
}
