import Head from 'next/head'
import { useSession } from 'next-auth/client'
import MacrosCalculator from '@/components/calculators/MacrosCalculator'
import useAuthentication from '../hooks/useAuthentication'
import DeclaimerText from '@/components/calculators/DeclaimerText'
export default function MacrosCalculatorPage() {
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
          <title>Macros calculator</title>
          <meta
            name="description"
            content="This macro calculator estimates the macronutrient needs of a person based on their age, physical characteristics, activity level, and body weight goals. Also it allows you to set a macro distribution rate base on amount used for different diets or set a personalized rate on your own and in your results you get a feedback adjust to your profile."
          />

          <meta
            name="keywords"
            content="macros,fat loss,bulking,maintain,vegetarian diet,keto diet, paleo diet,mediterranean diet,calorie needs,calories per day,daily caloric intake,calories formulas,calories calculator,harris benedict, mifflin jeor, weight loss formula,MBR,AMR,basal metabolic
        rate,active metabolic rate"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="page-title">Macronutrients calculator</h1>
        <div className="page pb-6 gap-x-2 lg:flex ">
          <MacrosCalculator />
          <section className="w-full mx-auto max-w-sm">
            <DeclaimerText />
          </section>
        </div>
      </>
    )
}
