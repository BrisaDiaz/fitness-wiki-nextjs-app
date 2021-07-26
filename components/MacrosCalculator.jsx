import AMRcalculator from './AMRcalculator'
import CaloriesPerGoaldCalculator from './CaloriesPerGoaldCalculator'
import PlanSelectorField from './PlanSelectorField'
import MacrosForm from './MacrosForm'
import MacrosCalcResults from './MacrosCalcResults'
import CalculatorModeSwitch from './CalculatorModeSwitch'
import consts from '../consts/calculatorConstants'
import { useState, useEffect } from 'react'
import getMacrosPerNutritionalPlan from '../utils/getMacrosPerNutritionalPlan'

export default function MacrosCalculator() {
  // calories got by user info input or 2000 default
  const [defaultCalories, setDefaultCalories] = useState(2000)
  // calories customized by the user
  const [goaldKcals, setGoaldKcals] = useState(0)
  // switch predifined macros distribution or a custom
  const [planType, setPlanType] = useState('predifined')
  // error on user macros inputs
  const [error, setError] = useState(null)
  // name of the plan select, default firs plan of the list
  const [nutritionalPlan, setNutritionalPlan] = useState(
    consts.NUTRITIONAL_PLANS[0].value
  )
  // custom plan with macros distibution set by user default emty
  const [customPlan, setCustomPlan] = useState({})

  const [planResults, setPlanResults] = useState(
    getMacrosPerNutritionalPlan(goaldKcals, nutritionalPlan, planType)
  )
  // reset the target clories ammount according to new user info inputs
  useEffect(() => {
    setGoaldKcals(defaultCalories)
  }, [defaultCalories])
  // calculate the results for a predifined plan or custom plan
  useEffect(() => {
    setError(null)
    planType === 'predifined'
      ? setPlanResults(
          getMacrosPerNutritionalPlan(goaldKcals, nutritionalPlan, planType)
        )
      : setPlanResults(
          getMacrosPerNutritionalPlan(goaldKcals, customPlan, planType)
        )
  }, [planType, goaldKcals, nutritionalPlan, customPlan])
  return (
    <div className="flex flex-wrap max-w-7xl gap-x-4 gap-y-6 justify-center ">
      <section className="max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-green-500 mb-6 bg-green-100 p-2 text-center">
          Step 1: Calculate your daily calories required
        </h2>
        <AMRcalculator setCaloriesRequired={setDefaultCalories} />
      </section>
      <section className="max-w-xl  w-full flex flex-col">
        <h2 className="text-2xl font-semibold text-green-500 mb-6 bg-green-100 p-2 text-center">
          Step 2: Choose your goals and intencity{' '}
        </h2>

        <CaloriesPerGoaldCalculator
          defaultCalories={defaultCalories}
          goaldKcals={goaldKcals}
          setGoaldKcals={setGoaldKcals}
        />

        <article className="max-w-xl w-full">
          <h2 className="text-2xl font-semibold text-green-500 mb-4 mt-6 bg-green-100 p-2 text-center">
            Step 3: Select/Set your nutritional plan
          </h2>
          <div className="max-w-md mx-auto">
            <CalculatorModeSwitch
              options={consts.PLAN_TYPES}
              optionSelected={planType}
              setOption={setPlanType}
            />

            {planType === 'predifined' ? (
              <PlanSelectorField
                plans={consts.NUTRITIONAL_PLANS}
                planResults={planResults}
                setNutritionalPlan={setNutritionalPlan}
              />
            ) : (
              <MacrosForm setCustomPlan={setCustomPlan} setError={setError} />
            )}
          </div>
        </article>
      </section>
      <section className=" max-w-xl w-full  mb-4">
        <h2 className="text-2xl font-semibold text-green-500 mb-4 bg-green-100 p-2 text-center">
          Step 4: Analyze your results{' '}
        </h2>
        <h4 className=" text-gray-700 my-3 mb-4 text-2xl font-semibold text-center">
          Caloric healthy ranges
        </h4>
        <p>
          The ranges are calculated based on the basic calories needs got from
          the step 1.
        </p>
        <p>
          If the step 1 is skipped, then a caloric need of 2000 Kcals/Day is
          used as default.
        </p>
        <div className="grid gap-y-1 mt-4  font-light px-2 ">
          <div className="flex gap-2 items-center h-6 ">
            <span className=" h-full w-6 bg-green-500 " />
            <p>Recommended</p>
          </div>
          <div className="flex gap-2 items-center h-6 ">
            <span className=" h-full w-6 bg-yellow-300 " />
            <p>Moderately recommended</p>
          </div>
          <div className="flex gap-2 items-center  h-6 ">
            <span className=" h-full w-6 bg-red-500  " />
            <p>Not recommended</p>
          </div>
        </div>
        <h4 className=" text-gray-700 mb-6 mt-4 text-2xl font-semibold text-center">
          Macro calorie radio
        </h4>

        <div className="pie mx-auto shadow-md text-white  tex-xl font-semibold">
          <p className="absolute z-20 bottom-1/4  right-0  mt-2 mr-10">
            0% - 20%
          </p>
          <p className="absolute z-20 right-0 top-1/4 mr-8 ">21% - 49%</p>
          <p className="absolute z-20 left-0 top-1/2 ml-5 -mt-3">50% - 100%</p>
        </div>
      </section>
      <section className="max-w-xl w-full">
        <h2
          className={'text-2xl font-semibold  p-2 text-center  '.concat(
            error
              ? 'text-red-500 mb-6 bg-red-100'
              : 'text-green-500 mb-6 bg-green-100'
          )}
        >
          {error ? 'Error' : `Your results`}
        </h2>
        {/* Display the results or error message */}
        <MacrosCalcResults
          error={error}
          planResults={planResults}
          defaultCalories={defaultCalories}
        />
      </section>
    </div>
  )
}
