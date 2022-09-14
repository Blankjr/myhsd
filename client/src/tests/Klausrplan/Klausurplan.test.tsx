import { render, screen, cleanup } from '@testing-library/react'
import Klausurplan from '../../components/Klausurplan/Klausurplan'
import { calculateLeftDaysUntilExam } from '../../components/Klausurplan/Klausurplan'

afterEach(cleanup)

test('contains klausurplan container', () => {
  render(<Klausurplan />)
  const linkElement = screen.getByTestId('klausurplan')
  expect(linkElement).toBeInTheDocument()
})

describe('test calculateLeftDaysUntilExam function', () => {
  test('calculateLeftDaysUntilExam future day', () => {
    const date = new Date()
    date.setDate(date.getDate() + 30)
    expect(
      calculateLeftDaysUntilExam(date.toLocaleDateString('de-DE'))
    ).toEqual('30')
  })
  test('calculateLeftDaysUntilExam without Date', () => {
    expect(calculateLeftDaysUntilExam('T.n.V.')).toEqual('-')
  })
  test('calculateLeftDaysUntilExam Negative date', () => {
    expect(calculateLeftDaysUntilExam('01.01.2022')).toEqual('-')
  })
  test('calculateLeftDaysUntilExam exam date today', () => {
    const dateToday: string = new Date().toLocaleDateString('de-DE')
    expect(calculateLeftDaysUntilExam(dateToday)).toEqual('-')
  })
})
