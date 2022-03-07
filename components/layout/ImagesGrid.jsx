import Image from 'next/image'
import env from '@/env'
import React from 'react'
import useScreen from '@/hooks/useScreen'
export default function ImageGrid() {
  const [hasRender, setHasRender] = React.useState(false)
  React.useEffect(() => {
    setHasRender(true)
  }, [])
  // const screen = useScreen()
  return (
    <section className="max-h-10/12 overflow-hidden   max-w-7xl mx-auto ">
      <div className="grid grid-cols-3 md:grid-cols-5  gap-x-2  w-full relative min-w-lg ml-2 md:ml-0 ">
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
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
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
            loading="eager"
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div
          className={' row-span-4     row-start-2  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/rice.jpg"
            alt="lunches"
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
            loading="eager"
          />
        </div>
        <div
          className={'  row-span-4     row-start-1 md:row-start-3  md:row-span-3  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/breakfasts-image.jpg"
            alt="breakfasts"
            width={300}
            height={310}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
            loading="eager"
          />
        </div>
        <div
          className={' row-span-4     row-start-2 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/eggs-potatoes.jpg"
            alt="lunches"
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
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
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>

        <div
          className={'row-span-2     mt-2  row-start-6  '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/pizza-image.jpg"
            alt="pizzas"
            width={300}
            loading="eager"
            height={300}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
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
            src="/pancakes.jpg"
            alt="desserts"
            loading="eager"
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div
          className={'  row-span-4  mt-2   row-start-5  md:row-start-6   '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/soup-image.jpg"
            alt="soups"
            loading="eager"
            width={300}
            height={310}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div
          className={' row-span-3     mt-2  row-start-6 '.concat(
            hasRender ? 'animate-slidBottom' : ''
          )}
        >
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/pie-image.jpg"
            alt="desserts"
            width={300}
            loading="eager"
            height={310}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
      </div>
    </section>
  )
}
