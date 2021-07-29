export default function AddInput({ placeholder, type, register }) {
  return (
    <input
      className=" w-9/12  px-2 py-3 border-b-2 border-gray-300 placeholder-gray-400  leading-tight focus:outline-none focus:border-green-500 focus:border-opacity-50 appearance-none"
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      {...register}
    />
  )
}
