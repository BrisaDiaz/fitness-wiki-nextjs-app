import consts from '../consts/calculatorConstants'
import { useForm } from 'react-hook-form'

export default function MacroRadiosForm({ setCustomPlan, setErrors, errors }) {
  const { DEFAULT_MACROS_INPUTS, ERRORS } = consts
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()

    const cleanError = errors.filter((error) => error !== ERRORS.macroRadios)

    const customProts = data.proteins * 1
    const customFats = data.fats * 1
    const customCarbs = data.carbs * 1

    const totalPersentage = customCarbs + customProts + customFats

    if (totalPersentage !== 100)
      return setErrors([...errors, ERRORS.macroRadios])

    setErrors(cleanError)

    const customPlan = {
      name: 'custom plan',
      macros: {
        carbs: {
          value: customCarbs
        },
        proteins: {
          value: customProts
        },
        fats: {
          value: customFats
        }
      }
    }

    setCustomPlan(customPlan)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    DEFAULT_MACROS_INPUTS
  }
}
