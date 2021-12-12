import Image from 'next/image'
export default function ImageGrid() {
  return (
    <section className="max-h-10/12 overflow-hidden  animate-slideBottom">
      <div className="grid grid-cols-3 sm:grid-cols-3 auto-rows-auto   gap-x-2  w-full relative ">
        <div className="row-span-4      row-start-1">
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/smoothie-image.jpg"
            alt="beakfasts"
            width={300}
            height={410}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            priority={true}
          />
        </div>
        <div className=" row-span-4     row-start-2">
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/salad-image.jpg"
            alt="beakfasts"
            width={300}
            height={410}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
          />
        </div>
        <div className="  row-span-4     row-start-1 ">
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/breackfast-image.jpg"
            alt="beakfasts"
            width={300}
            height={410}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            priority={true}
          />
        </div>
        <div className="row-span-4     mt-2  row-start-5">
          <Image
            className="rounded-xl  max-w-full"
            layout="responsive"
            src="/pizza-image.jpg"
            alt="beakfasts"
            width={300}
            height={410}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            priority={true}
          />
        </div>
        <div className=" row-span-3     mt-2  row-start-6 ">
          <Image
            className="rounded-xl  "
            layout="responsive"
            src="/pie-image.jpg"
            alt="beakfasts"
            width={300}
            height={310}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
          />
        </div>
        <div className="  row-span-4  mt-2   row-start-5">
          <Image
            className="rounded-xl "
            layout="responsive"
            src="/soup-image.jpg"
            alt="beakfasts"
            width={300}
            height={410}
            unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}