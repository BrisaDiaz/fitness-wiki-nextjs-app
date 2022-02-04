import { useState, useEffect } from 'react'
import constants from '../constants/calculatorConstants'
import getCaloriesPerMeal from '../utils/getCaloriesPerMeal'
import getMealTableFields from '../utils/getMealTableFields'

export default function useMealsSizeCalculator() {
  const {
    DEFAULT_MACROS_RADIOS,
    DEFAULT_DATA_TABLE,
    MEALS_FREQUENCIES,
    DEFAULT_WATER_INTAKE,
    DEFAULT_FIBER_INTAKE,
    ERRORS
  } = constants
  const [macroRadios, setMacrosRadios] = useState(DEFAULT_MACROS_RADIOS)
  const [errors, setErrors] = useState([])
  const [totalKcals, setTotalKcals] = useState(2000)
  const [mealFrequency, setMealFrequency] = useState('3meals2snacks')
  const [tableData, setTableData] = useState(DEFAULT_DATA_TABLE)
  const [fiberResults, setFiberResults] = useState(DEFAULT_FIBER_INTAKE)

  const [waterIntake, setWaterIntake] = useState(DEFAULT_WATER_INTAKE)

  const setError = (newError) => {
    errors.indexOf(newError) ? setErrors([...errors, newError]) : false
  }
  const cleanError = (toCleanError) => {
    const cleanError = errors.filter((error) => error !== toCleanError)
    setErrors(cleanError)
  }
  useEffect(() => {
    if (totalKcals * 1 < 1200 && errors.indexOf(ERRORS.calories) === -1)
      return setError(ERRORS.calories)
    if (totalKcals * 1 < 1200) return
    cleanError(ERRORS.calories)
  }, [totalKcals])

  useEffect(() => {
    if (errors.lenth > 0) return null
    const results = getCaloriesPerMeal(
      totalKcals,
      macroRadios.macros,
      mealFrequency
    )
    setFiberResults(results.totalFiber)
    const formattedData = getMealTableFields(results)
    setTableData(formattedData)
  }, [totalKcals, mealFrequency, errors, macroRadios])

  return {
    setMacrosRadios,
    setError,
    cleanError,
    setTotalKcals,
    setMealFrequency,
    setWaterIntake,
    tableData,
    fiberResults,
    waterIntake,
    mealFrequency,
    errors,

    MEALS_FREQUENCIES
  }
}
