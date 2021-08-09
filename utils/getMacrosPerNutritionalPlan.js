import MACROS_PER_DIET from '../consts/macrosPerDiet'
import consts from '../consts/calculatorConstants'
import { Plan } from './factories'

function validateArguments(goaldKcals, plan, planType) {
  const suportedPlanTypes = ['predifined', 'custom']

  if (!goaldKcals || !plan || !planType)
    throw new Error(
      `1:Target calories, 2:plan and 3:type of plan are requred, instead was send 1:${goaldKcals}, 2:${plan}, 3:${planType}`
    )

  if (suportedPlanTypes.indexOf(planType) === -1)
    throw new Error(
      `"${planType}" is not a type of plan suported is must be either "predifined" or "custom" `
    )
  if (planType === 'predifined' && !MACROS_PER_DIET[plan])
    throw new Error(`${plan} isn't between the nutritional plans supported`)
}
// class Plan {
//   constructor(name, macros, goaldKcals) {
//     this.goaldKcals = goaldKcals
//     this.name = name
//     this.macros = macros
//   }

//   getProteins() {
//     const kals = Math.floor(
//       this.goaldKcals * (this.macros.proteins.value / 100)
//     )
//     const grams = Math.floor(kals / 4)
//     return {
//       name: 'proteins',
//       persentage: this.macros.proteins.value,
//       kals,
//       grams
//     }
//   }
//   getCarbohydrates() {
//     const kals = Math.floor(this.goaldKcals * (this.macros.carbs.value / 100))
//     const grams = Math.floor(kals / 4)
//     return {
//       name: 'carbs',
//       persentage: this.macros.carbs.value,
//       kals,
//       grams
//     }
//   }
//   getFats() {
//     const kals = Math.floor(this.goaldKcals * (this.macros.fats.value / 100))
//     const grams = Math.floor(kals / 9)
//     return {
//       name: 'fats',
//       persentage: this.macros.fats.value,
//       kals,
//       grams
//     }
//   }
//   getMacros() {
//     const macros = [this.getCarbohydrates(), this.getProteins(), this.getFats()]
//     return macros
//   }
//   getTotalGrams() {
//     const totalGrams = this.getMacros().reduce((acumGrams, macro) => {
//       acumGrams += macro.grams

//       return acumGrams
//     }, 0)

//     return totalGrams
//   }

//   getPlanInfo() {
//     return {
//       planName: this.name,
//       totalKcals: this.goaldKcals,
//       totalGrams: this.getTotalGrams(),
//       macros: this.getMacros()
//     }
//   }
// }

export default function getMacrosPerNutritionalPlan(
  goaldKcals,
  plan,
  planType
) {
  validateArguments(goaldKcals, plan, planType)

  const customPlanValues = plan.macros ? plan : consts.DEFAULT_MACROS_RADIOS
  let planSelected

  planType === 'predifined'
    ? (planSelected = new Plan(
        MACROS_PER_DIET[plan].name,
        MACROS_PER_DIET[plan].macros,
        goaldKcals
      ))
    : (planSelected = new Plan(
        customPlanValues.name,
        customPlanValues.macros,
        goaldKcals
      ))

  return planSelected
}
