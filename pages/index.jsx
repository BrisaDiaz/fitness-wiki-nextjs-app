import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WikiFit</title>
        <meta name="description" content="home page" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="custom-container bg-dot-pattern bg-repeat relative ">
        <section className="mx-auto max-w-5xl px-1 sm:px-2 pb-10">
          <h1 className="text-center pt-10 mb-5 px-2 text-3xl sm:text-5xl font-bold text-green-700  drop-shadow-lg easy-in-out hover:z-30">
            Welcome to WikiFit!!
          </h1>
          <h1 className="text-center  text-xl sm:text-2xl px-2 font-bold text-gray-500 self-align-bottom mb-10 sm:mb-16 hove:scale-105 ">
            Here you will find many easy to follow and delicious recipes that
            make it easy for you to add healthy habits to your routine
          </h1>
          {/* image 1 */}
          <article className="relative bg-cover  bg-green-400 rounded-xl shadow-xl  bg-center  top-2/4 left-auto  w-9/12    sm:w-7/12 h-44  sm:h-72 lg:h-96 z-0 transition duration-500 ease-in-out transform hover:scale-105 hover:z-30 animate-appearLeft">
            <Image
              className="rounded-xl "
              layout="fill"
              src="/healthy-breakfast-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />
          </article>
          {/* image 2 */}
          <article className=" relative  bg-green-400 rounded-xl shadow-xl bg-center bg-cover  h-44 sm:h-72 lg:h-96 w-9/12    sm:w-7/12  top-3/4 ml-auto  z-10 -mt-10 sm:-mt-28 transition duration-500 ease-in-out transform hover:scale-110 hover:z-30 animate-appearRight ">
            <Image
              className="rounded-xl"
              layout="fill"
              src="/healthy-drinks-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />
          </article>
          {/* image 3 */}
          <article className="relative h-44 bg-green-400 rounded-xl shadow-xl  bg-center bottom-0  left-0 w-9/12    sm:w-7/12 sm:h-72 lg:h-96 bg-cover z-0 -mt-10 sm:-mt-28 mb-2 transition duration-500 ease-in transform hover:scale-105 hover:z-30  animate-appearLeft">
            <Image
              className="rounded-xl"
              layout="fill"
              src="/healthy-pasta-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />
          </article>
        </section>
        <div className="h-1/4 w-full bg-gradient-to-t  from-green-700 to-transparent  fixed z-40 bottom-0  " />
      </section>
    </>
  )
}
