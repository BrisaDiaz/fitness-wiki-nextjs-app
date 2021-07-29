import consts from '../consts/calculatorConstants'
import { useForm } from 'react-hook-form'

export default function MacroRadiosForm({ setCustomPlan, setError }) {
  const { DEFAULT_MACROS_INPUTS } = consts
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data, e) => {
    e.preventDefault()
    setError(null)
    const customProts = data.proteins * 1
    const customFats = data.fats * 1
    const customCarbs = data.carbs * 1

    const totalPersentage = customCarbs + customProts + customFats

    if (totalPersentage !== 100)
      return setError('The macros must sum up to 100%')

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
