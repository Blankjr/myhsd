import { render, screen, cleanup } from '@testing-library/react'
import Roomplan from '../components/Roomplan'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

test('contains roomplan', () => {
  render(<Roomplan />)
  const linkElement = screen.getByTestId('raumplan')
  expect(linkElement).toBeInTheDocument()
})

test('should redirect to EG', () => {
  render(
    <BrowserRouter>
      <Roomplan></Roomplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/EG/))
  expect(screen.getByText(/EG/)).toBeInTheDocument()
})

test('should redirect to Etage 1', () => {
  render(
    <BrowserRouter>
      <Roomplan></Roomplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Etage 1/))
  expect(screen.getByText(/Etage 1/)).toBeInTheDocument()
})

test('should redirect to Etage 2', () => {
  render(
    <BrowserRouter>
      <Roomplan></Roomplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Etage 2/))
  expect(screen.getByText(/Etage 2/)).toBeInTheDocument()
})

test('should redirect to Etage 3', () => {
  render(
    <BrowserRouter>
      <Roomplan></Roomplan>
    </BrowserRouter>
  )
  userEvent.click(screen.getByText(/Etage 3/))
  expect(screen.getByText(/Etage 3/)).toBeInTheDocument()
})

it('uses correct src in EG', async () => {
  const src = '/img/raumplan_etage-0.webp'
  const { getByAltText } = await render(<Roomplan />)
  userEvent.click(screen.getByText(/EG/))
  const image = getByAltText('roomplan_image')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', src)
})

it('uses correct src in Etage 1', async () => {
  const src = '/img/raumplan_etage-1.webp'
  const { getByAltText } = await render(<Roomplan />)
  userEvent.click(screen.getByText(/Etage 1/))
  const image = getByAltText('roomplan_image')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', src)
})

it('uses correct src in Etage 2', async () => {
  const src = '/img/raumplan_etage-2.webp'
  const { getByAltText } = await render(<Roomplan />)
  userEvent.click(screen.getByText(/Etage 2/))
  const image = getByAltText('roomplan_image')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', src)
})

it('uses correct src in Etage 3', async () => {
  const src = '/img/raumplan_etage-3.webp'
  const { getByAltText } = await render(<Roomplan />)
  userEvent.click(screen.getByText(/Etage 3/))
  const image = getByAltText('roomplan_image')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', src)
})
