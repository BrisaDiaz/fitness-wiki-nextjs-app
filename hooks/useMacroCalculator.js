import { useState, useEffect } from 'react'
import getMacrosPerNutritionalPlan from '../utils/getMacrosPerNutritionalPlan'
import constants from '../constants/calculatorConstants'

export default function useMacroCalculator() {
  // calories got by user info input or 2000 default
  const [defaultCalories, setDefaultCalories] = useState(2000)
  // calories customized by the user
  const [goalKcals, setGoalKcals] = useState(2000)
  // switch predefined macros distribution or a custom
  const [planType, setPlanType] = useState('predefined')
  // error on user macros inputs
  const [errors, setErrors] = useState([])
  // name of the plan select, default firs plan of the list
  const [nutritionalPlan, setNutritionalPlan] = useState(
    constants.NUTRITIONAL_PLANS[0].value
  )
  // custom plan with macros distribution set by user default empty
  const [customPlan, setCustomPlan] = useState({})

  const [planResults, setPlanResults] = useState(
    getMacrosPerNutritionalPlan(goalKcals, nutritionalPlan, planType)
  )
  // reset the target clories amount according to new user info inputs
  useEffect(() => {
    setGoalKcals(defaultCalories)
  }, [defaultCalories])
  // calculate the results for a predefined plan or custom plan

  useEffect(() => {
    planType === 'predefined'
      ? setPlanResults(
          getMacrosPerNutritionalPlan(goalKcals, nutritionalPlan, planType)
        )
      : setPlanResults(
          getMacrosPerNutritionalPlan(goalKcals, customPlan, planType)
        )
  }, [planType, goalKcals, nutritionalPlan, customPlan])

  const setError = (newError) => {
    errors.indexOf(newError) ? setErrors([...errors, newError]) : false
  }
  const cleanError = (toCleanError) => {
    const cleanError = errors.filter((error) => error !== toCleanError)
    setErrors(cleanError)
  }
  return {
    setDefaultCalories,
    setPlanType,
    setNutritionalPlan,
    setCustomPlan,
    setGoalKcals,
    setError,
    cleanError,
    goalKcals,
    planType,
    errors,
    planResults,
    defaultCalories
  }
}
