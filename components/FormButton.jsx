export default function FormButton({ text, small, tabIndex, ...other }) {
  return (
    <button
      tabIndex={tabIndex || 0}
      className={'w-full bg-green-700 hover:bg-green-700 sm: py-2  rounded font-semibold text-white shadow hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-opacity-50  '.concat(
        small ? '' : 'text-lg'
      )}
      type="submit"
      data-testid="submitBtn"
      {...other}
    >
      {text}
    </button>
  )
}
