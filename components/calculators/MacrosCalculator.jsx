import useMacroCalculator from '../../hooks/useMacroCalculator'
import AMRcalculator from './AMRcalculator'
import CaloriesPerGoaldCalculator from './CaloriesPerGoaldCalculator'
import MacroRadiosPicker from './MacroRadiosPicker'
import MacrosCalcResults from './MacrosCalcResults'

export default function MacrosCalculator({ children }) {
  const {
    setDefaultCalories,
    setPlanType,
    setNutritionalPlan,
    setCustomPlan,
    setGoaldKcals,
    setErrors,
    goaldKcals,
    planType,
    errors,
    planResults,
    defaultCalories
  } = useMacroCalculator()
  return (
    <div className="flex flex-wrap max-w-7xl gap-x-4 gap-y-6 justify-center ">
      <section className="calculator-field-container">
        <h2 className="calculator-field-title ">
          Step 1: Calculate your daily calories required
        </h2>
        <AMRcalculator setCaloriesRequired={setDefaultCalories} />
      </section>
      <section className="calculator-field-container flex flex-col ">
        <h2 className="calculator-field-title ">
          Step 2: Choose your goals and intencity{' '}
        </h2>
        <div className="mb-6">
          <CaloriesPerGoaldCalculator
            defaultCalories={defaultCalories}
            goaldKcals={goaldKcals}
            setGoaldKcals={setGoaldKcals}
          />
        </div>
        <section className="max-w-2xl  xl:max-w-xl w-full">
          <h2 className=" calculator-field-title  ">
            Step 3: Select/Set your nutritional plan
          </h2>
          <MacroRadiosPicker
            setPlanType={setPlanType}
            setNutritionalPlan={setNutritionalPlan}
            setCustomPlan={setCustomPlan}
            planType={planType}
            planResults={planResults}
            setError={setErrors}
            errors={errors}
          />
        </section>
      </section>
      <section className="calculator-field-container  mb-4">
        <h2 className="calculator-field-title ">
          Step 4: Analyze your results{' '}
        </h2>
        <h4 className=" text-gray-700 my-3 mb-4 text-2xl font-semibold text-center">
          Calorie healthy ranges
        </h4>
        <div className="px-1">
          <p>
            The ranges are calculated based on the caloric needs got from the
            step 1.
          </p>
          <p>
            If the step 1 is skipped, then a caloric need of 2000 Kcals/Day is
            used as default.
          </p>
        </div>
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
        <h4 className=" text-gray-700 mb-4 mt-6 text-2xl font-semibold text-center">
          Macronutrients Radios
        </h4>
        <p className="px-1">
          The amount of grams per macronutrient are calculated based on the
          chosen range and the caloric value that 1gr of it contains.
        </p>
        <ul className="p-2 ">
          <li>
            <span className="font-semibold mr-1 text-gray-700">Carbs:</span>4
            kcal/gr.
          </li>
          <li>
            <span className="font-semibold mr-1 text-gray-700">Proteins:</span>4
            kcal/gr.
          </li>
          <li>
            <span className="font-semibold mr-1 text-gray-700">Fats:</span>9
            kcal/gr.
          </li>
        </ul>
        <div className="pie mx-auto shadow-md text-white  tex-xl font-semibold">
          <p className="absolute z-20 bottom-1/4  right-0  mt-2 mr-10">
            0% - 19%
          </p>
          <p className="absolute z-20 right-0 top-1/4 mr-8 ">20% - 49%</p>
          <p className="absolute z-20 left-0 top-1/2 ml-5 -mt-3">50% - 100%</p>
        </div>
        <p className="text-sm mt-4 p-1 text-center">
          {' '}
          Visual representation of the macro caloric redio.
        </p>
      </section>
      <section className="calculator-field-container ">
        <h2
          className={'text-xl sm:text-2xl font-semibold  p-2 text-center  '.concat(
            errors.length > 0
              ? 'text-red-500 mb-6 bg-red-100'
              : 'calculator-field-title '
          )}
        >
          {errors.length > 0 ? 'Error' : `Your results`}
        </h2>
        {/* Display the results or error message */}

        <MacrosCalcResults
          errors={errors}
          planResults={planResults}
          defaultCalories={defaultCalories}
        />
        {children}
      </section>
    </div>
  )
}
