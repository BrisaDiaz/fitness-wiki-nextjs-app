export default function FilterTable({ children }) {
  return (
    <section
      className="flex flex-row flex-wrap gap-y-4 max-w-6xl mx-auto align-middle justify-evenly py-4 text-sm
    "
    >
      {children}
    </section>
  )
}
