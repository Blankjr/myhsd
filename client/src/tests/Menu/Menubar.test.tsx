import { render, screen, cleanup } from '@testing-library/react'
import Menubar from '../../components/Menu/Menubar'

afterEach(cleanup)

test('contains headline roomplan', () => {
  render(
    <Menubar
      route={'/raumplan'}
      colorMode={'dark'}
      currentSemester={'Sommersemester 2022'}
    />
  )
  const linkElement = screen.getByText('Gebäude 4')
  expect(linkElement).toBeInTheDocument()
})
test('contains headline mensaplan', () => {
  render(
    <Menubar
      route={'/mensaplan'}
      colorMode={'dark'}
      currentSemester={'Sommersemester 2022'}
    />
  )
  const linkElement = screen.getByText('Derendorf')
  expect(linkElement).toBeInTheDocument()
})
test('contains headline examplan', () => {
  render(
    <Menubar
      route={'/klausurplan'}
      colorMode={'dark'}
      currentSemester={'Sommersemester 2022'}
    />
  )
  const linkElement = screen.getByText('/klausurplan')
  expect(linkElement).toBeInTheDocument()
})
