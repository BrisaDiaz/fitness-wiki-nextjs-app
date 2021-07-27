import { useState } from 'react'
import { useForm } from 'react-hook-form'
import consts from '../consts/calculatorConstants'
import getDailyKcals from '../utils/getDailyKcals'
import CalculatorInput from './CalculatorInput'
import CalculatorField from './CalculatorField'
import CalculatorModeSwitch from './CalculatorModeSwitch'
import CalculatorSelect from './CalculatorSelect'
import FormButton from './FormButton'

export default function Calculator({ setCaloriesRequired }) {
  const isStandAloneComponet = setCaloriesRequired ? false : true
  const [system, setSystem] = useState('metric')
  const [totalKcals, setTotalKcals] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.stopPropagation()
    e.preventDefault()

    data.system = system
    data.age = data.age * 1
    data.weight = data.weight * 1
    data.height = data.height * 1
    data.activityLevel = data.activityLevel * 1
    isStandAloneComponet
      ? setTotalKcals(getDailyKcals(data))
      : setCaloriesRequired(getDailyKcals(data))
  }

  return (
    <>
      <article className="mx-auto w-full max-w-sm   ">
        <CalculatorModeSwitch
          options={consts.METRIC_SYSTEMS}
          optionSelected={system}
          setOption={setSystem}
        />

        <form
          data-testid="AMRcalculatorForm"
          onSubmit={handleSubmit(onSubmit)}
          name="calories-calculator"
          className="px-4 py-5 flex flex-col gap-4 bg-white shadow-md border border-gray-200 relative z-10"
        >
          <CalculatorField
            label="Ecuations:"
            name="activityLevel"
            direction="vertical"
          >
            <CalculatorSelect
              register={{ ...register('equation', { required: true }) }}
              options={consts.EQUATIONS}
              fullWidth
              testId="equationSelect"
            />
          </CalculatorField>
          <div className="w-full flex gap-1.5 items-center justify-between">
            <CalculatorField label="Genre:" name="genre">
              <CalculatorSelect
                register={{ ...register('genre', { required: true }) }}
                options={consts.GENRES}
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
                maxValue="300"
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
              options={consts.ACTIVITY_LEVELS}
              fullWidth
            />
          </CalculatorField>

          {isStandAloneComponet && (
            <h2 className="p-2 py-4 text-2xl font-bold text-center bg-green-200 rounded-md text-white border border-green-300">
              Total:
              <span className="ml-1" data-testid="calculator-result">
                {totalKcals} kcals
              </span>
            </h2>
          )}

          <FormButton text="Calculate" />
        </form>

        <ul className="text-sm mt-6 pl-1">
          {consts.EXERCISE_INTENCITIES.map((intencity) => (
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
