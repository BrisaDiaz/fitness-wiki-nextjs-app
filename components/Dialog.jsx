import React from 'react'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import useModalFocus from '@/hooks/useModalFocus'
export default function Modal({
  message,
  title,
  onAccept,
  isModalOpen,
  closeModal
}) {
  const [showModal, setShowModal] = React.useState(false)

  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
    closeModal()
  }
  const handleAccpet = () => {
    onAccept()
    handleClose()
  }
  React.useEffect(() => {
    if (isModalOpen) {
      return handleOpen()
    }
  }, [isModalOpen])
  const dialogRef = React.useRef(null)
  useOnClickOutside(dialogRef, handleClose)
  const { tabIndex } = useModalFocus({
    isOpen: showModal,
    moldalSelector: '[aria-label="confirmation dialog"]',
    onEscape: handleClose
  })

  return (
    <>
      <div
        className={'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50   transform transition-all transition-duration-500 '.concat(
          showModal ? 'scale-100 ' : ' scale-0'
        )}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  "
            ref={dialogRef}
            data-testid="dialogModal"
            aria-label="confirmation dialog"
          >
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
              <button
                className=" ml-auto bg-transparent border-0 text-green-700 rounded-full float-right text-3xl  font-semibold px-2 "
                onClick={handleClose}
                tabIndex={tabIndex}
              >
                ×
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                {message}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b gap-2">
              <button
                tabIndex={tabIndex}
                className="text-green-700 background-transparent font-bold uppercase px-6 py-3 rounded text-sm   mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-green-100"
                type="button"
                onClick={handleClose}
              >
                cancel
              </button>
              <button
                className="bg-green-600 text-white hover:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                data-testid="acceptDialogBtn"
                onClick={handleAccpet}
                tabIndex={tabIndex}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={showModal ? 'opacity-25 fixed inset-0 z-40 bg-black' : ''}
      ></div>
    </>
  )
}
