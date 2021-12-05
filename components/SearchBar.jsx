import Image from 'next/image'
export default function SeachBar({ onChange }) {
  return (
    <div className="flex flex-row justify-center my-5">
      <input
        placeholder="Search..."
        className="relative shadow-sm border p-4 py-3 -ml-1   rounded-lg border-solid border-gray-200  w-full max-w-sm  leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none "
        name="searchQuery"
        type="search"
        onChange={onChange}
      />
      <div className=" -ml-10 bg-white z-10 h-5 mt-3 flex items-center">
        <Image
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
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
