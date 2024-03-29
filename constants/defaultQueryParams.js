const COUSINS_OPTIONS = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  ' Nordic',
  'Southeirn',
  'Spanish',
  'Thai',
  'Vietnamese'
]
const DIET_OPTIONS = [
  'Gluten Free',
  'Ketogenic',
  'Vegetarian',
  'Lacto-Vegetarian',
  'Ovo-Vegetarian',
  'Vegan',
  'Pescetarian',
  'Paleo',
  'Primal',
  'Whole30'
]
const TYPE_OPTIONS = [
  'main course',
  'side dish',
  'dessert',
  'appetizer',
  'salad',
  'bread',
  'breakfast',
  'soup',
  'beverage',
  'sauce',
  'marinade',
  'fingerfood',
  'snack',
  'drink'
]
const SORT_OPTIONS = [
  'popularity',
  'healthiness',
  'price',
  'time',
  'caffeine',
  'calories',
  'protein',
  'carbohydrates',
  'cholesterol',
  'calcium',
  'potassium',
  'total-fat',
  'trans-fat',
  'saturated-fat',
  'fiber',
  'sugar',
  'zinc'
]
const SORT_DIRECTIONS = [
  { name: 'More', value: 'asc' },
  { name: 'Less', value: 'desc' }
]
const MAX_API_RESULTS = 100
const RESULTS_PER_PAGE = 6
const MAX_OFFSET_NUMBER = 900
const MAX_ALLOWED_RESULTS = MAX_OFFSET_NUMBER + RESULTS_PER_PAGE
module.exports = {
  MAX_API_RESULTS,
  COUSINS_OPTIONS,
  DIET_OPTIONS,
  TYPE_OPTIONS,
  SORT_OPTIONS,
  SORT_DIRECTIONS,
  RESULTS_PER_PAGE,
  MAX_ALLOWED_RESULTS
}
