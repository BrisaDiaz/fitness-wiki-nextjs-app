export default function ConfirmationModal({ message, setResponse }) {
  return (
    <aside className="fixed z-50 transform -translate-x-2/4  p-4  border bg-white rounded-xl left-2/4  shadow-xl w-11/12 border-gray-100 w- sm:max-w-xl top-10">
      <p>{message}</p>
      <div className="flex gap-2 px-4 mt-4 ml-auto max-w-min">
        <button
          className="btn-primary max-w-min"
          onClick={() => setResponse(true)}
          name="accept"
        >
          Accept
        </button>
        <button
          className="btn-secondary max-w-min"
          onClick={() => setResponse(false)}
          name="cancel"
        >
          {' '}
          Cancel
        </button>
      </div>
    </aside>
  )
}
