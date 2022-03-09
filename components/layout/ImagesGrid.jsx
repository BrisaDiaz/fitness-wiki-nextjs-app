import Image from 'next/image'

import React from 'react'
import useScreen from '@/hooks/useScreen'
export default function ImageGrid() {
  const [hasRender, setHasRender] = React.useState(false)
  React.useEffect(() => {
    setHasRender(true)
  }, [])
  const screen = useScreen()

  return (
    <section className="   max-w-7xl mx-auto ">
      <div className="grid grid-cols-3 md:grid-cols-5  gap-x-2  w-full relative min-w-lg   ">
        <div
          className={' row-span-4     -row-start-2 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/salad-image.jpg"
            alt="salads"
            objectFit="cover"
            width={300}
            height={410}
            loading="eager"
          />
        </div>
        <div
          className={'row-span-4    row-start-1 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/smoothie-image.jpg"
            alt="smoothies"
            width={300}
            height={410}
            objectFit="cover"
            loading="eager"
          />
        </div>
        <div
          className={' row-span-4   hidden md:block     row-start-2  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/rice.jpg"
            objectFit="cover"
            alt="lunches"
            width={300}
            height={410}
            loading="eager"
          />
        </div>
        <div
          className={'  row-span-4     row-start-2 md:row-start-3  md:row-span-3  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/breakfasts-image.jpg"
            alt="breakfasts"
            objectFit="cover"
            width={300}
            height={screen.width >= 768 ? 310 : 410}
            loading="eager"
          />
        </div>
        <div
          className={' row-span-4   hidden md:block  row-start-2 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/eggs-potatoes.jpg"
            objectFit="cover"
            alt="lunches"
            width={300}
            height={410}
            loading="eager"
          />
        </div>
        <div
          className={' row-span-4     mt-2  row-start-5 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/chicken-salad.jpg"
            alt="lunches"
            width={300}
            loading="eager"
            height={410}
            objectFit="cover"
          />
        </div>

        <div
          className={'row-span-3     mt-2  row-start-6  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/pizza-image.jpg"
            objectFit="cover"
            alt="pizzas"
            width={300}
            loading="eager"
            height={310}
          />
        </div>
        <div
          className={' row-span-4       row-start-5 mt-2 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="fill"
            width={300}
            src="/pancakes.jpg"
            alt="desserts"
            loading="eager"
            objectFit="cover"
          />
        </div>
        <div
          className={'  row-span-4  mt-2  hidden md:block   row-start-5  md:row-start-6   '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/soup-image.jpg"
            alt="soups"
            loading="eager"
            objectFit="cover"
            width={300}
            height={310}
          />
        </div>
        <div
          className={' row-span-3   hidden md:block    mt-2  row-start-6 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/pie-image.jpg"
            objectFit="cover"
            alt="desserts"
            width={300}
            loading="eager"
            height={310}
          />
        </div>
      </div>
      {screen.width < 768 ? (
        <div className="grid grid-cols-3 md:hidden grid-rows-4  gap-x-2  w-full  min-w-lg ">
          <div
            className={' row-span-4       mt-2 '.concat(
              hasRender ? 'animate-slidBottom' : ''
            )}
          >
            <Image
              className="rounded-xl  "
              layout="fill"
              src="/eggs-potatoes.jpg"
              alt="lunches"
              loading="eager"
              objectFit="cover"
            />
          </div>
          <div
            className={'  row-span-4  mt-2    '.concat(
              hasRender ? 'animate-slidBottom' : ''
            )}
          >
            <Image
              className="rounded-xl "
              layout="responsive"
              src="/soup-image.jpg"
              alt="soups"
              loading="eager"
              objectFit="cover"
              width={300}
              height={410}
            />
          </div>
          <div
            className={' row-span-4     mt-2  r'.concat(
              hasRender ? 'animate-slidBottom' : ''
            )}
          >
            <Image
              className="rounded-xl  "
              layout="responsive"
              src="/pie-image.jpg"
              objectFit="cover"
              alt="desserts"
              width={300}
              loading="eager"
              height={410}
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
