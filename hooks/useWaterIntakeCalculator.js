import { useState, useEffect } from 'react'
import consts from '../consts/calculatorConstants'
import getWaterIntake from '../utils/getWaterIntake'
export default function useWaterIntakeCalculator({ setWaterIntake }) {
  const { METRIC_SYSTEMS } = consts

  const [metricSystem, setMetricSystem] = useState('metric')
  const [weight, setWeight] = useState(60)
  const [workoutMinutes, setWorkoutMinutes] = useState(0)
  useEffect(() => {
    setWaterIntake(getWaterIntake(metricSystem, weight * 1, workoutMinutes * 1))
  }, [metricSystem, workoutMinutes, weight])

  return {
    setMetricSystem,
    setWeight,
    setWorkoutMinutes,
    weight,
    metricSystem,
    METRIC_SYSTEMS
  }
}
