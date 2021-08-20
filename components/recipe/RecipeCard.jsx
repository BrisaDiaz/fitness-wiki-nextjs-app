import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function RecipeCard({ recipe, children }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex justify-end sm:justify-start "
    >
      {isHovered && <div>{children}</div>}

      <article className="w-72 mx-auto  pb-4 sm:p-4 flex flex-col sm:flex-row  sm:items-center shadow-md rounded sm:w-full h-auto transition ease-in-out transform hover:shadow-lg ">
        <div className=" mx-auto sm:mx-0 h-44 overflow-y-hidden w-full sm:w-3/12  relative flex items-center  sm:h-24  justify-center	rounded-t ">
          <Image
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            className="rounded shadow mx-auto sm:self-center sm:rounded"
            width={320}
            height={260}
            src={recipe?.image}
            alt={recipe?.title}
          />
        </div>
        <div className="flex flex-col justify-start px-3 w-full sm:w-9/12">
          <div className="sm:px-2  mt-2 sm:mt-0 ">
            <div className="overflow-x-hidden mb-1 w-full overflow-ellipsis  text-green-400 ">
              <Link href={`/recipe/${recipe?.id}`} passHref>
                <a
                  href="!#"
                  className=" text-lg  w-full leading-3 font-serif whitespace-nowrap  	 "
                >
                  {recipe?.title}
                </a>
              </Link>
            </div>
            <div className="flex flex-row  justify-between gap-x-2 flex-wrap w-full">
              <p className="opacity-80 leading-5 text-sm ">
                <span className="text-gray-600  ">Energy:</span>
                {` ${recipe.calories}`}
              </p>
              <div className="flex flex-row  gap-1  ">
                <Image
                  className="w-4 align-self-start"
                  src="/clock-regular.svg"
                  unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                  width={15}
                  height={15}
                  alt="time"
                />
                <p className="opacity-80 leading-5 text-sm ">
                  {recipe?.readyInMinutes}
                  min
                </p>
              </div>
            </div>
            <p className="opacity-80 leading-5 text-sm ">
              <span className="text-gray-600  ">Servings:</span>
              {` ${recipe?.servings}`}
            </p>
            <div className="overflow-x-hidden w-full overflow-ellipsis   ">
              <p className="opacity-80 eading-none text-sm whitespace-nowrap  w-full	 ">
                <span className="text-gray-600 mr-1 ">Diets:</span>
                {recipe?.diets}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
