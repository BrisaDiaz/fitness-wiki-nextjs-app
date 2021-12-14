import CalculatorSelect from './CalculatorSelect'
export default function PlanSelectorField({
  setNutritionalPlan,
  planResults,
  plans
}) {
  return (
    <article className="border bg-white border-gray-200 pt-4 px-2 sm:px-4 shadow-md">
      <CalculatorSelect
        options={plans}
        name="nutritional-plan"
        fullWidth
        testId="nutritional-plan"
        onChange={(e) => setNutritionalPlan(e.target.value)}
      />
      <div className="flex gap-4 mb-6 flex-wrap justify-evenly">
        {planResults?.macros?.map((macro) => (
          <div
            key={macro.persentage + macro.name}
            className="flex flex-col text-center text-xl capitalize pt-4 gap-x-2 text-gray-700 "
          >
            <h4 className="text-lg  mr-auto font-semibold text-green-700 ">
              {macro.name}
            </h4>

            <span className="text-xl">{macro.persentage}%</span>
          </div>
        ))}
      </div>
    </article>
  )
}
