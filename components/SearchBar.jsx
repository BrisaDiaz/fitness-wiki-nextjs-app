import Image from 'next/image'
export default function SeachBar({ onChange }) {
  return (
    <div className="flex flex-row justify-center my-5 -ml-2">
      <input
        placeholder="Search..."
        className="relative shadow-sm border p-4 py-3 -ml-1   rounded-lg border-solid border-gray-200  w-full max-w-sm  leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 f appearance-none "
        name="searchQuery"
        type="search"
        onChange={onChange}
      />
      <div className=" -ml-10 bg-white z-10 h-5 mt-3 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 24 24"
          fill="#16A34A"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
    </div>
  )
}
