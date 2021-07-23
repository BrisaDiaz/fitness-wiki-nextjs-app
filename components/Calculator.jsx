import { useState } from 'react'
import { useForm } from 'react-hook-form'
import consts from '../consts/calculatorConstants'
import getDailyKcals from '../utils/getDailyKcals'
import CalculatorInput from './CalculatorInput'
import CalculatorField from './CalculatorField'
import CalculatorSelect from './CalculatorSelect'
import FormButton from './FormButton'

export default function Calculator() {
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
    setTotalKcals(getDailyKcals(data))
  }
  return (
    <>
      <article className="mx-auto w-full max-w-sm   ">
        <span
          onClick={() => setSystem('metric')}
          className={'p-2 rounded-t leading-loose	font-semibold text-white mr-1 cursor-pointer shadow-md '.concat(
            system === 'metric' ? 'bg-green-600' : 'bg-green-300 '
          )}
        >
          Metric
        </span>
        <span
          onClick={() => setSystem('imperial')}
          className={'p-2 rounded-t leading-loose	font-semibold text-white  cursor-pointer shadow-md '.concat(
            system === 'imperial' ? 'bg-green-600' : 'bg-green-300 '
          )}
        >
          Imperial
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          name="calories-calculator"
          className="px-4 py-5 flex flex-col gap-4 bg-gray-100 shadow border border-gray-200 relative z-10"
        >
          <CalculatorSelect
            register={{ ...register('equation', { required: true }) }}
            options={consts.EQUATIONS}
            fullWidth
            testId="equationSelect"
          />
          <CalculatorField
            label="Genre:"
            name="genre"
            image="/restroom-solid.svg"
          >
            <CalculatorSelect
              register={{ ...register('genre', { required: true }) }}
              options={consts.GENRES}
              testId="genreSelect"
            />
          </CalculatorField>
          <CalculatorField
            label="Age:"
            name="age"
            image="/birthday-cake-solid.svg"
          >
            <CalculatorInput
              name="age"
              placeholder="years"
              maxValue="150"
              register={{ ...register('age', { required: true }) }}
              step="1"
              errors={errors}
            />
          </CalculatorField>
          <CalculatorField
            label="Weight:"
            name="weight"
            image="/weight-solid.svg"
          >
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
            image="/ruler-solid.svg"
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

          <CalculatorField
            label="Activity levels:"
            name="activityLevel"
            image="/dumbbell-solid.svg"
            direction="vertical"
          >
            <CalculatorSelect
              register={{ ...register('activityLevel', { required: true }) }}
              testId="activitySelect"
              options={consts.ACTIVITY_LEVELS}
              fullWidth
            />
          </CalculatorField>
          <h2 className="p-2 py-4 text-2xl font-bold text-center bg-green-200 rounded-md text-white border border-green-300">
            Total:
            <span className="ml-1" data-testid="calculator-result">
              {totalKcals} kcals
            </span>
          </h2>
          <FormButton text="Calculate" />
        </form>

        <ul className="text-sm mt-4 list-disc">
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
