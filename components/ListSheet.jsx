export default function ListSheet({ children, title }) {
  return (
    <article className="border px-2 py-4   sm:px-4 rounded border-gray-200 shadow-lg ">
      <h2 className=" uppercase text-xl sm:text-2xl  text-center  font-bold text-green-400">
        {title}
      </h2>
      <ul className="mt-5">{children}</ul>
    </article>
  );
}
