import { useState } from 'react'
import { useForm } from 'react-hook-form'
import consts from '../consts/calculatorConstants'
import getDailyKcals from '../utils/getDailyKcals'
export default function useAMRCalculator({ setCaloriesRequired }) {
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
  const {
    METRIC_SYSTEMS,
    EQUATIONS,
    GENRES,
    ACTIVITY_LEVELS,
    EXERCISE_INTENCITIES
  } = consts
  return {
    setSystem,
    register,
    handleSubmit,
    onSubmit,
    isStandAloneComponet,
    totalKcals,
    system,
    errors,
    METRIC_SYSTEMS,
    EQUATIONS,
    GENRES,
    ACTIVITY_LEVELS,
    EXERCISE_INTENCITIES
  }
}
