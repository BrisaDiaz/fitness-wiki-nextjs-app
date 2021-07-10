export default function FilterTable({ children }) {
  return (
    <section className="flex flex-row flex-wrap gap-2 max-w-6xl mx-auto align-middle justify-start sm:justify-evenly p-3  py-5 border border-solid border-gray-200 shadow-md rounded-md focus:outline-none focus:shadow-outline responsive-font">
      {children}
    </section>
  );
}
