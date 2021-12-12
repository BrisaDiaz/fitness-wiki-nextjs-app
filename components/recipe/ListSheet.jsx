export default function ListSheet({ children, title }) {
  return (
    <article className="border py-4 w-full  px-4 rounded border-gray-200 shadow-lg ">
      <h2 className=" uppercase text-xl  text-center  font-bold text-green-600 ">
        {title}
      </h2>
      <ul className="mt-5">{children}</ul>
    </article>
  )
}
