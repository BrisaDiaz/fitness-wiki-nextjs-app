import useMacroRadiosForm from '../../hooks/useMacroRadiosForm'
import FormButton from '../FormButton'

export default function MacroRadiosForm({
  setCustomPlan,
  setError,

  cleanError
}) {
  const { register, handleSubmit, onSubmit, DEFAULT_MACROS_INPUTS } =
    useMacroRadiosForm({ setCustomPlan, setError, cleanError })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-gray-200 py-4 px-2 sm:px-4 shadow-md w-full bg-white "
    >
      <div className="flex gap-1 mb-6 flex-wrap justify-evenly ">
        {DEFAULT_MACROS_INPUTS.map((input) => (
          <div key={input.info} className="flex gap-2 justify-evenly flex-wrap">
            <div className="grid text-center justify-items-center text-gray-700">
              <label
                htmlFor={input.info}
                className="text-lg   -ml-5   text-green-700 font-semibold capitalize "
              >
                {input.info}
              </label>
              <div className="flex items-center mx-auto">
                <input
                  id={input.info}
                  type="number"
                  min="0"
                  max="100"
                  data-testid={input.info + 'Radio'}
                  name={input.info}
                  {...register(input.info)}
                  className="p-2 my-1 w-16 border border-gray-200 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 appearance-none text-center outline-none font-light  text-xl"
                  defaultValue={input.defaultValue}
                />
                <p className="text-xl ml-1">%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FormButton text="Calculate" />
    </form>
  )
}
