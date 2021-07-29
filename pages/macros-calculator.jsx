import Head from 'next/head'
import { useSession } from 'next-auth/client'
import MacrosCalculator from '@/components/MacrosCalculator'
import useAuthentication from '../hooks/useAuthentication'

export default function MacrosCalculatorPage() {
  const { isLoading, LoadingComponent } = useAuthentication({
    getSession: useSession,
    redirectTo: '/auth/signin',
    mustHaveSession: true
  })
  if (isLoading) return <LoadingComponent />
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
          <title>Macros calculator</title>
          <meta
            name="description"
            content="This macro calculator estimates the macronutrient needs of a person based on their age, physical characteristics, activity level, and body weight goals. Also it allows you to set a macro distrubution rate base on ammount used for different diets or set a persolized rate on your own and in your results you get a feedback addjust to your profile."
          />

          <meta
            name="keywords"
            content="macros,fat loss,bulking,mantain,vegetarian diet,keto diet, paleo diet,mediterranean diet,calorie needs,calories per day,daily caloric intake,calories formulas,calories calculator,harris benedict, mifflin jeor, weight loss formula,MBR,AMR,basal metabolic
        rate,active metabolic rate"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pb-16 pt-10  sm:pt-10 px-1 gap-x-2 mx-auto max-w-7xl overflow-y-hidden">
          <h1 className="text-2xl md:text-3xl px-2  text-green-700 text-center font-bold mb-10 lg:text-4xl">
            Calculate your ideal macronutriens intake
          </h1>
          <MacrosCalculator />
        </div>
      </>
    )
}
