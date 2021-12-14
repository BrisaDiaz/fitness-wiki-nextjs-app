import FormButtom from '@/components/FormButton'
import useFullPageInputModal from '@/hooks/useFullPageInputModal'
export default function SimpleInputModal({
  children,
  title,
  inputOptions,
  dinamicOptions,
  callback,
  avatar,
  testId
}) {
  const {
    register,
    handleSubmit,
    onSubmit,
    showModal,
    handleOpen,
    handleClose
  } = useFullPageInputModal({
    callback,
    inputName: inputOptions.name
  })

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      {showModal ? (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none "
          onClick={handleClose}
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <article
              className=" p-4 pb-6 w-72 modal absolute z-50"
              data-testid={testId}
              onClick={(e) => e.stopPropagation()}
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
                />
                <div className="w-28 mx-auto">
                  <FormButtom text="Save" />
                </div>
              </form>
            </article>
          </div>
        </div>
      ) : null}
    </>
  )
}
