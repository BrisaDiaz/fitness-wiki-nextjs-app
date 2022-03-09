import Image from 'next/image'

export default function LoadingHeart({ fullHeight }) {
  return (
    <section
      className={'mx-auto  w-full flex flex-col justify-center  items-center select-none '.concat(
        fullHeight ? ' h-screen -mt-30' : 'h-96'
      )}
    >
      <div className=" animate-beat  w-full  flex justify-center items-center">
        <Image
          width={80}
          height={80}
          src="/heartbeat-solid.svg"
          alt="loading..."
        />
      </div>
    </section>
  )
}
