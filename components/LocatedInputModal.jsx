import FormButtom from '@/components/FormButton'
import useLocatedInputModal from '@/hooks/useLocatedInputModal'
export default function SimpleInputModal({
  avatar,
  title,
  inputOptions,
  dinamicOptions,
  callback,
  reference
}) {
  const { register, handleSubmit, onSubmit } = useLocatedInputModal({
    callback,
    inputName: inputOptions.name
  })
  return (
    <article ref={reference} className=" p-4 pb-6 w-72 modal absolute z-50">
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
  )
}
