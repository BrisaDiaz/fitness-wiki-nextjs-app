import React from 'react'
import { useForm } from 'react-hook-form'
import FormButton from '@/components/FormButton'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import useModalFocus from '@/hooks/useModalFocus'
export default function SimpleInputModal({
  title,
  isOpen,
  onClose,
  inputOptions,
  dynamicOptions,
  callback,

  testId
}) {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    e.stopPropagation()
    callback(data[inputOptions.name])
    onClose()
  }

  const modalRef = React.useRef(null)
  useOnClickOutside(modalRef, onClose)
  const { tabIndex } = useModalFocus({
    isOpen: isOpen,
    modalSelector: `[aria-label="${title}"]`,
    onEscape: onClose
  })
  return (
    <>
      <div
        className={'justify-center items-center fle fixed z-50    w-screen top-20 left-0  backdrop-blur-xs '.concat(
          isOpen ? 'scale-100 ' : ' scale-0'
        )}
      >
        <div className="relative   z-50 w-screen flex justify-center ">
          <article
            ref={modalRef}
            className=" p-4 pb-6 w-72 modal "
            aria-label={title}
            data-testid={testId}
          >
            <p className="text-2xl text-gray-600 font-semibold text-center  mb-1 capitalize">
              {title}
            </p>

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
                {...dynamicOptions}
                className="w-full  line-input capitalize"
                tabIndex={tabIndex}
              />
              <div className="w-28 mx-auto">
                <FormButton text="Save" tabIndex={tabIndex} />
              </div>
            </form>
          </article>
        </div>
      </div>
    </>
  )
}
