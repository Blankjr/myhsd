import { render, screen, cleanup } from '@testing-library/react'
import Mensaplan from '../../components/Mensaplan/Mensaplan'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('contains mensaplan', () => {
  render(<Mensaplan />)
  const linkElement = screen.getByText(/Mensaplan/)
  expect(linkElement).toBeInTheDocument()
})

test('should redirect to Monday', () => {
  render(
    <BrowserRouter>
      <Mensaplan></Mensaplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Montag/))
  expect(screen.getByText(/Montag/)).toBeInTheDocument()
})

test('should redirect to Tuesday', () => {
  render(
    <BrowserRouter>
      <Mensaplan></Mensaplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Dienstag/))
  expect(screen.getByText(/Dienstag/)).toBeInTheDocument()
})

test('should redirect to Wednesday', () => {
  render(
    <BrowserRouter>
      <Mensaplan></Mensaplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Mittwoch/))
  expect(screen.getByText(/Mittwoch/)).toBeInTheDocument()
})

test('should redirect to Thursday', () => {
  render(
    <BrowserRouter>
      <Mensaplan></Mensaplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Donnerstag/))
  expect(screen.getByText(/Donnerstag/)).toBeInTheDocument()
})

test('should redirect to Friday', () => {
  render(
    <BrowserRouter>
      <Mensaplan></Mensaplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Freitag/))
  expect(screen.getByText(/Freitag/)).toBeInTheDocument()
})
