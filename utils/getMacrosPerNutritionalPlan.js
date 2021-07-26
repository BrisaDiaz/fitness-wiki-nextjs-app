import MACROS_PER_DIET from '../consts/macrosPerDiet'

export default function getMacrosPerNutritionalPlan(
  goaldKcals,
  plan,
  planType
) {
  const suportedPlanTypes = ['predifined', 'custom']

  if (!goaldKcals || !plan || !planType)
    return `1:Target calories, 2:plan and 3:type of plan are requred, instead was send 1:${goaldKcals}, 2:${plan}, 3:${planType}`

  if (suportedPlanTypes.indexOf(planType) === -1)
    return `"${planType}" is not a type of plan suported is must be either "predifined" or "custom" `
  if (planType === 'predifined' && !MACROS_PER_DIET[plan])
    return `${plan} isn't between the nutritional plans supported`

  if (planType === 'custom' && typeof plan !== 'object')
    return `Custom plan must be an object containing the macros radios instead was send ${typeof plan}`

  class Plan {
    goaldKcals = goaldKcals

    constructor({ name, macros }) {
      this.name = name
      this.macros = macros
    }

    getProteins() {
      const kals = Math.floor(goaldKcals * this.macros.proteins.value)
      const grams = Math.floor(kals / 4)
      return {
        name: 'proteins',
        persentage: this.macros.proteins.persentage,
        value: this.macros.proteins.value,
        kals,
        grams
      }
    }
    getCarbohydrates() {
      const kals = Math.floor(goaldKcals * this.macros.carbs.value)
      const grams = Math.floor(kals / 4)
      return {
        name: 'carbs',
        persentage: this.macros.carbs.persentage,
        value: this.macros.carbs.value,
        kals,
        grams
      }
    }
    getFats() {
      const kals = Math.floor(goaldKcals * this.macros.fats.value)
      const grams = Math.floor(kals / 9)
      return {
        name: 'fats',
        persentage: this.macros.fats.persentage,
        value: this.macros.fats.value,
        kals,
        grams
      }
    }
    getMacros() {
      const macros = [
        this.getCarbohydrates(),
        this.getProteins(),
        this.getFats()
      ]
      return macros
    }
    getTotalGrams() {
      const totalGrams = this.getMacros().reduce((acumGrams, macro) => {
        acumGrams += macro.grams

        return acumGrams
      }, 0)

      return totalGrams
    }
    getPlanInfo() {
      return {
        name: this.name,
        totalKcals: goaldKcals,
        totalGrams: this.getTotalGrams(),
        macros: this.getMacros()
      }
    }
  }
  let planSelected
  // set 'maintenance' macros if no custom macros was set yet
  const defaultCustomPlanValues = MACROS_PER_DIET['maintenance']

  planType === 'predifined'
    ? (planSelected = new Plan(MACROS_PER_DIET[plan]))
    : (planSelected = new Plan(plan.macros ? plan : defaultCustomPlanValues))

  return planSelected.getPlanInfo()
}
