import useAMRCalculator from '../../hooks/useAMRCalculator'
import CalculatorInput from './CalculatorInput'
import CalculatorField from './CalculatorField'
import CalculatorModeSwitch from './CalculatorModeSwitch'
import CalculatorSelect from './CalculatorSelect'
import FormButton from '../FormButton'
export default function Calculator({ setCaloriesRequired }) {
  const {
    setSystem,
    register,
    handleSubmit,
    onSubmit,
    totalKcals,
    system,
    errors,
    isStandAloneComponet,
    METRIC_SYSTEMS,
    EQUATIONS,
    GENRES,
    ACTIVITY_LEVELS,
    EXERCISE_INTENCITIES
  } = useAMRCalculator({ setCaloriesRequired })
  return (
    <>
      <article className="mx-auto w-full max-w-sm   ">
        <CalculatorModeSwitch
          options={METRIC_SYSTEMS}
          optionSelected={system}
          setOption={setSystem}
        />

        <form
          data-testid="AMRcalculatorForm"
          onSubmit={handleSubmit(onSubmit)}
          name="calories-calculator"
          className="px-4 py-5 flex flex-col gap-4  shadow-md border border-gray-300 relative z-10"
        >
          <CalculatorField
            label="Ecuations:"
            name="activityLevel"
            direction="vertical"
          >
            <CalculatorSelect
              register={{ ...register('equation', { required: true }) }}
              options={EQUATIONS}
              fullWidth
              testId="equationSelect"
            />
          </CalculatorField>
          <div className="w-full flex gap-1.5 items-center justify-between">
            <CalculatorField label="Genre:" name="genre">
              <CalculatorSelect
                register={{ ...register('genre', { required: true }) }}
                options={GENRES}
                testId="genreSelect"
              />
            </CalculatorField>
            <CalculatorField label="Age:" name="age">
              <CalculatorInput
                name="age"
                placeholder="years"
                maxValue="150"
                register={{ ...register('age', { required: true }) }}
                step="1"
                errors={errors}
              />
            </CalculatorField>
          </div>
          <div className="w-full flex gap-1.5 items-center justify-between">
            <CalculatorField label="Weight:" name="weight">
              <CalculatorInput
                name="weight"
                placeholder={system === 'metric' ? 'kg' : 'lbs'}
                maxValue="1000"
                register={{ ...register('weight', { required: true }) }}
                step={system === 'metric' ? '1' : 'any'}
                errors={errors}
              />
            </CalculatorField>
            <CalculatorField
              label="Height:"
              name="height"
              step={system === 'metric' ? '1' : 'any'}
            >
              <CalculatorInput
                register={{ ...register('height', { required: true }) }}
                name="height"
                placeholder={system === 'metric' ? 'cm' : 'in'}
                maxValue="400"
                step={system === 'metric' ? '1' : 'any'}
                errors={errors}
              />
            </CalculatorField>
          </div>
          <CalculatorField
            label="Activity levels:"
            name="activityLevel"
            direction="vertical"
          >
            <CalculatorSelect
              register={{ ...register('activityLevel', { required: true }) }}
              testId="activitySelect"
              options={ACTIVITY_LEVELS}
              fullWidth
            />
          </CalculatorField>

          {isStandAloneComponet && (
            <h2 className="p-2 py-4 text-2xl font-bold text-center bg-green-300 rounded-md text-white border border-green-400">
              Total:
              <span className="ml-1" data-testid="calculator-result">
                {totalKcals} kcals
              </span>
            </h2>
          )}

          <FormButton text="Calculate" />
        </form>

        <ul className="text-sm mt-6 pl-1 ">
          {EXERCISE_INTENCITIES.map((intencity) => (
            <li key={intencity.name}>
              <span className="font-semibold ">{intencity.name + ': '}</span>
              {intencity.definition}
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
