import getCaloriesPerGoal from '../utils/getCaloriesPerPhysicalGoal'
import { useState, useEffect } from 'react'
export default function useCaloriesPerGoalCalculator({
  defaultCalories,
  setGoalKcals
}) {
  const [mainGoalsValues, setMainGoalValues] = useState(
    getCaloriesPerGoal(defaultCalories)
  )
  const [intensityOptions, setIntensityOptions] = useState([])
  const [intensity, setIntensity] = useState(null)
  const [goal, setGoal] = useState('maintain')

  useEffect(() => {
    if (!goal || goal === 'maintain') {
      //reser all values if custom calories or maintain are select
      setIntensityOptions([])
      setIntensity(null)
      setGoalKcals(defaultCalories)
    } else {
      //find and set the different intensities of the physic goal select to display them
      const foundIntensities = mainGoalsValues.find(
        (goalOption) => goalOption.title === goal
      ).intensities

      setIntensityOptions(foundIntensities)
      setIntensity(foundIntensities[0])
    }
  }, [goal])

  useEffect(() => {
    if (intensity) {
      setGoalKcals(intensity.value)
    }
  }, [intensity])

  // change the mains goals calorics values when the AMR is change
  useEffect(() => {
    setMainGoalValues(getCaloriesPerGoal(defaultCalories))
    setGoal('maintain')
  }, [defaultCalories])

  return {
    setIntensity,
    setGoal,
    mainGoalsValues,
    intensityOptions,
    intensity,
    goal
  }
}
