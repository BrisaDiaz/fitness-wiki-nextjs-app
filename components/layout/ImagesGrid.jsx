import Image from 'next/image'
import env from '@/env'
export default function ImageGrid() {
  return (
    <section className="max-h-10/12 overflow-hidden  animate-slideBottom max-w-2xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-3  gap-x-2  w-full relative ">
        <div className="row-span-4      row-start-1">
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/smoothie-image.jpg"
            alt="breakfasts"
            width={300}
            height={410}
            loading="eager"
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div className=" row-span-4     row-start-2 ">
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/salad-image.jpg"
            alt="breakfasts"
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
            loading="eager"
          />
        </div>
        <div className="  row-span-4     row-start-1 ">
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/breakfasts-image.jpg"
            alt="breakfasts"
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
            loading="eager"
          />
        </div>
        <div className="row-span-4     mt-2  row-start-5">
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/pizza-image.jpg"
            alt="breakfasts"
            width={300}
            loading="eager"
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div className=" row-span-3     mt-2  row-start-6 ">
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/pie-image.jpg"
            alt="breakfasts"
            width={300}
            loading="eager"
            height={310}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
        <div className="  row-span-4  mt-2   row-start-5">
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/soup-image.jpg"
            alt="breakfasts"
            loading="eager"
            width={300}
            height={410}
            unoptimized={env.NODE_ENV !== 'PRODUCTION'}
          />
        </div>
      </div>
    </section>
  )
}
