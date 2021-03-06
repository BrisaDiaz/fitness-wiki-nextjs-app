import Head from 'next/head'
import { useSession } from 'next-auth/client'
import useAuthentication from '../hooks/useAuthentication'
import MealsSizeCalculator from '@/components/calculators/MealsSizeCalculator'
import DeclaimerText from '@/components/calculators/DeclaimerText'
export default function MealSizeCalculatorPage() {
  const { isLoading, LoadingComponent } = useAuthentication({
    getSession: useSession,
    redirectTo: '/auth/signin',
    mustHaveSession: true
  })
  if (isLoading) return <LoadingComponent fullHeight />
  if (!isLoading)
    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <meta
            name="description"
            content="This calculator returns a daily meal plan that includes calories per meal and your macronutrient grams according to the number of meals and the calorie intake per day provided, along with your results, you get an estimate of the amount of water and fiber that must consume."
          />

          <meta
            name="keywords"
            content="macros,fat loss,bulking,maintain,vegetarian diet, iet, calories per day,daily caloric intake,calories formulas,calories calculator,calories per meals, macronutrients per meal,water intake,fiber intake"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="page pb-6  ">
          <h1 className="page-title">Meal sizes calculator</h1>
          <div className=" gap-x-2 lg:flex ">
            <MealsSizeCalculator />
            <section className=" w-full mx-auto max-w-sm">
              <DeclaimerText />
            </section>
          </div>
        </main>
      </>
    )
}
