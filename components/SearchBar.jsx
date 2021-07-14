import Image from 'next/image'
export default function SeachBar({ onChange }) {
  return (
    <div className="flex flex-row justify-center my-5">
      <input
        placeholder="Search..."
        className="relative shadow-md border p-2 py-3  rounded-lg border-solid border-gray-200  w-72  leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none "
        name="searchQuery"
        type="search"
        onChange={onChange}
      />
      <div className=" -ml-8 bg-white z-10 h-5 mt-3 flex items-center">
        <Image
          width={25}
          height={25}
          quality={75}
          src="/loupe.svg"
          alt="search"
        />
      </div>
    </div>
  )
}
