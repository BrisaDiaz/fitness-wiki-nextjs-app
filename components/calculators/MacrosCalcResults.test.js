import MacrosCalcResults from './MacrosCalcResults'
import React from 'react'
import { render, screen } from '@testing-library/react'
import mocks from '../../mocks/mockMacrosCalculatorData'

const stylesExpect = mocks.fullCalculatorTest.colorResults
const results = mocks.fullCalculatorTest.nutritionalPlanSection.expectResult

const propsWithResults = {
  planResults: results,
  error: null,
  defaultCalories: mocks.fullCalculatorTest.AMRSection.expectResult
}
const propsWithError = {
  error: 'Macros sum must do up to 100',
  planResults: {},
  defaultCalories: 2000
}

it('displays results with correct values and styles', () => {
  render(<MacrosCalcResults {...propsWithResults} />)
  expect(screen.getByTestId('totalKcals')).toHaveTextContent(results.totalKcals)

  results.macros.forEach((macro) =>
    expect(screen.getByText(macro.name).parentNode).toHaveTextContent(
      macro.grams
    )
  )
  stylesExpect.forEach((result) =>
    expect(screen.getByText(result.title)).toHaveStyle('color:', result.color)
  )
  stylesExpect.forEach((result) =>
    expect(screen.getByTitle(result.title + 'Svg')).toHaveStyle(
      'fill:',
      result.color
    )
  )
})
it('display an error message when custom macro radios not sum up to 100', () => {
  render(<MacrosCalcResults {...propsWithError} />)
  expect(screen.getByText(propsWithError.error)).toBeInTheDocument()
})
