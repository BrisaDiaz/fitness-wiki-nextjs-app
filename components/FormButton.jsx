export default function FormButton({ text }) {
  return (
    <button
      className="w-full bg-green-600 hover:bg-green-700 text-lg py-2  rounded font-semibold text-white shadow hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-opacity-50  "
      type="submit"
    >
      {text}
    </button>
  )
}
