export default function FormInput({ placeholder, type, register, errors }) {
  return (
    <input
      className={' w-full rounded px-2 py-3 border-2   placeholder-black placeholder-opacity-40 leading-tight focus:outline-none focus:ring-2  focus:ring-opacity-50 appearance-none '.concat(
        errors
          ? 'focus:ring-red-500  border-red-600 focus:border-red-600'
          : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
      )}
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      {...register}
    />
  )
}
