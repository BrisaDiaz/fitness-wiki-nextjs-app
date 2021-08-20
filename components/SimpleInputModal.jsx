import FormButtom from '@/components/FormButton'
import useSimpleInputModal from '@/hooks/useSimpleInputModal'
export default function SimpleInputModal({
  children,
  title,
  inputOptions,
  dinamicOptions,
  callback,
  reference
}) {
  const { register, handleSubmit, onSubmit } = useSimpleInputModal({
    callback,
    inputName: inputOptions.name
  })
  return (
    <article ref={reference} className=" p-4 pb-6 w-80 modal absolute z-10">
      <p className="text-2xl text-gray-600 font-semibold text-center  mb-1">
        {title}
      </p>
      {children}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
