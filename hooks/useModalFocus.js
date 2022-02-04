import React from 'react'
export default function useModalFocus({ modalSelector, isOpen, onEscape }) {
  const [tabIndex, setTabIndex] = React.useState(-1)
  React.useEffect(() => {
    if (!isOpen) return setTabIndex(-1)
    setTabIndex(0)
    handleFocus()
  }, [isOpen])

  const handleFocus = () => {
    const focusableElements =
      'a,button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const modal = document.querySelector(modalSelector)

    if (!modal) return

    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements)
    const lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') return onEscape()

      let isTabPressed = e.key === 'Tab' || e.keyCode === 9

      if (!isTabPressed) {
        return
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus() // add focus for the last focusable element
          e.preventDefault()
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus() // add focus for the first focusable element
          e.preventDefault()
        }
      }
    })

    firstFocusableElement.focus()
  }
  return { tabIndex }
}
