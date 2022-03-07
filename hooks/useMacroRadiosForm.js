import constants from '../constants/calculatorConstants'
import { useForm } from 'react-hook-form'

export default function useMacroRadiosForm({
  setCustomPlan,
  setError,

  cleanError
}) {
  const { DEFAULT_MACROS_INPUTS, ERRORS } = constants
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()

    const customProts = data.proteins * 1
    const customFats = data.fats * 1
    const customCarbs = data.carbs * 1

    const totalPercentage = customCarbs + customProts + customFats

    if (totalPercentage !== 100) return setError(ERRORS.macroRadios)
    cleanError(ERRORS.macroRadios)

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
