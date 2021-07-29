import getCaloriesPerGoald from '../utils/getCaloriesPerPhysicalGoald'
import { useState, useEffect } from 'react'
export default function useCaloriesPerGoaldCalculator({
  defaultCalories,
  setGoaldKcals
}) {
  const [mainGoaldsValues, setMainGoaldValues] = useState(
    getCaloriesPerGoald(defaultCalories)
  )
  const [intencityOptions, setIntencityOptions] = useState([])
  const [intencity, setIntencity] = useState(null)
  const [goald, setGoald] = useState('maintain')

  useEffect(() => {
    if (!goald || goald === 'maintain') {
      //reser all values if custom calories or maintain are select
      setIntencityOptions([])
      setIntencity(null)
      setGoaldKcals(defaultCalories)
    } else {
      //find and set the different intencities of the physic goald select to display them
      const foundIntencities = mainGoaldsValues.find(
        (goaldOption) => goaldOption.title === goald
      ).intencities

      setIntencityOptions(foundIntencities)
      setIntencity(foundIntencities[0])
    }
  }, [goald])

  useEffect(() => {
    if (intencity) {
      setGoaldKcals(intencity.value)
    }
  }, [intencity])

  // change the mains goals calorics values when the AMR is change
  useEffect(() => {
    setMainGoaldValues(getCaloriesPerGoald(defaultCalories))
    setGoald('maintain')
  }, [defaultCalories])

  return {
    setIntencity,
    setGoald,
    mainGoaldsValues,
    intencityOptions,
    intencity,
    goald
  }
}
