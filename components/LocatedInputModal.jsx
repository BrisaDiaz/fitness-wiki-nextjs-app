import React from 'react'
import FormButton from '@/components/FormButton'
import useLocatedInputModal from '@/hooks/useLocatedInputModal'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import useModalFocus from '@/hooks/useModalFocus'

export default function SimpleInputModal({
  avatar,
  title,
  inputOptions,
  dynamicOptions,
  callback,
  closeModal,
  isModalOpen,
  id
}) {
  const { register, handleSubmit, onSubmit } = useLocatedInputModal({
    callback,
    inputName: inputOptions.name
  })
  const modalRef = React.useRef(null)
  useOnClickOutside(modalRef, closeModal, {
    isActiveElement: isModalOpen
  })
  const { tabIndex } = useModalFocus({
    isOpen: isModalOpen,
    modalSelector: `[id="modal ${id}"]`,
    onEscape: closeModal
  })

  return (
    <article
      ref={modalRef}
      className={' p-4 pb-6 w-72 modal  z-50  top-2 left-0'.concat(
        isModalOpen ? 'scale-100 ' : ' scale-0'
      )}
      aria-label={title}
      id={'modal ' + id}
    >
      <p
        className={'text-2xl text-gray-600 font-semibold text-center  mb-1 capitalize '.concat(
          avatar ? 'mb-4' : ''
        )}
      >
        {title}
      </p>
      {avatar}
      <form
        name={inputOptions.name + 'Form'}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          tabIndex={tabIndex}
          type={inputOptions.type}
          {...register(inputOptions.name, { required: true })}
          defaultValue={inputOptions.defaultValue || ''}
          placeholder={inputOptions.placeholder || ''}
          {...dynamicOptions}
          className="w-full  line-input capitalize"
        />
        <div className="w-28 mx-auto">
          <FormButton text="Save" tabIndex={tabIndex} />
        </div>
      </form>
    </article>
  )
}
