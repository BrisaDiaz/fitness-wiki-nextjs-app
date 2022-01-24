import React from 'react'
import { useForm } from 'react-hook-form'
import FormButtom from '@/components/FormButton'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import useModalFocus from '@/hooks/useModalFocus'
export default function SimpleInputModal({
  children,
  title,
  inputOptions,
  dinamicOptions,
  callback,
  avatar,
  testId
}) {
  const [isModalOpen, setisModalOpen] = React.useState(false)
  const handleOpen = () => {
    setisModalOpen(true)
  }
  const handleClose = () => {
    setisModalOpen(false)
  }

  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    e.stopPropagation()
    callback(data[inputOptions.name])
    handleClose()
  }

  const modalRef = React.useRef(null)
  useOnClickOutside(modalRef, handleClose)
  const { tabIndex } = useModalFocus({
    isOpen: isModalOpen,
    moldalSelector: `[aria-label="${title}"]`,
    onEscape: handleClose
  })
  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <div
        className={'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none '.concat(
          isModalOpen ? 'scale-100 ' : ' scale-0'
        )}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <article
            ref={modalRef}
            className=" p-4 pb-6 w-72 modal absolute z-50"
            aria-label={title}
            data-testid={testId}
          >
            <p className="text-2xl text-gray-600 font-semibold text-center  mb-1 capitalize">
              {title}
            </p>
            {avatar}
            <form
              name={inputOptions.name + 'Form'}
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type={inputOptions.type}
                {...register(inputOptions.name, { required: true })}
                defaultValue={inputOptions.defaultValue || ''}
                placeholder={inputOptions.placeholder || ''}
                {...dinamicOptions}
                className="w-full  line-input capitalize"
                tabIndex={tabIndex}
              />
              <div className="w-28 mx-auto">
                <FormButtom text="Save" tabIndex={tabIndex} />
              </div>
            </form>
          </article>
        </div>
      </div>
    </>
  )
}
