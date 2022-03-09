export default function ListSheet({ children, title }) {
  return (
    <article className="border py-2 w-full  px-4 rounded border-gray-200 shadow-md ">
      <h2 className=" capitalize text-xl  text-center  font-bold text-green-600 ">
        {title}
      </h2>
      <ul className="mt-5">{children}</ul>
    </article>
  )
}
