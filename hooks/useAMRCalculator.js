import { useState } from 'react'
import { useForm } from 'react-hook-form'
import constants from '../constants/calculatorConstants'
import getDailyKcals from '../utils/getDailyKcals'
export default function useAMRCalculator({ setCaloriesRequired }) {
  const isStandAloneComponent = setCaloriesRequired ? false : true
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
    isStandAloneComponent
      ? setTotalKcals(getDailyKcals(data))
      : setCaloriesRequired(getDailyKcals(data))
  }
  const {
    METRIC_SYSTEMS,
    EQUATIONS,
    GENRES,
    ACTIVITY_LEVELS,
    EXERCISE_INTENSITIES
  } = constants
  return {
    setSystem,
    register,
    handleSubmit,
    onSubmit,
    isStandAloneComponent,
    totalKcals,
    system,
    errors,
    METRIC_SYSTEMS,
    EQUATIONS,
    GENRES,
    ACTIVITY_LEVELS,
    EXERCISE_INTENSITIES
  }
}
