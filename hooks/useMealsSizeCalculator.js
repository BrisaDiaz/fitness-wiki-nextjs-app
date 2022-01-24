import { useState, useEffect } from 'react'
import consts from '../consts/calculatorConstants'
import getCaloriesPerMeal from '../utils/getCaloriesPerMeal'
import getMealTableFiels from '../utils/getMealTableFiels'

export default function useMealsSizeCalculator() {
  const {
    DEFAULT_MACROS_RADIOS,
    DEFAULT_DATA_TABLE,
    MEALS_FRECUENCIES,
    DEFAULT_WATER_INTAKE,
    DEFAULT_FIBER_INTAKE,
    ERRORS
  } = consts
  const [macroRadios, setMacrosRadios] = useState(DEFAULT_MACROS_RADIOS)
  const [errors, setErrors] = useState([])
  const [totalKcals, setTotalKcals] = useState(2000)
  const [mealFrecuency, setMealFrecuency] = useState('3meals2snacks')
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
      mealFrecuency
    )
    setFiberResults(results.totalFiber)
    const formattedData = getMealTableFiels(results)
    setTableData(formattedData)
  }, [totalKcals, mealFrecuency, errors, macroRadios])

  return {
    setMacrosRadios,
    setError,
    cleanError,
    setTotalKcals,
    setMealFrecuency,
    setWaterIntake,
    tableData,
    fiberResults,
    waterIntake,
    mealFrecuency,
    errors,

    MEALS_FRECUENCIES
  }
}
