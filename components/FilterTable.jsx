export default function FilterTable({ children }) {
  return (
    <section
      className="flex flex-row flex-wrap gap-2 max-w-6xl mx-auto align-middle justify-evenly px-2 py-4 sm:p-3  sm:py-5 border border-solid border-gray-200 shadow-md rounded-md focus:outline-none focus:shadow-outline
    "
    >
      {children}
    </section>
  )
}
