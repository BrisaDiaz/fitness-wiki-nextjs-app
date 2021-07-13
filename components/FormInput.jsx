export default function FormInput({ name, placeholder, type }) {
  return (
    <input
      className="w-full rounded px-2 py-3 border border-gray-300 placeholder-black placeholder-opacity-40 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none"
      type={type}
      name={name}
      placeholder={placeholder}
      required
    ></input>
  )
}
