export default function FormErrors({ errors }) {
  if (Object.keys(errors).length === 0) return null

  const errorsMessages = Object.entries(errors).map((error) => error[1].message)

  return (
    <ul className="my-5">
      {errorsMessages.map((message) => (
        <li
          className="bg-red-100 text-red-500 font-semibold p-2 rounded mb-1 text-sm border border-red-200"
          key={message}
        >
          {message}
        </li>
      ))}
    </ul>
  )
}
