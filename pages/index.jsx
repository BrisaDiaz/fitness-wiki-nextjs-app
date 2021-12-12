import Head from 'next/head'
import ImageGrid from '@/components/layout/ImagesGrid'
export default function Home() {
  return (
    <>
      <Head>
        <title>WikiFit</title>

        <meta
          name="description"
          content="WikiFit is your trusted source for information on eating well and creating customs diet plans addjusted to your needs. "
        />
        <meta
          name="keywords"
          content="kikifit,healthy,fitness,recipes, recipes step by step,fitness calculators,macros,calories,diet plans,fat loss,bulking,mass gain,breackfasts,meals,lunchs,snacks,preps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="custom-container bg-dot-pattern bg-repeat relative ">
        <section className="mx-auto max-w-5xl px-1 sm:px-2 pt-10 sm:pt-16 ">
          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-2 bg-white w-auto p-2 mx-auto">
            <span className="block xl:inline">Welcome to </span>
            <span className="block text-green-800 xl:inline">WikiFit</span>
          </h1>
          <h2 className="sm:text-center p-2 pb-4 text-lg sm:text-2xl sm:leading-10 font-medium self-align-bottom mb-10 sm:mb-16 hove:scale-105 bg-white rounded-full  text-gray-500">
            Here you will find many easy to follow healthy and delicious recipes
            alongside tools that will make it easy for you to add healthy habits
            to your routine.
          </h2>
          <ImageGrid />
        </section>
        <div className="h-1/4 w-full bg-gradient-to-t  from-green-800 to-transparent  fixed z-40 bottom-0  " />
      </section>
    </>
  )
}
