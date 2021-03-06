import { useState, useEffect } from 'react'
export default function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whetheir element is visible
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const { current } = ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin
      }
    )
    if (current) {
      observer.observe(current)
    }

    observer ? () => observer.unobserve(current) : null
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}
