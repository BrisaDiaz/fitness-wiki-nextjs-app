import Image from 'next/image'
export default function Home() {
  return (
    <main className="custom-container bg-dot-pattern bg-repeat relative ">
      <section className="mx-auto max-w-5xl px-2 sm:px-0">
        <h1 className="text-center pt-10 mb-5 px-2 text-3xl sm:text-5xl font-bold text-green-700  drop-shadow-lg ">
          Welcome to WikiFit!!
        </h1>
        <h1 className="text-center  text-xl sm:text-2xl px-2 font-bold text-gray-500 self-align-bottom mb-10">
          Here you will find many easy to follow and delicious recipes that make
          it easy for you to add healthy habits to your routine
        </h1>

        <article className="relative bg-cover  bg-green-400 rounded-xl shadow-xl  bg-center  top-2/4 left-auto  w-7/12 h-44  sm:h-72 lg:h-96 z-0 border-2  border-green-700  ">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/healthy-breakfast-bg.jpg"
            alt="beakfasts"
          />
        </article>

        <article className=" relative  bg-green-400 rounded-xl shadow-xl bg-center bg-cover  h-44 sm:h-72 lg:h-96  w-7/12  top-3/4 ml-auto  z-10 -mt-16 sm:-mt-28 border-2  border-green-700    ">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/healthy-drinks-bg.jpg"
            alt="beakfasts"
          />
        </article>
        <article className="relative h-44 bg-green-400 rounded-xl shadow-xl  bg-center bottom-0  left-0 w-7/12 sm:h-72 lg:h-96 bg-cover z-0 -mt-16  sm:-mt-28 mb-2 border-2 border-green-700  ">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/healthy-pasta-bg.jpg"
            alt="beakfasts"
          />
        </article>
      </section>
      <div className="h-1/2 w-full bg-gradient-to-t  from-green-700 to-transparent  fixed z-20 bottom-0 " />
    </main>
  )
}
