import FormButton from './FormButton'
import consts from '@/consts/calculatorConstants'
export default function MacrosForm({ setCustomPlan, setError }) {
  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)

    const customProts = e.target.proteins.value * 1
    const customFats = e.target.fats.value * 1
    const customCarbs = e.target.carbs.value * 1

    const totalPersentage = customCarbs + customProts + customFats

    if (totalPersentage !== 100)
      return setError('The macros must sum up to 100%')

    const customPlan = {}

    setCustomPlan(customPlan)
  }
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="border border-gray-200 py-4 px-2 sm:px-4 shadow-md w-full"
    >
      <div className="flex gap-4 mb-6 flex-wrap justify-evenly ">
        {consts.DEFAULT_MACROS_INPUTS.map((input) => (
          <div key={input.info} className="flex gap-2 justify-evenly flex-wrap">
            <div className="grid text-center justify-items-center text-gray-700">
              <label
                htmlFor={input.info}
                className="text-2xl mr-auto text-green-500 font-semibold capitalize"
              >
                {input.info}
              </label>
              <div className="flex items-center mx-auto">
                <input
                  id={input.info}
                  type="number"
                  min="0"
                  max="100"
                  name={input.info}
                  className="p-2 my-1 w-16 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 appearance-none text-center outline-none font-semibold  text-xl"
                  defaultValue={input.defaultValue}
                />
                <p className="text-2xl ml-1">%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FormButton text="Calculate" />
    </form>
  )
}
