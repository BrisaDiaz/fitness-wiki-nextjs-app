import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WikiFit</title>

        <meta
          name="description"
          content="WikiFit is your trusted source for information on eating well and creating customs diet plans addjusted to your needs. "
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="custom-container bg-dot-pattern bg-repeat relative ">
        <section className="mx-auto max-w-5xl px-1 sm:px-2 pb-10">
          <h1 className="text-center pt-10 mb-5 px-2 text-3xl sm:text-5xl font-bold text-green-700  drop-shadow-lg easy-in-out  ">
            Welcome to WikiFit!!
          </h1>

          <h1 className="text-center  text-xl sm:text-2xl px-2 font-semibold text-gray-500 self-align-bottom mb-10 sm:mb-16 hove:scale-105 bg-white rounded-full ">
            Here you will find many easy to follow and delicious recipes and
            nutritional tools that make it easy for you to add healthy habits to
            your routine.
          </h1>

          {/* image 1 */}
          <article className="group  relative bg-cover  bg-green-400 rounded-xl shadow-xl  bg-center  top-2/4 left-auto  w-9/12    sm:w-7/12 h-44  sm:h-80 lg:h-96 z-0 transition duration-500 ease-in transform hover:scale-105    animate-appearLeft flex items-center justify-center  ">
            <Image
              className="rounded-xl   "
              layout="fill"
              src="/healthy-breakfast-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />

            <h3 className="text-2xl sm:text-4xl lg:text-5xl  font-bold text-center relative z-30 opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105  w-full h-full  py-16 sm:py-28 text-green-700 group-hover:text-white border-b-2  text-shadow">
              Light breackfasts
            </h3>
          </article>
          {/* image 2 */}
          <article className="group relative  bg-green-400 rounded-xl shadow-xl bg-center bg-cover  h-44 sm:h-80 lg:h-96 w-9/12    sm:w-7/12  top-3/4 ml-auto  z-10 -mt-10 sm:-mt-28 transition duration-500 ease-in transform hover:scale-105  animate-appearRight ">
            <Image
              className="rounded-xl  "
              layout="fill"
              src="/healthy-drinks-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />
            <h3 className="text-2xl sm:text-4xl  lg:text-5xl  font-bold text-center relative z-30 opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105  w-full h-full  py-16 sm:py-28  text-green-700 group-hover:text-white text-shadow">
              Refreshig drinks
            </h3>
          </article>

          {/* image 3 */}
          <article className="group relative h-44 bg-green-400 rounded-xl shadow-xl  bg-center bottom-0  left-0 w-9/12    sm:w-7/12 sm:h-80 lg:h-96 bg-cover z-0 -mt-10 sm:-mt-28 mb-2 transition duration-500 ease-in transform hover:scale-105  animate-appearLeft  ">
            <Image
              className="rounded-xl "
              layout="fill"
              src="/healthy-pasta-bg.jpg"
              alt="beakfasts"
              unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
            />
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center relative z-40 opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105  w-full h-full py-16 sm:py-28  text-green-700 group-hover:text-white text-shadow">
              Heathy dinners
            </h3>
          </article>
        </section>
        <div className="h-1/4 w-full bg-gradient-to-t  from-green-700 to-transparent  fixed z-40 bottom-0  " />
      </section>
    </>
  )
}
