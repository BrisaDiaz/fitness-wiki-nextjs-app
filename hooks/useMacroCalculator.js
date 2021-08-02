import { useState, useEffect } from 'react'
import getMacrosPerNutritionalPlan from '../utils/getMacrosPerNutritionalPlan'
import consts from '../consts/calculatorConstants'

export default function useMacroCalculator() {
  // calories got by user info input or 2000 default
  const [defaultCalories, setDefaultCalories] = useState(2000)
  // calories customized by the user
  const [goaldKcals, setGoaldKcals] = useState(2000)
  // switch predifined macros distribution or a custom
  const [planType, setPlanType] = useState('predifined')
  // error on user macros inputs
  const [errors, setErrors] = useState([])
  // name of the plan select, default firs plan of the list
  const [nutritionalPlan, setNutritionalPlan] = useState(
    consts.NUTRITIONAL_PLANS[0].value
  )
  // custom plan with macros distibution set by user default emty
  const [customPlan, setCustomPlan] = useState({})

  const [planResults, setPlanResults] = useState(
    getMacrosPerNutritionalPlan(goaldKcals, nutritionalPlan, planType)
  )
  // reset the target clories ammount according to new user info inputs
  useEffect(() => {
    setGoaldKcals(defaultCalories)
  }, [defaultCalories])
  // calculate the results for a predifined plan or custom plan

  useEffect(() => {
    planType === 'predifined'
      ? setPlanResults(
          getMacrosPerNutritionalPlan(goaldKcals, nutritionalPlan, planType)
        )
      : setPlanResults(
          getMacrosPerNutritionalPlan(goaldKcals, customPlan, planType)
        )
  }, [planType, goaldKcals, nutritionalPlan, customPlan])

  return {
    setDefaultCalories,
    setPlanType,
    setNutritionalPlan,
    setCustomPlan,
    setGoaldKcals,
    setErrors,
    goaldKcals,
    planType,
    errors,
    planResults,
    defaultCalories
  }
}
