import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function RecipeCard({ recipe, children }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/recipe/${recipe?.id}?calories=${recipe.calories}`} passHref>
      <a
        href="!#"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={() => setIsHovered(true)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        className="group"
      >
        <div
          className="relative flex justify-end sm:justify-start border sm:border-gray-200  border-transparent  hover:border-gray-300  hover:p-2 sm:hover:p-0 transition duration-150 z-20 group-focus:p-2 sm:group-focus:p-0 transition-all  duration-500"
          data-testid="recipeCard"
        >
          <div
            className={isHovered ? 'opacity-1 -top-full ' : 'opacity-0 top-0  '}
          >
            {children}
          </div>

          <article className="w-72 mx-auto  pb-4 sm:p-4 flex flex-col sm:flex-row  sm:items-center  sm:shadow-sm rounded sm:w-full h-auto transition ease-in-out transform sm:hover:shadow-md sm:border border-gray-100   sm:hover:bg-gray-50 ">
            <div className=" mx-auto sm:mx-0 h-44 overflow-y-hidden w-full sm:w-3/12  relative flex items-center  sm:h-24  justify-center	rounded-t  relative -z-10">
              <Image
                className="rounded shadow mx-auto sm:self-center sm:rounded"
                width={320}
                height={260}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/recipe-placeholder.png"
                src={recipe?.image}
                alt={recipe?.title}
              />
            </div>
            <div className="flex flex-col justify-start sm:px-4 py-2  w-full sm:w-9/12 ">
              <div className="sm:px-2  mt-2 sm:mt-0 flex flex-col  gap-1">
                <div className="mb-1 w-full overflow-hidden  text-green-600 ">
                  <h4 className=" text-lg  w-full leading-3 py-1 font-serif truncate whitespace-nowrap overflow-ellipsis   	 ">
                    {recipe?.title}
                  </h4>
                </div>
                <div className="flex flex-row  justify-between gap-x-2 flex-wrap w-full">
                  <p className="opacity-80 leading-5 text-sm ">
                    <span className="text-gray-600  ">Energy:</span>
                    {` ${recipe.calories}`}
                  </p>
                  <div className="flex flex-row  gap-1  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="#16A34A"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>

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
                  <p className="opacity-80 eading-none text-sm whitespace-nowrap  overflow-x-hidden w-full overflow-ellipsis  	 ">
                    <span className="text-gray-600 mr-1 ">Diets:</span>
                    {recipe?.diets}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </a>
    </Link>
  )
}
