import Image from 'next/image'

export default function LoadingHeart() {
  return (
    <section className="mx-auto  w-full flex flex-col justify-center h-96 items-center select-none">
      <div className=" animate-bite w-full  flex justify-center ">
        <Image
          width={80}
          height={80}
          src="/heartbeat-solid.svg"
          alt="loading..."
          unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        />
      </div>
    </section>
  )
}
